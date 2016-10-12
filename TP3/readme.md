# TP3 - Le routage

Durée : 60 min
Documentation officielle : https://docs.angularjs.org/tutorial/step_07

## Etape 1 : installer la dépendance ngRoute

 1. Via NPM, télécharger Angular Route ;
 2. Installer le.

## Etape 2 : créer une règle de routage
 
En bref, lorsque je vais sur l'URL http://<HOST>/#/, je vois apparaitre le message "Hello World !!".

 1. Créer un nouveau module nommé **hello** dans /app/hello/**hello.module.js** ;
 2. Pour ce module, créer un fichier /app/hello/**hello.route.js** et y déclarer une règle de routage (avec un "controller" et une vue) ;
 3. Pour ce module, créer le "controller" définit précédement /app/hello/**hello.controller.js** ;
 4. Pour ce module, créer la vue définit précédement /app/hello/**hello.html**.
 
> Vérifier qu'il n'y a aucune erreur dans la console JS du navigateur.
> Constater l'affichage du message "Hello World !!".
 
## BONUS : mettre en place une redirection automatique si aucune règle de routage ne correspond

Un indice : https://docs.angularjs.org/api/ngRoute/provider/$routeProvider
A vous de jouer !!