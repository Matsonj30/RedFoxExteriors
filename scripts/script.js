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



function changeServiceIndex(direction){
    var currentIndex = getCurrentIndex("services")

  //  console.log(currentIndex)
    nextIndex = currentIndex + direction
    if(nextIndex == -1){
        nextIndex = 5;
    }
    else if(nextIndex == 4){
        if(direction == 1){
            nextIndex = 5
        }
        else{
            nextIndex = 3
        }
    }

    else if(nextIndex == 6){
  
        nextIndex = 0;
    }
   
    var nextDestination = document.getElementById("card"+ (nextIndex)); 
    nextDestination.scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
}


function autoScroll(){
    cardContainer = document.getElementById("cardContainer")
    if(window.screen.width >= 1550){
        if(cardContainer.scrollLeft + cardContainer.clientWidth >= cardContainer.scrollWidth){
            document.getElementById("card0").scrollIntoView({behavior: "smooth", block: "nearest", inline: "start"});
            console.log("End?")
            return
        }
        cardContainer.scrollLeft += (document.getElementById("card0").offsetWidth);
    }

   


}

function autoScrollInitiate(){
    var interval = setInterval(autoScroll, 4000)

    var arrows = document.getElementById("redFoxServices")
    for(let i = 0; i < arrows.length; i+=1){
        arrows[i].onmouseover = function() {
            clearInterval(interval);  // Stop auto-scrolling when the mouse is over the container
        }
    }


    document.getElementById("redFoxServices").onmouseover = function() {
        clearInterval(interval);  // Stop auto-scrolling when the mouse is over the container
    }
    document.getElementById("redFoxServices").onmouseout = function() {
        interval = setInterval(autoScroll, 4000);  // Stop auto-scrolling when the mouse is over the container
    }
}

autoScrollInitiate()



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
    var widthOfTestimonial = indicies[0].offsetWidth; //all same width

    var currentIndex = Math.floor(positionInContainer / widthOfTestimonial);
    //If you add too much padding, it may get the wrong index if you add a lot of elements

    return currentIndex;
}



//TESTIMONIAL JS

document.getElementById("testimonialContainer").addEventListener("scroll", scrollEvent);
console.log(document.getElementById("imageContainer"))

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
