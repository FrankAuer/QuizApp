let questions = [

    {
        "question": " In welchem Jahr ist die Titanic auf ihrer Jungfernfahrt im Atlantik gesunken?",
        "answer_1": "1890",
        "answer_2": "1912",
        "answer_3": "1918",
        "answer_4": "2001",
        "right_answer": 2
    },
    {
        "question": " Wie heißt das größte Technologieunternehmen in Südkorea?",
        "answer_1": "Siemens",
        "answer_2": "AT&T",
        "answer_3": "Samsung",
        "answer_4": "Toshiba",
        "right_answer": 3
    },
    {
         "question": "Welcher mittlerweile berühmte Fernsehkoch begann im Alter von acht Jahren in der Kneipe seiner Eltern, 'The Cricketers', in Clavering, Essex, mit dem Kochen?",
         "answer_1": "James Oliver",
         "answer_2": "Oliver Twist",
         "answer_3": " David Backham ",
         "answer_4": "Jamie Oliver",
         "right_answer": 4
     },
     {
         "question": "Welches Metall wurde 1825 von Hans Christian Oersted entdeckt? ",
         "answer_1": "Aluminium ",
         "answer_2": "Messing",
         "answer_3": "Eisen",
         "answer_4": "Zinn",
         "right_answer": 1
     }/*,
     {
         "question": " Was ist die Hauptstadt von Portugal? ",
         "answer_1": "Madrid",
         "answer_2": "Porto",
         "answer_3": " Lissabon ",
         "answer_4": "Santiago",
         "right_answer": 3
     },
     {
         "question": "Wie viele Atemzüge nimmt der menschliche Körper täglich?",
         "answer_1": "2.000 täglich",
         "answer_2": "20.000 täglich",
         "answer_3": "200.000 täglich",
         "answer_4": "2.000.000 täglich",
         "right_answer": 2
     },
     {
         "question": "Wer war von 1841 bis 1846 Premierminister von Großbritannien?",
         "answer_1": "Max Mustermann",
         "answer_2": "Jamie Oliver",
         "answer_3": "Windston Churchhill",
         "answer_4": "Robert Peel",
         "right_answer": 4
     },
     {
         "question": "Was ist das chemische Symbol für Silber?",
         "answer_1": "Br",
         "answer_2": "Fe",
         "answer_3": "Ag",
         "answer_4": "Si",
         "right_answer": 3
     },
     {
         "question": "Wer hat 1934 Katzenaugen erfunden, um die Verkehrssicherheit zu verbessern?",
         "answer_1": "Percy Shaw",
         "answer_2": "Thorsten Sträter",
         "answer_3": "Catwoman",
         "answer_4": "HumdiDumdi",
         "right_answer": 1
     },
     {
         "question": "Welches ist der kleinste Vogel der Welt?",
         "answer_1": "Strauß",
         "answer_2": "Eisvogel",
         "answer_3": "Spatz",
         "answer_4": "Bienen-Kolibri",
         "right_answer": 4
     },
     {
         "question": "Wer hat 'Bodie' und 'Doyle' in ‚DieProfis‘ gespielt?",
         "answer_1": "Stan Laurell und Oliver Hardy",
         "answer_2": "Lewis Collins und Martin Shaw",
         "answer_3": "Sigfried und Roy",
         "answer_4": "Hänsel und Gretel",
         "right_answer": 2
     },
     {
         "question": "Wie lautet Barbies (Puppe) vollständiger Name?",
         "answer_1": "Barbara Millicent Roberts",
         "answer_2": "Barbara Mustermann",
         "answer_3": "Barbara Kathrin Paschulke",
         "answer_4": "Barbara Jackson",
         "right_answer": 1
     },
     {
         "question": "Wofür hält Paul Hunn den Rekord, der bei 118.1 Dezibel lag?",
         "answer_1": "Das lauteste Rülpsen",
         "answer_2": "Das lauteste Schreien",
         "answer_3": "Den lautesten Furtz",
         "answer_4": "Das lauteste Gähne",
         "right_answer": 1
     },
     {
         "question": "Welchen Beruf hatte Al Capone laut seiner Visitenkarte?",
         "answer_1": "Versicherungsvertreter",
         "answer_2": "Buchhalter",
         "answer_3": " Verkäufer von gebrauchten Möbeln",
         "answer_4": "Gangsterboss",
         "right_answer": 3
     },
     {
         "question": " Wer hat 1810 die Blechdose zur Konservierung von Lebensmitteln erfunden? ",
         "answer_1": "Heinz von Dose",
         "answer_2": "Robert Bosch",
         "answer_3": " Peter Durand ",
         "answer_4": "Marie Curie",
         "right_answer": 3
     },
     {
         "question": " Welcher Schauspieler gewann den Oscar für den besten Schauspieler für die Filme Philadelphia (1993) und Forrest Gump (1994)? ",
         "answer_1": "Charlton Heston",
         "answer_2": "Tom Hanks ",
         "answer_3": "Lucy Liu ",
         "answer_4": "Mickey Rourke",
         "right_answer": 2
     },
     {
         "question": " US-amerikanische Schauspielerin, die in KillBill Vol I & II die Rolle des Tokioter Unterweltchefs O-Ren Ishii spielte ",
         "answer_1": "Lucy Liu ",
         "answer_2": "Margot Hellbig",
         "answer_3": "Lucie Simpsons",
         "answer_4": "Hildegard Kneef",
         "right_answer": 1
     },
     {
         "question": "Wie viele Herzen hat ein Oktopus? ",
         "answer_1": "1",
         "answer_2": "2",
         "answer_3": "3",
         "answer_4": "14",
         "right_answer": 3
     } */
]


