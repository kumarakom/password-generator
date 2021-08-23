// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  // Don't publish undefined on the page if acceptance criteria is not met
  if (password === undefined) return;
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//
function repeatProg () {
  var repeatProg = confirm("Do you want to continue ?");
  if (repeatProg) {
     generatePassword () ;
  } return;
}

// Start of generatePassword function
function generatePassword () {

  // PART 1: Request user input for number of characters for password
  var userLenghtOfPassword = prompt("Please enter the number of characters you want for your password. It must be a number between 8 and 128.");

  // Check if
  // 1) the provided password lenght is a number
  // 2) requested number is a minimum of 8 characters and maximum of 128 characters

      if (isNaN(userLenghtOfPassword)) {
          alert("Error, expecting a number...!!!");
          return repeatProg ();

      } else if (userLenghtOfPassword < 8 || userLenghtOfPassword > 128) {
          alert("Error, must chose between 8 and 128...!!!");
          return repeatProg ();
      } ;

  // --> End PART 1

  // PART 2 : Identify the type of character user prefers, like "uppercase", "lowercase", "numeric" or "special characters"

    // Define the password types allowed
    var passwordValue = ["abcdefghijklmnopqestuvwxyz", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", "0123456789", "()@!#^$%&*"];

    // The second array to provide context when asking questions below
    var passwordTypes = [ "lowercase characters[ab..yz]", "uppercase characters[AB..YZ]", "numeric number characters[01..89]", "special characters[@#!../%]"];

    // Setting the types of passwordTypes user has approved and asking the questions in a for loop
    var charAllowed = "";
    for (var i=0 ; i <= (passwordTypes.length -1); i++){
      var approvedType = window.prompt("Would you like to use " + passwordTypes[i] + ": (y/n)?");
      if (approvedType === 'y' || approvedType === "Y") {
        charAllowed = charAllowed.concat(passwordValue[i]);
      }
    }

    // If none the password types are called, then do not proceed
    if (!charAllowed) {
      alert("Error, expecting atleast one the password type...!!!");
      var goToEnd = 0 ;
    }
  // --> End PART 2

  // Now randomly select a character from the array
  if (goToEnd != 0) {
      var password = "";
      for (var z = 0 ; z < userLenghtOfPassword; z ++) {
        var randomNumber = Math.floor(Math.random() * charAllowed.length);
        // Found an interesting way to use substing to get it done
        // Format: string.substring(start, end)
        password += charAllowed.substring(randomNumber, randomNumber + 1);
      }
  }

  return password; // return the generated password

}  // --> End of function generatePassword
