// Assignment code here
// Variables for different password options
var lowerCase = 'abcdefghijklmnopqrstuvwxyz'
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var numeric = '0123456789'
var specials = '!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // Variables with prompts for each password option
  var initial = alert('Please choose these options for a random password.');
  var low = prompt('Would you like lowercase in your password? Y/N');
  var upper = prompt('Would you like uppercase in your password? Y/N');
  var numbers = prompt('Would you like numbers in your password? Y/N');
  var special = prompt('Would you like special characters in your password? Y/N');
  var lengthPassword = prompt('Choose a length for your password between 8 and 128.');

  // Accumulator variable that accumulates a long string depending on 'if' statement results.
  var passwordString = '';
  if(low === 'Y' || low === 'y'){
    passwordString += lowerCase;
  }
  if(upper === 'Y' || upper === 'y'){
    passwordString += upperCase;
  }
  if(numbers === 'Y' || numbers === 'y'){
    passwordString += numeric;
  }
  if(special === 'Y' || special === 'y'){
    passwordString += specials;
  }

  // Check to see if this accumulates the write string dependent on options chosen.
  // console.log(passwordString);

  // Function given to us which I used to generate the password depending on the length chosen.
  function generatePassword(){

    // New empty string to accumulate result
    var generated = '';  

    // If statement that checks for length criteria with a nested for loop inside of it.
    if(lengthPassword >=8 && lengthPassword <=128){
      for(var i= 0; i < lengthPassword; i++){
        generated += passwordString[Math.floor(Math.random() * passwordString.length)];

        //Check to see if it generated a password length that corresponds with the length chosen.
        // console.log(generated);
      }
    }else {
      alert('Please choose a valid length between 8 and 128 and try again.');
    }

    return generated;
  }
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
