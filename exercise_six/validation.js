'use strict';

var _createClass = function () { 
  function defineProperties(target, props) {
   for (var i = 0; i < props.length; i++) {
    var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); 
  } 
} return function (Constructor, protoProps, staticProps) { 
  if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; 
}; 
}();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FormValidator = function () {
  function FormValidator(myForm) {
    _classCallCheck(this, FormValidator);

    this.myForm = myForm;
    this.init();
  }

  _createClass(FormValidator, [{
    key: 'init',
    value: function init() {
      this.myForm.addEventListener('submit', function (formEvent) {
        this.validateFormElements(formEvent);
      }.bind(this));
    }
  }, {
    key: 'validateFormElements',
    value: function validateFormElements(formEvent) {
      if (this.validateTextBoxes() || this.validateTextArea() || this.validateCheckBox()) {
        formEvent.preventDefault();
      }
    }
  }, {
    key: 'validateTextBoxes',
    value: function validateTextBoxes() {
      var textboxes = document.querySelectorAll('input[type=text]');
      for (var i = 0; i < textboxes.length; i++) {
        if (this.isEmpty(textboxes[i].value)) {
          alert(textboxes[i].name + ' cannot be empty');
          return true;
        }
      };
      return false;
    }
  }, {
    key: 'validateCheckBox',
    value: function validateCheckBox() {
      var checkBox = document.getElementById('notifyCheckBox');
      if (this.isChecked(checkBox)) {
        alert(checkBox.name + ' cannot be left unchecked');
        return true;
      }
      return false;
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(value) {
      if (value === null || value.trim() === '') {
        return true;
      }
      return false;
    }
  }, {
    key: 'checkTextAreaLength',
    value: function checkTextAreaLength(textarea, areaLength) {
      if (textarea.length < areaLength) {
        return true;
      }
      return false;
    }
  }, {
    key: 'isChecked',
    value: function isChecked(checkbox) {
      if (checkbox.checked === false) {
        return true;
      }
      return false;
    }
  }]);

  return FormValidator;
}();

var myForm = document.getElementById('myForm');
new FormValidator(myForm);