# Kubernetes info

#### Types d'apiVersion

apiVersion -> Resource examples

<span style="color: #FF10F0;">v1</span> -> Pod, Service, ConfigMap, Secret, Namespace

<span style="color: #FF10F0;">apps/v1</span> -> Deployment, StatefulSet, DaemonSet, ReplicaSet

<span style="color: #FF10F0;">batch/v1</span> -> Job, CronJob

<span style="color: #FF10F0;">networking.k8s.io/v1</span> -> Ingress, NetworkPolicy

<span style="color: #FF10F0;">autoscaling/v2</span> -> HorizontalPodAutoscaler

# Minikube

A éviter : `minikube start --nodes 10` -> très gourmande en recourses, l'ordi risque d'éxploser !

`minikube start --driver=docker`

`minikube status`

`minikube addons enable ingress`

`minikube delete`

# Kubectl

`kubectl get all`

`kubectl get node`

`kubectl get pods`

`kubectl get services`

`kubectl get ingresss`

`kubectl port-forward -n ingress-nginx service/ingress-nginx-controller 8080:80`

`kubectl get pods -n ingress-nginx`

`kubectl get ingress`

`kubectl exec -it <pod name> -- /bin/bash`

#### Lancement des applications

`kubectl apply -f postgres-secret.yaml`

`kubectl apply -f postgres-config.yaml`

`kubectl apply -f postgres.yaml`

`kubectl apply -f api.yaml`

`kubectl apply -f webapp.yaml`

`kubectl apply -f ingress.yaml`

## URL de l'appli

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

Télécharger Docker Desktop : https://www.docker.com/products/docker-desktop/

Docker cheat sheet : https://www.docker.com/resources/cli-cheat-sheet/

Installation Minikube : https://minikube.sigs.k8s.io/docs/start/?arch=%2Fwindows%2Fx86-64%2Fstable%2F.exe+download

Documentation Kubernetes : https://kubernetes.io/docs/home/

Commandes kubectl : https://kubernetes.io/docs/reference/kubectl/quick-reference/
