// Global variables
var specialCharacters = [ "@", "%", "+", "\\", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", ".", ];
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var lowerCasedCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
var upperCasedCharacters = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", ];

var randomPassword = {
  password: "",
  isSpecial: false,
  isNumeric: false,
  isLower: false,
  isUpper: false
};

// Assigns the specified ID to the generateBtn variable
var generateBtn = document.querySelector("#generate");

// Add event listener to generateBtn button
generateBtn.addEventListener("click", writePassword);

// Generates a password and pass it to the textarea placeholder
function writePassword() {

  // Clear the property Password in case the user wants to repeat the process
  randomPassword.password = "";

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = "";
  console.log("Password reset: " + passwordText.value);

  passwordText.value = password;
  console.log("Password: " + passwordText.value);
}

function generatePassword(){
  
  // Prompts to get user preference of password
  var message = "Would you like your password to include ";
  
  randomPassword.isSpecial = this.confirm(message + "special characters?")
  randomPassword.isNumeric = this.confirm(message + "numeric values?");
  randomPassword.isLower = this.confirm(message + "lower case?");
  randomPassword.isUpper = this.confirm(message + "upper case?");

  // Validates user criteria
  if(!randomPassword.isSpecial && !randomPassword.isNumeric && !randomPassword.isLower && !randomPassword.isUpper){
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
    getRandomPsw(pswLength);
    return randomPassword.password;
  }
}

// Create a random Password
function getRandomPsw(pswLength){
  
  var fullArray = [];

  // Concadenate to fullArray based on user preferences
  if(randomPassword.isSpecial){
    fullArray = fullArray.concat(specialCharacters);
  }

  if(randomPassword.isNumeric){
    fullArray = fullArray.concat(numericCharacters);
  }

  if(randomPassword.isLower){
    fullArray = fullArray.concat(lowerCasedCharacters);
  }

  if(randomPassword.isUpper){
    fullArray = fullArray.concat(upperCasedCharacters);
  }

  for(let i = 0; i < pswLength; i++){
    // Generates random number between 0 and the value of the array length
    let index = Math.floor(Math.random() * fullArray.length)

    // Insert into the password Property a random value from the array
    randomPassword.password = randomPassword.password.concat(fullArray[index]);
  }
}