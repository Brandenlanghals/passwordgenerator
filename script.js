
// Create strings to pull from
var lowerCharacters = "abcdefghijklmnopqrstuvwxyz";
var upperCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numericCharacters = "0123456789";
var specialCharacters = "!#$%&'()*+,-./:;<=>?@[]^_`{}~";

// Combined strings 
var combinedCharacters = [];


// Create user-slected criteria
var userInput = parseInt(prompt(
    "How many characters would you like your password to contain?"
    ));


// confirm boxes
var lowercase = confirm('Click OK to confirm using lowercase characters');
var uppercase = confirm('Click OK to confirm using uppercase characters');
var numbers = confirm('Click OK to confirm using numbers');
var special = confirm('Click OK to confirm using special characters');


function userLength(){

    // Conditional statement to check if password length is a number. 
    if (isNaN(userInput) === true) {
        alert("Password length must be provided as a number");
        return;
    }

    // Conditional statement to check if password length is at least 8 characters long.
    if (userInput < 8) {
        alert("Password length must be at least 8 characters");
        return;
    }

    // Conditional statement to check if password length is less than 128 characters long.
    if (userInput > 128) {
        alert("Password length must less than 129 characters");
        return;
    }

    if (lowercase){
        combinedCharacters += lowerCharacters;
    }
    if (uppercase){
        combinedCharacters += upperCharacters;
    }
    if (numbers){
        combinedCharacters += numericCharacters;
    }
    if (special){
        combinedCharacters += specialCharacters;
    }

      // Conditional statement to check if user does not include any types of characters
    if (
        lowerCharacters === false &&
        upperCharacters === false &&
        numericCharacters === false &&
        specialCharacters === false 
    ) {
        alert("Must select at least one character type");
        return;
    }

}

// Generate random letters from array
function randomLetter (arr) {
    let letter = arr[Math.floor(Math.random() * arr.length)];
    return letter;
}

// Loop through the array 
function generate (arr) {
    userLength();
    var password = " ";
    for(var i = 0; i < userInput; i++) {
        password += randomLetter(arr);
    }
    return password;
}

// Text area ID 
var box = document.getElementById('passTextBox');

// When generate button is clicked send password into text field
generateBtn.onclick = function(){
    var pass = generate(combinedCharacters);
    box.textContent = pass;
}

