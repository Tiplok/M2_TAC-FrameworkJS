# TP7 - Les services

Durée : 60 min
Documentation officielle : https://docs.angularjs.org/guide/services

## Pré-requis

 1. Avoir un fichier app/services/**services.module.js** définissant un module nommé **fjs.services** 
 2. Déclarer ce fichier dans l'**index.html** pour qu'il soit charger par le nvigateur
 3. Déclarer ce module en dépendance du module racine app/**app.module.js**

> Vérifier qu'il n'y a aucune erreur dans la console javascript du navigateur F12


## Etape 1 : créer son premier service

En bref, j'aimerai créer un service qui me permet d'effectuer des calculs simples (e.g. addition, soustraction).

 1. Définir un service nommé **math** dans un fichier app/services/**math.service.js**
 2. Développer une fonction **add** qui prend en paramètre 2 arguments et retourne le résultat de l'addition entre ces 2 arguments
 3. Faire en sorte de vérifier l'intégrité des arguments en paramètres et lever une erreur dans la console au besoin
 4. Développer une fonction **sub** qui prend en paramètre 2 arguments et retourne le résultat de la soustraction entre ces 2 arguments
 5. Faire en sorte de vérifier l'intégrité des arguments en paramètres et lever une erreur dans la console au besoin

## Etape 2 : utiliser son premier service

 1. Injecter dans un controller (e.g. app/hello/**hello.controller.js**) votre service **math**
 2. Créer un formulaire dans la vue app/hello/**hello.html** avec 2 champs texte
 3. Utiliser votre service **math** pour calculer et afficher le résultat de l'addition et de la soustraction des valeurs saisies dans le formulaire
 
## BONUS : créer et utiliser un client REST

Un indice : https://docs.angularjs.org/api/ngResource/service/$resource 
A vous de jouer !!