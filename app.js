
<<<<<<< HEAD


$(document).ready(function(){
    $("#gameStartscreen").show();
        $(".game").show();
        
    })


	
	/*$(document).ready(function(){*/
   	$("#gameStart").on("click",function() {
       /* $("#questiontwo").show();
        $(".form2").show();*/
        $("#question").show();
        $(".form1").show();
        $("#gameStartscreen").hide();
        $(".game").hide();

    });

   /* function myFunction() {
    var x = document.getElementById("gameStartscreen").id;
    document.getElementById("openText").innerHTML = x;

}*/


    


 	

	var questions = 	{
	
		q1: ["What is division by zero?", "0","1/x","undefined"],
		
		
		/*correctAnswer: 'c';*/
	
	
		 q2:[ "Who is buried in Grant's tomb","Lou Grant","no one","U.S. Grant"]
			/*answers: {
			a: 'Lou Grant',
			b: 'no one',
			c: 'U. S. Grant'
		},
		correctAnswer: 'c';*/
	};

	var score=0;
	var questionIndex=0;
	var questionsArray = [questions.question1, questions.question2,];

	function renderQuestion() {

		if (questionIndex <= (questionsArray.length - 1)) {
          document.querySelector("#question1").innerHTML = questionsArray[questionIndex][0];
        
	}

};


	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	function  myFunction() {

		if (userInput === questionsArray[questionIndex][2]) {
            alert("Correct!");

        if (userInput != questionsArray[questionIndex][2]);
        	alert("You are wrong");

        }

    }



		
	
	 

		 
	
	
	
=======
function myFunction() {
    document.getElementById("question").innerHTML ;
}

$(document).ready(function(){
    // $(".game").onload(function(){
    //     $("#nextQuestion").hide();
    // });
});

$(document).ready(function(){
    $("#gameStart").click(function(){
        $("#question").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
});

function  myquestion(question){

}

var i = [
	{
		question: "What is division by zero?",
		answers: {
			a: '0',
			b: '1/x',
			c: 'undefined'
		},
		correctAnswer: 'c'
	},
	{
		question: "Who is buried in Grant's tomb",
		answers: {
			a: 'Grant',
			b: 'no one',
			c: 'Lou Grant'
		},
		correctAnswer: 'a'
	}
];
>>>>>>> f4adcbc2d1d84dcf09c1721b54a289fab132e8d3
	
