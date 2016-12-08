'use strict';

function Select(selectElemId, transferToElemId , buttonELemId){
  var dom = document;
  this.myBox = dom.getElementById(selectElemId);
  this.transferToBox = dom.getElementById(transferToElemId);
  this.myButton = dom.getElementById(buttonELemId);
  this.init(selectElemId, transferToElemId , buttonELemId);
}

Select.prototype.init = function(selectElemId, transferToElemId , buttonELemId) {
  var _this = this;
  this.myButton.addEventListener("click", function(){
    _this.transfer();
  } , false);
};

Select.prototype.transfer = function() {
  var selectedIndex = this.myBox.selectedIndex;
  if (selectedIndex > -1) {
    var option = this.myBox.options[selectedIndex];
    this.myBox.remove(selectedIndex);
    this.transferToBox.add(option);
  }
};

var leftBox = new Select('leftCountry','rightCountry','add-btn');
var rightBox = new Select('rightCountry','leftCountry','rmv-btn');
