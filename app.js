
var conditions = {
    1: [2, 4],
    2: [3, 5],
    3: [4, 1],
    4: [5, 2],
    5: [1, 3]
}
var standardConditions = {
    1: 2,
    2: 3,
    3: 1
}
var winAlerts = {
    playerWins: 'You are Victorious!',
    computerWins: 'The computer has defeated you... Try again?',
    draw: 'Looks like a draw.'
}
function computerChoice() {
    int = Math.ceil(Math.random() * 5)
    document.getElementById(int).classList.add("computer-pressed-btn")
    return int
}
function victor(inp1, inp2) {
    //debugger

    let inpWinConditions = conditions[inp1]
    if (inp1 == inp2) {
        return 'draw'
    }
    if (inpWinConditions.includes(inp2)) {
        return 'playerWins'
    } else {
        return 'computerWins'
    }
}

function drawButtons(mode) {

}

function play(playerChoice) {
    document.getElementById(playerChoice).classList.add("player-pressed-btn")
    Number(playerChoice)
    outcome = victor(playerChoice, computerChoice())



    document.getElementById("output").innerText = winAlerts[outcome]

}
