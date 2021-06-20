// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable called 'name' and set it to a string, 'Dane'.
// We check if the 'name' is equal to 'Mary', if it does we will console log 'Hi Mary!'
// If it is not equal to 'Mary', which it is not, we will console log 'How do you do?'
// since the variable, 'name' is not 'Mary' , we will console log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We make a variable called secret, but we don't set it to anything yet.
// We make another variable called 'code' and set it equal to the number 123.
// We check if 'code' is equal to the number 123, if it is we will assign the 
// string 'super' to the variable secret and multiply 'code' by 2.
// the variable 'code' is in fact equal 123
// We then check if code is less than the number 250, which it is, and so it will assign 
// the string duper to the variable secret
// We console log 'duper'

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We make a variable called isStudent and set it equal to true
// We make another variable called age and set it equal to the number 34
// We make another variable called zip and set it equal to the number 55407.
// We check if the variable isStudent is exactly equal to true and the zip is less then 80000, 
// If it is true, which it is, we will console log out `You're a student on the West Coast!`
// Otherwise, we check if isStudent is false or age is less then 30 
// and will console log 'What are your hobbies?'. This condition is false so we dont log this out.
// Next we check if isStudent is equal to true, and if it is, we console logs 'Welcome to Prime!'
// The condition is true so we console log this
// Otherwise if none of the above conditions is true, we console log 'How about the weather?'
// Two of the above conditions is true so we don't console log 'How about the weather?'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*
// FIX - the instructions say colorOne is blue and colorTwo is red 
// Should be: 
// let colorOne = 'blue';
// let colorTwo = 'red';

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
// FIX - the instructions say time is a variable, nothing about a const
// Should be: let time = 4;
let temp = 40;
const time = 4;

// FIX - the instructions say 'and' not 'or'
// Should be if (temp > 39 && time >= 4)
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - the instructions say if true, the condition should console log 'enter'
// the instructions also state age before minAge in the condition 
// Should be: 
// if(age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

