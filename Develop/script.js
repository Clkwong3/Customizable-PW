// Assignment code here
// Default length is 8 characters
var charLength = 8;
var userInput = [];

var lowercaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var uppercaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "H",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numericArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

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

// Prompts
function userPrompts() {
  // Reset the array everytime the function is called
  userInput = [];

  charLength = parseInt(
    prompt(
      "How many characters would you like? Choose any number between 8 - 128"
    )
  );
  // NaN = not a number
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("It needs to be a number between 8 and 128. Please try again.");
    return false;
  }

  if (confirm("Do you want to include lowercase letters?")) {
    userInput = userInput.concat(lowercaseArray);
  }

  if (confirm("Do you want to include uppercase letters?")) {
    userInput = userInput.concat(uppercaseArray);
  }

  if (confirm("Do you want to include numbers?")) {
    userInput = userInput.concat(numericArray);
  }

  if (confirm("Do you want to include special characters?")) {
    userInput = userInput.concat(specialCharArray);
  }
  return true;
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

// Write password to the #password input
var inputGathered = userPrompts();

// password will only be generated if prompts are answered correctly
if (inputGathered) {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
