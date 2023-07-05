// Assignment code here
// Default length is 8 characters
var charLength = 8;
var lowercaseArray = [];
var uppercaseArray = [];
var numericArray = [];
var specialCharArray = [];

// The red generate button
var generateBtn = document.querySelector("#generate");

// Define generatePassword
function generatePassword() {
  console.log("red button clicked");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
