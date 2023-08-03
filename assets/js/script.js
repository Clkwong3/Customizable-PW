var charLength = 8;
var userInput = [];

// Strings for lower, upper, numbers, and special characters
var lowerString = "abcdefghijklmnopqrstuvwxyz";
var upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericString = "1234567890";
var specialCharString = ` !"#$%&'()*+-,./:;<=>?@[]^_|{}~`;

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
    passwordText.value = newPw;
  }
}

// Prompts
function userPrompts() {
  // Reset the array every time the function is called
  userInput = [];

  charLength = prompt(
    "How many characters would you like? Choose any number between 8 - 128"
  );

  // Close the prompt when the user cancels
  if (charLength === null) {
    return false;
  }

  // Convert value into a number
  charLength = Number(charLength);

  // NaN = not a number
  if (isNaN(charLength) || charLength < 8 || charLength > 128) {
    alert("The number must be between 8 and 128. Please try again.");
    return false;
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
    userInput = userInput.concat(specialCharString.split(""));
  }

  if (userInput.length === 0) {
    alert("Please select at least one character set.");
    return false;
  }

  return true;
}

// Define generatePassword
function generatePassword() {
  var password = "";

  // Make sure at least one character from each category is added
  var hasLower = false;
  var hasUpper = false;
  var hasNumber = false;
  var hasSpecial = false;

  // Add characters from the userInput array to the password
  for (var i = 0; i < charLength; i++) {
    var randValue = Math.floor(Math.random() * userInput.length);
    var char = userInput[randValue];

    if (!hasLower && lowerString.includes(char)) {
      hasLower = true;
    } else if (!hasUpper && upperString.includes(char)) {
      hasUpper = true;
    } else if (!hasNumber && numericString.includes(char)) {
      hasNumber = true;
    } else if (!hasSpecial && specialCharString.includes(char)) {
      hasSpecial = true;
    }

    password += char;
  }

  // Add missing characters from each category if necessary
  if (!hasLower) {
    password += lowerString.charAt(
      Math.floor(Math.random() * lowerString.length)
    );
  }
  if (!hasUpper) {
    password += upperString.charAt(
      Math.floor(Math.random() * upperString.length)
    );
  }
  if (!hasNumber) {
    password += numericString.charAt(
      Math.floor(Math.random() * numericString.length)
    );
  }
  if (!hasSpecial) {
    password += specialCharString.charAt(
      Math.floor(Math.random() * specialCharString.length)
    );
  }

  // Make sure the length is correct
  password = password.slice(0, charLength);

  return password;
}
