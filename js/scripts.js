$(document).ready(function(){
  var age = parseInt(prompt("How many times has the Egyptian god Ra let you Pass Go?"));
  if (age>= 21) {
    $('#drinks').show();
  } else{
    $('#under-21').show();
  }
});
