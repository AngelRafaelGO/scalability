# Minikube & Kubectl

`minikube start --driver=docker`

`minikube addons enable ingress`

`kubectl apply -f postgres-secret.yaml`

`kubectl apply -f postgres-config.yaml`

`kubectl apply -f postgres.yaml`

`kubectl apply -f api.yaml`

`kubectl apply -f webapp.yaml`

`kubectl apply -f ingress.yaml`

`kubectl get pods`

`kubectl get services`

`kubectl get ingresss`

`kubectl port-forward -n ingress-nginx service/ingress-nginx-controller 8080:80`

`kubectl get pods -n ingress-nginx`

`kubectl get ingress`

`kubectl exec -it <pod name> -- /bin/bash`

http://myapp.local:8080/dashboard

# Runner

### Installation

`New-Item -ItemType Directory -Force -Path C:\GitLab-Runner`

`Set-Location C:\GitLab-Runner`

`cd C:\GitLab-Runner`

`$url = "https://gitlab-runner-downloads.s3.amazonaws.com/latest/binaries/gitlab-runner-windows-amd64.exe"`

`Invoke-WebRequest -Uri $url -OutFile .\gitlab-runner.exe`

`Get-Item .\gitlab-runner.exe | Select-Object Name, Length`

`.\gitlab-runner.exe --version`

### Registrer son runner

`.\gitlab-runner.exe register`

`.\gitlab-runner.exe list`

`.\gitlab-runner.exe verify`

`.\gitlab-runner.exe run`

# Liens

Repo applications TP : https://github.com/AngelRafaelGO/scalability/tree/master

Repo DockerHub :

- https://hub.docker.com/repository/docker/angelrafael/applications-kube-starter-api
- https://hub.docker.com/repository/docker/angelrafael/applications-kube-starter-webapp/general

Gitlab runner : https://docs.gitlab.com/runner/install/windows/

Docker cheatsheet : https://www.docker.com/resources/cli-cheat-sheet/

Installation Minikube : https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download

Documentation Kubernetes : https://kubernetes.io/docs/home/
