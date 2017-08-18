/*
Activité : jeu de devinette
*/

// NE PAS MODIFIER OU SUPPRIMER LES LIGNES CI-DESSOUS
// COMPLETEZ LE PROGRAMME UNIQUEMENT APRES LE TODO

console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;

// Décommentez temporairement cette ligne pour mieux vérifier le programme
//console.log("(La solution est " + solution + ")");

// TODO : complétez le programme

var nombreUser = Number(prompt('veuillez entrer un nombre: '));
 var essai=1;
if (nombreUser===solution) {
  console.log('Bravo! La solution était ' + solution + '.');
  console.log('Vous avez trouvé en ' + essai +' essai(s)!');
} else {
      for (essai = 1; essai <=6; essai++){
        if (nombreUser<solution) {
        console.log(nombreUser + ' est trop petit.');
        Number(prompt('Veuillez entrer un autre nombre: '));
      } else {
        console.log(nombreUser +' est trop grand.');
        Number(prompt('Veuillez entrer un autre nombre: '));
      }
  }
}
