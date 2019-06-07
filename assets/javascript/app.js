
// global var
// functions
// event listeners

// -------------------------------------------- GLOBAL VARIABLES
var wins = 0;
var loses = 0;
var userChoices = "";
var round = 0;

var time = 30;
var timerHandle;
var running = false;

var hideMe = document.getElementById("hideMeBaby");
var hideTheButton = document.getElementById("hideButton");

// -------------------------------------------- QUESTIONS OBJECT
var questionsLib = [
        {
            question: "What's the best soccer team in Spain?",
            choices: [
                'Real Madrid', 
                'Barca', 
                'Atletico de Madrid'
            ],
            answer: 'Real Madrid',
            questionNum:  1
        },

        {
            question: 'Who won the 2018 Worldcup?',
            choices: [
                'France', 
                'Croatia', 
                'Russia'
            ],
            answer: 'France',
            questionNum: 2
        },

        {
            question: "When was the first Worldcup ever?",
            choices: [
                '1930', 
                '1970', 
                '1948'
            ],
            answer: '1930',
            questionNum: 3
        },

        {
            question: "Where was the first Worldcup?",
            choices: [
                'Uruguay', 
                'Argentina', 
                'Brazil'
            ],
            answer: 'Uruguay',
            questionNum: 4
        }
];


// -------------------------------------------- START BUTTON
function hideAndShowBtn() {
    console.log(hideMe.style.display)
    if (hideMe.style.display == "none") {
        hideMe.style.display = "none"; // show
    } else {
        hideMe.style.display = "block"; // hide
    }
    console.log("round: " + round);
    hideTheButton.style.display = "none";
    myTimer();
    run();
}


// -------------------------------------------- RUN
function run() {
    console.log("inside round: " + round)
    
    // --------- GAME OVER
    if (round === 4) {
        hideMe.style.display = "none";
        gameOver.style.display = "block";

        var scoreScreen = "You won: " + wins + " times, and lost: " + loses + " times.";
        document.getElementById("gameOver").innerHTML = scoreScreen + "<br> You chose: " + userChoices + "<br> Right answers -> Q1: Real Madrid, Q2: France, Q3: 1930, Q4: Uruguay.";
    }
    // --------- PLAY
    else {
        var question = questionsLib[round].question;
        document.getElementById("question").innerHTML = question; // --- DISPLAY QUESTION

        // -------- OPTIONS
        for (var i = 0; i < questionsLib[round].choices.length; i++) {
            var choices = questionsLib[round].choices[i];
            document.getElementById("option" + i).innerHTML = "<br>" + choices;
        }
    }
}
 
// -------------------------------------------- CHOOSE OPTIONS:
$(document).on("click", ".chooseMe", function () {

    

    var userGuess = $($(this).children()[0]).text(); // gets the html text inside button

    userChoices += userGuess + " ";

    console.log("answer: " + questionsLib[round].answer)

    if (userGuess === questionsLib[round].answer) {
        wins++;
    }
    else {
        loses++;
    }
    round++;
    run();
    // console.log($(this).data("id"))
    // console.log($(this).attr("id"));
})


// ======---------------------------------------> TIMER
function start() {
    if (!running) {
        timerHandle = setInterval(decrement, 1000);
        running = true;
    }
}

function decrement() {
    time--;
    console.log(time);
    if (time <= 0) {
        stop();
        // or do something else 
    }
}

function stop() {
    clearInterval(timerHandle);
    running = false;
}

function reset() {
    time = 30;
}




// _________________________________________ PROGRAM DESIGN: 

// __________________________________________ TIMER:
// when 'start' button clicked, display 30 sec timer

// when 30 sec timer ends, if wrong answer selected or nothing selected, loses++, display you lost and the right answer
// __________________________________________ QUESTIONS:
// displayQuestions() -> display question 1 of the question's array

// displayAnswers(

// __________________________________________ ANSWERS:
// displayChosenAnswer(chosenAnswer) - > 'you chose: ' + chosenAnswer
// displayRightAnswer(rightAnswer) - > 'right answer: ' + rightAnswer

// __________________________________________ USER:
// on.button 'start'.click displayQuestions()

// on option clicked, check if option matches answer -> add right or wrong to score, display win or lose screen.

// __________________________________________ FINAL SCORE:
// wins = 0
// loses = 0
// displayFinalScore()