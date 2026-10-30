
# SSR_SSG.md : réponses

## 1. Pour CE catalogue (quelques dizaines de produits, mis à jour occasionnellement), choisirais-tu plutôt du SSR, du SSG, ou du pré-rendu ? Justifie en une ou deux phrases en t'appuyant sur la fréquence de mise à jour du contenu.

Je choisirais le SSG (Static Site Generation), car le catalogue contient seulement quelques dizaines de produits et les informations sont mises à jour occasionnellement.

Le SSG permet de générer les pages HTML au moment du build. Les pages sont ainsi directement disponibles avec leur contenu et leurs métadonnées SEO, ce qui améliore les performances et facilite l'indexation par les moteurs de recherche.

## 2. Si demain ce site affichait un stock en temps réel (quantité disponible qui change à chaque commande), ce choix changerait-il ? Pourquoi ?

Oui, le choix pourrait changer. Le SSR (Server Side Rendering) serait plus adapté si les pages doivent afficher une quantité de stock actualisée à chaque requête.

Contrairement au SSG, le SSR génère le HTML à chaque demande, ce qui permet de récupérer des informations récentes depuis la base de données.

Une autre possibilité serait de conserver le SSG pour les informations générales du produit et de récupérer le stock en temps réel depuis une API.
