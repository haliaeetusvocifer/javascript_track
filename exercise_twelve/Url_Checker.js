'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UrlChecker = function () {
  function UrlChecker(submitButton) {
    _classCallCheck(this, UrlChecker);

    this.submitButton = submitButton;
    this.init();
  }

  _createClass(UrlChecker, [{
    key: 'init',
    value: function init() {
      var urlTestPattern = /^(https?:\/\/)(www.)([^.\/.]+(?=\.)|)(\.?[^\/.]+\.[^\/]+)\/?(.+|)$/;
      var urlExtractPattern = /^(?:https?:\/\/)?(?:www?.)?([^.\/.]+(?=\.)|)(\.?[^\/.]+\.[^\/]+)\/?(.+|)$/;
      this.submitButton.addEventListener('click', function (formEvent) {
        var urlInputField = document.getElementById('url');
        if (!this.isEmpty(urlInputField) && this.isValid(urlInputField, urlTestPattern)) {
          this.extractDomain(urlInputField, urlExtractPattern);
        } else {
          formEvent.preventDefault();
        }
      }.bind(this));
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty(inputField) {
      if (inputField.value === null || inputField.value.trim() === '') {
        alert('URL Field cannot be empty');
        inputField.focus();
        return true;
      }
      return false;
    }
  }, {
    key: 'isValid',
    value: function isValid(inputField, urlTestPattern) {
      if (!urlTestPattern.test(inputField.value)) {
        alert('Invalid URL');
        return false;
      }
      return true;
    }
  }, {
    key: 'extractDomain',
    value: function extractDomain(urlInputField, urlExtractPattern) {
      var match = urlExtractPattern.exec(urlInputField.value);
      if (match !== null) {
        if (match[1] === null || match[1] === '') {
          alert('Domain: ' + match[2]);
        } else {
          alert('Domain: ' + match[2].replace('.', ''));
          alert('Subdomain: ' + match[1]);
        }
      }
    }
  }]);

  return UrlChecker;
}();

var submitButton = document.getElementById('submitButton');
new UrlChecker(submitButton);