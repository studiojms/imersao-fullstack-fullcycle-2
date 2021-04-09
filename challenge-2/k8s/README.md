## To start the application using kubernetes, run the following commands

### Start nest api

```sh
kubectl apply -f nest-api/deploy.yaml
kubectl expose -f nest-api/deploy.yaml
kubectl port-forward service/nest-route-api 3000
```

### Start react frontend

```sh
kubectl apply -f react-frontend/deploy.yaml
kubectl expose -f react-frontend/deploy.yaml
kubectl port-forward service/react-frontend 3001:3000
```

Then, acess the application at http://localhost:3001