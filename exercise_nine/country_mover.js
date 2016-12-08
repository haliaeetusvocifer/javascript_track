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
  } 
  return function (Constructor, protoProps, staticProps) { 
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

var CountryMover = function () {
  function CountryMover(addButton, removeButton) {
    _classCallCheck(this, CountryMover);

    this.addButton = addButton;
    this.removeButton = removeButton;
    this.init();
  }

  _createClass(CountryMover, [{
    key: 'init',
    value: function init() {
      this.leftCountry = document.getElementById('leftCountry');
      this.rightCountry = document.getElementById('rightCountry');
      this.addButton.addEventListener('click', function () {
        if (!this.isBoxEmpty(leftCountry)) {
          this.moveSelectedOptions(leftCountry, rightCountry);
        }
      }.bind(this));

      this.removeButton.addEventListener('click', function () {
        if (!this.isBoxEmpty(rightCountry)) {
          this.moveSelectedOptions(rightCountry, leftCountry);
        }
      }.bind(this));
    }
  }, {
    key: 'isOptionSelected',
    value: function isOptionSelected(fromBox) {
      if (fromBox.selectedIndex === -1) {
        alert('Please make a selection from ' + fromBox.name);
        return false;
      }
      return true;
    }
  }, {
    key: 'isBoxEmpty',
    value: function isBoxEmpty(fromBox) {
      if (fromBox.options.length !== 0) {
        this.isOptionSelected(fromBox);
        return false;
      }
      alert('No option to select from at this time');
      return true;
    }
  }, {
    key: 'moveSelectedOptions',
    value: function moveSelectedOptions(fromBox, toBox) {
      var selectedOption = fromBox.selectedOptions;
      for (var i = selectedOption.length - 1; i >= 0; i--) {
        toBox.add(selectedOption[i]);
      };
    }
  }]);

  return CountryMover;
}();

var addButton = document.querySelector('button[id="buttonAdd"]');
var removeButton = document.querySelector('button[id="buttonRemove"]');
new CountryMover(addButton, removeButton);