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

var DisplayAndHide = function () {
	function DisplayAndHide(parentCheckBox) {
		_classCallCheck(this, DisplayAndHide);

		this.parentCheckBox = parentCheckBox; //Gets the Parent CheckBox
		this.init();
	}

	_createClass(DisplayAndHide, [{
		key: 'init',
		value: function init() {
			var parentCheckBox = this.parentCheckBox;
			for (var i = parentCheckBox.length - 1; i >= 0; i--) {
				parentCheckBox[i].addEventListener('click', function (e) {
					var parentElement = e.target;
					if (parentElement.checked) {
						this.toggleChildren(parentElement, true, 'block');
					} else {
						this.toggleChildren(parentElement, false, 'none');
					}
				}.bind(this));
			};
		}
	}, {
		key: 'toggleChildren',
		value: function toggleChildren(parentElement, state, toggleDisplay) {
			var siblingId = document.getElementById(parentElement.id + 'Sibling'); //Gets the parent sibling id
			siblingId.style.display = toggleDisplay;
			var silbingCheckBox = siblingId.querySelectorAll('input[type=checkbox]'); //Gets all sibling checkboxes by using sibling id
			for (var i = silbingCheckBox.length - 1; i >= 0; i--) {
				silbingCheckBox[i].checked = state;
			};
			siblingId.scrollIntoView({ behavior: 'smooth' });
		}
	}]);

	return DisplayAndHide;
}();

var parentCheckBox = document.getElementsByClassName('parentCheckBox');
new DisplayAndHide(parentCheckBox);