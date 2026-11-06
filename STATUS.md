# STATUS : JBClip

Dernière mise à jour : 2026-11-06

Dossier : `JBStudio\JBClip` (fork GitHub privé de travail, basé sur BridgeClip).

## Objectif (mesurable)

Publier une version personnelle nommée **JBClip**, fonctionnelle sur Windows, à partir du fork MIT de BridgeClip, avec un diagnostic reproductible de l'échec du runner local.

## Échéance

**2026-11-15** (JB).

## Plan

1. Fait le 2026-11-06 : créer le fork `jbninkam/JBClip` et le clone local avec `upstream`.
2. Renommer l'identité produit, les métadonnées et la documentation sans supprimer les mentions légales BridgeMind.
3. Diagnostiquer le runner Windows et corriger sa cause racine.
4. Tester et documenter le démarrage et le traitement local.

## Terminé quand

Le dépôt et l'application s'appellent JBClip, le démarrage fonctionne sur Windows, et l'erreur du runner est diagnostiquée ou corrigée avec un test reproductible.

## Prochaine action

Lancer un premier traitement réel pour vérifier le runner, puis traiter séparément les tests Windows hérités qui utilisent `ProactorEventLoop`. La nouvelle identité JBClip est intégrée.
