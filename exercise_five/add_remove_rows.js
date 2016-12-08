'use strict';

function Contact(name,email){
  this.init('','');
}

function init(){
  table = document.getElementById('table');
  table.border = 1;

  var addBtn = document.getElementById('addNewItem');
  addBtn.addEventListener("click",function() {
    //this.disabled = true;
    var contact = new Contact('','');
    contact.formify();
    table.tBodies[0].appendChild(contact.holdingRow);
    contact.index =  table.tBodies[0].rows.length - 1;
  },false);
}

Contact.prototype.flushColumns = function(){
  this.columnOne.innerHTML = '';
  this.columnTwo.innerHTML = '';
  this.columnThree.innerHTML = '';
};

Contact.prototype.giveValues = function(){
  this.nameField.value = this.name;
  this.emailField.value = this.email;
};

Contact.prototype.updateSpans = function(){
  this.nameSpan.innerText = this.name;
  this.emailSpan.innerText = this.email;
};

Contact.prototype.display = function() {
  this.updateSpans();
  this.flushColumns();
  this.columnOne.appendChild(this.nameSpan);
  this.columnTwo.appendChild(this.emailSpan);
  this.columnThree.appendChild(this.editButton);
  this.columnThree.appendChild(this.deleteButton);
};

Contact.prototype.formify = function(){
  this.giveValues();
  this.flushColumns();
  this.columnOne.appendChild(this.nameField);
  this.columnTwo.appendChild(this.emailField);
  this.columnThree.appendChild(this.saveButton);
};

Contact.prototype.unformify = function(){
  this.name = this.nameField.value;
  this.email = this.emailField.value;
  this.display();
};

Contact.prototype.saveData =  function () {
  if (this.nameField.value.length < 1 || this.emailField.value.length < 1) {
    alert('Incomplete Details.');
  } else if( !this.emailField.checkValidity()  || !(/(.+)@(.+){2,}\.(.+){2,}/gi.test(this.emailField.value)) ) {
    alert('Please provide a valid email.');
  } else {
    this.unformify();
  }
};

Contact.prototype.init = function (name, email){
  var _contact = this;
  this.name = name;
  this.email = email;
  this.holdingRow = document.createElement("tr");
  this.columnOne = makeACell();
  this.columnTwo = makeACell();
  this.columnThree = makeACell();
  this.nameSpan = document.createElement("span");
  this.emailSpan = document.createElement("span");
  this.nameField = document.createElement("input");
  this.emailField = document.createElement("input");
  this.emailField.type = "email";
  this.editButton = makeAButton("Edit");
  this.deleteButton = makeAButton("Delete");
  this.saveButton = makeAButton("Save");
  this.saveButton.addEventListener("click", function(){
    _contact.saveData(_contact);
  } , false);
  this.editButton.addEventListener("click", function(){
    _contact.formify();
  } , false);
  this.deleteButton.addEventListener("click", function(){
    table.tBodies[0].removeChild(_contact.holdingRow);
    //table.tBodies[0].deleteRow(_contact.index);
  } , false);
  this.holdingRow.appendChild(this.columnOne);
  this.holdingRow.appendChild(this.columnTwo);
  this.holdingRow.appendChild(this.columnThree);
  this.index = 0;
};


function makeAButton(text) {
  var button =  document.createElement("button");
  if (text) {
    button.innerText = text;
  }
  return button;
}

function makeACell(value) {
  var td =  document.createElement("td");
  if (value) {
    td.innerText = value;
  }
  return td;
}

var table;

init();
