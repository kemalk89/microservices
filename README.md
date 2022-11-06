# Intro
This is a project to learn Kubernetes. For this purpose we are using a local Kubernetes cluster with minikube.
In this project we have following services:
- basket-service
- order-service
- product-service
- web-ui

# Prerequisites
- Install minikube: https://minikube.sigs.k8s.io/docs/start/

# Getting started
1. Initialize kubernetes cluster and resources.
```sh
sh ./_scripts/init.sh
```
2. If running on MacOS create also tunnel to minikube.
```sh
minikube tunnel # enter your password
```
3. Extend hosts file

If running on MacOS, put entry "127.0.0.1 myingress.info" in your /etc/hosts file.
If running on other OS you can put "<INGRESS_ADDRESS> myingress.info" where INGRESS_ADDRESS can be found out by running ```minikube ip``` (Note it can take some time until field ADDRESS is available).

4. Open app in browser
- WebUI: http://myingress.info
- Product-Service: http://myingress.info/product-service
- Basket-Service: http://myingress.info/basket-service
- Order-Service: http://myingress.info/order-service

# Todos
- Swagger UI
- Separate Database for each service
- Monitoring
- Logging