/* ===========================================
   TENSE PUZZLE CHALLENGE
   script.js
=========================================== */

/* ---------- START GAME ---------- */

function startGame() {

    let name = document.getElementById("playerName").value.trim();

    if (name === "") {
        alert("Please enter your name before starting.");
        return;
    }

    localStorage.setItem("playerName", name);
    localStorage.setItem("score", 0);

    window.location.href = "puzzle1.html";
}

/* ---------- DISPLAY PLAYER NAME ---------- */

function loadPlayerName() {

    let player = localStorage.getItem("playerName");

    if (document.getElementById("displayName")) {

        document.getElementById("displayName").innerHTML = player;

    }

}

/* ---------- PROGRESS BAR ---------- */

function updateProgress(currentPuzzle) {

    let percent = (currentPuzzle / 12) * 100;

    let bar = document.getElementById("progressFill");

    if (bar) {
        bar.style.width = percent + "%";
    }

}

/* ---------- CHECK ANSWER ---------- */

function checkAnswer(button, correctAnswer, nextPage) {

    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(function(btn){

        btn.disabled = true;

        if(btn.innerHTML === correctAnswer){

            btn.classList.add("correct");

        }

    });

    if(button.innerHTML === correctAnswer){

        button.classList.add("correct");

        document.getElementById("result").innerHTML =
        "✅ Correct Answer!";

        let score = Number(localStorage.getItem("score"));

        localStorage.setItem("score", score + 1);

    }

    else{

        button.classList.add("wrong");

        document.getElementById("result").innerHTML =
        "❌ Incorrect! Correct answer is : " + correctAnswer;

    }

    document.getElementById("nextButton").style.display="inline-block";

    document.getElementById("nextButton").onclick=function(){

        window.location.href = nextPage;

    };

}

/* ---------- CONGRATULATIONS PAGE ---------- */

function showResult(){

    let player = localStorage.getItem("playerName");

    let score = localStorage.getItem("score");

    if(document.getElementById("finalName")){

        document.getElementById("finalName").innerHTML = player;

    }

    if(document.getElementById("finalScore")){

        document.getElementById("finalScore").innerHTML =
        score + " / 12";

    }

}

/* ---------- RESTART GAME ---------- */

function restartGame(){

    localStorage.removeItem("score");

    window.location.href="index.html";

}

/* ---------- AUTO LOAD ---------- */

window.onload=function(){

    loadPlayerName();

    showResult();

};
