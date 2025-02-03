// On importe la fonction `defineConfig` depuis Vite. Cette fonction permet de définir une configuration de projet plus lisible et avec l'autocomplétion.
import { defineConfig } from 'vite'

// On exporte la configuration de Vite par défaut en utilisant `defineConfig`, ce qui permet d'avoir une configuration plus structurée.
export default defineConfig({
  // Définit le dossier racine où se trouvent les fichiers source de ton projet. Ici, c'est le dossier `src`, donc tous les fichiers sources seront attendus dans ce dossier.
  root: 'src',

  // Configuration de la génération du build (la version de production de ton projet).
  build: {
    // Le dossier où le build sera placé après la construction. Ici, le dossier de sortie est situé à la racine du projet dans `build`.
    outDir: '../build',

    // Le paramètre `target` spécifie la version du JavaScript cible. Ici, tu as choisi `ES2022`, ce qui signifie que ton projet sera compilé pour être compatible avec ES2022 (dernière version de JavaScript).
    target: 'ES2022',

    // `emptyOutDir: true` indique que le dossier de sortie (`outDir`) sera vidé avant chaque build. Cela évite d'accumuler des fichiers anciens.
    emptyOutDir: true,
  },
})
