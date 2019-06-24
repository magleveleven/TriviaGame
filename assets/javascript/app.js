//Pseudo Code
//Make a timer, starts at first click, when done game is over
//Make list of 4  questions,  with  array  of multiple choice answers
//Save count of correct & incorrect, display  them to the user  
//Make game over if answers are completed, or when timer is done
//Click function to display "correct" or "wrong", then disable

var number = 30;
console.log(number);

var intervalId;

var q1Quote = "1) True love is the best thing in the world, except for M.L.T....mutton, lettuce and tomato."
$(".quote1").append(q1Quote);

var q2Quote = "2) You sit on a throne of lies!"
$(".quote2").append(q2Quote);

var q3Quote = "3) You're killing me Smalls!"
$(".quote3").append(q3Quote);


var q1Answers = ["A) The Princess Bride", "B) Forrest Gump", "C) The Goonies","D) The Wedding Singer"];
    console.log(q1Answers);
$(".sA1a").append(q1Answers[0]);
$(".sA1b").append(q1Answers[1]);
$(".sA1c").append(q1Answers[2]);
$(".sA1d").append(q1Answers[3]);

var q2Answers = ["A) Christmas Vacation", "B) Elf", "C) Die Hard","D) The Grinch"];
    console.log(q2Answers);
$(".sA2a").append(q2Answers[0]);
$(".sA2b").append(q2Answers[1]);
$(".sA2c").append(q2Answers[2]);
$(".sA2d").append(q2Answers[3]);

var q3Answers = ["A) Bad News Bears", "B) Field of Dreams", "C) The Sandlot", "D) Major League"];
    console.log(q3Answers);
$(".sA3a").append(q3Answers[0]);
$(".sA3b").append(q3Answers[1]);
$(".sA3c").append(q3Answers[2]);
$(".sA3d").append(q3Answers[3]);

var tally = 0;
var wrong = 0;
        
 
function run() {
    intervalId = setInterval(decrement, 1000);
}

function decrement() {
    number--;
    $(".clock").html(number);
        if (number === 0) {
            stop();
            //alert("Time is Up!");
        }
  }

  function stop() {
    clearInterval(intervalId);
  }

  run();

  $(".sA1a").click(function() {
      alert("NIIIIIICE!!!");
      console.log("test-rightanswer");
      tally ++;
      $("#tallyShown").replaceWith(tally);
  });

  $(".sA1b, .sA1c, .sA1d").click(function() {
    alert("no, sorry!");
    console.log("no, sorry!");
    wrong ++;
});

$(".sA2b").click(function() {
    alert("NIIIIIICE!!!");
    console.log("test-rightanswer");
    tally ++;
    $("#tallyShown").replaceWith(tally);
});

$(".sA2a, .sA2c, .sA2d").click(function() {
  alert("no, sorry!");
  console.log("no, sorry!");
  wrong ++;
});

$(".sA3c").click(function() {
    alert("NIIIIIICE!!!");
    console.log("test-rightanswer");
    tally ++;
    $("#tallyShown").replaceWith(tally);
});

$(".sA3a, .sA3b, .sA3d").click(function() {
  alert("no, sorry!");
  console.log("no, sorry!");
  wrong ++;
});



    

// If I click on the right answer, then +1 and disable, 
//else if I click on any of other 3, then disable and display wrong 

//function, when timer reaches 29 then display all answers 
