# TP5 - Les filtres

Durée : 30 min
Documentation officielle : https://docs.angularjs.org/guide/filter

## Etape 1 : utiliser le filtrage directement depuis le "controller"

 1. Dans le fichier app/hello/**hello.controller.js**, injecter le service $filter d'Angular ;
 2. Créer une variable scopée **messageEnMajuscule** et afficher la dans la vue ;
 3. Initialiser cette variable avec le service $filter et ainsi mettre en majuscule la variable scopée **message** du TP4.
 
> Constater dans la vue, l'affichage en majuscule.

## Etape 2 : utiliser le filtrage directement depuis la vue

 1. Dans le fichier app/hello/**hello.html**, utiliser le filter **uppercase** directement sur la variable **message**.
 
> Constater dans la vue, l'affichage en majuscule.

## Etape 3 : créer son propre filtre

 1. Créer un nouveau module nommé **filters** dans /app/filters/**filters.module.js** ;
 2. Créer un filtre nommé **capitalize** dans /app/filters/**capitalize.filter.js** ;
 3. Dans celui-ci, faire en sorte qu'il prenne en entrée une chaine de caractères quelconque et qu'il en ressort une chaine de caractère avec la première lettre en majuscule ;
 4. Utiliser le avec la méthode de votre choix vue à l'étape 1 ou 2.
 
## BONUS : utilisation des filtrages fournis par Angular

Se familiariser avec le filter **date**, **number**, **currency**.
A vous de jouer !!