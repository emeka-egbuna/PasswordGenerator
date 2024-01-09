// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var size = undefined;
var numerals = false;
var upperCase = false;
var lowerCase = false;
var specialChars = false;

var passwordObj = [
  { 'option': numerals,
    'array': numericCharacters },
  { 'option': upperCase,
    'array': upperCasedCharacters },
  { 'option': lowerCase,
     'array': lowerCasedCharacters },
  { 'option': specialChars,
     'array': specialCharacters }
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Retrieve password length from user
  size = prompt("Please enter the length for your password between 8 and 128");

  // Set defualt password size
  if (size < 8 || size > 128) {
    size = 12;
  }
  
  if (size == null) {
    return -1;  // -1 exit code
  }

  if (size.length != null && size != null && size != undefined) {
    // Numerals
    passwordObj[0].option = confirm("Add numerals for your password");
    // upperCase
    upperCase = passwordObj[1].option = confirm("Add upper case caracters for your password");
    // lowerCase
    lowerCase = passwordObj[2].option = confirm("Add lower case caracters for your password");
    // specialChars
    passwordObj[3].option = confirm("Add special caracters for your password");

    // Lower case default
    if (lowerCase == false && upperCase != true) {
      lowerCase = true;
    }
  }
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex;
  var length;
  var innerArr = [];

  length = arr.length;
  // Returns a random integer from 0 to length of arr:
  randomIndex = Math.floor(Math.random() * arr.length);
  if(!Array.isArray(arr[randomIndex])){
    innerArr[0] = arr[randomIndex];
    arr[randomIndex] = innerArr;
  }

  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var passwordContainer = "";
  var arrayValue;
  var optionsArr = [];
  var index = 0;

  if(getPasswordOptions() == -1){
    return;
  }

  for(var i=0; i<passwordObj.length; i++) {
    if(passwordObj[i].option != false) {
      optionsArr[index++] = passwordObj[i].array;
    }
  }

  for(var i=0; i<size; i++) {
    arrayValue = getRandom(optionsArr);

    //for(value in arrayValue) {
      passwordContainer += getRandom(arrayValue);
    //}
  }
  
  return passwordContainer;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
