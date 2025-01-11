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

### 3. Cars App (/cars-app)

#### Frontend (/cars-app)

Une application React qui affiche les voitures par requête api springboot :
- Informations sur la voitures
- Informations sur le propriétaire
- Interface responsive avec des cartes
- Données provenant de l'API : [http://](http://localhost:8080/api/cars)

#### Capture d'écran Cars App


![University App Desktop](/captures/cars.png)
*Vue  de l'application Cars*

#### Backend (/sb-car-2)

Une application SpringBoot qui permet d'ajouter des voitures et leurs propriétaires et de récupérer la liste des voitures :
- Informations sur la voitures
- Informations sur le propriétaire
- Interface responsive avec des cartes

#### Capture d'écran ConsoleH2


![University App Desktop](/captures/carsConsoleH2.png)
*Vue  du ConsoleH2 Cars*

## Technologies Utilisées

- React
- Tailwind CSS
- SpringBoot
- React Icons
- Fetch API

## Installation et Démarrage

Pour chaque application (/movies-app ou /univ-app ou cars-app) :

```bash
# Installation des dépendances
cd [nom-app]
npm install

# Démarrage du serveur de développement
npm run dev
```

Pour chaque application springboot (/sb-car-2) :

```bash
# Installation des dépendances
cd [nom-app]

# Démarrage du serveur de développement
./gradlew clean
./gradlew bootRun
```
## Fonctionnalités Communes

- Design responsive
- Gestion des états de chargement
- Gestion des erreurs
- Animation des cartes au survol
- Interface utilisateur moderne et intuitive

## License

MIT License - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails