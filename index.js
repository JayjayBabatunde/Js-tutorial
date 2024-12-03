// SHOWING THE VALUE OF AN INPUT IN JAVASCRIPT

// let username;

// document.getElementById('mySubmit').onclick = function() {
//     username = document.getElementById('myText').value;
//     document.getElementById('myH1').textContent = `Hello ${username}`;
// }

// INCREMENT AND DECREMENT AND RESET FUNCTIONS WITH JS

// const decreaseBtn = document.getElementById('decreaseBtn');
// const resetBtn = document.getElementById('resetBtn');
// const increaseBtn = document.getElementById('increaseBtn');
// const countLabel = document.getElementById('countLabel');

// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBtn.onclick = function() {
//     count--;
//     countLabel.textContent = count;
// }

// resetBtn.onclick = function() {
//     count = 0;
//     countLabel.textContent = count;
// }

// RANDOM NUMBER GENERATOR IN JAVASCRIPT

// const myButton = document.getElementById('myButton');
// const label1 = document.getElementById('label1');
// const label2 = document.getElementById('label2');
// const label3 = document.getElementById('label3');
// const min = 1;
// const max = 6;
// let randomNum1;
// let randomNum2;
// let randomNum3;

// myButton.onclick = function() {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1
//     label2.textContent = randomNum2
//     label3.textContent = randomNum3
// }


// IF STATEMENTS 

// const myCheckBox = document.getElementById('myCheckBox');
// const visaBtn = document.getElementById('visaBtn');
// const masterCardBtn = document.getElementById('masterCardBtn');
// const paypalBtn = document.getElementById('paypalBtn');
// const mySubmit = document.getElementById('mySubmit');
// const subResult = document.getElementById('subResult');
// const paymentResult = document.getElementById('paymentResult');


// another way of doing it | IF AND ELSE STATEMENTS | TENARY OPERATORS
// mySubmit.onclick = function() {
//    let message =  myCheckBox.checked ? paymentResult.textContent= 'you are subscribed' : paymentResult.textContent= 'you are not subscribed'
// }

// mySubmit.onclick = function()  {
//     if (myCheckBox.checked) {
//         subResult.textContent = 'You are subscribed';
//     }
//     else {
//         subResult.textContent = 'You are not subscribed';
//     }

//     if (visaBtn.checked) {
//         paymentResult.textContent= 'you are paying with Visa';
//     } else if (masterCardBtn.checked) {
//         paymentResult.textContent = 'You are paying with MasterCard';
//     } else if (paypalBtn.checked) {
//         paymentResult.textContent = 'You are paying with Paypal';
//     } else {
//         paymentResult.textContent = 'youmust select a payment type';
//     }
// }

// SWITCH AN EASIER WAY OF WRITTING IF AND ELSE STATEMENTS

// let testScore = 33;
// let letterGrade;

// switch(true) {
//     case testScore >= 90:
//         letterGrade = 'A'
//         break;

//         case testScore >= 80:
//             letterGrade = 'B'
//             break;

//             case testScore >= 70:
//                 letterGrade = 'C'
//                 break;

//                 case testScore >= 60:
//                     letterGrade = 'D'
//                     break;
   
                    
//                default: 
//                letterGrade = 'F'
   
// }

// console.log(letterGrade);

// let fullName = 'Broseph Code';

// let firstName = fullName.slice(0, fullName.indexOf(' '));
// let lasttName = fullName.slice(fullName.indexOf(' ')+ 1);

// console.log(firstName)
// console.log(lasttName)

// const email = 'Bro1@gmail.com';

// let username = email.slice(0, email.indexOf('@'));
// let extension = email.slice(email.indexOf("@") + 1)

// console.log(username);
// console.log(extension);

// let userName = window.prompt('Enter your username: ');

// console.log(userName);

// userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

// const temp = 20;

// if(temp <= 0  || temp > 30) {
//     console.log('the weather is bad');
// } else {
//     console.log('the weather is good');
// }

// WHILE LOOPS AND DO WHILE LOOPS.

// let loggedIn = true;
// let username;
// let password;

// do {
//     username = window.prompt('Enter your username');
//     password = window.prompt('Enter your password');

//     if (username === 'myUsername' && password === 'myPassword') {
//         loggedIn = true;
//         console.log('you are logged In');
//     } else {
//         console.log('Invalid credentials please try again')
//     }
// } while(!loggedIn)

// FOR LOOPS
// for(let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// console.log('happy New year');

// for(let i = 1; i <= 20; i++){
//     if (i == 13) {
//      break;   
//     } else {
//         console.log(i)
//     }
    
// }

// GUESSING GAME WITH FUNCTIONS AND WHILE LOOPS AND CONDITIONAL STATEMENTS

// const minNum = 1;
// const maxNum = 100;
// const answer = Math.floor(Math.random() * (maxNum -minNum + 1));

// console.log(answer);

// let attempt = 0;
// let guess;
// let running = true;

// while(running) {

//     guess = window.prompt(`Guess a number between ${minNum} - ${maxNum}`);
//     guess = Number(guess);

//     if (isNaN(guess) || guess < minNum || guess > maxNum) {
//         window.alert('pls enter a valid number')
//     } else {
//         attempt++
//         if (guess < answer) {
//             window.alert('too Low try again')
//         } else if (guess > answer) {
//             window.alert('too high try again')
//         } else {
//             window.alert(`correct, the anser was ${answer}, it took you ${attempt} attempts`)
//             running = false;
//         }
//     }
    
