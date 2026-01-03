const yourimg = document.getElementById('yourimg');
const compimg = document.getElementById('compimg');

const choices = document.querySelectorAll('.choice');

const yScore = document.getElementById('h11');
const tScore = document.getElementById('h12');
const cScore = document.getElementById('h13');

const compChoose = document.getElementById('compChoose');
const youChoose = document.getElementById('youChoose');

const winStatus = document.getElementById('status');
const crushes = document.getElementById('crushes');

const winSound = document.getElementById('winSound');
winSound.volume = 0.7;
const clickSound = document.getElementById('clickSound');
clickSound.volume = 0.7;
const resetSound = document.getElementById('resetSound')
resetSound.volume = 0.8;

const options = ['stone', 'paper', 'scissors'];

let computerScore = 0;
let userScore = 0;
let ties = 0;

choices.forEach((image) => {
    image.addEventListener('click', () => {
        let userchoice = image.getAttribute('data-choice')
        playGame(userchoice)
        playSound(clickSound)
    })
})

function compchoice() {
    const randomindex = Math.floor(Math.random() * 3);
    return options[randomindex];

}

function playGame(userchoice) {
    const computerChoice = compchoice();
    console.log(computerChoice);
    console.log(userchoice);
    compChoose.textContent = "COMPUTER CHOOSE : " + computerChoice;
    youChoose.textContent = "YOU CHOOSE : " + userchoice
    yourimg.src = `assests/${userchoice}hand.png`
    compimg.src = `assests/${computerChoice}hand.png`


    if (userchoice == computerChoice) {
        ties++;
        console.log(ties);
        tScore.innerHTML = "Ties : " + ties;
        winStatus.textContent = "THE MATCH IS TIE";
        crushes.textContent = "Both chose the same !"

    }
    else if (userchoice == "stone" && computerChoice == "scissors" || userchoice == "scissors" && computerChoice == "paper" || userchoice == "paper" && computerChoice == "stone") {
        userScore++;
        yScore.textContent = "Your Score : " + userScore;
        winStatus.textContent = "YOU WON!"
        crushes.textContent = `${userchoice} Crushes ${computerChoice} !`;
        playSound(winSound);

    }
    else {
        computerScore++;
        cScore.textContent = "Computer Score : " + computerScore;
        winStatus.textContent = "YOU LOST IT!"
        crushes.textContent = ` ${computerChoice} Crushes ${userchoice} !`
    }
}

function reset() {
    if (userScore > computerScore) {
        alert(`🎉 You had more points!\nYou: ${userScore} | Computer: ${computerScore}`);
    }
    else if (userScore < computerScore) {
        alert(`😎 Computer scored more!\nYou: ${userScore} | Computer: ${computerScore}`);
    }
    else {
        alert(`🤝 It's a tie!\nYou: ${userScore} | Computer: ${computerScore}`);
    }
    ties = 0;
    userScore = 0;
    computerScore = 0;
    tScore.innerHTML = "Ties : 0 ";
    yScore.textContent = "Your Score : 0 ";
    cScore.textContent = "Computer Score : 0 ";
    playSound(resetSound)
}

function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}

