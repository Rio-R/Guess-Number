// Define varriable
let start = document.querySelector('#start_button');





// Define Event
start.addEventListener('click', function(){
    let randomNumber = Math.floor(Math.random()*10 + 1);
    let chance = 3;
    
    console.log(randomNumber);
    while (chance > 0) {
        let guess = parseInt(prompt("Guess a Number"));
        if(randomNumber == guess){
            alert("You Win");
            alert(`Guess The Number In ${3 - chance + 1} Try `)
            break;
        }
        else if (randomNumber < guess){
            alert(`Try Smaller Number | Chance Left: ${chance - 1}`)
        }
        else if (randomNumber > guess){
            alert(`Try Larger Number | Chance Left: ${chance - 1}`)
        }

        chance--;
    }
    if (chance == 0){
        alert(`You Lose | Correct Number Is ${randomNumber}`);
    }
});





















