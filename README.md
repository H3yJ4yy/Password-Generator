# Pasword Generator
The application will intake user feedback into generating a secure password that meets the users criteria.

## Link to website

[Pasword Generator Demo](https://h3yj4yy.github.io/Password-Generator/)

## preview

```bash
function generatePassword(){
alert("Your password must conatain at least one of the following criterias.")
var passwordlength = parseInt(prompt("Please enter a number between 8 and 128 characters for the length of your password"));
if(passwordlength < 8 || passwordlength > 128){ //sets char number min and max
  alert("Please enter a number between 8 and 128.")
  return;
  } 
```

