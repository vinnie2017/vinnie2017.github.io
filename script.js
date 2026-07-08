/* ==========================================
   TENSE PUZZLE CHALLENGE
   script.js
========================================== */

/* ---------- START GAME ---------- */

function startGame() {

    let playerName = document.getElementById("playerName").value.trim();

    if (playerName === "") {
        alert("Please enter your name.");
        return;
    }

    localStorage.setItem("playerName", playerName);
    localStorage.setItem("score", 0);

    window.location.href = "puzzle1.html";
}

/* ---------- DISPLAY PLAYER NAME ---------- */

function loadPlayerName() {

    let player = localStorage.getItem("playerName") || "Player";

    let display = document.getElementById("displayName");

    if (display) {
        display.innerHTML = player;
    }

}

/* ---------- UPDATE PROGRESS BAR ---------- */

function updateProgress(number) {

    let fill = document.getElementById("progressFill");

    if (fill) {

        let percentage = (number / 12) * 100;

        fill.style.width = percentage + "%";

    }

}

/* ---------- CHECK ANSWER ---------- */

function checkAnswer(button, correctAnswer, nextPage) {

    let buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(function(btn){

        btn.disabled = true;

        if(btn.innerHTML.trim() === correctAnswer){

            btn.classList.add("correct");

        }

    });

    let result = document.getElementById("result");

    if(button.innerHTML.trim() === correctAnswer){

        button.classList.add("correct");

        result.innerHTML = "✅ Correct Answer!";

        let score = Number(localStorage.getItem("score")) || 0;

        localStorage.setItem("score", score + 1);

    }

    else{

        button.classList.add("wrong");

        result.innerHTML =
        "❌ Wrong Answer!<br><br>Correct Answer:<br><strong>" +
        correctAnswer +
        "</strong>";

    }

    let next = document.getElementById("nextButton");

    next.style.display = "inline-block";

    next.onclick = function(){

        window.location.href = nextPage;

    };

}

/* ---------- SHOW FINAL RESULT ---------- */

function showResult() {

    let player = localStorage.getItem("playerName") || "Player";

    let score = localStorage.getItem("score") || 0;

    let finalName = document.getElementById("finalName");

    let finalScore = document.getElementById("finalScore");

    if(finalName){

        finalName.innerHTML = player;

    }

    if(finalScore){

        finalScore.innerHTML = score + " / 12";

    }

}

/* ---------- RESTART GAME ---------- */

function restartGame(){

    localStorage.removeItem("score");

    window.location.href = "index.html";

}

/* ---------- PAGE LOAD ---------- */

window.addEventListener("load", function(){

    loadPlayerName();

    showResult();

});
