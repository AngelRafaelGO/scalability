---
marp: true

theme: gaia

class: lead

paginate: true
---

**# Backlog**

---

**# US 1**

- Images des applications versionnées (pas 'latest') sur DockerHub
  - Vous pouvez utiliser une autre techno si vous souhaitez
- 1 Deployment par application
- 1 Service par application
- Externaliser la configuration avec ConfigMap (1 minimum)
- 1 Secret pour vos variables confidentielles
- Bien entendu, les applications doivent pouvoir communiquer entre elles

---

**# US 2**

- 1 Ingress pour gestionner le trafic depuis l'extérieur du cluster
- 2 Namespaces :
  - Development
  - Production
- Les applications doivent être déployables dans les deux environnements et les deux environnements doivent être accessibles depuis le navigateur
- L'url doit être different pour chaque environnement, exemple : http://mon-appli.dev/ & http://mon-appli.prd/

---

**# US 3**

- CD fonctionnel sur GitLab :
  - Déploiement automatique sur votre Minikube, à l'aide d'un Runner installé sur votre PC
  - Architecture GitLab réfléchi : vous devrez expliquer votre choix
  - La pipeline doit déployer sur les environnements de dev et de prod indépendamment

---

**# US 4**

- Vos applications statefull (BDD, cache, etc.) : le choix est à vous. Mais vous devrez le justifier et expliquer

---

**# US 5**

- Gestion du bon état de nos déploy et de nos pods
  - Ajouter aux app web :
    - Une readinessProbe et une livenessProbe adaptées aux applications

---

**# US 6**

- Utiliser ArgoCD pour la partie GitOps
  - 1 application dans ArgoCD par environnement -> si nous avons 2 environnements, il nous faut 2 app dans ArgoCD

---

**# US 7**

- README permettant de comprendre et reproduire le déploiement
  (Je ne veux pas un .md ChatGPT de 2000 lignes...)

---

**# US Bonus 2**

- Déploiement et paramétrage à l'aide d'une charte Helm
- Installation et mise à jour de l'application avec Helm
- Documentation de l'architecture Kubernetes
- Instructions pour :
  - Lancer le projet
  - Déployer l'application
  - Vérifier les ressources Kubernetes
  - Accéder aux applications

---

**# Le boss final 💀**

- Montrer une chaîne complète CI-CD en lien direct avec votre cours Docker :
  - Builder votre code
  - Publier les images versionées sur DockerHub
  - Déployer sur Minikube
