'use strict';

var _createClass = function () { 
  function defineProperties(target, props) { 
    for (var i = 0; i < props.length; i++) { 
      var descriptor = props[i]; 
      descriptor.enumerable = descriptor.enumerable || false; 
      descriptor.configurable = true; 
      if ("value" in descriptor) descriptor.writable = true; 
      Object.defineProperty(target, descriptor.key, descriptor); 
    } 
  } return function (Constructor, protoProps, staticProps) { 
    if (protoProps) defineProperties(Constructor.prototype, protoProps); 
    if (staticProps) defineProperties(Constructor, staticProps); 
    return Constructor; 
  }; 
}();

function _classCallCheck(instance, Constructor) { 
  if (!(instance instanceof Constructor)) { 
    throw new TypeError("Cannot call a class as a function"); 
  } 
}

var NumberValidator = function () {
  function NumberValidator(submitButton, myForm) {
    _classCallCheck(this, NumberValidator);

    this.submitButton = submitButton;
    this.myForm = myForm;
    this.init();
  }

  _createClass(NumberValidator, [{
    key: 'init',
    value: function init() {
      var numberPattern = /^[0-9]*(?:\.\d{1,2})?$/;
      this.submitButton.addEventListener('click', function (formEvent) {
        if (!this.validateField(formEvent, numberPattern)) {
          formEvent.preventDefault();
        }
      }.bind(this));
    }
  }, {
    key: 'validateField',
    value: function validateField(formEvent, numberPattern) {
      var numberTextField = document.getElementById('number');
      var resultTextField = document.getElementById('result');
      if (this.isEmpty(numberTextField.value)) {
        numberTextField.focus();
        resultTextField.value = 'Nothing to validate';
        return false;
      } else {
        if (this.isNumber(numberPattern)) {
          setTimeout(function () {
            this.myForm.submit();
          }, 1000); //seting Timeout to delay submission of form for 10 seconds to show result value
          return false;
        } else {
          return false;
        }
        return true;
      }
    }
  }, {
    key: 'isNumber',
    value: function isNumber(numberPattern) {
      var numberTextField = document.getElementById('number');
      var resultTextField = document.getElementById('result');
      if (!numberPattern.test(numberTextField.value.trim())) {
        resultTextField.value = 'False';
        numberTextField.focus();
        return false;
      } else {
        resultTextField.value = 'True';
        return true;
      }
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(textField) {
      if (textField === null || textField.trim() === '') {
        return true;
      }
      return false;
    }
  }]);

  return NumberValidator;
}();

var submitButton = document.getElementById('submitButton');
var myForm = document.getElementById('myForm');
new NumberValidator(submitButton, myForm);






/*const submitButton = document.getElementById('submitButton');
const myForm = document.getElementById('myForm');
new NumberValidator(submitButton, myForm);*/







