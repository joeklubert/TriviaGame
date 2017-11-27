
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
	
