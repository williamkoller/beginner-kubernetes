# Beginner Kubernetes

- Required `kind` and `kubernetes`

add in `.zshrc` => `alias k="kubectl"`

### Commands

- how create cluster with kind
  - `kind create cluster --name demo-cluster`

- how get clusters
  - `kind get clusters`

- how verify kubernetes control plane is running
  - `kubectl cluster-info --context kind-demo-cluster`

- how create cluster with config
  - `kind create cluster --name demo-cluster-3 --config ./node-image/kind-3-nodes.yml`

- how running docker-image
  - `docker build -t hello-api .`

- how aplly kubernetes
  - `k apply -f ./deploy.yml`

- how view pods
 - `k get pods`

- how running 
   - `k port-forward service/api 3004:80`