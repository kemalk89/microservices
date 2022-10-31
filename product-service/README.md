# Build image
```sh
docker build -t product-service .
```

# Bash into container
```sh
docker run --rm -it --entrypoint bash product-service
```

# Run image
```sh
docker run -d -p 3002:3002 product-service .
```

# Call API
```sh
curl -i http://localhost:3002/api/products
# Output: Hello from Product Service!
```