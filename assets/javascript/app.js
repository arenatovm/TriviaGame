
var card = $("#quiz-area");
var countStartNumber = 30;
var question = [{
    question: "How many earths can fits in the sun?",
    answers: ["600 earths", "950 earths", "1200 earths", "1.3M earths"],
    correctAnswer: "1.3M earths"
    // image: link to image
}, {
    question: "What is the capital city of Belize?",
    answers: ["Andorra", "Managua", "Belmopan", "Montgomey"],
    correctAnswer: "Belmopan"
    // image: link to image
},{
    question: "What is the highest mountain in North America?",
    answers: ["Acconcagua", "Huascaran", "Denali", "Pikes Peak"],
    correctAnswer: "Denali"
// image: link to image
}, {
    question: "Who is the current president of India?",
    answers: ["Modi", "Putin", "Merkel", "Yunus"],
    correctAnswer: "Modi"
// image: link to image
}, {
    question: "Where is original the potato?",
    answers: ["Mexico", "France", "South Africa", "Peru"],
    correctAnswer: "Peru"
// image: link to image
}, {
    question: "What country's surface is bigger than Pluto?",
    answers: ["China", "United States", "Russia", "Australia"],
    correctAnswer: "Russia"
// image: link to image
}, {
    question: "Who invented gravity?",
    answers: ["Isaac Newton", "Albert Eistein", "Maxell", "No way Jose, it was there already"],
    correctAnswer: "No way Jose, it was there already"
// image: link to image
}, {
    question: "Who was the first woman on space?",
    answers: ["Frida Kalho", "Valentina Tereshkova", "Sophia Loren", "Laika Putin"],
    correctAnswer: "Valentina Tereshkova"
// image: link to image
}, {
    question: "Who was the only person winning two Nobel Prizes in two different categories?",
    answers: ["Valentina Tereshkova", "Ayn Rand", "Marie Curie", "Richard Feynman"],
    correctAnswer: "Marie Curie"
// image: link to image
}, {
    question: "What country is inside of South Africa?",
    answers: ["Uganda", "Leshoto", "Niger", "Somalia"],
    correctAnswer: "Leshoto"
// image: link to image
}
]
// a variable to hold the set interval
var timer;

var game = {
    questions: questions,
    currentQuestion: 0,
    counter: countStartNumber,
    correct: 0,
    incorrect: 0,

    countdown: function(){
        //decrement counter
        //use jquery to put dinamically
        //put logic onto the page
        //if statement
        //if time is up, run time up function
    },
    loadQuestion: function(){
        //set timer
        //timer = setInterval(game.countdown,1000)
        //dinamically add questiion into the card variable
        // hint: card.html ("<h2>" +"</h2>")
        //for loop to run through the question (add dinamically buttons with answers options)
    },
    nextQuestion: function(){
        // set the counter
        //game.counter = contStartNumber
        //use jquery to change the text of the game counter(timer)
        //increment the currtenQuestion by one
        //call the loadQuestion function
    },
    timeUp: function(){
        //clearInterval(timer)
        //use jquery to change the text of the game counter
        //dinamically add out the time to the card
        //append the Correct answer to the card
        //append image/gif to the card
    },
    result: function(){
        //clearInterval(timer)
        //dinamically add html to let them know of the results
        //use jquery to add html of game.counter to the id of the counter-number
        //add how many correct answers they got
        //add how many incorrrect answers they got
        //add how many unanswered
        //add a star over button
    },
    clicked: function(){
        //clearInterval (timer)
        //if/else statement for when an aswer is clicked
        //    if correct run answeredCorrectly() function
        //     else run answeredIncorrectly() function
    },
    answeredIncorrectly: function(){
        //add a point to the incorrect column
        //          clearInterval(timer)
        //          dinamically add htmk to let them know they are wrong
        //          add the right answer
        //          add the image
        //          if/else statment
        //              if no more question wait there seconds then show results
        //              else wait three seconds and show next question
    },
    answeredCorrectly: function(){
        //add a point to the incorrect column
        //          clearInterval(timer)
        //          dinamically add htmk to let them know they are wrong
        //          add the right answer
        //          add the image
        //          if/else statment
        //              if no more question wait there seconds then show results
        //              else wait three seconds and show next question
    }
// create click events
// start button
$(document).on("click", "#start", function () {
    $("#sub-wrapper").prepend("<h2>Time Remaining: <span id="counter-number">30</span>Seconds</h2>");
    





})