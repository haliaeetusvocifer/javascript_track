'use strict';


function promptUser(argument) {
  // body...

  do {
    var firstName = prompt ("Enter your first Name?") ;
  } while (! firstName ) ;

  do {
    var lastName = prompt ("Enter your last Name?");
  } 
  while (! lastName){

    document.getElementById("namePrompt").innerHTML = "Hello " + firstName +" "+ lastName + "!";
  }
}

new promptUser();

