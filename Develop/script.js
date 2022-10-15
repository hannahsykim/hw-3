// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

// Alphabet, Numbers, Special Characters
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = uppercase.map(letter => letter.toLowerCase())
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "|", ";", ":", "'", ",", ".", "<", ">", "/", "?", "~", "`"]

function getRandomInt(max) {
  return Math.ceil(Math.random() * max)
}

// Function to generate password
function generatePassword () {
 // Step 1 Ask if how many characters does the user want the password to be?
  var passwordLength = parseInt(prompt("How many characters would you like your password to be? must be (8-128)", "12"))
    console.log(passwordLength);
    if (!passwordLength || passwordLength<8 || passwordLength>128) {
      alert("The length of your password must be greater than 8 characters and less than 128 characters.")
      return generatePassword ()
    }
  // Step 2 Ask if the user wants to use uppercase
  var useUpperCase = confirm("Would you like to use uppercase letters?")
    console.log(useUpperCase);
  // Step 3 Ask if the user wants to use lowercase
  var useLowercase = confirm("Would you like to use lowercase letters?")
    console.log(useLowercase);
  // Step 4 Ask if the user wants to use numbers
  var useNumbers = confirm("Would you like to use numbers?")
    console.log(useNumbers);
  // Step 5 Ask if the user wants to use special characters
  var specialCaseChar = confirm("Would you like to use special characters?")
    console.log(specialCaseChar);

  // Create the structure of potential characters
  var possibleChar = []
    if (useUpperCase){
      possibleChar = possibleChar.concat(uppercase)  
    }

    if (useLowercase){
      possibleChar = possibleChar.concat(lowercase)
    }
  
    if (useNumbers){
      possibleChar = possibleChar.concat(numbers)
    }

    if (specialCaseChar){  
      possibleChar = possibleChar.concat(special)
    }

  // Create the password of "passwordLength" length
  var generatedPassword = ""
    for (var i = 0; i < passwordLength; i++) { 
      var randomIndex = Math.floor(Math.random()* possibleChar.length)
      var randomChar = possibleChar[randomIndex]
      generatedPassword += randomChar
    }

  return generatedPassword
}