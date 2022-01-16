// Assignment code here
// function to generate a random number
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

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

function generatePassword() {
  // ask user how long they would like their password to be
  var passLength = prompt("How long would you like your password to be? Choose a number between 8 and 128.");
  // ask if user wants numbers
  var numbers = confirm("Would you like NUMBERS in your password?");
  // ask if user wants lowercase letters
  var lowerCase = confirm("Would you like lowercase letters in your password?");
  // ask if user wants uppercase letters
  var upperCase = confirm("Would you like UPPERCASE letters in your password?");
  // ask if user wants special characters
  var special = confirm("Would you like special characters in your password?");

  var minimumNumbers = "1234567890";
  var minimumLowerCase = "abcdefghijklmnopqrstuvwxxyz";
  var minimumUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var minimumSpecial = "!@#$%^&*()_+";
};

