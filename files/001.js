var myButton = document.querySelector('.guillaume_button');
// class and ids need to be given in querySelector with '.' or '#'

var doThis = function() {
  console.log("I clicked you!");
};

myButton.addEventListener('click', doThis);


