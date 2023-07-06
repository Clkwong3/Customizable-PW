// Assignment code here
// Default length is 8 characters
var charLength = 8;
var userInput = [];

// Strings and array for lower, upper, numbers, and special characters
var lowerString = "abcdefghijklmnopqrstuvwxyz";

var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var numericString = "1234567890";

var specialCharArray = [
  " ",
  "!",
  "#",
  "$",
  "%",
  "&",
  "(",
  ")",
  "*",
  "[",
  "]",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  ">",
  "=",
  "?",
  "@",
  "^",
  "_",
  "`",
  "{",
  "}",
  "|",
  "~",
];

// The red generate button
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var inputGathered = userPrompts();
  var passwordText = document.querySelector("#password");

  // password will only be generated if prompts are answered correctly
  if (inputGathered) {
    var newPw = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = newPw;
  }
}

// Define generatePassword
function generatePassword() {
  var password = "";

  // Math.floor will round any number down to the nearest integer
  // Math.random creates random passwords
  for (var i = 0; i < charLength; i++) {
    var randValue = Math.floor(Math.random() * userInput.length);
    password = password + userInput[randValue];
  }
  return password;
}

// Prompts
function userPrompts() {
  // Reset the array everytime the function is called
  userInput = [];

  charLength = prompt(
    "How many characters would you like? Choose any number between 8 - 128"
  );

  // Close the prompt when user cancels
  if (charLength === null) {
    return;
  }

  // Convert value into a number
  charLength = Number(charLength);

  // NaN = not a number
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("The number must be between 8 and 128. Please try again.");
    userPrompts();
    return;
  }

  // 'concat' joins multiple strings together
  if (confirm("Do you want to include lowercase letters?")) {
    userInput = userInput.concat(lowerString.split(""));
  }

  if (confirm("Do you want to include uppercase letters?")) {
    userInput = userInput.concat(upperString.split(""));
  }

  if (confirm("Do you want to include numbers?")) {
    userInput = userInput.concat(numericString.split(""));
  }

  if (confirm("Do you want to include special characters?")) {
    userInput = userInput.concat(specialCharArray);
  }
  return true;
}
