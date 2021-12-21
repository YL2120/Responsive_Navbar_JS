const liste = document.querySelector('.liste');
const btnResponsive = document.querySelector(".btn-responsive");

btnResponsive.addEventListener("click", () => {
    liste.classList.toggle("show");
})

window.addEventListener("resize",() => { //dès qu'on va resize la fenêtre
    
    if(window.innerWidth > 650){ // si la taille de la fenêtre est supérieure à 650
        liste.classList.remove("show"); //le menu ne reste plus ouvert puisqu'on enlevé show
    }
})