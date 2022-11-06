#!/bin/sh

#########################################################
# helper functions
#########################################################
echo_info() 
{
    CYAN='\033[0;36m'
    NO_COLOR='\033[0m'

    TEXT=$1
    echo ${CYAN}$TEXT${NO_COLOR}
}

#########################################################
# start minikube if not running
#########################################################
if ! command -v minikube
then
    echo_info "The command 'minikube' is not installed on your system. Please install first."
    exit
fi

if minikube status | grep "Stopped"  &> /dev/null; then
    echo_info "Looks like 'minikube' is not running. Starting minikube..."
    minikube start
elif minikube status | grep "To start a cluster, run"; then
    echo_info "Looks like 'minikube' is not running. Starting minikube..."
    minikube start
fi

#########################################################
BASEDIR=$(dirname "$0")

#########################################################

SERVICES=(product-service order-service basket-service web-ui)

eval $(minikube -p minikube docker-env)

for SERVICE in ${SERVICES[@]}
do
echo_info "=========================================================================="
echo_info "Handling the $SERVICE"
echo_info "=========================================================================="

echo_info "Build the docker image..."
docker build -t $SERVICE $BASEDIR/../$SERVICE

echo_info "Create the resources..."
RESOURCE_CONFIG_NAMESPACE=$BASEDIR/../$SERVICE/devops/$SERVICE-namespace.yml
RESOURCE_CONFIG_MAP=$BASEDIR/../$SERVICE/devops/$SERVICE-configMap.yml
if test -f "$RESOURCE_CONFIG_NAMESPACE"; then
    kubectl apply -f $RESOURCE_CONFIG_NAMESPACE
fi

kubectl apply -f $BASEDIR/../$SERVICE/devops/$SERVICE-deployment.yml
kubectl apply -f $BASEDIR/../$SERVICE/devops/$SERVICE-service.yml

if test -f "$RESOURCE_CONFIG_MAP"; then
    kubectl apply -f $RESOURCE_CONFIG_MAP
fi

done

# Now lets enable ingress to allow external access to the services
echo_info "Enabling ingress..."
minikube addons enable ingress
kubectl apply -f $BASEDIR/../_ingress/ingress.yaml

if [[ "$OSTYPE" == "darwin"* ]]; then
    # MacOS
    echo_info "=========================================================================="
    echo_info "Seems you are using MacOS."
    echo_info "The ingress, and ingress-dns addons are currently only supported on Linux. So currently you won't be able to access your ingress using IP address of your minikube cluster (minikube ip)."
    echo_info "(For more information visit https://minikube.sigs.k8s.io/docs/drivers/docker/ and scroll down to Known Issues.)"
    echo_info "Instead using the IP address of minikube we are going to use the loopback address 127.0.0.1 as a workaround." 
    echo_info "Please put '127.0.0.1 myingress.info' in your /etc/hosts file and run 'minikube tunnel'."
    echo_info "Now you can open your browser and visit 'myingress.info' to access ingress."
    echo_info "=========================================================================="
fi
