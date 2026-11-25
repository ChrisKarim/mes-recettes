# Le Cuisto — v1.0

Mon carnet de recettes personnel : je colle un lien YouTube, Gemini génère le transcript et la fiche recette (nom, catégorie, ingrédients, étapes).

- Fonctionne sur iPhone, installée sur l'écran d'accueil (PWA)
- Recettes stockées sur le téléphone, lisibles hors connexion
- Catégories : Sauce · Plat · Dessert · Amuse-bouche
- Recherche par nom ou ingrédient, mode cuisine (écran toujours allumé)
- Sauvegarde : Réglages → Exporter → Enregistrer dans Fichiers → Google Drive

## Mise en ligne (GitHub Pages)

1. Sur github.com, créer le dépôt **mes-recettes** (public).
2. Envoyer tous les fichiers de ce dossier (`index.html`, `manifest.json`, `sw.js`, `icons/`).
3. Settings → Pages → Source : *Deploy from a branch* → branche `main`, dossier `/ (root)` → Save.
4. Après 1 à 2 minutes, l'app est en ligne sur `https://<utilisateur>.github.io/mes-recettes/`.

## Installation sur l'iPhone

1. Ouvrir l'adresse ci-dessus dans **Safari**.
2. Bouton Partager → **Sur l'écran d'accueil**.
3. Ouvrir Le Cuisto depuis l'icône → ⚙️ Réglages → coller la clé Gemini.

## Clé Gemini (gratuite)

1. Aller sur https://aistudio.google.com avec un compte Google.
2. « Get API key » → « Create API key ».
3. La copier dans les réglages de l'app. Elle reste uniquement sur le téléphone.

## Astuce : ajout direct depuis YouTube

L'app accepte un lien du type `…/mes-recettes/?url=<lien YouTube>`.
Un Raccourci iOS « Ouvrir l'URL » branché sur la feuille de partage de YouTube permet d'ouvrir l'ajout pré-rempli.

## Versions

- **1.0** — première version : ajout via Gemini, saisie manuelle, catégories, recherche, mode cuisine, export/import.
