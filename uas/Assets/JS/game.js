var playing = false;
var score;
var level;
var correctAnswer;
var playerName;

var questions = [
    // Pertanyaan Level 1
    [
        { questionImg: "Assets/Img/question1.png", answers: [12, 15, 18, 20], correctAnswer: 15 }
    ],
    // Pertanyaan Level 2
    [
        { questionImg: "Assets/Img/question2.png", answers: [10, 20, 30, 40], correctAnswer: 20 }
    ],
    // Pertanyaan Level 3
    [
        { questionImg: "Assets/Img/question3.png", answers: [7, 8, 5, 6], correctAnswer: 5 }
    ],
    // Pertanyaan Level 4
    [
        { questionImg: "Assets/Img/question4.png", answers: [6, 9, 7, 11], correctAnswer: 6 }
    ],
    // Pertanyaan Level 5
    [
        { questionImg: "Assets/Img/question5.png", answers: [14, 12, 11, 13], correctAnswer: 13 }
    ]
];

function submitName() {
    playerName = document.getElementById("playerName").value;
    if (playerName.trim() !== "") {
        document.getElementById("playerNameDisplay").innerHTML = playerName;
        document.getElementById("nameInputContainer").style.display = "none";
        document.getElementById("container").style.display = "block";
    } else {
        alert("Please enter your name");
    }
}

function startResetGame() {
    if (playing) {
        location.reload(); // Memuat ulang halaman
    } else {
        playing = true;
        score = 0;
        level = 1;
        document.getElementById("scorevalue").innerHTML = score;
        document.getElementById("levelvalue").innerHTML = level;
        document.getElementById("startreset").innerHTML = "Reset Game";
        hide("gameOver");
        show("score");
        show("level");
        show("choices");
        generateQA();
    }
}

function checkAnswer(boxNumber) {
    if (playing) {
        var selectedAnswer = document.getElementById("box" + boxNumber).innerHTML;
        if (parseInt(selectedAnswer) === correctAnswer) {
            score += 2; // Tambahkan skor 2 untuk setiap jawaban yang benar
            document.getElementById("scorevalue").innerHTML = score;
            hide("wrong");
            show("correct");
            setTimeout(function () {
                hide("correct");
            }, 1000);

            level++;
            document.getElementById("levelvalue").innerHTML = level;
            if (level > 5) {
                endGame();
            } else {
                generateQA();
            }
        } else {
            hide("correct");
            show("wrong");
            setTimeout(function () {
                hide("wrong");
            }, 1000);
        }
    }
}

function generateQA() {
    var currentQuestions = questions[level - 1]; // Ambil array pertanyaan untuk level saat ini
    var randomIndex = Math.floor(Math.random() * currentQuestions.length);
    var currentQuestion = currentQuestions[randomIndex];

    // Atur gambar pertanyaan
    var questionImgElement = document.getElementById("questionImg");
    questionImgElement.src = currentQuestion.questionImg;

    correctAnswer = currentQuestion.correctAnswer;
    var answers = currentQuestion.answers.slice(); // Buat salinan array jawaban

    // Tetapkan jawaban ke kotak dalam urutan tetap
    for (var i = 1; i <= 4; i++) {
        document.getElementById("box" + i).innerHTML = answers[i - 1];
    }
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function restartGame() {
    location.reload();
}

function endGame() {
    hide("score");
    hide("level");
    hide("question");
    hide("choices");
    show("gameOver");
    document.getElementById("finalscore").innerHTML = score;
}
