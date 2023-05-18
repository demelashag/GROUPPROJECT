// Define quiz questions
var quizQuestions = [
    {
     question: ".....is a largest number of computer?",
     choices: ["network", "google", "www", "electronic mail"],
     answer: 0
    },
    {
     question: "which one is characterstics of agood website?",
     choices: ["have a goal", "maintain it", "well organized", "none"],
     answer: 2
    },
    {
     question: ".....is the standard protocol for transfering web content?",
     choices: ["TCP", "IP", "HTTP", "A and B"],
     answer: 2
    },
    {
     question: ".....stand for uniform resource identifier?",
     choices: ["URI", "URL", "URN", "URC"],
     answer: 0
    },
    {
     question: ".....is designed as a scripting language?",
     choices: ["CSS", "HTML", "PHP", "all of the above"],
     answer: 2
    }
   ];
   
   // Define variables
   var currentQuestion = 0;
   var score = 0;
   var totalQuestions = quizQuestions.length;
   var time = 30;
   var timer;
   var correctAnswers = [];
   
   // Start quiz function
   function startQuiz() {
    document.getElementById("welcome").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
    startTimer();
   }
   
   // Show question function
   function showQuestion() {var question = quizQuestions[currentQuestion];
    document.getElementById("question").innerHTML = question.question;
    document.getElementById("choice0").innerHTML = question.choices[0];
    document.getElementById("choice1").innerHTML = question.choices[1];
    document.getElementById("choice2").innerHTML = question.choices[2];
    document.getElementById("choice3").innerHTML = question.choices[3];
    document.getElementById("current-question").innerHTML = currentQuestion + 1;
    document.getElementById("total-questions").innerHTML = totalQuestions;
   }
   
   // Check answer function
   function checkAnswer(choice) {
    var question = quizQuestions[currentQuestion];
    if (choice == question.answer) {
     score++;
     correctAnswers.push(true);
    } else {
     correctAnswers.push(false);
    }
    currentQuestion++;
    if (currentQuestion >= totalQuestions) {
     clearInterval(timer);
     showResults();
    } else {
     showQuestion();
    }
   }
   
   // Start timer function
   function startTimer() {
    timer = setInterval(function() {
     time--;
     document.getElementById("time").innerHTML = time;
     if (time <= 0) {
      clearInterval(timer);
      showResults();
     }
    }, 1000);
   }
   
   // Show results function
   function showResults() {
    var numCorrect = 0;
    for (var i = 0; i < correctAnswers.length; i++) {
     if (correctAnswers[i]) {
      numCorrect++;
     }
    }
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("total-correct").innerHTML = numCorrect;
    document.getElementById("num-questions").innerHTML = totalQuestions;
   }
   
   // Restart quiz function
   function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    time = 30;
    correctAnswers = [];
    document.getElementById("results").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    showQuestion();
    startTimer();
   }
   