#!/bin/sh
BASEDIR=$(dirname "$0")

sh $BASEDIR/cleanupKubernetesCluster.sh

SERVICES=(product-service order-service basket-service)

eval $(minikube -p minikube docker-env)

for SERVICE in ${SERVICES[@]}
do
echo "=========================================================================="
echo "[INFO] Handling the $SERVICE"
echo "=========================================================================="

echo ""
echo "[INFO] Build the docker image..."
echo ""
docker build -t $SERVICE $BASEDIR/../$SERVICE

echo ""
echo "[INFO] Create the deployment..."
echo ""
kubectl create -f $BASEDIR/../$SERVICE/deployment.yml

echo ""
echo "[INFO] Expose the service..."
echo ""
kubectl expose -f $BASEDIR/../$SERVICE/deployment.yml

done

# Finally print the URLs to the services
minikube service ${SERVICES[@]} --url