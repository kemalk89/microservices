# Development
## Run dependencies
Start database via Docker:
```sh
docker run -e MONGO_INITDB_ROOT_USERNAME=username -e MONGO_INITDB_ROOT_PASSWORD=password -d --name some-mongo -p 27017:27017 --network docker_default mongo:6.0.2
docker run -e ME_CONFIG_MONGODB_URL="mongodb://username:password@some-mongo:27017" -it --rm -p 8081:8081 --network docker_default mongo-express
```
Visit: http://localhost:8081

## Run locally
```sh
npm start
```

## Run locally with Docker
You can run this service as a docker container.

### Build image
```sh
docker build -t product-service .
```

### [Optional] Bash into container
If needed you can bash into the container.
```sh
docker run --rm -it --entrypoint bash product-service
```

### Run image
```sh
docker run -d -p 3002:3002 product-service .
```

# Call API
```sh
curl -i http://localhost:3002/api/products
# Output: Hello from Product Service!
```

