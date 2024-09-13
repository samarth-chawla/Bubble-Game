function makeBubble() {
    let bubble = ""

    for (let index = 0; index < 140; index++) {
        bubble += `<div class="bubble"> ${Math.ceil(Math.random() * 10)} </div>`
    }

    document.querySelector(".game").innerHTML = bubble
}
makeBubble()

var time = 60;
function timer() {
    var timeint = setInterval(() => {
        if (time > 0) {
            time--;
            document.querySelector("#time").textContent = time;
        }
        else {
            clearInterval(timeint);
            document.querySelector(".game").innerHTML = `<h1> Your Score = ${score}</h1>`

        }
    }, 1000);
}
timer()

let hit=0
function hitTarget(){
    hit = Math.ceil(Math.random() * 10)
    document.querySelector("#hit").textContent=hit
}
hitTarget()

let score=0
function scoreInc(){
    score = score + 10
}

document.querySelector(".game").addEventListener("click",(e)=>{
    var clicked = e.target.textContent.trim()
    if (time > 0){
        if(hit == clicked){
            scoreInc()
            document.querySelector("#score").textContent=score
            hitTarget()
            makeBubble()
            // game()
        }
    }else{
    document.querySelector(".game").innerHTML = `<h1> Your Score = ${score}</h1>`
    }
})
    
    
