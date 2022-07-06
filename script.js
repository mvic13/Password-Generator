// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "" ;


//TODO How long is the password? Make this show up on the screen Should the user be able to type whatever they want? YES 1a. Check if less than 8. This would bad. 1b. Check if greater than 128. This would bad. 1c. Needs to be in between to be valid.
var passwordLength = prompt("How long do you want your password to be?");
passwordLength = parseInt(passwordLength);


console.log (passwordLength);
console.log (typeof passwordLength);

if (passwordLength < 8 || passwordLength > 128) {
  alert ("Length is invalid");
}

//Should the user be able to type whatever they want? No Only acceptable answers are yes or no...so boolean should suffice. Think of confirms.

// Ask for lowercase
var wantsLowercase = confirm ("Do you want lowercase");
console.log(wantsLowercase)
// Ask for uppercase
var wantsUppercase = confirm ("Do you want Uppercase?");
console.log(wantsUppercase)
// Ask for numberic
var wantsNumbers = confirm ("Do you want Numbers");
console.log(wantsNumbers)
// Ask for special characters
var wantsSpecialCharacters = confirm ("Do you want SpecialCharacters");
console.log(wantsSpecialCharacters);


//Make sure user selects at least one of the four confirms. Otherwise you don't know what characters to use to make their password. Can't have a empty password.


  return password ; 
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
