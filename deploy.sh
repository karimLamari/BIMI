#!/bin/bash

# Configuration
VPS_HOST="root@82.165.136.225"
IMAGE_NAME="resto-manager"
CONTAINER_NAME="resto-manager"
NETWORK_NAME="portfolio-network"
NPM_CONTAINER="nginx-proxy-manager"

set -e

echo "=== Build de l'image Docker ==="
docker build -t $IMAGE_NAME:latest .

echo "=== Sauvegarde de l'image ==="
docker save $IMAGE_NAME:latest | gzip > /tmp/$IMAGE_NAME.tar.gz

echo "=== Transfert vers le VPS ==="
scp /tmp/$IMAGE_NAME.tar.gz $VPS_HOST:/tmp/

echo "=== Deploiement sur le VPS ==="
ssh $VPS_HOST << EOF
  set -e

  echo "-> Chargement de l'image..."
  docker load < /tmp/$IMAGE_NAME.tar.gz
  rm /tmp/$IMAGE_NAME.tar.gz

  echo "-> Creation du reseau (si necessaire)..."
  docker network create $NETWORK_NAME 2>/dev/null || true

  echo "-> Arret de l'ancien conteneur (si existant)..."
  docker stop $CONTAINER_NAME 2>/dev/null || true
  docker rm $CONTAINER_NAME 2>/dev/null || true

  echo "-> Lancement du nouveau conteneur..."
  docker run -d \
    --name $CONTAINER_NAME \
    --network $NETWORK_NAME \
    --restart unless-stopped \
    -p 3001:3000 \
    $IMAGE_NAME:latest

  echo "-> Connexion de NPM au reseau..."
  docker network connect $NETWORK_NAME $NPM_CONTAINER 2>/dev/null || true

  echo "-> Nettoyage des images inutilisees..."
  docker image prune -f

  echo ""
  echo "=== Deploiement termine ==="
  docker ps | grep $CONTAINER_NAME
EOF

rm /tmp/$IMAGE_NAME.tar.gz

echo ""
echo "=== Prochaine etape ==="
echo "Configurer le Proxy Host dans NPM (http://82.165.136.225:81) :"
echo "  - Forward Hostname: $CONTAINER_NAME"
echo "  - Forward Port: 3000"
echo "  - Activer SSL avec Let's Encrypt"
