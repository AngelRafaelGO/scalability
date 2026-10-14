---
marp: true
theme: gaia
class: lead
paginate: true
---

![width:100px](./assets/k8_logo.png)

# Scalabilité

#### Avec Kubernetes

---

### Qu'est-ce que c'est Kubernetes ?

- Outil (framework) d'orquestration de containers
- Crée par Google
- Open source (2014)

---

Tout simplement dit : Kubernetes est un outil d'orchestration qui permet la gestion d'applications composées des containers

---

De plus, Kubernetes vous aide à gérer vos applications à travers tous les environnements de déploiement

---

### Quel est l'intérêt d'utiliser K8s ?

---

### Un peu d'histoire...

Applications monolitiques -> microservices -> containers

<br/>

Les containers sont parfaits pour héberger une petite application indépendante

---

Mais on se retrouve avec baucoup de containers ! 😅

---

##### K8s nous permet de

- Avoir des applications résilientes : sans temps d'arrêt !

- Scalabilité dans les deux sens (flexibilité)

- Plan de restauration

---

### Architecture

---

#### Cluster

<br/>

- Master node (au moins 1)

- Worker node (au moins 1)

- Il y a aussi un Virtual Network qui permet la communication

---

![width:1000px](./assets/kube_archi.png)

---

#### Worker Node

Contient les applications

- Kubelet -> gestion des Pods
- Container runtime -> cycle de vie des containers

---

#### Control plane

Contient tous les process importants qui permettent de faire tourner notre cluster

- API server -> Point d'entrée au cluster
- Controller manager -> Surveille le cluster
- Scheduler -> algo pour les Pods
- etcd -> état du cluster et config

---

### Les composants des Worker Nodes 🤖

---

#### Composant K8s : Pod

- Un Pod Kubernetes est la plus petite unité (ou composant) de Kubernetes, regroupant un ou plusieurs container qui partagent le même réseau et stockage

---

![width:700px](./assets/pod_archi.png)

---

Il s'agit d'une abstraction placée sur un container -> car nous souhaitons travailler avecc K8s et NON avec Docker ou autre

---

Bonne pratique -> en règle générale une application par Pod

---

Mais, comment communiquent entre eux mes Pods ?

---

#### Virtual Network

Chaque Pod possède sa propre adresse IP (et non le container)

---

Les pods sont éphémères ! 💀

---

Comment fait-on avec les IP ? 🤔

---

#### Composant K8s : Service

- Chaque Pod possède son propre IP connu par la totalité du cluster
- Le cycle de vie du Pod est dissocié de l'IP accordé par le service
- Nous pouvons créer des services externes et internes

---

Mais nous avons besoin d'accéder à notre application avec notre nom de domaine

---

#### Composant K8s : Ingress

Permet de diriger le trafic provenant d'internet vers le service

---

#### Composant K8s : ConfigMap

Configuration externe de notre application

---

#### Composant K8s : Secret

C'est comme ConfigMap, mais secret 🤫

- Encodé en Base64
- Non encrypté par K8s par défaut

---

#### Composant K8s : Volume

Permet de garder nos données à la mort du Pod

-> On attache le stockage à un support physique, soit local soit remote.

-> PersistentVolumes

-> PersistentVolumeClaims

---

#### La réplication : que faire si mon application explose ? 💥

- Notre application doit tourner tout le temps ! -> Nous avons besoin de répliquer notre pod !

- Notre composant service nous permet d'avoir une IP statique & agit comme load balancer

---

##### Nous avons besoin d'un blueprint

Car, en règle générale, on ne travaille pas directement avec les Pods ⛔

---

#### Composant K8s : Deployment

- Blueprint pour nos pods -> abstraction d'un Pod

---

##### Pas un bon choix pour vos BDD !

---

#### Composant K8s : StatefullSet

- Permet la gestion des applications statefull

---

![width:300px](./assets/headache.png)

C'est un casse tête

---

#### Composant K8s : Namespace

- Espace logique pour séparer nos applications

- À retenir : le réseau n’est pas isolé par défaut !

- Réfléchir à l'architecture

---

#### Argo CD

Outil graphique GitOps qui permet de synchoniser automatiquement votre cluster avec le repo GIT qui contient vos manifests Kube.

---

#### Recapitulatif

- Architecture
  - Cluster -> Nodes -> Master & Workers

- Composants de base
  - Pod, ConfigMap, Secret, Service, Ingress, Deployment, Volume, StatefullSet

---

### Pour terminer...

- K8s est très utilisé dans les grandes entreprises

- Techno souvent réservée au devops (surtout dans les grands entreprise)

- Il s'agit d'une techno complexe

---

### Soyez curieux 🤓
