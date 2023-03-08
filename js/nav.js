//var cible = document.getElementById('menu');
var menu = document.getElementById('menu');
var posNav = menu.offsetTop; //retourne la position top de info

//action
function affiche(){
 //info.innerHTML = this.pageYOffset; //position du scroll 
  if(posNav - this.pageYOffset != 0){
   menu.style.position = "fixed";
   menu.classList.add("couleur"); //je change la class et du coup la couleur
     }else{
       //alert(2);
       menu.style.position = "relative";
       menu.classList.remove("couleur");
     }
}

//évènement
window.addEventListener('scroll',affiche);
