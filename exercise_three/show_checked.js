'use strict';

/*
  get the selected checkbox,
  select max of 3,
  when max is reached, alert user
  clear selection
*/




function ShowChecked(myForm, checklLimit) {
  this.checklist = [];

  this.myForm = myForm;

  this.checklLimit = checklLimit;

  
  this.myForm.forEach(function (checkbox) {
    checkbox.addEventListener('click', function(e) {
      var target = e.target;
      console.log(target);
      this.validCHeckBoxes(target);
    }.bind(this))
  }.bind(this));


  this.checklLimit.addEventListener ('click', function(e) {
    var target = e.target;
    if (target.checked) this.handleNone();
  }.bind(this));
}


ShowChecked.prototype.validCHeckBoxes = function validCHeckBoxes(target) {
  if (this.checklist.length > 3 && target.checked) {
    target.checked = false;
    alert('You have reached a max of 3 myForm ' + this.checklist.join(', '));
  } else if (target.checked) {
    this.checklLimit.checked = false;
    this.checklist.push(target.name);
  } else if (!target.checked) {
    var index = this.checklist.indexOf(target.name);
    this.checklist.splice(index, 1);
  }
}

ShowChecked.prototype.handleNone = function handleNone() {
  this.checklist.length = 0;
  this.myForm.forEach(function (checkbox) {
    checkbox.checked = false;
  });
}

var myForm = document.querySelectorAll('#Wednesday,#Monday,#Tuesday,#Thursday,#Friday,#Saturday,#Sunday');
var checklLimit = document.querySelector('#None');
var newcheck = new ShowChecked(myForm, checklLimit);

