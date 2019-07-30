$(document).ready(function () {

    // best way to access Q/A?
    const questions = [
        {
            q: "Which car company has a performance race track in Atlanta?",
            a: "Mercedes",
            b: "Porsche",
            c: "Lexus",
            d: "Ford",
        },
        {
            q: "Who was Ford aiming to beat in the 1966 Le Mans 24 Hour race?",
            a: "Lotus",
            b: "Alpine",
            c: "Ferrari",
            d: "Porsche",
        },
        {
            q: "Which of these companies does VW Group own?",
            a: "Volvo",
            b: "Aston Martin",
            c: "BMW",
            d: "Lamborghini",
        },
        {
            q: "What is the name of the racing class that was established in 1982 and canceled in 1986 due to too many driver and spectator deaths?",
            a: "Deutsche Tourenwagen Meisterschaft",
            b: "Australian Touring Car Championship",
            c: "BTCC Series",
            d: "Group B",
        },
        {
            q: "What production car currently holds the fastest lap at the Nurburgring?",
            a: "Lamborghini Aventador SVJ",
            b: "Porsche 911 GT3 RS",
            c: "Dodge Viper ACR",
            d: "Porsche 911 GT2 RS",
        }
    ]

    const gifs = [
        "assets/images/bean.jpeg",
        "assets/images/lancia.gif",
        "assets/images/smartdrag.gif",
        "assets/images/water.jpeg",
        "assets/images/jeep.gif",
        "url",
    ]

    // const jeep = $("#jeep");
    // $("#jeep").attr("src", "assets/images/jeep.gif")

    //variables to store data
    let correctScore = 0;
    let wrongScore = 0;
    let unansweredScore = 0;
    let count = 5;
    // dynamic questions/answers here
    let gifURL;
    // let question;
    let userGuess;
    let correctAnswer;
    let questionCount = 0;

    let timer;

    function startTimer () {
        timer = setInterval(function () {
            count--;
            $("#time").text("Time remaining: " + count);
        }, 1000);
    }

    function gifTimer () {
        timer = setInterval(function () {
            count--;
            console.log(count)
            if (count == 0) {
                stopTime();
                questionCount++;
                newQuestion();
            }
        }, 1000);
    }

    function stopTime () {
         clearInterval(timer);
    };



    function newQuestion () {
        x = questionCount;
        startTimer();
        $("#question").text(questions[x].q);
        $("#answerA").text(questions[x].a);
        $("#answerB").text(questions[x].b);
        $("#answerC").text(questions[x].c);
        $("#answerD").text(questions[x].d);
    };


    function transition () {
        $(".selections").empty();
        $("#time").text("");
        $("#pic").attr("src", "assets/images/lancia.gif");
        count = 4;
        gifTimer();
    }


    $("#answerB").on("click", function () {
        stopTime();
        transition();
        correctScore++;
        $("#question").text("You guessed right!");
    });

    /*
    $("#answerB").on("click", function () {
        didUserSelect = true;
        if ( didUserSelect ) {
            $("#question").text("");
            $("#answerA").text("");
            $("#answerB").text("");
            $("#answerC").text("");
            $("#answerD").text("");
            $("#919").css("src", gifs[0])
        }
    })
    
    // Loads transition page/gif
    if ( didUserSelect ) {
        $("#question").text("");
        $("#answerA").text("");
        $("#answerB").text("");
        $("#answerC").text("");
        $("#answerD").text("");
        $("#919").css("src", gifs.g1)
    }
    
    */
    // Starts game
    $("#initializer").on("click", function () {
        $("#initializer").css("display", "none");
        $("#pic").attr({"src": "", "alt": ""});
        newQuestion();
    })

})