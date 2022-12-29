/*NAVBAR*/


const logoMenu = document.querySelector('.logoMenuImg');
const contItems = document.querySelector(".contItems");
const arrItems = document.querySelectorAll (".items");

logoMenu.addEventListener("click", () => {
    if(contItems.className === "contItems"){

        contItems.className += " responsive";
        logoMenu.src = "img/close.svg"
        logoMenu.style.width = "35px";

    } else {

        contItems.className = "contItems";
        logoMenu.style.width = "30px";
        logoMenu.src = "img/menu.svg";

    }
    
})

arrItems.forEach(item => {

    item.addEventListener("click" , () => {
        contItems.className = "contItems";
        logoMenu.src = "img/menu.svg";
    })
})
/*SLIDER*/


let img_slider = document.getElementsByClassName("img_slider");

let etape = 0;
let nbr_img = img_slider.length;
let precedent = document.querySelector(".precedent");
let suivant = document.querySelector(".suivant");

function enleverActiveImages() {
    for(let i = 0 ; i < nbr_img ; i++) {
        img_slider[i].classList.remove("active");
    }
}

suivant.addEventListener("click", function() {
    etape++;
    if(etape >= nbr_img) {
        etape = 0;
    }
    enleverActiveImages();
    img_slider[etape].classList.add("active");
})

precedent.addEventListener("click", function () {
    etape--;
    if(etape < 0) {
        etape = nbr_img - 1;
    }
    enleverActiveImages();
    img_slider[etape].classList.add("active");
})



