'use strict';

function Validator() {
  var dom = document;
  this.loginIdBox = dom.getElementById('loginId');
  this.emailBox = dom.getElementById('email');
  this.nameBox = dom.getElementById('myName');
  this.timezoneBox = dom.getElementById('timezone');
  this.homepageBox = dom.getElementById('homepage');
  this.aboutBox = dom.getElementById('about');
  this.notificationBox = dom.getElementById('notifications');

  this.mailRegEx = /(.+)@(.+){2,}\.(.+){2,}/i;// /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/gi;
  this.urlRegEx = /^(https?:\/\/)?((www)\.)?((.+)\.)?(.+)\.(.{2,})$/i;// /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
  this.init();
}

Validator.prototype.init = function () {
  var dom = document;
  var _this = this;

  var formButton = dom.getElementById('btnGO');
  formButton.addEventListener("click", function () {
    _this.doValidation();
  }, false);

};

Validator.prototype.hasValue = function (elem) {
  var value = elem.value;
  return !(!value || !value.trim());
};

Validator.prototype.validateMail = function (elem) {
  return (this.mailRegEx.test(elem.value.trim()));
};

Validator.prototype.validateURL = function (elem) {
  return this.urlRegEx.test(elem.value);
};


Validator.prototype.hasMinValue = function (elem, length) {
  if (!this.hasValue(elem)) {
    return false;
  }

  return elem.value.length >= length;
};

Validator.prototype.doValidation = function () {
  var allValid = true;

  if (!this.hasValue(this.loginIdBox)) {
    allValid = false;
    alert('Please provide your login Id');
  }

  if (this.hasValue(this.emailBox)) {
    if (!this.validateMail(this.emailBox)) {
      allValid = false;
      alert('Please provide a valid email address');
    }
  } else {
    allValid = false;
    alert('Please provide an email address');
  }

  if (!this.hasValue(this.nameBox)) {
    allValid = false;
    alert('Please provide your name');
  }

  if (!this.hasValue(this.timezoneBox)) {
    allValid = false;
    alert('Please provide select your timezone');
  }

  if (this.hasValue(this.homepageBox)) {
    if (!this.validateURL(this.homepageBox)) {
      allValid = false;
      alert('Please provide a vaild URL for your homepage.');
    }
  } else {
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
