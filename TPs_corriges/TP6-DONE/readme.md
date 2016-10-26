# TP6 - Les directives

Durée : 45 min
Documentation officielle : https://docs.angularjs.org/guide/directive

## Pré-requis

 1. Avoir un fichier app/components/**components.module.js** définissant un module nommé **fjs.components** 
 2. Déclarer ce fichier dans l'**index.html** pour qu'il soit charger par le navigateur
 3. Déclarer ce module en dépendance du module racine app/**app.module.js**

> Vérifier qu'il n'y a aucune erreur dans la console javascript du navigateur F12


## Etape 1 : créer une directive

En bref, j'aimerai créer une directive qui m'affiche un texte de façon dynamique.

 1. Définir une directive nommé **message** dans un fichier app/components/**message.directive.js**
 2. Donner sa définition
    a. C'est une directive de type **element**
    b. Elle permet de dialoguer avec son parent sur le texte à afficher
    c. Elle a un template externe
    d. Elle possède un controller

## Etape 2 : utiliser sa directive

 1. Injecter dans la vue (e.g. app/hello/**hello.html**) votre directive
 2. Créer un formulaire dans cette même vue avec 1 champs texte
 3. Faire en sorte de saisir un texte dans ce champs et le faire afficher dans la directive
 
## BONUS : ajouter de l'intelligence

Afficher un texte dans sa directive, c'est bien joli, on va complexifier la chose. 
Proposez moi une évolution de votre directive pour typer votre message. En d'autre terme, faire comprendre à votre utilisateur que le message affiché est une information, un danger, un succès, une mise en garde, etc.
A vous de jouer !!