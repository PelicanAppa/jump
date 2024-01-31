var character = document.getElementById("character")
var block = document.getElementById("block")
var score = 0

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate")
    }
    setTimeout(function() {
        character.classList.remove("animate")
    }, 500)
    score = score + 1
    console.log(score)
}

var checkDead = setInterval(function(){
    var characterTop = parseInt (window.getComputedStyle(character).getPropertyValue("top"))
    var blockLeft = parseInt (window.getComputedStyle(block).getPropertyValue("left"))
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none"
        block.style.display = "none"
        alert("Game Over - RELOAD TO RESTART (open console for score)")
        console.log("Score: " + score)
        score = 0
        console.log("Score has been reset")
    }
}, 10)