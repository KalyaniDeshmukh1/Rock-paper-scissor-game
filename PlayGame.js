let userScore=0;
let compScore=0;
const msg= document.querySelector("#msg");
const usersc=document.querySelector("#user-score");
const compsc= document.querySelector("#comp-score");
const choices=document.querySelectorAll(".choice");

const genCompChoice=() =>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame =() =>{
    msg.innerText="game was draw play again";
    msg.style.backgroundColor="#081b31";

}

const showWinner= (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        usersc.innerText=userScore;
        msg.innerText=`You Win... Your ${userChoice} bits ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compsc.innerText=compScore;
        msg.innerText=`You lose!! ${compChoice} bits your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}

const play = (userChoice) =>{
    console.log("user choice: ", userChoice)
    const compChoice= genCompChoice();
    console.log("computer choice: ", compChoice);

    if(userChoice===compChoice)
    {
        //draw game
        drawGame();
    }
    else{
        let userWin= true;
        if(userChoice==="rock")
        {
            userWin= compChoice==="paper" ? false:true;
        }
        else if(userChoice==="paper")
        {
            userWin= compChoice==="scissors" ? false:true;
        }
        else{
            userWin=compChoice==="rock" ? false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice= choice.getAttribute("id");
        play(userChoice);
    });
});