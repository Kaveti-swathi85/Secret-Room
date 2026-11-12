
const challenges = [

    {
        title: "LEVEL 1 - SECRET MESSAGE",

        description:
        "Decode this Base64 message to unlock Door 1.",

        puzzle: "Q09ERVNFQ1JFVA==",

        answer: "CODESECRET",

        hint: "Use Base64 decoding."
    },

    {
        title: "LEVEL 2 - BINARY MYSTERY",

        description:
        "Convert this binary code into readable text.",

        puzzle: "01010011 01010100 01000001 01010010",

        answer: "STAR",

        hint: "Each group of 8 bits represents a character."
    },

    {
        title: "LEVEL 3 - CAESAR CIPHER",

        description:
        "This message has been shifted by 3 letters.",

        puzzle: "ORFN",

        answer: "LOCK",

        hint: "Move every letter 3 positions backward."
    },

    {
        title: "LEVEL 4 - PASSWORD VAULT",

        description:
        "I have keys but no locks. I have space but no room. What am I?",

        puzzle: "SOLVE THE RIDDLE",

        answer: "KEYBOARD",

        hint: "You use it to type."
    },

    {
        title: "LEVEL 5 - FINAL DOOR",

        description:
        "The final password is the song's theme plus the year 2026.",

        puzzle: "TWINKLE + TWINKLE + LITTLE + STAR",

        answer: "STAR2026",

        hint: "Think of Twinkle Twinkle Little Star."
    }

];

let current = 0;

let time = 1200;

let timerInterval;


function startGame() {

    document.getElementById("welcome")
    .classList.add("hidden");

    document.getElementById("game")
    .classList.remove("hidden");

    loadLevel();

    timerInterval = setInterval(function() {

        time--;

        let minutes = Math.floor(time / 60);

        let seconds = time % 60;

        document.getElementById("timer").innerText =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");

        if (time <= 0) {

            clearInterval(timerInterval);

            document.getElementById("game")
            .classList.add("hidden");

            document.getElementById("failed")
            .classList.remove("hidden");

        }

    }, 1000);

}


function loadLevel() {

    const level = challenges[current];

    document.getElementById("title").innerText =
    level.title;

    document.getElementById("description").innerText =
    level.description;

    document.getElementById("puzzle").innerText =
    level.puzzle;

    document.getElementById("progress").innerText =
    "LEVEL " + (current + 1) + " / 5";

    document.getElementById("answer").value = "";

    document.getElementById("feedback").innerText = "";

}


function checkAnswer() {

    const userAnswer =
    document.getElementById("answer")
    .value.trim().toUpperCase();

    if (userAnswer === challenges[current].answer) {

        document.getElementById("feedback").innerText =
        "Correct! Door unlocked!";

        current++;

        setTimeout(function() {

            if (current < challenges.length) {

                loadLevel();

            } else {

                clearInterval(timerInterval);

                document.getElementById("game")
                .classList.add("hidden");

                document.getElementById("success")
                .classList.remove("hidden");

            }

        }, 1000);

    } else {

        document.getElementById("feedback").innerText =
        "Wrong code! Hint: " +
        challenges[current].hint;

    }

}


// ENTER KEY SUPPORT

document.getElementById("answer")
.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        checkAnswer();

    }

});
