// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. We defined the variable number and set the value to a number value of 1. Then we used the incremental operator to add the number value 1 to the variable number, which equal 2. 
//Lastly we use a conditional statement to determine if our variable number is greater or equal to 2, which it is. Then we console log 'yes'.
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


// 1. We define the variable name and set the value to a string 'Dane'. 
//Then we use conditional if else statements and determine if the name variable is a true exact match to the string value 'Mary' then we console log 'Hi Mary'. 
//Otherwise, using the else statment and console.log 'How do you do?' if the name variable is any other string value, which is what this code does.
// 
// 
// 
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. We define a variable called secret but haven't added a value to it yet. Then we define another variable called code with the number value of 123. 
// Then we use an if conditional statement to determine whether the variable code has an exact match of the number value 123.
//If this is true, then the variable secret gets assigned the value of 'super' and the the variable code is multiplied by 2. There's a second if conditional statement.
//For this one if the code variable's value is more than 250 then the variable super is assigned the value 'duper'.
//Finally we console log the value of the variable secret which is 'super'.

// 
// 
//

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

// 3. The variable isStudent is defined with the boolean value of true. The variable age is defined with the number value of 34.
//And the variable zip is defined with the number value of 55407. Next we use an if statement to determine if the isStudent variable's value is an exact match to the boolean value true,
//and also the zip variable is greater than 8000. If so then we console.log 'You're a student on the West Coast!'. After this, is an else if statement,
//that determines whether the variable isStudent is a exact match to the boolean value of false or the age variable has a value less than 30 then we console.log 'What are your hobbies?'.
//Thirdly, there's another else if conditional statement, that checks if the isStudent variable is an exact match to the true boolean value then we console.log 'Welcome to Prime'.
//Lastly, there's an else statement that runs if none of the conditional statements previously were run. And for this we console.log 'How about the weather?'.
// 
// 
// 
//

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
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

//FIX - Only colorOne was set to 'purple' not both colorOne and colorTwo.
//Should be if (mix === true) {
  colorOne = colorTwo = 'purple';
}

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

//FIX - We should use the compound conditional && instead of || which means or, since we want to check if both the temp and time conditions are true.
//Should be, if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}

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

//FIX - We should switch what is logged to the console for the if and else conditional statements.
// Instead of 'no entry' when minAge is less than or equal to age it should log 'enter'. 
//And for the else conditional statement it should log 'no entry' if minAge isn't less than or equal to the age.
//Should be, if(minAge <= age) {
  console.log('enter');
} else {
  console.log('no entry');
}

/*
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

