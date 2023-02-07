var initialSelection = document.querySelectorAll(".drum");
var numbers = initialSelection.length;

for(var i = 0; i < numbers; i++){
   initialSelection[i].addEventListener("click", function(){

    const sounds = this.textContent; //innerHtml didn't work
    startUp(sounds);
    animation(sounds);

}//end of function
)// end of event listener
};// end of loop
document.addEventListener("keydown", function(event){
  startUp(event.key);
  animation(event.key);
});


function startUp(key){
  switch (key) {
        case "w":
        var audioOne = new Audio('sounds/crash.mp3');
        audioOne.play();
        break;

        case "a":
        var audioTwo = new Audio('sounds/kick-bass.mp3');
        audioTwo.play();
        break;

        case "s":
        var audioThree = new Audio('sounds/snare.mp3');
        audioThree.play();
        break;

        case "d":
        var audioFour = new Audio('sounds/tom-1.mp3');
        audioFour.play();
        break;

        case "j":
        var audioFive = new Audio('sounds/tom-2.mp3');
        audioFive.play();
        break;

        case "k":
        var audioSix = new Audio('sounds/tom-3.mp3');
        audioSix.play();
        break;

        case "l":
        var audioSeven = new Audio('sounds/tom-4.mp3');
        audioSeven.play();
        break;


  }// end of switch
}


function animation(currentkey){
  var selector = document.querySelector("." + currentkey);
  selector.classList.add("pressed");
  setTimeout(function(){
    selector.classList.remove("pressed")
  }, 100);
}
