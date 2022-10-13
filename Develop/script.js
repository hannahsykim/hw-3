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
  // Step 1 Ask if how many characters does the user want the password to be?
  // Step 2 Ask if the user wants to use uppercase
  // Step 3 Ask if the user wants to use lowercase
  // Step 4 Ask if the user wants to use numbers
  // Step 5 Ask if the user wants to use special characters

  // Arrange the proper characters and letters and numbers into a data structure that we can extract 
  // A random character for each number of the length
  // Create the structure of potential characters

  // Create the password of "passwordLength" length