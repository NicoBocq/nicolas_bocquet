# Handoff: Logo « 1h12 » + intégration portfolio

## Overview
Nouveau logo pour le domaine 1h12.com (portfolio de Nicolas Bocquet) : un pictogramme « aiguilles d'horloge figées à 1 h 12 » dans une tuile arrondie. Ce document couvre le remplacement du favicon, l'intégration du mark dans la topbar et le footer du site existant, et des évolutions de charte optionnelles dérivées du logo.

## About the Design Files
Les fichiers de ce dossier sont des **références de design créées en HTML/SVG** — pas du code de production à copier tel quel. La tâche est de les intégrer dans la codebase existante du portfolio (site statique HTML/CSS/vanilla JS, structure : `index.html`, `css/style.css`, `js/data.js`, `img/`), en respectant ses patterns (variables CSS `--color-text`/`--color-bg`, thème via `[data-theme="dark"]`).

## Fidelity
**High-fidelity.** Les SVG sont finaux (géométrie exacte ci-dessous). Reproduire au pixel près.

## Le mark — géométrie exacte
ViewBox `0 0 100 100` :
- Tuile : `rect` 100×100, `rx="22"`, fond = couleur de texte du thème
- Aiguille des heures : ligne de (50,53) à (61.8,36.8), `stroke-width="10"`, `stroke-linecap="round"` (angle 36° = 1 h + 12 min)
- Aiguille des minutes : ligne de (50,53) à (78.5,43.7), même trait (angle 72° = 12 min)
- Axe : cercle centre (50,53), `r="6"`
- Couleur aiguilles/axe = couleur de fond du thème (inverse de la tuile)

**Règle d'usage (importante)** : le mark ne s'utilise JAMAIS « nu » (aiguilles seules sans tuile) — à petite taille il se lit comme une tache. Toujours la tuile, partout : topbar, footer, favicon, avatars.

## Intégrations

### 1. Favicon (remplacement)
Remplacer le contenu de `img/favicon.svg` par `assets/favicon.svg` de ce dossier (version noir/blanc avec inversion auto via `@media (prefers-color-scheme: dark)`, même mécanisme que le favicon actuel). Le `<link rel="icon" type="image/svg+xml" href="img/favicon.svg">` existant ne change pas.

### 2. Topbar (option retenue : mark + wordmark)
Dans `index.html`, remplacer :
```html
<span class="logo-mark font-mono">1h12</span>
```
par :
```html
<span class="logo-mark font-mono">
  <svg viewBox="0 0 100 100" aria-hidden="true">
    <rect width="100" height="100" rx="22" fill="var(--color-text)"/>
    <line x1="50" y1="53" x2="61.8" y2="36.8" stroke="var(--color-bg)" stroke-width="10" stroke-linecap="round"/>
    <line x1="50" y1="53" x2="78.5" y2="43.7" stroke="var(--color-bg)" stroke-width="10" stroke-linecap="round"/>
    <circle cx="50" cy="53" r="6" fill="var(--color-bg)"/>
  </svg>1h12</span>
```
Dans `css/style.css`, compléter `.logo-mark` :
```css
.logo-mark { display: flex; align-items: center; gap: .5rem; }
.logo-mark svg { width: 1.1em; height: 1.1em; }
```
Le SVG inline suit automatiquement le theme toggle existant (variables CSS), rien d'autre à faire. Les transitions de couleur du thème (0.3s ease) ne s'appliquent pas aux attributs SVG `fill`/`stroke` par défaut ; si le switch paraît sec, ajouter `transition: fill .3s ease, stroke .3s ease` sur `.logo-mark svg rect, .logo-mark svg line, .logo-mark svg circle`.

### 3. Footer (signature, optionnel mais recommandé)
Ajouter en fin de footer, aligné à droite (le footer est déjà en `display:flex; justify-content:space-between; align-items:flex-end`) :
```html
<span class="footer-brand font-mono">
  <!-- même SVG inline que la topbar -->
  © 2026 — 1h12.com
</span>
```
```css
.footer-brand { display: flex; align-items: center; gap: .5rem; font-size: .7rem; color: var(--color-meta); }
.footer-brand svg { width: 1rem; height: 1rem; }
```

### 4. Signature email / avatars
Utiliser les PNG fournis : `logo-1h12-512.png` (tuile noire) pour avatars GitHub/LinkedIn, `logo-1h12-512-inverse.png` (tuile blanche) sur fonds sombres, `logo-1h12-64.png` pour la signature email (les clients email ne rendent pas le SVG de façon fiable).

## Évolutions de charte (optionnelles, validées en exploration)
Recommandation : a + c en socle, d pour la personnalité. b seulement si envie de casser le noir/blanc strict.

a. **Rail cadran** — la nav verticale desktop (`.section-index`) remplace les numéros `::before` par des graduations : trait horizontal 10×2 px, `border-radius: 2px`, `background: var(--color-text)`, opacité 0.45 ; l'item actif passe à 18 px de large et opacité 1 (même geste que l'aiguille du logo).
b. **Aiguille des secondes** — un accent unique `#e8402a` (rouge trotteuse), réservé aux états hover/actif (soulignés, flèches). Jamais en aplat, jamais dans le favicon.
c. **Terminaisons rondes** — aligner les traits de l'UI sur les bouts ronds du logo : règles/soulignés en 2-3 px avec `border-radius`, tags compétences en pilule (`border-radius: 99px`, border 1.5px).
d. **Compteurs de temps** — micro-typo horlogère en Space Grotesk : sections horodatées (`02:00 EXPERIENCE`), durées d'expérience en notation dérivée du domaine (« 3a11 » = 3 ans 11 mois, ex. INFORCA), affichées en opacité 0.45 à droite des items.

## Design Tokens (existants, à réutiliser — ne pas en créer)
- Light : `--color-bg: #ffffff`, `--color-text: #000000`, `--color-meta: #555555`
- Dark : `--color-bg: #0a0a0a`, `--color-text: #f0f0f0`, `--color-meta: #888888`
- Fontes : `--font-main: 'Inter'` (topbar/hero), `--font-mono: 'Space Grotesk'` (logo-mark, meta)
- Wordmark : Space Grotesk 700, `letter-spacing: -0.03em` (classe `.logo-mark` existante)
- Accent optionnel (évolution b uniquement) : `#e8402a`

## Assets (dans ce dossier)
- `assets/favicon.svg` — favicon final, inversion auto dark mode
- `assets/logo-1h12-tile.svg` — mark en variables CSS pour usage inline sur le site
- `assets/logo-1h12-512.png`, `assets/logo-1h12-512-inverse.png`, `assets/logo-1h12-64.png` — avatars & email

## Files
- `Logo 1h12.dc.html` (projet parent) — canvas d'exploration : spécimen final (2a), mocks topbar/footer (3a/3b), snippet (3c), évolutions de charte (4a-4d), renforcements (5a-5c, règle retenue : 5c)
