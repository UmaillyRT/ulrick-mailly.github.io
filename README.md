# 🎓 Portfolio Professionnel RT3 - Version HTML/CSS/JS

Portfolio professionnel **100% statique** pour étudiant en BUT Réseaux et Télécommunications (3ème année).

**✅ AUCUNE installation requise - Fonctionne directement dans le navigateur !**

## 📁 Fichiers Inclus

```
portfolio/
│
├── index.html          # Page principale (structure HTML)
├── styles.css          # Tous les styles CSS
├── script.js           # Interactions JavaScript
└── README.md           # Ce fichier
```

## 🚀 Installation ULTRA SIMPLE

### Option 1 : Utilisation locale (Recommandée pour débuter)

1. **Créez un dossier** sur votre ordinateur (ex: `mon-portfolio`)

2. **Placez les 3 fichiers** dans ce dossier :
   - `index.html`
   - `styles.css`
   - `script.js`

3. **Double-cliquez** sur `index.html`
   
   ➡️ Votre portfolio s'ouvre directement dans le navigateur ! 🎉

**C'est tout !** Pas de Node.js, pas de commandes complexes.

### Option 2 : Avec un serveur local (Pour tester exactement comme en ligne)

Si vous avez **Python** installé :

```bash
# Python 3
python -m http.server 8000

# Puis ouvrez http://localhost:8000 dans votre navigateur
```

Ou si vous avez **PHP** installé :

```bash
php -S localhost:8000
```

Ou installez **Live Server** (extension VS Code) et cliquez sur "Go Live".

## ✏️ Personnalisation

### 🔧 Informations Personnelles

**Fichier :** `index.html`

**Recherchez et remplacez** (Ctrl+F) :

```html
<!-- Ligne ~10 : Titre de la page -->
<title>Portfolio RT3 - Votre Nom</title>

<!-- Ligne ~45 : Badge année -->
<span class="badge">3ème année (RT3)</span>

<!-- Ligne ~46-48 : Nom et titre -->
<h1 class="hero-title">
    <span class="gradient-text">Votre Nom</span>
</h1>
<p class="hero-subtitle">Étudiant BUT Réseaux et Télécommunications</p>

<!-- Ligne ~50 : Description -->
<p class="hero-description">
    Passionné par les réseaux, la cybersécurité et les technologies de télécommunications
</p>

<!-- Ligne ~68-74 : Liens sociaux -->
<a href="https://github.com/votre-pseudo" ...>
<a href="https://linkedin.com/in/votre-profil" ...>
<a href="mailto:votre.email@exemple.fr" ...>
```

### 📝 Section Bio

**Fichier :** `index.html` - Lignes ~91-111

Remplacez le texte dans la div `.card-text` et les `.passion-item`

### 📅 Timeline du Parcours

**Fichier :** `index.html` - Lignes ~126-197

Pour chaque `.timeline-item`, modifiez :
- `.timeline-date` : La période (ex: "📅 2022-2023")
- `<h3>` : Le titre de l'étape
- `<p>` : La description
- `.tag` : Les compétences (ajoutez/supprimez des `<span class="tag">`)

### 💼 Ajout de Projets

**Fichier :** `index.html`

#### 1. Ajouter une carte de projet (lignes ~214+)

Copiez ce template et ajustez :

```html
<div class="project-card fade-in-scroll" onclick="openModal('modal4')">
    <div class="project-image">
        <span class="project-emoji">🚀</span> <!-- Votre emoji -->
    </div>
    <div class="project-content">
        <span class="project-category">Réseaux</span> <!-- Catégorie -->
        <h3>Nom de Votre Projet</h3>
        <p>Description courte du projet...</p>
        <div class="project-tech">
            <span class="tech-tag">Tech1</span>
            <span class="tech-tag">Tech2</span>
            <span class="tech-tag">Tech3</span>
        </div>
    </div>
</div>
```

#### 2. Ajouter la modale correspondante (après ligne ~375)

```html
<div id="modal4" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>Nom de Votre Projet</h2>
            <button class="modal-close" onclick="closeModal('modal4')">&times;</button>
        </div>
        <div class="modal-body">
            <div class="modal-section">
                <h3>💼 Contexte du Projet</h3>
                <p>Décrivez le contexte : Quand ? Avec qui ? Pourquoi ?</p>
            </div>
            
            <div class="modal-section">
                <h3>💻 Description Technique</h3>
                <p>Description détaillée de ce que vous avez fait</p>
            </div>

            <div class="modal-section">
                <h3>🏆 Compétences Mobilisées</h3>
                <ul>
                    <li>✓ Compétence 1</li>
                    <li>✓ Compétence 2</li>
                    <li>✓ Compétence 3</li>
                    <li>✓ Compétence 4</li>
                </ul>
            </div>

            <div class="modal-section">
                <h3>🛠️ Technologies Utilisées</h3>
                <div class="modal-tags">
                    <span class="modal-tag">Tech1</span>
                    <span class="modal-tag">Tech2</span>
                    <span class="modal-tag">Tech3</span>
                </div>
            </div>

            <div class="modal-section reflection">
                <h3>💭 Réflexion Personnelle</h3>
                <p><em>"Votre réflexion personnelle ici..."</em></p>
            </div>

            <a href="https://github.com/votre-pseudo/projet" target="_blank" class="btn btn-primary modal-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Voir le code sur GitHub
            </a>
        </div>
    </div>
</div>
```

