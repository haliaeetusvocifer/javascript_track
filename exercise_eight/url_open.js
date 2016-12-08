'use strict';

function Url(){
  this.url = '';
  this.newWindowConfig = 'height=450,width=4000,top=10,left=10,status=no,menubar=no,location=no,scrollbars=no,resizable=no,toolbar=no';
  this.open();
}

Url.prototype.open = function(){
  this.acceptUrl();
  window.open(this.url,"newWindow",this.newWindowConfig);
};

Url.prototype.acceptUrl = function(){
  while (this.url == null || this.url.trim().length < 1) {
    this.url = prompt("Enter Url", "");
  }
};

new Url();