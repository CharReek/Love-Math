// wait for the page to finish loading before running the game
// get the button element and add event listner

document.addEventListener("DOMContentLoaded", function(){
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked Sumbit!");
            } else{
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
})

/**
 * the main game 'loop', called when script if first loaded
 * and after the users answer has been processed
 */
function runGame(){
let numb1 = Math.floor(Math.random() *25) +1;
let numb2 = Math.floor(Math.random() *25) +1;
}

function checkAnswer(){

}

function calculateCorrectAnswer(){

}
function incrementScore(){

}
function incrementWrongAnswer(){

}
function displayAdditionQuestion(){

}
function displaySubtractQuestion(){
    
}
function displayMutiplyQuestion(){
    
}