console.log("This is a rock paper scissros game")

let options = document.querySelectorAll(".option")
let compScoring = document.querySelector(".scoringComp")
let userScoring = document.querySelector(".scoringUser")
let announce = document.querySelector(".announcement")
let reset = document.querySelector(".resetgamebtn")
let resetGame = document.querySelector("#resetgamebtn")
let userScore = 0
let compScore = 0


resetGame.addEventListener(("click"), () => {
    userScore = 0;
    compScore = 0;
    announce.classList.add("hidden");
    userScoring.innerText = userScore;
    compScoring.innerText = compScore;
})

const genCompChoice = () => {
    let gameArr = ["rock", "paper", "scissors"];
    let randNum = Math.floor(Math.random() * 3)
    return gameArr[randNum];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin === true) {
        userScore++;
        announce.classList.remove("hidden")
        announce.innerText = `Congratulations, Your ${userChoice} beats ${compChoice}.`
        announce.style.backgroundColor = "green";
        userScoring.innerText = userScore;
    } else {
        compScore++;
        announce.classList.remove("hidden")
        announce.innerText = `Oops, Comp beats your ${userChoice} with ${compChoice}.`
        announce.style.backgroundColor = "red";
        compScoring.innerText = compScore;
    }
}

const playGame = (userChoice) => {
    let compChoice = genCompChoice();
    if (userChoice === compChoice) {
        announce.innerText = "This chance was draw, try again.";
        announce.style.backgroundColor = "#081b31";
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

options.forEach((option) => {
    option.addEventListener("click", () => {
        const userChoice = option.getAttribute("id");
        playGame(userChoice);
    })
});