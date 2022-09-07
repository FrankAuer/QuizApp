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
   /*  {
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
    },
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
let right=0;
let wrong=0;




function init() {

    document.getElementById('allQuestions').innerHTML = questions.length;
    showQuestion();

}


function showQuestion() {

    let question = questions[currentQuestion];
    document.getElementById('questiontTitel').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];

}

function answer(selection) {

    let iAnswer = +questions[currentQuestion]['right_answer'];

    /*   let idOfRightAnswer = "answer_" + questions[currentQuestion]['right_answer']; */
    let idOfRightAnswer = `answer_${iAnswer}`;
    console.log(iAnswer, idOfRightAnswer)


    if (selection.slice(-1) == iAnswer) {

        right++;

        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');


    } else {
        wrong++;
    

        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }

    document.getElementById('next-button').disabled = false;


}

function nextQuestion() {


    currentQuestion++; // erhöht die Variable um 1
    console.log(currentQuestion, questions.length)

    if (currentQuestion == questions.length) {

        console.log('Ende');

        document.getElementById('questiontTitel').innerHTML = "Ende";
        document.getElementById('answer_1').parentNode.classList.add('no-display');
        document.getElementById('answer_2').parentNode.classList.add('no-display');
        document.getElementById('answer_3').parentNode.classList.add('no-display');
        document.getElementById('answer_4').parentNode.classList.add('no-display');
        document.getElementById('question-footer').classList.add('no-display');

        printResult();


    } else {
        showQuestion();

        document.getElementById('next-button').disabled = true;

        resetButtons();
/*  */
        document.getElementById('questionNumber').innerHTML = currentQuestion + 1;
    }

} 


function resetButtons() {

        for (let index = 1; index < 5; index++) {
            document.getElementById(`answer_${index}`).parentNode.classList.remove('bg-success');
            document.getElementById(`answer_${index}`).parentNode.classList.remove('bg-danger');
        }

    }


function printResult() {

    let result = document.getElementById('result');

    result.style="";
    document.getElementById('questionBody').style="display: none";


    if (right==questions.length){
        result.innerHTML = ` Sie haben alle <b> ${questions.length} </b>Fragen richtig beantwortet! `;
    } else {

        result.innerHTML = `Sie haben <b> ${right}</b> Fragen richtig beantwortet. <b>${wrong} </b> waren falsch.`;
    }
}