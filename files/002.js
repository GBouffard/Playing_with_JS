var button1 = document.getElementsByClassName("b1")[0];

var button2 = document.getElementById('b2');

var myFunction1 = function() {
  console.log('You clicked 1');
};
button1.addEventListener('click', myFunction1);

var myFunction2 = function() {
  console.log('You went over 2');
};
button2.addEventListener('mouseover', myFunction2);