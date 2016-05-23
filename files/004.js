var button = document.querySelector('.grootButton');

button.addEventListener('click', function() {
  var yourName = prompt("Please enter your name", "I am Groot!");
  yourName=="I am Groot!" ?  console.log('You are...lying!') : console.log("z\'up " + yourName +' ?');
});
