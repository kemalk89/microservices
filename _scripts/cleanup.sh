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
SERVICES=(
    product-service 
    product-service-mongodb
   # order-service 
   # basket-service 
    web-ui
)

for SERVICE in ${SERVICES[@]}
do
echo_info "=========================================================================="
echo_info "Cleaning up the $SERVICE"
echo_info "=========================================================================="

echo_info "Deleting $SERVICE resources..."
kubectl delete -f $SERVICE/devops
done

echo_info "Deleting ingress..."
kubectl delete ingress myingress

# TODO disable ingress addon as well?