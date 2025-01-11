# Lab9 - React Applications

Ce monorepo contient deux applications React similaires : une application d'affichage de films et une application d'affichage des universités du Sénégal.

## Structure du Projet

```
lab9/
├── movies-app/     # Application de films
└── univ-app/      # Application des universités
```

## Applications & Captures d'écran

### 1. Movies App (/movies-app)

Une application React qui affiche une liste de films avec leurs détails :
- Titre du film
- Année de sortie
- Interface responsive avec des cartes
- Données provenant de l'API : https://reactnative.dev/movies.json

#### Capture d'écran Movies App

![Movies App Desktop](/captures/films.png)
*Vue l'application Movies*


### 2. University App (/univ-app)

Une application React qui affiche les universités du Sénégal :
- Nom de l'université
- Site web (lien cliquable)
- Interface responsive avec des cartes
- Données provenant de l'API : http://universities.hipolabs.com/search?country=Senegal

#### Capture d'écran University App


![University App Desktop](/captures/univs.png)
*Vue  de l'application University*



## Technologies Utilisées

- React
- Tailwind CSS
- React Icons
- Fetch API

## Installation et Démarrage

Pour chaque application (/movies-app ou /univ-app) :

```bash
# Installation des dépendances
cd [nom-app]
npm install

# Démarrage du serveur de développement
npm run dev
```

## Fonctionnalités Communes

- Design responsive
- Gestion des états de chargement
- Gestion des erreurs
- Animation des cartes au survol
- Interface utilisateur moderne et intuitive

## License

MIT License - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails