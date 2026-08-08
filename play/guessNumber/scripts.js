let thatNumber = Math.floor(Math.random() * 100)

let userGuess = ""

let numArea = document.getElementById("numArea")
let beOnArea = ""
const clickSound = new Audio("./sounds/click.ogg");
const click2Sound = new Audio("./sounds/click2.wav");
const winSound = new Audio("./sounds/win.ogg");
const loseSound = new Audio("./sounds/lose.ogg");
const reloadSound = new Audio("./sounds/reload.ogg");
function playSound(name) {
    try {
        name.play();
    } catch(err) {
        console.log("Cannot find" + name)
    }
    
}
function updateArea(wh) {
    beOnArea += wh
    
    if (beOnArea.length == 20) {
        beOnArea = "خیلی عدد زیادی وارد کردی!"
        setTimeout(function() {
            beOnArea = ""
        }, 1000)
    }
    
    numArea.textContent = beOnArea  // load 
    playSound(clickSound)
}

function clickedZero() {
    updateArea("0")
}
function clickedOne() {
    updateArea("1")
}
function clickedTwo() {
    updateArea("2")
}
function clickedThree() {
    updateArea("3")
}
function clickedFour() {
    updateArea("4")
}
function clickedFive(){
    updateArea("5")
}
function clickedSix() {
    updateArea("6")
}
function clickedSeven() {
    updateArea("7")
}
function clickedEight() {
    updateArea("8")
}
function clickedNine() {
    updateArea("9")
}
function clickedClear() {
    beOnArea = ""
    numArea.textContent = ""
    playSound(click2Sound)
}
function clickedRemoveLast() {
    beOnAreaCH = beOnArea.length - 1
    beOnArea = beOnArea.slice(0, -1)
    numArea.textContent = beOnArea + ""
    playSound(click2Sound)
}
let mode = ""
let chances = 10
var isPlayerWin = false;
var isPlayerLose = false;
let hintArea = document.getElementById("hintArea")
function checkUserInput() {
    chances -= 1
    let beOnAreaint = parseInt(beOnArea)
    if(chances < 0) {
        isPlayerLose = true
        hintArea.style.color = "red"
        document.body.style.backgroundImage =
    "linear-gradient(45deg, white, red)";
        
        mode = "متاستفم ولی باختی:/"
        title.textContent = "باخت بد!"
        setTimeout(function() {
            title.style.color = "black"
        }, 1000)
        
        document.getElementById("hintArea").textContent = mode
        playSound(loseSound)
        return
        
    } else if(beOnAreaint == thatNumber) {
        hintArea.style.color = "skyblue"
        mode = "آفرین بردی! عدد " + thatNumber + " بود."
        isPlayerWin = true;
        playSound(winSound)
        
    } else if (beOnAreaint < thatNumber) {
        mode = "بیشتر از " + beOnArea + " تاست! فقط " + chances + " تا شانس داری"
    } else if(beOnAreaint > thatNumber) {
        mode = "کمتر از " + beOnArea + "تاست! فقط  " + chances + " تا شانس داری"
    } else if(beOnAreaint === "") {
        mode = "وا! خب یه چیزی بنویس"
    
    } else {
        mode = "چی نوشتی؟!"
        
    }
    document.getElementById("hintArea").textContent = mode
    playSound(click2Sound)
}
function resetGame() {
    playSound(reloadSound)
    location.reload()  // reload page func
    
}
let title = document.getElementById("title")
function clickedResetPage() {
    if(isPlayerWin || isPlayerLose) {
        title.textContent = "درحال ری‌لود..."
        setTimeout(resetGame, 1000)
    } else {
        console.log("Cannot reset when youre not losing or winning")
    }
}
