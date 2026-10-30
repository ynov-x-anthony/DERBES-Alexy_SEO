
# REFLEXION.md

## 1. robots.txt empêche-t-il, à lui seul, le duplicate content entre /produits?tri=prix et /produits?tri=prix-asc ? Pourquoi ?

Non, robots.txt ne suffit pas à empêcher le duplicate content.

Le fichier robots.txt permet de contrôler l'exploration des pages par les robots des moteurs de recherche. Il ne permet pas de choisir quelle URL doit être considérée comme la version principale.

Pour résoudre ce problème, il faut utiliser une balise canonique qui indique aux moteurs de recherche l'URL de référence.

## 2. Pourquoi la balise canonique est-elle l'outil adapté ici, plutôt que robots.txt ou une meta noindex ?

La balise canonique est adaptée car elle indique aux moteurs de recherche quelle URL représente la version principale d'une page.

Dans notre cas, les URL /produits?tri=prix et /produits?tri=prix-asc présentent un catalogue similaire.

La balise canonique permet de désigner /produits?tri=prix comme URL de référence.

Contrairement à noindex, elle ne demande pas de retirer une page des résultats de recherche. Contrairement à robots.txt, elle permet d'indiquer explicitement une URL canonique.

## 3. Si demain /admin existe sur ce site et ne doit jamais être exploré par Google, quelle ligne ajoutes-tu dans robots.txt ?

Il faut ajouter la ligne suivante :

Disallow: /admin

Cette directive demande aux robots des moteurs de recherche de ne pas explorer les pages situées dans le répertoire /admin.
