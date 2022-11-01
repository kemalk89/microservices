# Intro
This is a project to learn Kubernetes. For this purpose we are using a local Kubernetes cluster with minikube.
In this project we have 3 microservices:
- basket-service
- order-service
- product-service

# Getting started
```sh
minikube start
sh ./scripts/initKubernetesCluster.sh
```

# Todos
- Swagger UI
- Separate Database for each service
- Monitoring
- Logging