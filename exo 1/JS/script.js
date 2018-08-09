// Exercice 1 ********************************************************
//je détermine ma fonction qui doit s'afficher dans ma console
// Je commence par lui donné un nom: ici montre
function montre(){
  return "Coucou !";
}
//affiche "Coucou !" dans la console du navigateur
console.log(montre());

 // demander à l'utilisateur de saisir son prénom
var question = prompt("Quel ton prénom ?");

var resultat = document.getElementById("resultat");

var prenom = "Elisabeth" ;

// je stocke l'info du prénom
function direBonjour(prenom){
    var message = "Bonjour " + prenom + "!";
    resultat.innerHTML = message;
}
//affiche le message dans la console du navigateur
console.log(direBonjour(prenom));
