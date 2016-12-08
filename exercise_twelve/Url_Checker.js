'use strict';

function Match(){
  this.urlRegEx = /^(https?:\/\/)?((www)\.)?((.+)\.)?((.+)\.([^\/]{2,}))(\/(.*))?$/i;// I removed the 'g' tag , some bad voodoo i need to understand
  //this.subUrlRegEx = /^((\S+)?\.)?((\S+)\.(\S+))$/i;
  this.init();
}

Match.prototype.init = function(){
  var _this = this;
  var submitButton = document.getElementById('submit-button');
  submitButton.addEventListener("click", function(){
    _this.test();
  }, false);
};

Match.prototype.test = function() {
  var testValue = document.getElementById('box-one').value;
  if (testValue && testValue.trim().length > 0) {
    console.log(testValue);
    var validExp =  this.urlRegEx.exec(testValue.trim());
    console.log(validExp);
    var message;
    if (validExp) {
      message = 'Domain : ' + validExp[6];
      if (validExp[5]) {
        message += '\nSub Domain : ' + validExp[5];
      }
    } else {
      message = 'Please provide us a valid Url';
    }
    alert(message);
    return;
  }
  alert('Please input a valid Url');
};

new Match();
