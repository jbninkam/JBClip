# PRODUCTION : JBClip

## LOCAL

- [x] Fork GitHub `jbninkam/JBClip` créé avec `upstream` vers `bridge-mind/bridgeclip`.
- [x] Clone local créé dans `JBStudio\JBClip`.
- [x] Installer les dépendances avec `npm ci`.
- [x] Vérifier le type-check et le build Electron avec `npm run typecheck` et `npm run build`.
- [x] Démarrer JBClip en mode développement et vérifier le boot Electron.
- [x] Installer les dépendances Python verrouillées dans `engine\.venv`.
- [x] Vérifier `cv2`, `fastapi`, `yt_dlp` et le smart framing (`SMART_FRAMING=True`).
- [x] Intégrer le logo JBClip horizontal, compact et carré, ainsi que l'icône Windows.
- [ ] Reproduire et corriger l'échec du runner BridgeClip.

## PRODUCTION

- [ ] Créer une première release JBClip après validation Windows.
- [x] Remplacer le propriétaire et le dépôt de publication Electron par `jbninkam/JBClip`.
- [ ] Vérifier les mentions MIT et l'attribution BridgeMind dans chaque artefact distribué.