let currentQuestion = 0;
let question = questions[currentQuestion];
let right = 0;
let wrong = 0;

let AUDIO_SUCCESS = new Audio('/audio/right.wav');
let AUDIO_FAIL = new Audio('/audio/wrong.mp3');





function init() {

    document.getElementById('allQuestions').innerHTML = questions.length;           // Writes the sum of questions into the footer
    showQuestion();
}



function showQuestion() {

    fillProcessBar();                                                                   // Update the process-bar

    let question = questions[currentQuestion];                                          // Fills the title an der question-buttons in the card from the JSON-Array 
    document.getElementById('questiontTitel').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}



function answer(selection) {

    let iAnswer = +questions[currentQuestion]['right_answer'];                          // write the number of the solution into the variable

    let idOfRightAnswer = `answer_${iAnswer}`;                                          // Generates the ID of the solutions


    if (selection.slice(-1) == iAnswer) {                                               // Check the input

        right++;                                                                        // Right answers plus one

        AUDIO_SUCCESS.play()

    } else {

        wrong++;                                                                        // Wrong answers plus one

        AUDIO_FAIL.play();

        document.getElementById(selection).parentNode.classList.add('bg-danger');       // Mark the wrong answers 

    }


    document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');    // Mark the write answers
    document.getElementById('next-button').disabled = false;

    fillProcessBar();

}



function nextQuestion() {

    currentQuestion++;                                                                  // Increase the variable of the current question 

    if (currentQuestion+1 == questions.length) {                                        // if the current question is the last question write "next" ont the button

        document.getElementById('next-button').innerHTML = "Weiter";

    }


    if (currentQuestion == questions.length) {                                          // Check if the current question is the last one 

        printResult();                                                                  // If yes, print the result

    } else {                                                                            // if no,

        showQuestion();                                                                 // take the next question

        document.getElementById('next-button').disabled = true;                         // disable the next-button

        resetButtons();                                                                 // Reset the question-buttons
 
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;      // Increase the number of the current question in the footer
    }

}



function resetButtons() {

    for (let index = 1; index < 5; index++) {                                                   // Remove the classes 'bg-success' and 'bg-danger' out of the buttons
        document.getElementById(`answer_${index}`).parentNode.classList.remove('bg-success');
        document.getElementById(`answer_${index}`).parentNode.classList.remove('bg-danger');
    }

}



function printResult() {

    let result = document.getElementById('result');                                             // Assign the variable the object
    let resultText = document.getElementById('resultText');                                     // Assign the variable the object

    result.style = "";                                                                          // Show the object 
    document.getElementById('questionBody').style = "display: none";                            // Hide the object


    if (right == questions.length) {                                                            // Check if all answers were right
        resultText.innerHTML = `Sie haben alle <b> ${questions.length} </b>Fragen richtig beantwortet! `;           // Congratulate if all answers were right
    } else {

        resultText.innerHTML = `Sie haben <b> ${right}</b> Fragen richtig beantwortet. <b>${wrong} </b> waren falsch.`;         // Show how many answers were right and wrong
    }

    document.getElementById('questionImage').src = "/img/PokalMen.jpg";                         // Insert the image of the cup
}



function fillProcessBar() {

    let percent = (currentQuestion+1)/(questions.length);                                       // Calculate the current progress
    
    percent = Math.round(percent* 100) ;                                                        // Convert the value into an integer
    

    document.getElementById('process-bar').style = `width:${percent}%;"`;                       // Modify the process-bar lenght
    document.getElementById('process-bar').innerHTML = `${percent}%`;                           // Change the text in the process-bar

}


function newStart(){

    document.getElementById('result').style.display = "none";                               // Hide the result-card
    document.getElementById('questionBody').style.display = "";                             // Show the quiz-card
    resetButtons();

    document.getElementById('questionImage').src = "/img/quizword.jpg";                     // Reset the image of the quiz-card

    currentQuestion = -1;                                                                   // Reset the number of the current question, -1 = the variable is increased by one at the start of the next function

    nextQuestion();

}