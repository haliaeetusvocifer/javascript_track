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
  return 
  function (Constructor, protoProps, staticProps) { 
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

var URlOpen = function () {
  function URlOpen(windowWidth, windowHeight) {
    _classCallCheck(this, URlOpen);

    this.windowWidth = windowWidth;
    this.windowHeight = windowHeight;
    this.windowFeatures = 'width=' + this.windowWidth + ',height=' + this.windowHeight + ',menubar=no,location=no,resizable=no,scrollbars=no,status=no';
    this.urlPattern = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/;
    this.init();
  }

  _createClass(URlOpen, [{
    key: 'init',
    value: function init() {
      this.popUp(this.windowFeatures);
    }
  }, {
    key: 'popUp',
    value: function popUp(windowFeatures) {
      var url = prompt('Please Enter your URL?(http://www.example.com)', 'http://www.');
      if (url !== null && url.trim() !== '') {
        if (!this.urlPattern.test(url)) {
          alert('Oops! Invalid URL. Please provide URL');
        } else {
          if (url.search('http://')) {
            url = 'http://' + url;
          }
          window.open(url, '_blank', this.windowFeatures);
        }
      } else {
        alert('URL not provided. Please provide URL!');
      }
    }
  }]);

  return URlOpen;
}();

new URlOpen(4000, 450);