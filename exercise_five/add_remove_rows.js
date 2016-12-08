'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AddRemoveRows = function () {
  function AddRemoveRows(tableId) {
    _classCallCheck(this, AddRemoveRows);

    this.tableId = tableId;
    this.init();
              }

  _createClass(AddRemoveRows, [{
    key: 'init',
    value: function init() {
      var addRowButton = document.getElementById('addRowButton');
      addRowButton.addEventListener('click', function () {
        this.addTableRow(this.tableId);
      }.bind(this));
    }
  }, {
    key: 'addTableRow',
    value: function addTableRow(tableID) {
      var rowCount = tableId.rows.length;
      var row = tableId.insertRow(rowCount);
      var nameBox = this.createTableElement('input', 'text', 'textName');
      var emailBox = this.createTableElement('input', 'text', 'textEmail');
      var saveButton = this.createTableElement('input', 'button', 'saveButton', 'Save');
      var elements = {
        name: nameBox,
        email: emailBox,
        save: saveButton
      };
      saveButton.addEventListener('click', function () {
        if (this.isTextFieldValid(nameBox) && this.isEmailFieldValid(emailBox)) {
          this.saveTableRow(row, elements);
        }
      }.bind(this));
      this.insertTableCell(row, elements);
    }
  }, {
    key: 'insertTableCell',
    value: function insertTableCell(row, elements) {
      Object.keys(elements).forEach(function (element, index) {
        row.insertCell(index).appendChild(elements[element]);
      });
    }
  }, {
    key: 'createTableElement',
    value: function createTableElement(element, type, identifier, value) {
      var tableElement = document.createElement(element);
      tableElement.type = type || '';
      tableElement.name = identifier || '';
      tableElement.value = value || '';
      tableElement.id = identifier;
      tableElement.className = identifier;
      return tableElement;
    }
  }, {
    key: 'saveTableRow',
    value: function saveTableRow(row, elements) {
      var nameValue = document.createTextNode(elements.name.value);
      var emailValue = document.createTextNode(elements.email.value);
      var editButton = this.createTableElement('input', 'button', 'editButton', 'Edit');
      var deleteButton = this.createTableElement('input', 'button', 'deleteButton', 'Delete');
      var buttonElements = document.createDocumentFragment();
      buttonElements.appendChild(editButton);
      buttonElements.appendChild(deleteButton);

      editButton.addEventListener('click', function () {
        this.doEditTableRow(row, nameValue, emailValue);
      }.bind(this));

      deleteButton.addEventListener('click', function () {
        this.doDeleteTableRow(row);
      }.bind(this));

      row.cells[0].replaceChild(nameValue, elements.name);
      row.cells[1].replaceChild(emailValue, elements.email);
      row.cells[2].replaceChild(buttonElements, elements.save);
    }
  }, {
    key: 'doDeleteTableRow',
    value: function doDeleteTableRow(row) {
      if (confirm('Are you sure you want to delete this row?')) {
        this.tableId.deleteRow(row.rowIndex);
      }
    }
  }, {
    key: 'doEditTableRow',
    value: function doEditTableRow(row, nameValue, emailValue) {
      var nameBox = this.createTableElement('input', 'text', 'textName', nameValue.textContent);
      var emailBox = this.createTableElement('input', 'text', 'textEmail', emailValue.textContent);
      var saveButton = this.createTableElement('input', 'button', 'saveButton', 'Save');
      var elements = {
        name: nameBox,
        email: emailBox,
        save: saveButton
      };
      saveButton.addEventListener('click', function () {
        if (this.isTextFieldValid(nameBox) && this.isEmailFieldValid(emailBox)) {
          this.saveTableRow(row, elements);
        }
      }.bind(this));

      row.cells[0].replaceChild(nameBox, nameValue);
      row.cells[1].replaceChild(emailBox, emailValue);
      row.deleteCell(2);
      row.insertCell(2).appendChild(saveButton);
    }
  }, {
    key: 'isTextFieldValid',
    value: function isTextFieldValid(textField) {
      if (textField.value === null || textField.value.trim() === '') {
        alert('You must enter a name before you can save');
        return false;
      }
      return true;
    }
  }, {
    key: 'isEmailFieldValid',
    value: function isEmailFieldValid(emailField) {
      var emailPattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      if (emailField.value === null || emailField.value === '') {
        alert('You must enter an email before you can save');
        return false;
      } else if (!emailPattern.test(emailField.value)) {
        alert('Please enter a valid email before you can save');
        return false;
      }
      return true;
    }
  }]);

  return AddRemoveRows;
}();

var tableId = document.getElementById('dataTable');
new AddRemoveRows(tableId);






