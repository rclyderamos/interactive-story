var score = 0;

var aText = new Array(
	"hello, user.", 
	"it is nice to finally meet you after so long."
);
var question2 = new Array(
	"it doesn’t matter. after all, this time is about you.",
	"i am tasked with asking you several questions.",
	"ahether you answer them or not is up to you."
);
var question3 = new Array(
	"first:",
	"what do you hope for most in the future?"
);
var question4 = new Array (
	"second:",
	"do you believe in a higher power?"
);
var question5 = new Array (
	"third:",
	"what would you do if someone had wronged you?"
);
var question6 = new Array (
	"fourth:",
	"what do you live for?"
);
var question7 = new Array(
	"five:",
	"how would you rate your questionnaire today?"
);

var question8 = new Array(
	"thank you for your answers.",
	"we have found you most suitable for society.",
	"your identification numbers will be assigned to you shortly.");
var question9 = new Array (
	"thank you for your answers.",
	"we have found you inadequate.",
	"please try again next year.");
var question10 = new Array (
	"your answers have been most unsatisfactory.",
	"according to the stipulations, you will be visited by trusted personnel shortly.",
	"it would be appreciated if you do not run."
	);


var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
 
 //typewriters

 //1
function typewriter1()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");
 
 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter1()", 500);
  }
 } else {
  setTimeout("typewriter1()", iSpeed);
 }
}

//2
function typewriter2()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext2");
 
 while ( iRow < iIndex ) {
  sContents += question2[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question2[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question2.length ) {
   iArrLength = question2[iIndex].length;
   setTimeout("typewriter2()", 500);
  }
 } else {
  setTimeout("typewriter2()", iSpeed);
 }
}

//3
function typewriter3()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext3");
 
 while ( iRow < iIndex ) {
  sContents += question3[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question3[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question3.length ) {
   iArrLength = question3[iIndex].length;
   setTimeout("typewriter3()", 500);
  }
 } else {
  setTimeout("typewriter3)", iSpeed);
 }
}

//4
function typewriter4()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext4");
 
 while ( iRow < iIndex ) {
  sContents += question4[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question4[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question4.length ) {
   iArrLength = question4[iIndex].length;
   setTimeout("typewriter4()", 500);
  }
 } else {
  setTimeout("typewriter4()", iSpeed);
 }
}

//5
function typewriter5()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext5");
 
 while ( iRow < iIndex ) {
  sContents += question5[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question5[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question5.length ) {
   iArrLength = question5[iIndex].length;
   setTimeout("typewriter5()", 500);
  }
 } else {
  setTimeout("typewriter5()", iSpeed);
 }
}

//6
function typewriter6()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext6");
 
 while ( iRow < iIndex ) {
  sContents += question6[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question6[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question6.length ) {
   iArrLength = question6[iIndex].length;
   setTimeout("typewriter6()", 500);
  }
 } else {
  setTimeout("typewriter6()", iSpeed);
 }
}

//7
function typewriter7()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext7");
 
 while ( iRow < iIndex ) {
  sContents += question7[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question7[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question7.length ) {
   iArrLength = question7[iIndex].length;
   setTimeout("typewriter7()", 500);
  }
 } else {
  setTimeout("typewriter7()", iSpeed);
 }
}

//8
function typewriter8()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext8");
 
 while ( iRow < iIndex ) {
  sContents += question2[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question8[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question8.length ) {
   iArrLength = question8[iIndex].length;
   setTimeout("typewriter8()", 500);
  }
 } else {
  setTimeout("typewriter8()", iSpeed);
 }
}

//9
function typewriter9()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext9");
 
 while ( iRow < iIndex ) {
  sContents += question9[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question9[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question9.length ) {
   iArrLength = question9[iIndex].length;
   setTimeout("typewriter9()", 500);
  }
 } else {
  setTimeout("typewriter9()", iSpeed);
 }
}

//10
function typewriter10()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext10");
 
 while ( iRow < iIndex ) {
  sContents += question10[iRow++] + '<br />';
 }
 destination.innerHTML = sContents + question10[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != question10.length ) {
   iArrLength = question10[iIndex].length;
   setTimeout("typewriter10()", 500);
  }
 } else {
  setTimeout("typewriter10()", iSpeed);
 }
}

//-------------------------------------------------------------------------------------------------------------- actual thing

function q1() {
  //Header - the question
  document.getElementById("q").innerHTML=
  "<div class='typedtext'> </div>";

  //List - for each possible answer
  document.getElementById("gamechoice").innerHTML=
  "<ol><li onclick='q2();answer1();'>How do you know me?</li><li onclick='q2();answer2();'>Who are you?</li><li onclick='q2();answer3();'>What do you want from me?</li></ol>";

  document.getElementById("score").innerHTML=score;
}

//Content for Question 2
function q2() {
  //Header - the question
  document.getElementById("q").innerHTML=
  "<h1 id='typedtext2'></h1>";

  //List - for each possible answer
  document.getElementById("gamechoice").innerHTML=
  "<ol style='animation:fadeInOut 3s forwards;'><li onclick='q3();answer4();''>Okay.</li><li onclick='q3();answer5();''>Say nothing.</li><li onclick='q3();answer6();''>Who sent you these questions?</li></ol>";
}

//Content for Question 3
function q3() {
  //Header - the question
  document.getElementById("q").innerHTML=
  "<h1 id='typewriter1'>First: What would you hope for most in the future?</h1>";

  //List - for each possible answer BUT question4() doesn't exist yet
  //so I put the answer() fucntions first since they exist
  document.getElementById("gamechoice").innerHTML=
  "<ol style='animation:fadeInOut 3s forwards'><li onclick='answer7();question4();'>Happiness</li><li onclick='answer8();question4();'>Say nothing.</li><li onclick='answer9();question4();' id='myBtn'>Freedom</li></ol>";
}


function answer1() {
  score=score+2;
  document.getElementById("score").innerHTML=score;
}
function answer2() {
  score=score+0;
  document.getElementById("score").innerHTML=score;
}
function answer3() {
  score=score-2;
  document.getElementById("score").innerHTML=score;
}
function answer4() {
  score=score+4;
  document.getElementById("score").innerHTML=score;
}
function answer5() {
  score=score+5;
  document.getElementById("score").innerHTML=score;
}
function answer6() {
  score=score+6;
  document.getElementById("score").innerHTML=score;
}
function answer7() {
  score=score+7;
  document.getElementById("score").innerHTML=score;
}
function answer8() {
  score=score+8;
  document.getElementById("score").innerHTML=score;
}
function answer9() {
  score=score+9;
  document.getElementById("score").innerHTML=score;
}