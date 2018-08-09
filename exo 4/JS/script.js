//alert('hello !');

var resultat = document.getElementById('resultat');

var chiffre = prompt("Choisi un chiffre entre 0 et 6");

switch (chiffre){ //si tu choisi le chiffre...

  case '0': // si tu choisi le 0
  resultat.innerHTML = "Tu es Atchoum !";
  break; //j'arrête ma condition

  case '1': // si tu choisi le 0
  resultat.innerHTML = "Tu es Joyeux !";
  break; //j'arrête ma condition

  case '2': // si tu choisi le 0
  resultat.innerHTML = "Tu es Prof !";
  break; //j'arrête ma condition

  case '3': // si tu choisi le 0
  resultat.innerHTML = "Tu es Simplet !";
  break; //j'arrête ma condition
  case '4': // si tu choisi le 0
  resultat.innerHTML = "Tu es Timide !";
  break; //j'arrête ma condition

  case '5': // si tu choisi le 0
  resultat.innerHTML = "Tu es Dormeur !";
  break; //j'arrête ma condition

  case '6': // si tu choisi le 0
  resultat.innerHTML = "Tu es Grincheux !";
  break; //j'arrête ma condition

  default://sinon
  resultat.innerHTML = "Je n'ai pas compris, recommence";
}

//les boucles

// //on commence par établir ma liste (ici de nombre)
// //dans un tableau
// var nombre1 = "Atchoum";//[0]
// var nombre2 = "Joyeux";//[1]
// var nombre3 = "Prof";//[2]
// var nombre4 = "Simplet";//[3]
// var nombre1 = "Timide";//[4]
// var nombre2 = "Dormeur";//[5]
// var nombre3 = "Grincheux";//[6]
//
// // autre façon d'écrire ma liste :nombres.length
// var nombres =["Atchoum", "Joyeux","Prof", "Simplet", "Timide", "Dormeur", "Grincheux"]
//
// // voici la boucle : while
// var i = 0; // on associe i à une valeur
// // tant que i vérifie cette condition
// //fait ce qui suit
// // while(i < nombres.length){
// //   console.log(nombres[i]);
// //   i + 1;
// // };
//
// // voici la boucle : for
// for (var i = 0; i < nombres.length; i++) {
//    var nombre = nombres[i];
//    if(nombre[0] === "Atchoum"){
//      filtrerNombres.push(nombre);
//      console.log(filtrerNombres)
//    }
// }
