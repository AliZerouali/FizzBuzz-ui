# 🚀 FizzBuzz UI - Frontend React

Application React moderne pour générer et visualiser des séquences FizzBuzz, construite avec Vite, TypeScript et Redux.

## ✨ Fonctionnalités

- ✅ **Génération en temps réel** de séquences FizzBuzz personnalisables
- ✅ **Affichage des statistiques** des requêtes les plus fréquentes
- ✅ **Gestion d'état** avec Redux Toolkit et TypeScript
- ✅ **Interface responsive** et moderne avec Tailwind CSS
- ✅ **Validation des entrées** en temps réel
- ✅ **Gestion d'erreurs** complète avec retry
- ✅ **Hot Reload** ultra-rapide avec Vite
- ✅ **Tests unitaires** intégrés (optionnel)

## 🏗 Architecture Frontend

```bash
fizzbuzz-ui/
├── public/ # Assets statiques
├── src/
│ ├── app/ # Configuration Redux (store, hooks)
│ ├── features/ # Slices Redux par fonctionnalité
│ │ ├── fizzbuzz/ # Génération FizzBuzz
│ │ └── statistics/ # Statistiques des requêtes
│ ├── components/ # Composants React réutilisables
│ ├── services/ # API services (axios configuration)
│ ├── types/ # Types TypeScript
│ ├── utils/ # Fonctions utilitaires
│ ├── assets/ # Images, styles, polices
│ ├── main.tsx # Point d'entrée
│ └── App.tsx # Composant racine
├── vite.config.ts # Configuration Vite
└── package.json
```

## 📋 Prérequis

- [Node.js 18+](https://nodejs.org/) (LTS recommandé)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)
- Backend FizzBuzz API en cours d'exécution

## 🚀 Démarrage Rapide

```bash
# Cloner le dépôt
git clone https://github.com/AliZerouali/FizzBuzz-ui.git
cd fizzbuzz-ui

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# L'application sera disponible sur http://localhost:3000
```

📱 Interface Utilisateur

## Formulaire de Configuration

```bash
Formulaire de Configuration

int1 : Premier nombre pour les multiples (défaut: 3)

str1 : Texte pour les multiples de int1 (défaut: "fizz")

int2 : Second nombre pour les multiples (défaut: 5)

str2 : Texte pour les multiples de int2 (défaut: "buzz")

limit : Limite de la séquence (1-1000, curseur interactif)
```

## Affichage des Résultats

```bash
- Séquence générée en temps réel

- Mise en forme colorée selon le type (fizz, buzz, fizzbuzz, nombre)

- Scrollable pour les longues séquences

- Affichage du nombre d'éléments générés
```

## Panneau Statistiques

```bash
- Requête la plus fréquente avec ses paramètres

- Nombre de hits et dernière mise à jour

- Bouton de rafraîchissement manuel
```

## Configuration Vite

Le projet utilise Vite avec les optimisations suivantes :

```bash
- Build optimisé avec esbuild et Rollup

- Hot Module Replacement (HMR) instantané

- Alias de chemins pour les imports

- Proxy pour éviter les problèmes CORS en développement

- Code splitting automatique
```

🎨 Technologies Utilisées

| Technologie   | Version | Usage                    |
| ------------- | ------- | ------------------------ |
| React         | 18.2.0  | Bibliothèque UI          |
| TypeScript    | 5.2.2   | Typage statique          |
| Vite          | 5.0.0   | Build tool et dev server |
| Redux Toolkit | 2.2.1   | Gestion d'état           |
| Axios         | 1.6.2   | Client HTTP              |
| Tailwind CSS  | 3.3.5   | Styling utilitaire       |
| React Router  | 6.20.1  | Navigation (optionnel)   |
| ESLint        | 8.54.0  | Linting                  |
| Prettier      | 3.1.0   | Formatage                |
