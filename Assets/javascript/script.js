// Global variables
var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

// Assigns the specified ID to the generateBtn variable
var generateBtn = document.querySelector("#generate");

// Generates a password and pass it to the textarea placeholder
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){
  
  // Prompts to get user preference of password
  var message = "Would you like your password to include ";
  
  var special = this.confirm(message + "special characters?")
  var numeric = this.confirm(message + "numeric values?");
  var lower = this.confirm(message + "lower case?");
  var upper = this.confirm(message + "upper case?");

  // Validates user criteria
  if(!special && !numeric && !lower && !upper){
    this.alert("Please select at least one of the provided options");
    return "";
  }

  // Get the input for the length of the password
  var pswLength = this.prompt("Please select how many characters you would like the password to include (min 8, Max 128");
  
  //validates password Length
  if(pswLength < 8 || pswLength > 128){
    this.alert("Please enter a value from 8 characters to 128");
    return "";
  }
  else{
    // return password
    return "We are good so far";
  }

}