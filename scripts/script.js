function burgerMenu(){
    var checkbox = document.getElementById("hamburgerCheckbox");
    var menu = document.getElementById("menu");
    var burgerMenu = document.getElementsByClassName("hamburgerMenu");

    if(checkbox.checked == true){
        menu.style.transform = "none";
        burgerMenu[0].style.position = "fixed";
    }
    else{
        menu.style.transform = "translate(100%)";
        burgerMenu[0].style.position = "absolute";
    }
}

function scrollToDiv(location){
    document.getElementById(location).scrollIntoView({behaviour: "smooth"});

}