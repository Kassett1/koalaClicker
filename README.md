# Koala Clicker

## Introduction

Ce projet a été réalisé au cours de ma troisième année en licence professionnelle en développement fullstack. J'ai choisi de créer Koala Clicker pour appliquer les connaissances acquises au cours de mes études et, notamment pour me familiariser avec React que j'ai commencé à apprendre cette année.

Koala Clicker est actuellement accessible en ligne via GitHub Pages. Vous pouvez jouer au jeu en suivant ce lien :

[https://kassett1.github.io/koalaClicker/](https://kassett1.github.io/koalaClicker/)


## Guide d'Installation

Pour lancer le projet localement, suivez ces étapes :

1. Téléchargez ou clonez le projet depuis le référentiel GitHub.
2. Dans le fichier package.json, commentez ou supprimez la ligne 
   ```json 
   "homepage": "https://Kassett1.github.io/koalaClicker"
   
3. Exécutez `npm install` pour installer les dépendances du projet.
4. Enfin, lancez le projet avec `npm start`.

**Remarque :** Assurez-vous de ne pas activer d'extension de traduction dans votre navigateur, car cela pourrait causer des problèmes d'affichage ou de fonctionnement de l'application.


## Qu'est ce qu'un jeu Clicker ?

Un jeu clicker est un jeu où vous cliquez pour gagner une monnaie virtuelle, que vous pouvez ensuite utiliser pour acheter des améliorations qui augmentent votre production de monnaie. Malgré leur simplicité, ces jeux sont addictifs et incitent les joueurs à continuer de cliquer pour progresser.

Cliquez sur mon koala pour commencer à jouer !

## Améliorations Disponibles

Dans Koala Clicker, vous trouverez les améliorations suivantes pour améliorer votre expérience de jeu :

1. **Click :** À l'origine, un clic sur le koala rapporte un point, mais plus vous achetez cette amélioration, plus vous gagnerez de points en cliquant.

2. **Super Click :** Cette amélioration est similaire à "Click", mais elle rapporte encore plus de points !

3. **Autoclick :** Vous en avez assez de cliquer sans arrêt ? Pas de soucis, autoclick va vous rapporter des points toutes les secondes sans rien faire.

4. **Super Auto :** Cette amélioration est la même que "Autoclick", mais elle rapporte encore plus de points !

5. **Diamond :** Si vous avez beaucoup cliqué, peut-être avez-vous eu la chance de gagner des diamants ? Cette monnaie permet d'acheter des sorts. Achetez l'amélioration "Diamond" afin d'obtenir plus de diamants lorsque vous êtes censé en obtenir.

6. **Auto Diamond :** Vous en avez assez de ne pas avoir suffisamment de diamants ? Pas de soucis, Auto Diamond vous permet de gagner passivement un peu de diamants.

7. **Rebirth :** Vous commencez à stagner ? Acheter Rebirth réinitialisera votre argent et vos améliorations achetées, mais en revanche, vous gagnerez beaucoup plus de points qu'avant en jouant.

## Sorts Disponibles

En plus des améliorations, Koala Clicker propose également des sorts pour pimenter votre expérience de jeu :

1. **Change Color :** Vous en avez assez de toujours voir le même koala ? Pas de soucis, achetez "Change Color" pour changer aléatoirement la couleur de votre koala.

2. **Power Click :** Vous ne gagnez toujours pas assez de points ? Achetez Power Click pour que vos clics rapportent beaucoup plus de points pendant un certain temps.

3. **Auto Speed :** Vous trouvez que votre Auto Click est trop lent ? Achetez Auto Speed pour qu'il s'actionne beaucoup plus rapidement pendant un certain temps.

## Autres Fonctionnalités

### Coffre de Diamants

- Avez-vous remarqué le coffre en haut à droite de l'écran ? Cliquez dessus pour obtenir des diamants. Vous pouvez les récupérer toutes les heures.

### Multiplicateur

- Sous les étoiles à gauche, vous avez peut-être remarqué le "multiplicateur". Cette fonctionnalité est utile lorsque vous avez accumulé beaucoup de points. Elle vous permet, par exemple, d'acheter 10 améliorations d'un coup au lieu de les acheter une par une. Étant donné que le prix de chaque amélioration augmente à chaque achat, il est normal que le multiplicateur propose un prix qui n'est pas simplement multiplié par le nombre que vous avez choisi.

Si vous voulez simplement tester les améliorations sans avoir à jouer pour les acheter, vous pouvez vous rendre dans le fichier `src/Composants/ClickUpgrade.jsx` et modifier la valeur de cette constante tout en haut du fichier :
 ```javascript
 const baseValue = 1;
 ```
Cette constante correspond au nombre de points que vous gagnez à la base lorsque vous cliquez.

## Technologies Utilisées

Koala Clicker a été développé en utilisant les technologies suivantes :

- **React**
- **BEM (Block, Element, Modifier)**
- **SCSS (Sassy CSS)**
- **ESLint avec le style guide AirBnB** 

En utilisant ces technologies, nous avons pu créer une expérience de jeu interactive et agréable pour les joueurs de Koala Clicker.
