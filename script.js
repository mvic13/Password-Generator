// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //TODO Generate Password and other logic here
  
 generateBtn = prompt("How long do you want your password to be? please choose a number greater than 8 and less than 128.")
  if (generateBtn < 8) {
   alert ("Password length was not met") 
  }
  else {
    confirm ("would you like lowercase?")
  }



}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
