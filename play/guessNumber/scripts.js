let thatNumber = Math.floor(Math.random() * 100)

let userGuess = ""

let numArea = document.getElementById("numArea")
let beOnArea = ""

function updateArea(wh) {
    beOnArea += wh
    
    if (beOnArea.length == 20) {
        beOnArea = "خیلی عدد زیادی وارد کردی!"
        setTimeout(function() {
            beOnArea = ""
        }, 1000)
    }
    numArea.textContent = beOnArea  // load 
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
}
function clickedRemoveLast() {
    beOnAreaCH = beOnArea.length - 1
    beOnArea = beOnArea.slice(0, -1)
    numArea.textContent = beOnArea + ""
}
let mode = ""
let chances = 10
var isPlayerWin = false;
var isPlayerLose = false;
function checkUserInput() {
    chances -= 1
    let beOnAreaint = parseInt(beOnArea)
    if(chances < 0) {
        isPlayerLose = true
        mode = "متاستفم ولی باختی:/"
        
        document.getElementById("hintArea").textContent = mode
        return
        
    } else if(beOnAreaint == thatNumber) {
        
        mode = "آفرین بردی! عدد " + thatNumber + " بود."
        isPlayerWin = true;
        
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
}
function resetGame() {
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
