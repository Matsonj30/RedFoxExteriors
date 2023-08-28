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


document.getElementById("imageContainer").addEventListener("scroll", scrollEvent);
console.log(document.getElementById("imageContainer"))

function changeIndex(direction){

    var currentIndex = getCurrentIndex()
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
function getCurrentIndex(){
    scrollContainer = document.getElementById("imageContainer");
    var indicies = scrollContainer.getElementsByClassName("testimonial");

    var positionInContainer = scrollContainer.scrollLeft;
    var widthOfTestimonial = indicies[0].offsetWidth; //all same width
    var currentIndex = Math.floor(positionInContainer / widthOfTestimonial);
    //If you add too much padding, it may get the wrong index if you add a lot of elements

    return currentIndex;
}

//cant put this in the scroll event listener for some reason
function scrollEvent(){

    changeCircleColor(getCurrentIndex())
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
