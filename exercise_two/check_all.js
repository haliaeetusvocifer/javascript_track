'use strict';


function ClassName(checkAll) {  
  this.init()
}

ClassName.prototype.toggleChecks = function(swap){
  var boxes = document.getElementsByClassName("chk");
  for(var i = 0; i < boxes.length; i++){
    if(swap == true){
      boxes[i].checked = true;
    }else{
      boxes[i].checked = false;
    }
  }
}

ClassName.prototype.init = function(){
  var el = this;
  var check_all_switch = document.getElementById("check_all_switch");
  check_all_switch.onchange = function(){
    if(check_all_switch.checked == true){
      el.toggleChecks(true);
    }else{
      el.toggleChecks(false);
    }
  };
}


var myCheck = new ClassName();
myCheck.init();
