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

SERVICES=(
    product-service-mongodb
    product-service 
   # order-service 
   # basket-service 
)

eval $(minikube -p minikube docker-env)

sh $BASEDIR/cleanup.sh

for SERVICE in ${SERVICES[@]}
do
echo_info "=========================================================================="
echo_info "Handling the $SERVICE"
echo_info "=========================================================================="

echo_info "Build the docker image..."
docker build -t $SERVICE $BASEDIR/../$SERVICE

echo_info "Create the resources..."
kubectl apply -f $BASEDIR/../$SERVICE/devops

done

# Now lets enable ingress to allow external access to the services
echo_info "Enabling ingress..."
minikube addons enable ingress
kubectl apply -f $BASEDIR/../_ingress/ingress.yaml

kubectl get all

if [[ "$OSTYPE" == "darwin"* ]]; then
    # MacOS
    echo_info "=========================================================================="
    echo_info "Seems you are using MacOS."
    echo_info "The ingress, and ingress-dns addons are currently only supported on Linux. So currently you won't be able to access your ingress using IP address of your minikube cluster (minikube ip)."
    echo_info "(For more information visit https://minikube.sigs.k8s.io/docs/drivers/docker/ and scroll down to Known Issues.)"
    echo_info "Instead using the IP address of minikube we are going to use the loopback address 127.0.0.1 as a workaround." 
    echo_info "Follow the README file for more information."
    echo_info "=========================================================================="
fi