// }

// INTRODUCTION TO FUNCTIONS

// function add(x, y) {
    
//     return x + y
// }
// function subtract(x, y) {
    
//     return x - y
// }

// let answer = subtract(2, 3);
// console.log(answer);

// function isEven(number) {
//    return number % 2 === 0 ? true : false
// }

// function isValidEmail(email) {
// return email.includes('@') ? true : false
// }

// console.log(isValidEmail('Bro@fake.com'))
// function1();
// function2();
// function function1() {
//     let x = 1;
//     console.log(x);
// }

// function function2() {
//     let x = 3;
//     console.log(x);
// }


// TEMPERATURE CONVERSION APP IN JAVASCRIPT 

// const textBox = document.getElementById('textBox');
// const toFahrenheit = document.getElementById('toFahrenheit');
// const toCelcius = document.getElementById('toCelcius');
// const result = document.getElementById('result');
// let temp;


// function convert() {

//     if (toFahrenheit.checked) {
//         temp = Number(textBox.value);
//         temp = temp * 9/5 + 32;
//         result.textContent = temp.toFixed(1) + '"F'
//     } else if (toCelcius.checked) {
//         temp = Number(textBox.value);
//         temp = temp / 9/5 - 32;
//         result.textContent = temp.toFixed(1) + '"C'
//     } else {
//         result.textContent = 'select a unit'

//     }
// }

// ARRAYS IN JAVASCRIPT

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.sort().reverse();

// for(let fruit of fruits) {
//     console.log(fruit)
// }

// 2D ARRAYS IN JAVASCRIPT

// const matrix = [[1, 2, 3],
//                 [4, 5, 6], 
//                 [7, 8, 9],
//                 ['0', 0, '#']];

// // matrix[0][0] = 'X';
// // matrix[0][1] = 'O';
// // matrix[0][2] = 'X';

// // matrix[1][0] = 'O';
// // matrix[1][1] = 'X';
// // matrix[1][2] = 'O';

// // matrix[2][0] = 'X';
// // matrix[2][1] = 'O';
// // matrix[2][2] = 'X';

// for(let row of matrix) {
//     const rowString = row.join(' ')
//     console.log(rowString);
// }


// SPREAD OPERATOR ...

// let fruits = ["apple", "orange", "banana"];
// let vegetables = ["Carrots", "celery", "potatoes"]
// let foods = [...fruits, ...vegetables, "eggs", "milk"];


// console.log(foods);

// DICE ROLLER APP

// function rollDice() {

//     const numOfDice = document.getElementById('numOfDice').value;
//     const diceResult = document.getElementById('diceResult');
//     const diceImages = document.getElementById('diceImages');
//     const values = [];
//     const images = [];

//     for(let i = 0; i < numOfDice; i++) {
//         const value = Math.floor(Math.random() * 6) + 1;
//         values.push(value);
//         images.push(`<img src="dice_images/${value}.png">`)
//     }

//     diceResult.textContent = `dice: ${values.join(', ')}`
//     diceImages.innerHTML = images.join(' ');

// }

// PASSWORD GENERATOR WITH JS 

// function generatePassword(length, inclucdeLowercase, includeUppercase, includeNumbers, includeSymbols) {

//     const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
//     const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     const numberChars  = '0123456789';
//     const symbolChars = '!@#$%^&*()_?'

//     let allowChars = '';
//     let password = '';

//     allowChars += inclucdeLowercase ? lowerCaseChars : '';
//     allowChars += includeUppercase ? upperCaseChars : '';
//     allowChars += includeNumbers ? numberChars : '';
//     allowChars += includeSymbols ? symbolChars : '';

//     if (length <= 0) {
//         return `(password length must be at least 1)`
//     } 
//     if (allowChars.length === 0) {
//         return `(At least one set of characters need to be selected)`
//     }

//     for(let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * allowChars.length);
//         password += allowChars[randomIndex];
//     }

//     return password;
// }

// const passwordLength = 12;
// const inclucdeLowercase = true;
// const includeUppercase  = true;
// const includeNumbers = true;
// const includeSymbols = true;

// const password = generatePassword(passwordLength, 
//                                 inclucdeLowercase, 
//                                 includeUppercase, 
//                                 includeNumbers, 
//                                 includeSymbols);

// console.log(`Generated Password: ${password}`);

// CALLBACKS FUNCTIONS
 
// sum(displayPage, 1 ,2);

// function sum(callback, x, y) {
//     let result = x + y;
//     callback(result);
// }

// function displayConsole(result) {
//     console.log(result)
// }

// function displayPage(result) {
//     document.getElementById('myH1').textContent = result;
// }

// FOR EACH

// let fruits = ["apple", "orange", "banana", "coconut"];

// fruits.forEach(upperCase);
// fruits.forEach(display);

// function upperCase(element, index, array) {
//     array[index] = element.toUpperCase();
// }

// function display(element) {
//     console.log(element);
// }

// MAP

// const numbers = [1,2,3,4,5];

// const squares = numbers.map(square);

// console.log(squares)

// function square(element) {
// return Math.pow(element, 2)
// }