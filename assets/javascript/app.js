$(document).ready(function () {

    // Array of objects that hold questions and corresponding answers
    const questions = [
        {
            q: "Which car company has a performance race track in Atlanta?",
            a: "Mercedes",
            b: "Porsche",
            c: "Lexus",
            d: "Ford",
            answer: "Correct answer is B: Porsche."
        },
        {
            q: "Who was Ford aiming to beat in the 1966 Le Mans 24 Hour race?",
            a: "Lotus",
            b: "Alpine",
            c: "Ferrari",
            d: "Porsche",
            answer: "Correct answer is C: Ferrari."
        },
        {
            q: "Which of these companies does VW Group own?",
            a: "Volvo",
            b: "Aston Martin",
            c: "BMW",
            d: "Lamborghini",
            answer: "Correct answer is D: Lamborghini."
        },
        {
            q: "What is the name of the racing class that was established in 1982 and canceled in 1986 due to too many driver and spectator deaths?",
            a: "Deutsche Tourenwagen Meisterschaft",
            b: "Australian Touring Car Championship",
            c: "BTCC Series",
            d: "Group B",
            answer: "Correct answer is D: Group B."
        },
        {
            q: "What production car currently holds the fastest lap at the Nurburgring?",
            a: "Lamborghini Aventador SVJ",
            b: "Porsche 911 GT3 RS",
            c: "Dodge Viper ACR",
            d: "Porsche 911 GT2 RS",
            answer: "Correct answer is A: Lamborghini Aventador SVJ"
        },
        {
            q: "Which car will be the only car that's under $60k and will get to 60MPH in less than 3 seconds?",
            a: "Chevy Corvette",
            b: "Ford Mustang",
            c: "Dodge Charger",
            d: "Ford Fiesta",
            answer: "Correct answer is A: Chevy Corvette."
        }
    ]
    // Source for GIFs
    const gifs = [
        "assets/images/lancia.gif",
        "assets/images/smartdrag.gif",
        "assets/images/flip.gif",
        "assets/images/jeep.gif",
        "assets/images/bean.gif",
    ]

    //variables to store data
    let correctScore = 0;
    let wrongScore = 0;
    let unansweredScore = 0;
    let count = 20;
    let questionCount = 0;
    let gifCount = 0;

    let timer;

    function startTimer () {
        count = 4;
        timer = setInterval(function () {
            count--;
            $("#time").text("Time remaining: " + count);
            if ( count == 0 ) {
                stopTime();
                transition();
                unansweredScore++;
                $("#question").text("Sorry, time's up!");
                $("#answerA").text(questions[questionCount].answer)
            }
        }, 1000);
    }

    function gifTimer () {
        count = 5;
        timer = setInterval(function () {
            count--;
            if (count == 0) {
                stopTime();
                questionCount++;
                newQuestion();
                gifCount++;
                console.log("Q: " + questionCount);
                //console.log("Correct: " + correctScore);
                //console.log("Wrong: " + wrongScore);
                //console.log("Unanswered: " + unansweredScore);
            }
        }, 1000);
    }

    function stopTime () {
         clearInterval(timer);
    };


    function newQuestion () {
        x = questionCount;
        startTimer();
        $("#pic").attr({"src": "", "alt": ""});
        $("#pic").css({"border-width": "0px"});
        $("#question").text(questions[x].q);
        $("#answerA").text(questions[x].a);
        $("#answerB").text(questions[x].b);
        $("#answerC").text(questions[x].c);
        $("#answerD").text(questions[x].d);
    };


    function transition () {
        x = gifCount;
        if ( gifCount < 5) {
         $("#answerA").text("");
         $("#answerB").text("");
         $("#answerC").text("");
         $("#answerD").text("");
         $("#time").text("Time Remaining: ");
         $("#pic").attr({"src": gifs[x]});
         $("#pic").css({"border-width": "2px"});
         gifTimer();
        } else {
            $("#time").text("");
            $("#pic").css({"border-width": "0px"});
            setTimeout(function () {
                correctScore = 0;
                wrongScore = 0;
                unansweredScore = 0;
                gifCount = 0;
                questionCount = 0;
            }, 200)
            $("#initializer").css("display", "initial");
            $("#answerA").text(`Thanks for playing! Here's your total score:`);
            $("#answerB").text(`Correct Answers: ${correctScore}`);
            $("#answerC").text(`Incorrect Answers: ${wrongScore}`);
            $("#answerD").text(`Unanswered: ${unansweredScore}`);
        }
    }



    // Checking for right or wrong answers
    $("#answerA").on("click", function () {
        if ( questionCount === 4 || questionCount === 5 ) {
            stopTime();
            transition();
            correctScore++;
            $("#question").text("You are correct!");
    } else {
        stopTime();
        transition();
        wrongScore++;
        $("#answerA").text(questions[questionCount].answer);
        $("#question").text("You guessed wrong.");
    }
});

    $("#answerB").on("click", function () {
        if ( questionCount === 0 ) {
            stopTime();
            transition();
            correctScore++;
            $("#question").text("You are correct!");
        } else {
            stopTime();
            transition();
            wrongScore++;
            $("#answerB").text(questions[questionCount].answer);
            $("#question").text("You guessed wrong.");
        }
    });

    $("#answerC").on("click", function () {
        if ( questionCount === 1 ) {
            stopTime();
            transition();
            correctScore++;
            $("#question").text("You are correct!");
        } else {
            stopTime();
            transition();
            wrongScore++;
            $("#answerC").text(questions[questionCount].answer)
            $("#question").text("You guessed wrong.");
        }
    });

    $("#answerD").on("click", function () {
        if ( questionCount === 2 || questionCount === 3) {
            stopTime();
            transition();
            correctScore++;
            $("#question").text("You are correct!");
        } else {
            stopTime();
            transition();
            wrongScore++;
            $("#answerD").text(questions[questionCount].answer)
            $("#question").text("You guessed wrong.");
        }
    });
    
    // Starts game
    $("#initializer").on("click", function () {
        $("#initializer").css("display", "none");
        //$("#pic").attr({"src": "", "alt": ""});
        //$("#pic").css({"border-width": "0px"});
        newQuestion();
    })

})