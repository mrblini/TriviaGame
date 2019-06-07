//We need a click handler for the start button
//We need an array of quesitons which should be objects with properties related tot he questions
//We need a function that we can pass one question object to and it will render that in our view

// global var
// functions
// event listeners

// var currentIndex = -1;

var wins = 0;
var loses = 0;
var round = 0;


function hideAndShowBtn() {
    var hideMe = document.getElementById("hideMeBaby");
    if (hideMe.style.display === "none") {
        hideMe.style.display = "none"; // show
    } else {
        hideMe.style.display = "block"; // hide
    }
}


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
                'Russia', 
                'Croatia', 
                'France'
            ],
            answer: 'France',
            questionNum: 2
        },

        {
            question: "When was the first Worldcup ever?",
            choices: [
                '1898', 
                '1970', 
                '1930'
            ],
            answer: '1930',
            question: 3
        },

        {
            question: "Where was the first Worldcup?",
            choices: [
                'Uruguay', 
                'Argentina', 
                'Brazil'
            ],
            answer: 'Uruguay',
            question: 4
        }
];



var question = questionsLib[0].question;
document.getElementById("question").innerHTML = question;


for (var i = 0; i < questionsLib[round].choices.length; i++) {
    var choices = questionsLib[round].choices[i];
    document.getElementById("option" + i).innerHTML = "<br>" + choices;
}

$(".chooseMe").click(function () {
    console.log(this)
    console.log(this.elementById)
});


 
// function displayQuestions(currentIndex) {
//     //Clear whatever is in inner-container
//     console.log(questionsLib[i].question);
//     var currentQuestion = examples[currentIndex + 1];

//     if (currentQuestion){
//         //Inside here we know we are not out of bounds on the array
//         //We woudl want to now render our question template of html
//     }
// }


// $('#start').on('click', function(){
//     displayQuestions();
// });





// __________________________________________ TIMER:
// when 'start' button clicked, display 30 sec timer

// when 30 sec timer ends, if wrong answer selected or nothing selected, loses++, display you lost and the right answer
// __________________________________________ QUESTIONS:
// displayQuestions() -> display question 1 of the question's array

// displayAnswers()

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






















