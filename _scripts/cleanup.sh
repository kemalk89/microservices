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
BASEDIR=$(dirname "$0")
SERVICES=(product-service order-service basket-service web-ui)

for SERVICE in ${SERVICES[@]}
do
echo_info "=========================================================================="
echo_info "Cleaning up the $SERVICE"
echo_info "=========================================================================="

echo_info "Deleting $SERVICE service..."
kubectl delete service $SERVICE

echo_info "Deleting $SERVICE deployment..."
kubectl delete deployment $SERVICE

RESOURCE_CONFIG_NAMESPACE=$BASEDIR/../$SERVICE/devops/$SERVICE-namespace.yml
RESOURCE_CONFIG_MAP=$BASEDIR/../$SERVICE/devops/$SERVICE-configMap.yml
if test -f "$RESOURCE_CONFIG_NAMESPACE"; then
    echo_info "Deleting namespace defined in $SERVICE..."
    kubectl delete -f $RESOURCE_CONFIG_NAMESPACE
fi

if test -f "$RESOURCE_CONFIG_MAP"; then
    echo_info "Deleting configMap defined in $SERVICE..."
    kubectl delete -f $RESOURCE_CONFIG_MAP
fi

done

echo_info "Deleting ingress..."
kubectl delete ingress myingress

# TODO disable ingress addon as well?