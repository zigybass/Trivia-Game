
// best way to access Q/A?
const questions = {
    firstQuestion: {
        q1: "Which car company has a performance race track in Atlanta?",
        a1: "Mercedes",
        a2: "Porsche",
        a3: "Lexus",
        a4: "Ford",
    },
    secondQuestion: {
        q2: "Who was Ford aiming to beat in the 1966 Le Mans 24 Hour race?",
        a1: "Lotus",
        a2: "Alpine",
        a3: "Ferrari",
        a4: "Porsche",
    },
    thirdQuestion: {
        q3: "Which of these companies does VW Group own?",
        a1: "Volvo",
        a2: "Aston Martin",
        a3: "BMW",
        a4: "Lamborghini",
    },
    fourthQuestion: {
        q4: "What is the name of the racing class that was established in 1982 and canceled in 1986 due to too many driver and spectator deaths?",
        a1: "Deutsche Tourenwagen Meisterschaft",
        a2: "Australian Touring Car Championship",
        a3: "BTCC Series",
        a4: "Group B",
    },
    fifthQuestion: {
        q5: "What production car currently holds the fastest lap at the Nurburgring?",
        a1: "Lamborghini Aventador SVJ",
        a2: "Porsche 911 GT3 RS",
        a3: "Dodge Viper ACR",
        a4: "Porsche 911 GT2 RS",
    }
    }


console.log(questions.firstQuestion.q1);
console.log(questions.firstQuestion.a2);

const answers = {
    a1: "",
    a2: "",
    a3: "",
    a4: "",
    a5: "",
    a6: "",

}

const gifs = {
    g1: "url",
    g2: "url",
    g3: "url",
    g4: "url",
    g5: "url",
    g6: "url",
}

//variables to store data
let correctScore = 0;
let wrongScore = 0;
let unansweredScore = 0;
let timer;
// let count;
let didUserSelect = false;
// dynamic questions/answers here
let gif;
let question;
let userGuess;
let correctAnswer;