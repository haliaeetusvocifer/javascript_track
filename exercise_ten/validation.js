'use strict';

function ValidateEmail(inputMail) {  

  var mailformat =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; 

  var urlFormat = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/; 

  if(inputMail.value.match(mailformat)) {  
    document.myForm.email.focus();  
    return true;
  }  else {  
      alert("You have entered an invalid email address! provide a valid mail");  
      document.myForm.email.focus();  
      return false;  
  }


  

  /*if(inputURL.value.match(urlFormat)) {  
    document.myForm.focus();  
    return true;
  }  else {  
      alert("You have entered an invalid URL! provide a valid URL");  
      document.myForm.focus();  
      return false;  
  }*/
}

