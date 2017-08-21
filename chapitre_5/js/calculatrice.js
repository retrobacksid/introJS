// TODO : écrire la fonction calculer()

function calculer(nb1,operateur,nb2){
    var operateur = "";
    if (operateur = "+"){
        return nb1+nb2;
    } else if (operateur = "-"){
        return nb1-nb2;
    } else if (operateur = "*"){
        return nb1*nb2;
    } else if (operateur = "/"){
        return nb1/nb2;
    }
}


console.log(calculer(4, "+", 6)); // Doit afficher 10

console.log(calculer(4, "-", 6)); // Doit afficher -2

console.log(calculer(2, "*", 0)); // Doit afficher 0

console.log(calculer(12, "/", 0)); // Doit afficher Infinity