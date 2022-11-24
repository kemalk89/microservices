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

Put following entries in your /etc/hosts file:

````
<IP_ADRESS> my-web-ui.info
<IP_ADRESS> my-services.info
````
If running on MacOS <IP_ADRESS> should be loopback address 127.0.0.1. We also have to run ```minikube tunnel```. Visit https://minikube.sigs.k8s.io/docs/drivers/docker/#known-issues for more information. Take a look at "The ingress, and ingress-dns addons are currently only supported on Linux.".

If running on other OS we can find out <IP_ADRESS> by running ```minikube ip``` (Note it can take some time until field ADDRESS is available).

4. Open app in browser
- Product-Service: http://my-services.info/product-service/
- Basket-Service: http://my-services.info/basket-service/
- Order-Service: http://my-services.info/order-service/

# Todos
- Swagger UI
- Separate Database for each service
- Monitoring
- Logging