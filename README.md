# SkyDrone-API

Bienvenue dans l'API Node.js pour SkyDrone!

Cette API a été créée pour faciliter l'interaction entre SkyDrone et ses clients. Elle permet aux clients d'accéder aux informations sur les drones, de passer des commandes et de suivre les livraisons.

## Configuration requise

Pour utiliser cette API, vous devez avoir Node.js et NPM installés sur votre système. Vous pouvez télécharger Node.js à partir de https://nodejs.org/en/download/.

## Installation

1. Clonez ce référentiel sur votre ordinateur en utilisant la commande suivante:

git clone [https://github.com/votre-compte/SkyDrone-API.git](https://github.com/jonathangratigny/SkyDrone_API.git)

2. Ouvrez une invite de commande dans le dossier racine du projet.
3. Exécutez la commande suivante pour installer les dépendances:

npm install

4. Créez un fichier `.env` à la racine du projet avec les variables d'environnement suivantes:

- DB_HOST=<adresse du serveur de base de données>
- DB_NAME=<nom de la base de données>
- DB_USER=<nom d'utilisateur de la base de données>
- DB_PASSWORD=<mot de passe de la base de données>
- JWT_SECRET=<clé secrète pour le token JWT>.env

5. Exécutez la commande suivante pour lancer l'API:

npm start


## Utilisation

L'API utilise des routes HTTP pour fournir des fonctionnalités. Vous pouvez trouver la documentation de l'API dans le fichier `/docs/index.html` une fois que vous avez lancé l'API.

## Contribuer

Si vous souhaitez contribuer à l'amélioration de l'API, veuillez créer une pull request sur ce référentiel. Veuillez inclure une description détaillée de vos modifications.

## Auteurs

- [Jonathan GRATIGNY](https://github.com/jonathangratigny)
