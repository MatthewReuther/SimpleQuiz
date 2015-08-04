// quiz begins, no correct questions
var amountCorrect = 0;

// ask questions and if answered correct and 1 to variable correct
var question1 = prompt('What language do you use to build the structure of web pages?');
  if (question1.toUpperCase() === 'HTML') {
    amountCorrect += 1;
  }

var question2 = prompt('What language do you use to style web pages?');
  if (question2.toUpperCase() === 'CSS') {
    amountCorrect += 1;
  }

var question3 = prompt('What language do you use to add interactivity to a web page?');
  if (question3.toUpperCase() === 'JAVASCRIPT') {
    amountCorrect += 1;
  }

var question4 = prompt('Name a programming language that\'s also a snake.');
  if (question4.toUpperCase() === 'PYTHON') {
    amountCorrect += 1;
  }

var question5 = prompt('Name a programming language that is named after a gem.');
  if (question5.toUpperCase() === 'RUBY') {
    amountCorrect += 1;
  }

// Output reults
document.write("<p> You got " + amountCorrect +  " out of 5 questions correct.</p>");

// Player ranking
  if (amountCorrect === 5) {
    document.write("<p> Congrats you earned yourself a Gold Badge.</p>");
  } else if (amountCorrect >= 3) {
    document.write("<p> Congrats you earned yourself a Silver Badge.</p>");
  } else if (amountCorrect >= 1) {
    document.write("<p> Keep practicing... you earned yourself a Bronze Badge.</p>");
  } else {
    document.write("<p> Keep studying...No crown for you this time.</p>");
  }

