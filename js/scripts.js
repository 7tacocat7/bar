$(document).ready(function(){
  var age = parseInt(prompt("How many times has the Egyptian god Ra let you Pass Go?"));

  if (age > 21) {
    $('#drinks').show();
  } else if (age === 21)  {
    alert("Congradulations! You are now an adult (sort of...). Get a tatto, while your black out drunk so you can regret it for years to come. Just remeber beer before liquer never been sicker!")
    $('#under-21').show();
  }   else{
    $('#under-21').show();
  }

});
