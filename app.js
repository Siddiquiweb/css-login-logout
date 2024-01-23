document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent form from submitting normally

  // Get form values
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  // Perform any necessary validation

  // Example: Display form values in console
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Message: " + message);

  // Clear form fields
  document.getElementById("myForm").reset();
});
link.onclick = function(event) {
  event.preventDefault(); // Prevent the default link behavior
  // Your JavaScript code here
  // This code will execute when the link is clicked
  alert("Link clicked!");
// };
// var myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function() {
//   // Code to execute when the button is clicked
// });
// myButton.addEventListener("click", function() {
//   location.href ="http://127.0.0.1:5500/index1.html"});

document.getElementById('admissionForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Validate form inputs
  var nameInput = document.getElementById('name');
  var emailInput = document.getElementById('email');
  var courseInput = document.getElementById('course');
  var messageInput = document.getElementById('message');

  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return;
  }

  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
  }
  // const button = document.getElementById("Submit a New Admission FROM");
  // button.addEventListener("click", function() {
  }
// script.js
document.addEventListener("DOMContentLoaded", function() {
  var myButton = document.getElementById("myButton");

  myButton.addEventListener("click", function() {
  location.href="index1.html"
    document.body.style.backgroundColor = "blue";
  });
});

