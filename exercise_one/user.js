'use strict';

function User(name, age) {
  this.name = name;  
  this.age = parseInt(age, 10);
}


User.prototype.compare = function(user) { 
  var ageDifference = void 0; 
  if (this.age > user.age) {    
    ageDifference = this.name + ' is older than ' + user.name;  
  } else if (this.age === user.age) {
      ageDifference = user.name + ' and ' + this.name + ' are same age';  
    } else {    
      ageDifference = user.name + ' is older than ' + this.name;  
  }
  console.log(ageDifference);
}

User.prototype.log = function() {  
  this.compare(user)
}

var user1 = new User('John', '15');
var user2 = new User('Mary', '70');
user1.compare(user2);