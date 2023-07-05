// Assignment code here
// Default length is 8 characters
var charLength = 8;
var lowercaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'H', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numericArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
var specialCharArray = [" ", "!", '"", "#", "$", "%", "&", "'", "(", ")", "*", "[", "]", "+", ",", "-", ".", "/", "\", ':', ';', '<', '>', '=', '?', '@', '^', '_','`', '{', '}', '|', '~'];

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
