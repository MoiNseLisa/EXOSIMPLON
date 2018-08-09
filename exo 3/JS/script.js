// alert("hello")

//je verifie que mon fichier est prêt
console.log('ready');

//j'ai 2 variables
// var pseudo ="Melisa";
// var mdp = "password";

//concatenation
var champsRemplis = pseudo + mdp;

//je cible mon bouton pour lui donner un événement
$(function(){
  console.log('document chargé');
  $('#button').click(function(){
    var champsRemplis = $('#pseudo, #mdp').val();
    console.log(champsRemplis);
    $('#resultat').text(champsRemplis);
  });
});

//Je recupere une valeur
