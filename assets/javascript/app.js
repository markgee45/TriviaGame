        //document.body.style.backgroundImage = "url('assets/images/images-4.jpg')";//

        var questions = [
    {
        question: "Which rapper was the first to leave N.W.A?",
        options: ["Arabian Prince", "Ice Cube", "Jazy Z", "Lil Wayne", "Yellow"],
        answer: 0
    },
    {
        question: "What year was N.W.A. formed?",        
        options: ["1990", "1980", "1886", "1986", "2002"],
        answer: 3
    },
   
    {
        question: "Which rapper from N.W.A. died from AIDS?",        
        options: ["Dr Dre", "Chris Brown", "M.C.Ren", "Tupac", "Eazy E"],
        answer: 4
    },
    {
        question: "What was the most controversial song from N.W.A?",
        options: ["Straight Outta Compton", "Just Don't Bite It", "Quiet On The Set", "Dopeman", "F The Police"],
        answer: 4
    },
    
    {
        question: "Which rapper of the N.W.A. real name is O'Shea Jackson?",
        options: ["M.C.Ren", "Yellow", "Ice Cube", "Eazy E", "Dr Dre"],
        answer: 2
    },
    
];

    //question tracker//
    var questionCount = 0; 

    console.log(questionCount);
    //user options//  
    var options = []; 

    //quiz div//    
    var quiz = document.getElementById("quiz"); 
    // console.log(quiz);
    
    //show first question//
    displayNext();
    timer();
    $("#done").hide();
    
    //next button//
    $("#next").on("click", function () {
    choose();
    console.log(next);
    //if no selection made//
        if (isNaN(options[questionCount])) {
            alert("take your pick Pimp Juice!");
  } 
        else {
            questionCount++;
            displayNext();
  }
});
  
    //set timer//
    function timer(){
    t = setTimeout(timeUp, 1000 * 60);
}

    function StopFunction() {
    clearTimeout(t);
}

    function timeUp(){
    $("#done").show();
    $("#start").show();
    $("#next").hide(); 
    $("#quiz").hide();
    $("#time").hide();
    StopFunction();
    StopFunctionTwo(); 
}

    var seconds;
    var temp;

    function countdown() {
        seconds = document.getElementById("countdown").innerHTML;
        seconds = parseInt(seconds, 10);

        if (seconds == 1) {
            temp = document.getElementById("countdown");
        return;
  }

        seconds--;
        temp = document.getElementById("countdown");
        temp.innerHTML = seconds;
        setTimeoutMyTimer = setTimeout(countdown, 1000);
 
}
 
    countdown();

    function StopFunctionTwo() {
    clearTimeout(setTimeoutMyTimer);
}
  //Resets game when the Start Over button is clicked//
    $("#start").on("click", function () {
        questionCount = 0;
        options = [];
        displayNext();
        $("#start").hide();
        $("#next").show();    
        $("#done").hide();
        $("#time").show();
        timer();
        document.getElementById("countdown").innerHTML = 60;
        countdown();
});
  
  
    //questions and options//
    function makeQuiz(index) {
        var quizDiv = $('<div>', {
            id: 'question'
            }
        );
        
        var question = $('<p>').append(questions[index].question);
        quizDiv.append(question);
        
        var radioButtons = createRadios(index);
        
        quizDiv.append(radioButtons);

        console.log(quizDiv);
        return quizDiv;

};
  
  //answers multi choice selectors//
    function createRadios(index) {
    var radioList = $("<ul>");
    var input = '';
        for (var i = 0; i < questions[index].options.length; i++) {
            
            var item = $("<li>"); 
            input = '<input type="radio" name="answer" value=' + i + ' />';
            input += questions[index].options[i]; 
            item.append(input); 
            radioList.append(item); 
  }
        return radioList;
}
  
    //pushes selection into an array//
    function choose() {
        options[questionCount] = +$('input[name="answer"]:checked').val();
}
  
    
    function displayNext() {
        console.log(quiz)
        $('#question').remove();
        if(questionCount < questions.length){
            var nextQuestion = makeQuiz(questionCount);
            console.log(nextQuestion);
            console.log('what is quiz?', quiz)
            $('#quiz').append(nextQuestion)
            $('#quiz').show();
            if (!(isNaN(options[questionCount]))) {
                $('input[value=' + options[questionCount] + ']').prop('checked', true);
            }
            else if(questionCount === 0){
                $('#next').show();
            }   
        } else {
            var scoreElem = displayScore();
            quiz.append(scoreElem).fadeIn();
            $('#next').hide();
            $('#start').show();
        }

    }

  
function displayScore() {
    clearTimeout(t);
    $('#time').hide();
    StopFunctionTwo();
    StopFunction();
    var score = $('<p>',{id: 'question'});
    var numCorrect = 0;
    for (var i = 0; i < options.length; i++) {
        if (options[i] === questions[i].correctAnswer) {
                numCorrect++;
        }
    }
    score.append('You tallied ' + numCorrect + ' out of ' + questions.length + ' questions right!!!');
    return score;
};
