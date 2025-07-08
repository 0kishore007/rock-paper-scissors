
console.log("COME ON LETS PLAY ROCK - PAPER - SCISSORS")

//COMPUTER CHOICE

function getComputerChoice(max){
    let choice = ( Math.floor(Math.random() * max))
    if(choice == 0){
        choice = "ROCK"
    }
    else if(choice == 1){
        choice = "PAPER"
    }
    else if(choice == 2){
        choice = "SCISSORS"
    }
    console.log("BOT CHOICE : " + choice)

    return choice
}
    // let computerChoice = getComputerChoice(3)
    
    


    // HUMAN CHOICE

   function getHumanChoice(){
        let value = prompt("Enter your Choice : ").toUpperCase()
    if(value == "ROCK"){
        console.log("YOUR CHOICE : "+ value)
    }
    else if(value == "PAPER"){
        console.log("YOUR CHOICE : "+ value)
    }
    else if(value == "SCISSORS"){
            console.log("YOUR CHOICE : "+ value)
    }
        return value
    }
    
   

    let humanScore = 0
    let computerScore = 0
    let draw = 0

    //PLAY ROUND FUNCTION

    function playRound(humanChoice, computerChoice){
        if(humanChoice != computerChoice){
            if(humanChoice == "ROCK" & computerChoice == "SCISSORS"){
                    console.log("YOU WIN! "+ humanChoice + " BEATS "+ computerChoice + ".")
                    humanScore++
             }    
            else if(humanChoice == "ROCK" & computerChoice == "PAPER"){
                    console.log("YOU LOSE! "+ humanChoice + " CANNOT BEAT "+ computerChoice + ".")
                    computerScore++
            }
            else if(humanChoice == "PAPER" & computerChoice == "SCISSORS"){
                    console.log("YOU LOSE! "+ humanChoice + " CANNOT BEAT "+ computerChoice + ".")
                    computerScore++
            }
            else if(humanChoice == "PAPER" & computerChoice == "ROCK"){
                    console.log("YOU WIN! "+ humanChoice + " BEATS "+ computerChoice + ".")
                    humanScore++
            }
            else if(humanChoice == "SCISSORS" & computerChoice == "PAPER"){
                    console.log("YOU WIN! "+ humanChoice + " BEATS "+ computerChoice + ".")
                    humanScore++
            }
            else if(humanChoice == "SCISSORS" & computerChoice == "ROCK"){
                    console.log("YOU LOSE! "+ humanChoice + " CANNOT BEAT "+ computerChoice + ".")
                    computerScore++
            }
        }
        else {
            console.log("-DRAW-")
            draw++
        }
       
    }

    //calling the playgame function
    playGame()

        function playGame(){
        if(confirm("Are you ready?")){
                console.log("Let's go!!")
            }
        else{
                console.log("Oh no! You have missed a nice game.")
            }
        for (i = 1; i <=5; i++){
            
            console.log("ROUND " + i)
            let humanSelection = getHumanChoice()
            let computerSelection = getComputerChoice(3)
            playRound(humanSelection, computerSelection)
        }
        console.log("YOUR SCORE : " + humanScore)
        console.log("OPPONENT SCORE : " + computerScore)
        console.log("TOTAL DRAWS : "+draw)
        
        if(humanScore == computerScore){
            console.log("MATCH DRAW.")
        }
        else if(humanScore != computerScore){
            if(humanScore > computerScore){
                console.log("YEAH! YOU WON THE MATCH")
            }
            else{
                console.log("OOPS! YOU LOSE THE MATCH.")
               
            }
        }
        if(confirm("Wanna Challenge Once more?")){
            console.clear()
            playGame()
        }
        else{
            console.log("Nice playing with you, see you later?")
        }
        
    }
