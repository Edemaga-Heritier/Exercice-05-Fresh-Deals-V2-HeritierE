# Instructions  

Dans la section de droite (Webview), vous devriez voir un site d'achat de produits d'épicerie. Le produit actuellement sélectionné est "Myrtilles bio". Si vous avez atterri sur cette page, vous vous posez peut-être quelques questions.
* Puis-je acheter autre chose que des myrtilles ?
* Tout ce qui se trouve sur ce site est-il biologique ou puis-je acheter des produits conventionnels ?
* Ce site propose-t-il des produits autres que des fruits et légumes ?

En ajoutant des fils de navigation (:uk: *breadcrumbs*) à ce site, vous ajouterez un élément d'interface utilisateur qui répondra à certaines des questions susmentionnées. Les utilisateurs auront ainsi une meilleure idée de ce que le site propose et des caractéristiques facultatives du produit qu'ils achètent.

Nous nous concentrons sur la mise en page de cette page et mettons en place les fils de navigation via HTML et CSS. Les liens vers les fils de navigation ne fonctionnent pas.
Vérifiez les étapes du projet au fur et à mesure que vous les réalisez.

## Tâches
### Ajout de breadcrumbs de base
1. Ajoutez des breadcrumbs dans `blueberries.html` directement au-dessus du héros du site en utilisant une liste non ordonnée.
Veillez à placer le texte de chaque élément du fil de navigation dans une balise d'ancrage (utilisez `"#"` comme valeur de l’attribut `href`).

Utilisez les items suivants pour cette page :
  * Boutique
  * Épicerie
  * Myrtilles
  * Bio
2. Attribuer la classe `breadcrumb` à la liste non ordonnée.
3. Ajustez ensuite la feuille de style CSS dans `breadcrumb.css` pour que les éléments de la liste du fil de navigation s'affichent en ligne.
4. Ajoutez un caractère de votre choix avec CSS pour séparer les items du breadcrumb. Il s'agit généralement d'un `>` ou d'un `/`
5. Le CSS existant a supprimé le soulignement et défini l'état de survol pour les breadcrumbs. Si vous souhaitez l'ajuster, vous pouvez le faire.
Vous avez maintenant une interface utilisateur de base pour les breadcrumbs !
### Séparation de breadcrumb par type
6. Vous avez peut-être remarqué que le breadcrumbs existant mélange des breadcrumbs de localisation et des breadcrumbs d'attributs. Plus précisément, "Bio" est un attribut de ces myrtilles et nous devrions rendre évident le fait qu'il s'agit d'une option ou d'un filtre.
<br>Ajoutez des classes aux éléments de la liste du breadcrumb pour indiquer s'il s'agit d'un "attribut" ou d'un "emplacement".
7. Mettre à jour le CSS pour qu'il n'y ait plus de séparateur entre “Myrtilles” et "Bio".
8. Styliser les attributs pour qu'il soit évident qu'il s'agit d'un. Essayez de changer la couleur ou de définir l’attribut `content` sur la pseudo-classe `::after` pour créer une notation "fermer" (croix `x`).
<br>L'utilisateur comprendra ainsi qu'il peut interagir avec le breadcrumbs d'une manière différente de celle utilisée pour le breadcrumbs d'emplacement.

N'hésitez pas à continuer à styliser les breadcrumbs pour vous familiariser avec le CSS. Consultez certains de vos sites préférés pour vous inspirer.