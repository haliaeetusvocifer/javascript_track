'use strict';

function Validator(){
  var dom = document;
  this.loginIdBox = dom.getElementById('loginId');
  this.emailBox = dom.getElementById('email');
  this.nameBox = dom.getElementById('myName');
  this.timezoneBox = dom.getElementById('timezone');
  this.homepageBox = dom.getElementById('homepage');
  this.aboutBox = dom.getElementById('about');
  this.notificationBox = dom.getElementById('notifications');
  this.init();
}

Validator.prototype.init = function () {
  var dom = document;
  var _this = this;

  var formButton = dom.getElementById('btnGO');
  formButton.addEventListener("click", function(){
    _this.doValidation();
  } , false);

};

Validator.prototype.hasValue = function (elem){
  var value = elem.value;  
  return !(!value || !value.trim());
};

Validator.prototype.validateMail = function(elem) {
  if (!this.hasValue(elem)) {
    return false;
  }
  return elem.checkValidity();
};

Validator.prototype.hasMinValue = function(elem, length) {
  if (!this.HasValue(elem)) {
    return false;
  }

  return elem.value.length >= length ;
};

Validator.prototype.doValidation = function(){
  var allValid = true;

  if (!this.HasValue(this.loginIdBox)) {
      allValid = false;
      alert('Please provide your login Id');
  }

  if (!this.validateMail(this.emailBox)) {
      allValid = false;
      alert('Please provide a valid email address');
  }

  if (!this.hasValue(this.nameBox)) {
      allValid = false;
      alert('Please provide your name');
  }

  if (!this.hasValue(this.timezoneBox)) {
      allValid = false;
      alert('Please provide select your timezone');
  }

  if (!this.hasValue(this.homepageBox)) {
      allValid = false;
      alert('Please provide your homepage');
  }

  if (!this.hasMinValue(this.aboutBox, 50)) {
      allValid = false;
      alert('Tell us about yourself in not less than 50 characters.');
  }

  alert(this.notificationBox.checked ? 'You will receive notifications' : 'You will not receive notifications');

  if (allValid) {
    alert('All fields passed validation.');
  }
};

new Validator();
