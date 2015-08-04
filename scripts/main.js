// quiz begins, no correct questions
var amountCorrect = 0;

// ask questions and if answered correct and 1 to variable correct
var question1 = prompt('What language do you use to build the structure of web pages?')
  if (question1.toUpperCase() === 'RUBY') {
    amountCorrect += 1;
  }

// Output reults
document.write("<p> You got " + amountCorrect +  " out of 5 questions correct.</p>");

// Player ranking
  if (amountCorrect === 1) {
    document.write("<p> Congrats you earned yourself a Gold Badge.</p>");
  }

