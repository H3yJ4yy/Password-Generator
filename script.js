// Assignment Code
var generateBtn = document.querySelector("#generate");

//notes from tutoring:
// var randompass = Math.floor(Math.random() * LcaseChar.length); generates random password from the lchars string
// var LcaseChar = 'abcdefghijklmnopqrstuvwxyz'; string
// console.log (LcaseChar[randompass]) console displays what we've generated

//make sure it contains the prompts for criteria: what characters set they want, and number of characters
function generatePassword(){
alert("Your password must conatain at least one of the following criterias.")
var passwordlength = parseInt(prompt("Please enter a number between 8 and 128 characters for the length of your password"));
if(passwordlength < 8 || passwordlength > 128){ //sets char number min and max
  alert("Please enter a number between 8 and 128.")
  return;
  } 

  //ask the user what kind of characters to use
  var LowercaseChar = confirm("Would you like to include Lower case characters in your password?");
  var UppercaseChar = confirm("Would you like to include Upper case characters in your password?");
  var NumberChar = confirm("Would you like to include Numbers in your password?");
  var SpecialCHar = confirm("Would you like to include Special characters in your password?");
  
  console.log (LowercaseChar, UppercaseChar, NumberChar, SpecialCHar);


  //make sure user uses @ least one char type
  if(!UppercaseChar && !LowercaseChar && !NumberChar && !SpecialCHar) {
    alert("Please select one character type for your secure password.");
    return;
  }

  //catagorizing the different character types
  var LcaseChar = 'abcdefghijklmnopqrstuvwxyz'; //changed name to not conflict with variables above
  var UcaseChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var NChar = '0123456789';
  var SCHar = '!@#$%^&*()-_=+{}[];:,.?<>~';

  // if true it collects the data to add to the userPassword
var userPassword = '';
console.log (userPassword)
  if (LowercaseChar === true){
    console.log ("before", userPassword) // refers to the previous var string as an empty one to add on to
    userPassword += LcaseChar;
    console.log ("after", userPassword) // if true, it will add on to userPassword
  }
  if (UppercaseChar === true){
    console.log ("before", userPassword)
    userPassword += UcaseChar;
    console.log ("after", userPassword)
  }
  if (NumberChar === true){
    console.log ("before", userPassword)
    userPassword += NChar;
    console.log ("after", userPassword)
  }
  if (SpecialCHar === true){
    console.log ("before", userPassword)
    userPassword += SCHar;
    console.log ("after", userPassword)
  }
console.log (userPassword)
 // talk to tutor about

 //will generate and randomize the order of characters
 var newGeneratedPassword = '';
 for (var i = 0; i < passwordlength; i++){
  var randompass = Math.floor(Math.random() * userPassword.length);
  newGeneratedPassword += userPassword[randompass];
  }
console.log(newGeneratedPassword)
  return newGeneratedPassword;
//takes input and randomly generates the new password
}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
