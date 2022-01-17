// Assignment code here
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);

  return value;
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

const specialCharacters = "!@#$%^&*()_+";
const generateButton = document.getElementById('generateBtn')
generateBtn.addEventListener('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// password criteria prompts
function generatePassword() {
  var passwordLength = prompt("How long would you like your password to be?  It must be more than 7 but less than 129.");
    if (passwordLength > 7 && passwordLength < 129) {
      var length = parseInt(passwordLength, 10);
      console.log("length: " + length);
    } else {
      var length = false;
      alert("Invalid Password length");
    }
    
  var numbers = confirm("Would you like numbers in your password?");

  var lowerCases = confirm("Would you like lowercase letters in your password?");

  var upperCases = confirm("Would you like uppercase letters in your password?");

  var special = confirm("Would you like symbols in your password?");

  // this is a minimum count for each input
  var minimumCount = 0;


  var minimumNumbers = "1234567890";
  var minimumLowerCases = "abcdefghijklmnopqrstuvwxyz";
  var minimumUpperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialCharacters = "!@#$%^&*()_+";


  // Generator functions**
  var Array = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 28));
    },

    getLowerCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 28));
    },

    getUpperCases: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 28));
    },

    getSpecialCharacters: function() {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

};

  // Checks to make sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = Array.getNumbers();
    minimumCount++;
  }

  if (lowerCases === true) {
    minimumLowerCases = Array.getLowerCases();
    minimumCount++;

  }

  if (upperCases === true) {
    minimumUpperCases = Array.getUpperCases();
    minimumCount++;

  }

  if (special === true) {
    minimumSpecialCharacters = Array.getSpecialCharacters();
    minimumCount++;

  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";

  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() + 8);

    randomPasswordGenerated += randomNumberPicked;

  }

  // to make sure characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;


  return randomPasswordGenerated;

}