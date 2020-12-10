
var lizardSpock = {
    conditions: {
        1: [2, 4],
        2: [3, 5],
        3: [4, 1],
        4: [5, 2],
        5: [1, 3]
    }, names: {
        Scissors: 1,
        Paper: 2,
        Rock: 3,
        Lizard: 4,
        Spock: 5
    },
    choiceCount: 5
}
var standard = {
    conditions: {
        1: [2],
        2: [3],
        3: [1]
    }, names: {
        Scissors: 1,
        Paper: 2,
        Rock: 3
    },
    choiceCount: 3
}
var winAlerts = {
    playerWins: 'You are Victorious!',
    computerWins: 'The computer has defeated you... pathetic...',
    draw: 'Looks like a draw.'
}

function computerChoice(mode) {
    int = Math.ceil(Math.random() * mode['choiceCount'])
    console.log(int);
    return int
}
function victor(inp1, inp2, mode) {
    //debugger

    let inpWinConditions = mode['conditions'][inp1]
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
    gameMode = mode
    console.log(gameMode)
    let buttonData = gameMode['names']
    let buttons = ''
    for (var buttonName in buttonData) {
        buttons +=

            `
    <div class="col-lg-4 col-xs-7 mt-5  flex-box bg-secondary" id="${(gameMode['names'][buttonName])}-div">
        <button type="button" class="cus-btn" id="${(gameMode['names'][buttonName])}" onclick="play(${(gameMode['names'][buttonName])})">${buttonName}</button>
    </div>
    `
    }
    console.log(buttons);
    document.getElementById("main-row").innerHTML = buttons
}

function shuffleButtons() {
    let id = String(computerChoice(gameMode)) + '-div'
    console.log(id);
    console.log(document.getElementById(id))
    let orderSetter = computerChoice(gameMode)

    document.getElementById(id).style.order = orderSetter
    console.log(document.getElementById(id))
    console.log(gameMode, 'from shufflebuttons with love');
}

function play(playerChoice) {

    document.getElementById(playerChoice).classList.add("player-pressed-btn")
    Number(playerChoice)
    console.log(gameMode, 'from within Play()');
    outcome = victor(playerChoice, computerChoice(gameMode), gameMode)
    setTimeout(() => {


        console.log(outcome, 'yea buddy')
        document.getElementById(int).classList.add("computer-pressed-btn")
    }, 500);

    console.log(outcome, 'yea buddy')
    document.getElementById("output").innerText = winAlerts[outcome]
    setTimeout(() => {
        drawButtons(gameMode)
        document.getElementById("output").innerText = null
    }, 2000);

}
var gameMode;
drawButtons(standard)