### 📊 Modifier les Compétences

**Fichier :** `index.html` - Lignes ~398-440

Pour chaque `.skill-item`, modifiez :
- `<h3>` : Nom de la compétence
- `.skill-percent` : Pourcentage (ex: "85%")
- `.skill-description` : Description
- `style="width: 85%"` : Largeur de la barre (même valeur que le pourcentage)

### 📧 Informations de Contact

**Fichier :** `index.html` - Lignes ~457-492

Modifiez les liens `href` dans les `.contact-card`

## 🎨 Personnalisation des Couleurs

**Fichier :** `styles.css` - Lignes 1-20

```css
:root {
    /* Modifiez ces valeurs pour changer la palette */
    --navy-dark: #0A1128;        /* Fond principal */
    --cyan-electric: #06B6D4;    /* Couleur d'accent */
    --blue: #3B82F6;             /* Couleur secondaire */
}
```

**Exemples de palettes alternatives :**

**Violet Moderne :**
```css
--navy-dark: #1a0a2e;
--cyan-electric: #9333ea;
--blue: #c026d3;
```

**Vert Tech :**
```css
--navy-dark: #0a1f12;
--cyan-electric: #10b981;
--blue: #14b8a6;
```

## 🌐 Mise en Ligne (Déploiement)

### Option 1 : GitHub Pages (100% GRATUIT)

1. **Créez un compte** sur [GitHub](https://github.com)

2. **Créez un nouveau repository** nommé `portfolio` (ou autre nom)

3. **Uploadez vos fichiers** :
   - `index.html`
   - `styles.css`
   - `script.js`

4. **Activez GitHub Pages** :
   - Allez dans Settings > Pages
   - Source : `main` branch
   - Cliquez sur Save

5. **Votre site est en ligne !**
   - URL : `https://votre-pseudo.github.io/portfolio`

### Option 2 : Netlify Drop (ULTRA SIMPLE)

1. Allez sur [Netlify Drop](https://app.netlify.com/drop)

2. **Glissez-déposez** votre dossier contenant les 3 fichiers

3. **Votre site est en ligne immédiatement !**
   - Netlify vous donne une URL (ex: `random-name-123.netlify.app`)
   - Vous pouvez la personnaliser gratuitement

### Option 3 : Vercel

1. Allez sur [Vercel](https://vercel.com)

2. **Importez** votre dossier ou repository GitHub

3. **Déployez en 1 clic**

## 📱 Test Responsive

Testez votre portfolio sur différentes tailles d'écran :

**Sur navigateur :**
1. Ouvrez votre portfolio
2. Appuyez sur `F12` (Outils de développement)
3. Cliquez sur l'icône mobile (ou `Ctrl+Shift+M`)
4. Testez différentes tailles

## ✅ Checklist Avant Soumission

- [ ] Toutes vos informations sont correctes
- [ ] Vous avez au moins 4 projets avec détails complets
- [ ] Tous les liens fonctionnent (GitHub, LinkedIn, Email)
- [ ] Aucune faute d'orthographe
- [ ] Testé sur mobile et desktop
- [ ] Le site est en ligne avec une URL accessible

## 🎯 Conseils pour Maximiser Votre Note

### Clarté et Navigation (5 points)
- ✅ Menu fixe fonctionnel
- ✅ Scroll fluide entre sections
- ✅ Boutons d'action visibles
- ✅ Organisation logique du contenu

### Présentation Professionnelle (10 points)
- ✅ Design cohérent et moderne
- ✅ Couleurs professionnelles
- ✅ Contenus détaillés et bien rédigés
- ✅ Réflexions personnelles approfondies sur chaque projet
- ✅ Responsive parfait

## 🔧 Dépannage

### Le menu mobile ne s'ouvre pas
➡️ Vérifiez que `script.js` est bien dans le même dossier que `index.html`

### Les styles ne s'appliquent pas
➡️ Vérifiez que `styles.css` est bien dans le même dossier que `index.html`

### Les modales ne s'ouvrent pas
➡️ Vérifiez la console du navigateur (F12) pour voir les erreurs

## 🆚 HTML/CSS/JS vs React

**Pourquoi cette version est MEILLEURE pour vous :**

| HTML/CSS/JS | React (Node.js) |
|-------------|-----------------|
| ✅ Aucune installation | ❌ Installation Node.js requise |
| ✅ Fonctionne immédiatement | ❌ Commandes complexes |
| ✅ Plus simple à modifier | ❌ Syntaxe JSX à apprendre |
| ✅ Déploiement ultra simple | ❌ Build requis |
| ✅ Parfait pour un portfolio | ⚠️ Surdimensionné pour un portfolio |

## 📞 Support

Problèmes courants :
1. **Console du navigateur** (F12) pour voir les erreurs
2. **Validation HTML** : [validator.w3.org](https://validator.w3.org/)
3. **Validation CSS** : [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)

## 📄 Licence

Ce portfolio est fourni à titre éducatif pour votre projet BUT RT3.

---

**Bon courage pour votre évaluation ! 🚀**

**ASTUCE IMPORTANTE :** Le plus important n'est pas le code, mais VOS contenus ! Prenez le temps de bien rédiger vos descriptions de projets et vos réflexions personnelles. C'est ce qui fera la différence dans votre note.
