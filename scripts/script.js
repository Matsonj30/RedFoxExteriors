
changeKeyWord()
autoScrollInitiate()


function burgerMenu(scrollDiv = false){
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
    if(scrollDiv == true){
        menu.style.transform = "translate(100%)";
        burgerMenu[0].style.position = "absolute";
        checkbox.checked = false;
    }
}

function scrollToDiv(location, pageURL = null){

    if(pageURL == null){
        document.getElementById(location).scrollIntoView({behavior: "smooth", block: "center"});
    } //On correct page
    else{
        window.location.href = '/index' + '#' + location;
       // document.getElementById(location).scrollIntoView({behavior: "smooth", block: "center"});
    }
    burgerMenu(true)
}

function changeKeyWord(){
    var keyWord = document.getElementById("changingWord");
    console.log(keyWord.innerHTML);

    setInterval(function(){
        switch(keyWord.innerHTML){
            case "Sheeting":
                keyWord.innerHTML = "Roofing";
                break;
            case "Roofing":
                keyWord.innerHTML = "Siding";
                break;
            case "Siding":
                keyWord.innerHTML = "Decks";
                break;
            case "Decks":
                keyWord.innerHTML = "Demolition";
                break;
            case "Demolition":
                keyWord.innerHTML = "Fencing";
                break;
            case "Fencing":
                keyWord.innerHTML = "Cleanup";
                break;
            case "Cleanup":
                keyWord.innerHTML = "Concrete";
                break;
            case "Concrete":
                keyWord.innerHTML = "Craftmanship";
                break;
        }



    }, 450)



}



function changeServiceIndex(direction){
    var currentIndex = getCurrentIndex("services")
    var scrollContainer = document.getElementById("cardContainer");
    cards = scrollContainer.getElementsByClassName("card");
    cardWidth = cards[0].offsetWidth + 100;
    //if at start of container and want to go back
    if(scrollContainer.scrollLeft == 0 && direction == -1){
        scrollContainer.scrollLeft += scrollContainer.scrollWidth;
    }
    // If at end of container and want to go forward
    else if(((scrollContainer.scrollLeft + scrollContainer.clientWidth) >= scrollContainer.scrollWidth - 100) && direction == 1){
        scrollContainer.scrollLeft -= scrollContainer.scrollWidth;
    }
    else{
        scrollContainer.scrollLeft += (cardWidth * direction);
    }
 
}


function autoScroll(){
    cardContainer = document.getElementById("cardContainer")
    if(window.screen.width >= 1550){
        if(cardContainer.scrollLeft + cardContainer.clientWidth >= cardContainer.scrollWidth){
           cardContainer.scrollLeft -= cardContainer.scrollWidth;
            return
        }
        cardContainer.scrollLeft += (document.getElementById("card0").offsetWidth + 100);
    }

   


}

function autoScrollInitiate(){
    var interval = setInterval(autoScroll, 5000)

    var arrows = document.getElementById("redFoxServices")
    for(let i = 0; i < arrows.length; i+=1){
        arrows[i].onmouseover = function() {
            clearInterval(interval);  // Stop auto-scrolling when the mouse is over the container
        }
    }

    document.getElementById("redFoxServices").onmouseover = function() {
        console.log("HOVER")
        clearInterval(interval);  // Stop auto-scrolling when the mouse is over the container
    }
    document.getElementById("redFoxServices").onmouseout = function() {
        interval = setInterval(autoScroll, 5000);  // Stop auto-scrolling when the mouse is over the container
    }
}





//MULTIUSE JS

function getCurrentIndex(div){

    if(div == "testimonials"){
        scrollContainer = document.getElementById("testimonialContainer");
        var indicies = scrollContainer.getElementsByClassName("testimonial");
    }
    else{
        scrollContainer = document.getElementById("cardContainer");
        var indicies = scrollContainer.getElementsByClassName("card");
    }




    var positionInContainer = scrollContainer.scrollLeft;
    var widthOfTestimonial = indicies[0].offsetWidth ; //all same width
    var currentIndex = Math.floor(positionInContainer / widthOfTestimonial);
    

    return currentIndex;
}

//TESTIMONIAL JS

document.getElementById("testimonialContainer").addEventListener("scroll", scrollEvent);

function changeTestIndex(direction){

    var currentIndex = getCurrentIndex("testimonials")
    //current spot +- 1 depending on button clicked
    nextIndex = currentIndex + direction;
    if(nextIndex == -1){
        nextIndex = 2;
    }
    else if(nextIndex == 3){
        nextIndex = 0;
    }
   
    var nextDestination = document.getElementById("test"+ (nextIndex)); 
    nextDestination.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});

}

//cant put this in the scroll event listener for some reason
function scrollEvent(){

    changeCircleColor(getCurrentIndex("testimonials"))
}
function changeCircleColor(currentIndex){
  
    for(i = 0; i <= 2; i+=1){
      
        var circle = document.getElementById("circle"+i)
     
        if(currentIndex == i){
            circle.style.backgroundColor = "#fafafa"
        }
        else{
            circle.style.backgroundColor = "#A8A8A8"
        }
    }
    if(currentIndex > 4){
        document.getElementById("circle4").style.backgroundColor = "#6aabe0";
    }
}



