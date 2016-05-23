var button1 = document.getElementsByClassName('myButton1')[0];
var button2 = document.getElementsByClassName('myButton2')[0];

function runThis(word) {
  console.log(word);
};

button1.addEventListener('click', runThis('yo'));
button2.addEventListener('click', runThis('yeah'));
// This DOES NOT WORK