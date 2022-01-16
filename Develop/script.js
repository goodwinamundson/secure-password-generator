// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function clickEvent() {
  // ask user how long they would like their password to be
  var passLength = window.prompt("How many characters would you like your password to be? Choose a number between 8 and 128.");
};
var passLength = randomNumber(8, 128);

var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;