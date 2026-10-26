# Portfolio Fatima Chegdani

Un portfolio professionnel moderne et interactif développé avec Vue.js 3, TypeScript et des animations avancées.

## 🚀 Technologies

- **Vue.js 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **Pinia** - Gestion d'état
- **Vue Router** - Routing
- **GSAP + ScrollTrigger** - Animations avancées
- **Lenis** - Smooth scrolling
- **SCSS** - Préprocesseur CSS

## ✨ Fonctionnalités

### Design & UX
- 🎨 **Design moderne** avec thème sombre élégant
- 🖱️ **Curseur personnalisé** avec effets de survol
- 🌊 **Smooth scrolling** fluide avec Lenis
- 📱 **100% Responsive** sur tous les appareils
- 🌐 **Support multilingue** (FR/EN)

### Animations
- ✨ **Animations au scroll** avec GSAP ScrollTrigger
- 🎭 **Effets de texte** avec typewriter
- 🎯 **Micro-interactions** sur tous les éléments interactifs
- 🔄 **Transitions fluides** entre les sections
- 💫 **Effets de survol** élaborés

### Sections
1. **Hero** - Introduction avec effet typewriter
2. **À Propos** - Présentation et parcours
3. **Expérience** - Timeline des stages et formation
4. **Projets** - Galerie de projets filtrable
5. **Compétences** - Barres de progression animées
6. **Certifications** - Certificats et langues
7. **Contact** - Formulaire et informations

## 🛠️ Installation

```bash
# Cloner le repository
git clone https://github.com/fatimachegdani/portfolio.git

# Naviguer dans le dossier
cd portfolio

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour production
npm run build
```

## 📁 Structure du Projet

```
portfolio-fatima/
├── public/                 # Fichiers statiques
├── src/
│   ├── components/         # Composants Vue
│   │   ├── sections/       # Sections du portfolio
│   │   ├── CustomCursor.vue
│   │   └── Navigation.vue
│   ├── composables/        # Composables Vue
│   ├── router/             # Configuration du router
│   ├── stores/             # Stores Pinia
│   ├── styles/             # Styles globaux
│   ├── App.vue             # Composant racine
│   └── main.ts             # Point d'entrée
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `src/styles/_variables.scss` :
- `--primary`: #6366f1 (Indigo)
- `--accent-pink`: #f472b6
- `--accent-cyan`: #22d3ee
- `--bg-primary`: #0a0a0f (Fond sombre)

### Contenu
Le contenu du portfolio est géré dans le store Pinia (`src/stores/portfolio.ts`) :
- Projets
- Expériences
- Compétences
- Certifications

## 📄 License

Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

## 👩‍💻 Auteur

**Fatima Chegdani**
- 🌐 Portfolio: [fatimachegdani.dev](https://fatimachegdani.dev)
- 💼 LinkedIn: [linkedin.com/in/fatimachegdani](https://linkedin.com/in/fatimachegdani)
- 🐙 GitHub: [github.com/fatimachegdani](https://github.com/fatimachegdani)

---

⭐ Si vous aimez ce projet, n'hésitez pas à mettre une étoile sur GitHub !
