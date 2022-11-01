#!/bin/sh

SERVICES=(product-service order-service basket-service)

for SERVICE in ${SERVICES[@]}
do
echo "=========================================================================="
echo "[INFO] Cleaning up the $SERVICE"
echo "=========================================================================="

echo "[INFO] Deleting $SERVICE service..."
kubectl delete -n default service $SERVICE

echo "[INFO] Deleting $SERVICE deployment..."
kubectl delete -n default deployment $SERVICE

done