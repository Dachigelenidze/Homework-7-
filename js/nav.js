const nav = ["Home", "Gallery", "About", "Contact"] ;

// const link = ["index.html", "#", "#", "#" ]

let navtext = '<ul>'


for (i=0; i <nav.length; i++ ) {
    navtext +='<li><a href="">' + nav[i] + "</a></li>";
// '+ link[i] +'
}
navtext+= "</ul>";

document.getElementById("nav").innerHTML = navtext;

let navigation = document.getElementById('nav');
let BurgerBar = document.getElementById('Bar-id');

BurgerBar.addEventListener('click', function(){
    navigation.classList.toggle('active');
})