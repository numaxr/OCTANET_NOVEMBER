

var navbar = document.getElementById("navbar");
var burger  = document.getElementById("burger");
var linea = document.getElementById("linea");
var lineb = document.getElementById("lineb");
var linec = document.getElementById("linec");
burger.addEventListener('click',function(){
    navbar.classList.toggle("navbar-toggle");
    console.log("cljdslkf");
    linea.classList.toggle('crossa');
    lineb.classList.toggle('crossb');
    linec.classList.toggle('crossc');
})

