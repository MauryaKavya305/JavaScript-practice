//  It displays the output on screen
// console.log("Kavya Maurya")

// Variables and Constants :
// Constants - Represented by keyword 'const'. The value written in const cannot be changed.
//const accountId = 13346677

//console.log(accountId);

//accountId = 2
//console.log(accountId); // gives error so this is not allowed

// Variables - Represented by keyword 'let'. The value written in let can be changed.
// Let is used to declare a block-scoped local variable.
//let accoutEmail = "k204@km.com"
//console.log(accoutEmail)

//accoutEmail = "kittu2401@bibu.com"
//console.log(accoutEmail)    // this prints changed value

// var - It is used to declare a variable, but not recommended for modern code. It is globally scoped which
// means it can be accessed from anywhere in the program.
//var accountPassword = "12345"
//console.log(accountPassword)

//accountPassword = "67890"
//console.log(accountPassword) // this prints changed value

// If too many outputs have to be shown, then console.log becomes inconvenient.
// So to prsent all at once, we group them to table format using console.table

//accountCity = "Bangalore"
//console.table([accountId, accoutEmail, accountPassword, accountCity])

// Earlier, JS older version do not have any features but are written . But now, modern JS has many
// features like arrays, classes, objects etc. So to write in modern way, we write
//"use strict" // treats code as newer verision

// alert :
// It displays the output in a dialog box
// alert("Hello World")
// Note : It is done when writing code for browser. It will not work in node.js

// Data Types in JS : It defines the type of data that can be stored in a variable.

// Primitive Data Types :
// String : written in ""
// Number : written without ""
// bolean : true or false
// null : empty value. it is a standalone value as value is defined but not given i.e empty
// undefined : value not assigned
// Symbol : used to create unique identifiers for objects. mostly used in React

// To find types of any variable, we use typeof operator
//let accountName = "Kavya Maurya"
//console.log(typeof accountName) // it prints string

//console.log(typeof "Kavya") // it prints string
//console.log(typeof null) // it prints object (it is a bug in JS)

// Data Types Conversion :

/*
let value = 100
console.log(typeof value) // it prints number

value = String(100) // converts number to string
console.log(typeof value) // it prints string

value = "1234ABC"
console.log(typeof value) // it prints string
value = Number("1234ABC") // converts string to number. If string has any char, it gives NaN as value
console.log(value) // it prints NaN
console.log(typeof value) // it prints number

value = Number(null)
console.log(value) // it prints 0

value = Number(undefined)
console.log(value) // it prints NaN
console.log(typeof value) // it prints number

value = Number(true)
console.log(value) // it prints 1

value = Number(false)
console.log(value) // it prints 0

// Any value in "" gives boolean true while empty "" gives false.
*/

// Operations :

// Basic operations
//console.log(2 + 2);
//console.log(2 - 2);
//console.log(2 * 2);
//console.log(2 / 2);
//console.log(2 ** 3);
//console.log(2 % 3);

//let s1 = "Kavya"
//let s2 = " Maurya"
//let s3 = s1 + s2
//console.log(s3);    // gives Kavya Maurya

// Main confusion in concatenation occurs here :
//console.log("1" + 2);   // gives 12

//console.log(1 + "2");   // gives 12

//console.log("1" + 2 + 2);   // gives 122

//console.log(1 + 2 + "2");   // gives 32

// This is because the answer depends on first input given to system. According to it, the output will
// differ. In first log, first input was string, so whole answer was given by concatenating.
// In second log, first input was integer, which sum 1,2 and concat last 2.

// Comparison Operators :

//console.log(2 > 1); // gives true
//console.log(2 < 1); // gives false
//console.log(2 == 1);    // gives false
//console.log(2 != 1);    // gives true

// Now there are certain cases where we see a different behaviour or result from normal one which might
// be confusing.

// == is called Loose Coercion which performs type coercion before comparing
// === is called Strict Coercion which compares directly without coercing.

// When both operands are string, then no conversion happens. Its comparison is done on basis of
// lexicography.
//onsole.log('5' > '12');    // gives True as 5 > 1

//console.log("abc" > "abd"); // gives False as ab are commmon in both but c < d

//console.log('Z' < 'a');     // gives True as uppercase < lowercase

// When one operand is string and other is number, then JS converts string to number and then compare.
//console.log('2' > 1);       // gives True

//console.log('02' == 2);     // converts 02 string to number 2 and compare which gives True

//console.log('0' == false);  // converts 0 to number and false value is 0 so gives True.

// console.log('true' == true)    // gives False as true value is 1 and 'true' value is NaN.

// comparison operators work differently for null
//console.log(null > 0)     // gives False
//console.log(null == 0)    // gives False
//console.log(null >= 0)    // gives True

// === operators strictly checks the comparisons. If the value as well as data type is equal, then return
// true, else false.

// About Symbols :
// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId) // gives false as both are different symbols even if values is same;

// Overview of non-primitive data types :

// 1. Arrays : It is a collection of multiple values in a single variable.
// It is represented by [] brackets.
// It can store multiple values of different data types.
// It is an object in JS.
// It is mutable i.e we can change the values inside it.

// const myArr = [1, 2, 3, "Kavya", true]
// console.log(myArr) // gives [ 1, 2, 3, 'Kavya', true ]
// console.log(typeof myArr) // gives object

// 2. Objects : It is a collection of key-value pairs.
// It is represented by {} brackets.
// It can store multiple values of different data types.
// It is mutable i.e we can change the values inside it.

// const person = {
//     name: "Kavya Maurya",
//     age: 22,
//     isEmployed: true,
//     hobbies: ["Reading", "Traveling", "Coding"]
// }
// console.log(person) // gives { name: 'Kavya Maurya', age: 22, isEmployed: true, hobbies: [ 'Reading', 'Traveling', 'Coding' ] }
// console.log(typeof person) // gives object

// 3. Functions : It is a block of code designed to perform a particular task.
// It is represented by function keyword.
// It is reusable i.e we can call it multiple times.

// const myFunction = function() {
//     console.log("Hello World");
// }
// myFunction() // gives Hello World
// console.log(typeof myFunction) // gives function

// Memory in JS :

// There are two types of memory in JS : Stack and Heap

// Stack : It stores primitive data types and references to objects and functions.
// It is faster to access.
// It has a limited size.
// Primitive data is stored in stack memory.

// Heap : It stores objects and functions.
// It is slower to access.
// It has a larger size.
// Non-primitive data is stored in heap memory.

// Strings in JS :
// It is a collection of characters enclosed in single or double quotes.
// The older method to write strings is :
// let str1 = "Hello"
// let str2 = ' World'
// console.log(str1 + str2 + " from Kavya Maurya");

// For modern JS, wwe use the syntax :
// const str1 = "Hello"
// const str2 = "Kavya Maurya"
// console.log(`${str1} from ${str2}`) // gives Hello from Kavya Maurya

// Here, we use backticks `` and ${} to embed variables inside strings.

// String is also created using Constructor fucntion of String class.
// It creates a string object instead of a string primitive.
// let s = new String("Kavya Maurya")
// console.log(s) // gives [String: 'Kavya Maurya']
// console.log(typeof s) // gives object

// Multi-Line Strings :
// In older version, we use \n to create a new line.
// let multiLine = "Hello World\n from \n Kavya Maurya"
// console.log(multiLine)

// In modern version, we use backticks `` to create a new line.
// let multiLine = `Hello World
// from
// Kavya Maurya`
// console.log(multiLine)

// let multiLine2 = "Hello World
// from
// Kavya Maurya"
// console.log(multiLine2) // gives error

// Member Methods :

// 1. slice() : slice(startIndex, endIndex): Takes two arguments: startIndex (inclusive) and
//endIndex (exclusive).
// let key = "Kavya Maurya"
// console.log(key.slice(0, 5)) // gives Kavya , here 5 is index

//2. substr() : substr(startIndex, length): Takes two arguments: startIndex and length of the
//substring.
// let key = "Kavya Maurya"
// console.log(key.substr(0, 5)) // gives Kavya, here 5 is length

// replace()
//replace() replaces a part of the given string with another string or a regular expression.
// const website = "https://dau.maurya.bibu.maurya.19-24@yahoo.com"
// console.log(website)

// const anotherWebsite = website.replace('maurya', 'morya')
// console.log(anotherWebsite);


// replaceAll()
//replaceAll() returns a new string after replacing all the matches of a string with a specified string 
// or a regular expression.
// const secondWebsite = website.replaceAll('maurya', 'morya')
// console.log(secondWebsite);

// toUpperCase()
//toUpperCase() converts all the characters present in the String to upper case and returns a new String
//  with all characters in upper case.

// toLowerCase()
//toLowerCase() converts all the characters present in the so lowercase and returns a new string with all
//  the characters in lowercase.

//concat()
//concat() combines the text of two strings and returns a new combined or joined string. To concatenate 
// two strings, we use the concat() method on one object of string and send another object of string as a 
// parameter. This method accepts one argument. The variable contains text in double quotes or single 
// quotes.

//trim()
//trim() is used to remove either white spaces from the given string. This method returns a new string
//  with removed white spaces. This method is called on a String object. This method doesn't accept any 
// parameter.
// let name = "   Kavya   Maurya  CSIOT  "
//console.log(name.trim()) // gives "Kavya   Maurya  CSIOT"
// This removes only starting and ending spaces, not the spaces in between.

//trimStart()
//trimStart() removes whitespace from the beginning of a string. The value of the string is not modified
//  in any manner, including any whitespace present after the string.

// To check the character at cerain index 
// charAt() is used
//let name = "Kavya"
//console.log(name.charAt(2)) // gives v as output

// To find the index of certain character in string
// indexOf() is used
//console.log(name.indexOf('y')) // gives 3 as output

// includes() is used to check if certain character is present in string or not
// const name = "Kavya Maurya"
// console.log(name.includes('Maurya')) // gives true as output
// console.log(name.includes('morya')) // gives false as output

// Numbers in JS :

// we can define a number explicitly also by :
// const balance = 100
// console.log(balance) // gives 100

// const val = new Number(12)
// console.log(val) // gives [Number: 12]
// This explicitly casts and shows that given input is a number.

// To convert this number to string, we use toString() method
// console.log(val.toString()) // gives 12
// console.log(typeof val.toString()) // gives string
// This converts number to string
//console.log(val.toString().length)

// To round off the number to nearest integer, we use toFixed() method
// console.log(val.toFixed(2)) // gives 12.00
// console.log(typeof val.toFixed(2)) // gives string
// This converts number to string and rounds it off to 2 decimal places

// To give a number which is precise upto certain decimal places, we use toPrecision() method
// const otherNumber = 48.5836
// console.log(otherNumber.toPrecision(3)) // gives 48.6
// console.log(otherNumber.toPrecision(2)) // gives 49
// console.log(otherNumber.toPrecision(4)) // gives 48.58
// This rounds off the number to given decimal places and returns a string

// If there is any number which has many zereos, but we could not read, so for that , we have :
// const hundreds = 1000000
// console.log(hundreds.toLocaleString()); // returns string 
// This gives the read number in USA format.
// For Indian format read, we write :
//console.log(hundreds.toLocaleString('en-IN'));

// Maths in JS :

// console.log(Math.abs(-24));     // gives absolute value 24
// console.log(Math.round(4.1));   // gives 4
// console.log(Math.round(4.8));   // gives 5
// console.log(Math.round(4.5));   // gives 5
//console.log(Math.random());     // gives random values between 0 and 1

// If we want to draw any random number between any 2 numbers, then for that we had a formula :
// let min = 10
// let max = 20

// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

// Date and Time in JS : 
// const myDate = new Date()
// console.log(myDate);    // gives the date which is unable to read format
// // so try out to read by converting in string format

// console.log(myDate.toString());     // gives date and time

// console.log(myDate.toDateString());     // gives only date

// console.log(myDate.toISOString());      
// console.log(myDate.toJSON());

// console.log(myDate.toLocaleDateString());   // gives date which is written in normal times

// console.log(myDate.toLocaleString());       // gives date and time written in normal times

// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// We can also give our own date.
// const newDate = new Date(2007, 4, 9)
// console.log(newDate);
//console.log(newDate.toDateString());

//  To give the date in yy-mm-dd format, we write it as : 
// const newDate = new Date("2002-04-19")
// console.log(newDate.toLocaleString());

// We can also find the timestamp from this :
// const myStamp = Date.now()
// console.log(myStamp);       // this gives a long bigint num which tells milliseconds from starting date
// To convert the time in seconds , we do it as :
//console.log(Math.floor(Date.now() / 1000));

// Now if we want any particular info from date or time, then we use it like : 
// const newDate = new Date()
// console.log(newDate);

// console.log(newDate.getDate());

// console.log(newDate.getTime());

// console.log(newDate.getMonth());

// console.log(newDate.getFullYear());

// console.log(newDate.getMinutes());

// Arrays in JS :

// some characteristic properties of array are as follows :
// 1. Arrays are resizable which means can be increased or decreased.
// 2. Arrays can contain items of different data types.
// 3. Arrays have 0-baseds indexing.
// 4. Most array copying methods create shallow copies of arrays. A shallow copy of an array means if any
// changes are done in copied array , then that changes are also reflected in original array too.

// Other way of creating the array is by using Array keyword
// const myArr = new Array(1, 2,6,7,8)
// console.log(myArr);

// Methods in array :
// 1. push
// myArr.push(10)
// console.log(myArr);

//2. pop
// myArr.pop()
// console.log(myArr);

// 3. unshift : adds element at starting of array
// myArr.unshift(22)
// console.log(myArr);

// 4. shift : removes first added element from array
// myArr.shift()
// console.log(myArr);

// 5. includes : check whether an element is present or not.
//console.log(myArr.includes(22));    // returns boolean value

// 6. indexOf : check the indx of element. if not present, returns -1.
//console.log(myArr.indexOf(22));

// 7. join : The join() method in JavaScript converts all elements of an array into a single string,
// with a specified separator between each element.
// syntax is : arr.join(separator)
// separator (optional):
//The string you want to insert between each element.
// If omitted, the default separator is a comma (,).

// 8. slice : returns subarray with including first num and excluding 2nd num of range.
//console.log("A", myArr);
//console.log(myArr.slice(1, 3));     
// returns the answer from the copy of an array.

// 9. splice : do the changes of subarray in original array itself.
// console.log(myArr.splice(2, 6));
// console.log(myArr);  

// 10. concst : to combine 2 arrays and return a new array
//const newArr = new Array('Kavya', 'Bibu')
// const allArr = myArr.concat(newArr)
// console.log(allArr);

// other way of doing this operation is by using spread operator denoted by "..."
// const allArr = [...myArr, ...newArr]
// console.log(allArr);

// 11. to make an array from another variable , use keyword 'from'.
//console.log(Array.from("Kavya Maurya"));

// to make aray from dictionary like-object where key-value pair are given, then we need to clear
// from where do we have to make an array.

// let score1 = 100
// let score2 = 200
// let score3 = 300
// let score4 = 400
// let score5 = 500

//console.log(Array.from(score1, score2, score3, score4, score5));    // gives error as from does not 
// take multiple values, instead of this, we use 'of' keyword.
//console.log(Array.of(score1, score2, score3, score4, score5)); 

// Objects in JS :

//An object in JavaScript is a collection of key–value pairs (also called properties).
//Each key (also known as a property name) is a string or symbol, and its value can be anything — 
// number, string, array, function, or even another object.

// There are 2 ways to declare an object.
// 1. Object Literal : easiest way to delcare an object.

// let obj = {
//   key1: value1,
//   key2: value2
// };

// let student = {
//   name: "Kavya",
//   age: 20,
//   college: "NSUT"
// };

// console.log(student.name); // "Kavya"

// 2. Object Constructor
// let obj = new Object();
// obj.key1 = value1;
// obj.key2 = value2;

// To access objects, we have 2 notations : 
// 1. Dot Notation :
// console.log(student.name)

// 2. Bracket Notation :
// console.log(student["name"])

// Note : If any key in key-value pair is given in "", then there is no way to access its value using 
// dot notation. That value is only accessible through Bracket Notation.

// If we want to use symbol in object, then we have to do it like this :
// const mysym = Symbol("key1")

// let student = {
//   name: "Kavya",
//   mysym: "newkey1",
//   age: 20,
//   college: "NSUT"
// };

// console.log(mysym);
// console.log(typeof mysym);
// other way of accessing symbol is first to define it as [mysm], and then print [mysym].

// if we don't want to edit or change our value, then we use freeze function on object.
//Object.freeze(student)
// student.name = 'Bibu'
// console.log(student);

// student.greeting  = function() {
//   console.log("Hello Kavya Maurya");
// }
// console.log(student.greeting());
// if we want to add the name or any other key name of the object, then we use 'this' keyword.
// student.greetingTwo  = function() {
//   console.log(`Hello, ${student.name}`);
// }
// console.log(student.greetingTwo());

// student.greetingTwo  = function() {
//   console.log(`Hello, ${this.name}`);
// }
// console.log(student.greetingTwo());

// We can also access objects under the objects by nested objects.
// const regularUser = {
//   email : "someone@gmail.com",
//   fullname : {
//     userfullname : {
//       firstname : "Kavya",
//       lastname : "Maurya"
//     }
//   }
// }

// console.log(regularUser.fullname);
// console.log(regularUser.fullname.userfullname);
// console.log(regularUser.fullname.userfullname.firstname);

// We can also combine 2 or more objects in one by :
// const obj1 = {1 : 'a', 2 : 'b', 3 : 'c'}
// const obj2 = {4 : 'd', 5 : 'e', 6 : 'f'}

//const obj3 = {obj1, obj2}
//console.log(obj3);    // this gives the object present inside the object but does not combine correctly.

// const obj3 = Object.assign(obj1, obj2)
// console.log(obj3);

// But a good practice is to put an empty parenthesis as to tell the target place.
// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3);

// But the best method to do this is our ... style
// const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// sometimes whenever we need to check in a loop whether the given value exists or not, then we use :
// console.log(obj1.hasOwnProperty('3'));
// console.log(obj1.hasOwnProperty('8'));

// Destructuring of Object :

// const course = {
//   coursename : "Javascript",
//   courseamount : '999',
//   courseteacher : "hitesh sir"
// }

// one format of accessing the value is 
//console.log(course.coursename);
// But, if we want to print this value many times, then it becomes irrelevant to rewrite the long 
// sentences many times. For the good readibility, we use :
// const {courseteacher : sir} = course
// console.log(sir);

// API :
// An API, or Application Programming Interface, is a set of rules that allows different software 
// applications to communicate and exchange data with each other. It acts as a middleman, defining 
// how one program can request information or functionality from another.
// This allows developers to integrate services from different applications instead of building 
// everything from scratch.  

// Earlier, APIs were read using XML which were very complicated to read. But ow, it's been read with 
// the use of JSON. And it looks like :
// {
//   "coursename" : "Javascript",
//   "courseamount" : '999',
//   "courseteacher" : "hitesh sir"
// }

// other way of getting an API is in the form of array. 
// A random sample of an API is :
// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "Jennie",
//         "last": "Nichols"
//       },
//       "location": {
//         "street": {
//           "number": 8929,
//           "name": "Valwood Pkwy",
//         },
//         "city": "Billings",
//         "state": "Michigan",
//         "country": "United States",
//         "postcode": "63104",
//         "coordinates": {
//           "latitude": "-69.8246",
//           "longitude": "134.8719"
//         },
//         "timezone": {
//           "offset": "+9:30",
//           "description": "Adelaide, Darwin"
//         }
//       },
//       "email": "jennie.nichols@example.com",
//       "login": {
//         "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//         "username": "yellowpeacock117",
//         "password": "addison",
//         "salt": "sld1yGtd",
//         "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//         "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//         "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//       },
//       "dob": {
//         "date": "1992-03-08T15:13:16.688Z",
//         "age": 30
//       },
//       "registered": {
//         "date": "2007-07-09T05:51:59.390Z",
//         "age": 14
//       },
//       "phone": "(272) 790-0888",
//       "cell": "(489) 330-2385",
//       "id": {
//         "name": "SSN",
//         "value": "405-88-3636"
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/men/75.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//       },
//       "nat": "US"
//     }
//   ],
//   "info": {
//     "seed": "56d27f4a53bd5441",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }

// to understand this api for beginners, we use tools like JSON Formatter.

// Functions in JS :

//In JavaScript, a function is a reusable block of code designed to perform a specific task. 
// Functions are fundamental building blocks for organizing, modularizing, and reusing code within a 
// JavaScript application. 

// function addTwoNumbers(num1, num2) {
//   console.log(num1 + num2); 
// }

// addTwoNumbers(5, 2)

// here, we cannot determine whether the given inputs are int typ or othrs.
// the inputs given during making of a function i.e. num1 and num2 are called parameters of function.
// and the values passed during calling of a function are called arguments of function.

// To store the answer in a vairable and then to print that variable, we do it like :
// function addTwoNumbers(num1, num2) {
//   let result = num1 + num2
//   return result
// }
// const answer = addTwoNumbers(5, 3)
// console.log(answer);
// if we write to print something after return, then it would not work as after return is written, 
// nothing is printed.

// Another example of function is :
// function userLogin(username) {
//   return `${username} logged in successfully. `
// }
// console.log(userLogin("Kavya Maurya"));

// if we do not pass any arguments, then it gives undefined in output.

// to use if else  in function :
// function userLogin(username) {
//   if (!username) {
//     console.log("Please enter your username");
//     return
//   }
//   return `${username} logged in successfully. `
// }
// console.log(userLogin("Kavya Maurya"));
// console.log(userLogin());

// if we made a function in which we didn't know how many parameters are going to come, then we use :
// function addCartsPrice(...nums1) {
//   return nums1
// }
// console.log(addCartsPrice(100, 200, 3000, 4040 ,550, 5403));
// ... here is called rest operator

// To pass an object into a Function :
// const user = {
//   name : "Kavya",
//   number : 8191909090
// }

// function handleObject(anyObject) {
//   console.log(`Username is ${user.name} and his/her phone number is ${user.number}`);
// }
// handleObject(user)

// Scopes in JS :
// In JavaScript, scope defines the accessibility and visibility of variables, functions, and objects 
// within different parts of your code. It determines where and how you can use these elements.

// There are three main types of scope in JavaScript:
// Global Scope:
// Variables and functions declared outside of any function or block are in the global scope.
// They are accessible from anywhere in the entire program.
// Excessive use of global variables can lead to naming conflicts and make code harder to maintain.

// Block Scope (Local Scope for let and const):
// Introduced with ES6, let and const keywords create block-scoped variables.
// A block is defined by curly braces {} (e.g., if statements, for loops, or simply standalone blocks).
// Variables declared with let or const inside a block are only accessible within that specific block and
//  its nested blocks. They are not accessible outside of that block.

// Function Scope (Local Scope for var):
// Variables declared with var inside a function are said to have function scope.
// They are only accessible within that specific function and its nested functions.
// They are not accessible from outside the function.

// Nested ScOPE :
// function one () {
//   const username = "Kavya Maurya"
//   function two () {
//     const website = "youtube"
//     console.log(username);  // inner scope can access the key-property of outer scope but 
//     // outer scope cannot access that of the inner one.
//   }
  //console.log(website); // gives error as website is not accessible here.
//   two()
// }
// one()

// console.log(addOne(5))

// function addOne(num) {
//   return num + 1
// }
// This threw no error if we write the calling function upwards.

// other way of writing the function is by assigning function to a variable

// const addTwo = function(num) {
//   return num + 2
// }

// console.log(addTwo(5))

// console.log(addTwo(5))

// const addTwo = function(num) {
//   return num + 2
// }
// this gives error as it says can't access value before initialisation.
// the second way of writing the function is called Expression.

// Arrow Functions in JS :

// To understand the arrow function, first understand This keyword. 
// This keyword is used to refer to the current context.

// const user = {
//   username : "Kavya",
//   price : 999,
//   welcomeMessage : function () {
//     console.log(`Hey ${this.username}, Welcome to the Website!`)
//   }
// }
// user.welcomeMessage()
// user.username = "Bibu"
// user.welcomeMessage()

// Note : Earlier Javascript was done inside browser only. So, the very first global object of browser
// is Window.

// This keyword is working fine inside Object, but not inside Function.
// To make this keyword work fine in Function, we use Arrow Function.
// const chai = () => {
//   let username = "Kavya"
//   console.log(this.username);
// }
// chai()


// this code gives output undefined 
// this is because this function is defined in the global scope and in global scope, this keyword
// refers to Window object which does not have any username property.
// To make this work fine, we define this function inside an object.

// this keyword should not be used with arrow function as said by GPT.

// Arrow function is just a function to write the normal code in shorter and cleaner manner.
// Normal function : 
// function add(a, b) {
//   return a + b
// }
// console.log(add(6, 29))

// Explicitly returned arrow function :
// const Add = (a, b) => {
//   return a + b
// }
// console.log(Add(6, 29))

// Implicitly returned arrow function :
// const add1 = (a, b) => (a + b)
// console.log(add1(6, 29))

// IIFE (Immediately Invoked Function Expression) :
// It simply means — a function that runs as soon as it is defined.

// Normal Function : 
// function greet() {
//   console.log("Hello, Kavya!");
// }

// greet(); // You have to call it separately

// IIFE :
// (function greet1() {
//   console.log("Hello, Kavya!");
// })(); // The function is invoked immediately after its definition

// Why do we use IIFE?

// The main purposes are:
// To avoid polluting the global scope - Variables inside an IIFE are private — they don’t leak into the 
// outer scope.
// To execute code immediately

// here Polluting the global scope means adding too many global variables —
//so that different parts of your code (or different scripts) might accidentally overwrite each other’s 
// variables. IIFEs solve this by creating their own private scope.

// While writing IIFE in Function, putting semicolon at the end is necessary.

// Arrow Functions IIFE can also be used.
// (() => {
//   console.log("Hey Kavya! This is an arrow IIFE.");
// })();

// this is called unnamed IIFE. while the iife function with name are called named IIFE.

// JavaScript Execution Context :
// while forming a file in javascript, mainly 2 types of execution happens
// 1. Global Execution Context
// 2. Function Execution Context

// Javascript runs the given code into 2 phases: 
// 1. Memory Creation Phase - space is created for memory
// 2. Execution Phase - code is executed.

// Control Flow in JS :
// If statement :
// if (3 != 2) {
//   console.log("Condition is true");
// }

// if (3 == 2) {
//   console.log("Condition is executed");
// }

// Note : == operator is used to check only value, not datatype. 
// while === operator is used to check both value and datatype.

// if - else statement (Known)
// if - else - if ladder statement (Known)
// switch case statement (Known)

// while writing conditions in if statement, we also have some falsy conditions. these are 
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// So, whenever any of these values are given in if condition, it returns false.
// All other values are truthy values which return true in if condition.

// Nullish Coalescing Operator
// The Nullish Coalescing Operator is used to provide a default value when a variable is either:
// null or undefined

// syntax is value = variable ?? defaultValue;
// it  means “If variable is null or undefined, use defaultValue. Otherwise, use variable.

// example 1 : 

// let username = null;
// let defaultName = "Guest";

// let name = username ?? defaultName;
// console.log(name); // "Guest"

// example 2 : 

// let price;
// let finalPrice = price ?? 100;
// console.log(finalPrice); // 100

// example 3 : 

// let price = 0;
// let finalPrice = price ?? 100;
// console.log(finalPrice); // 0 

// Ternary Operator :
// its syntax is 
// condition ? true : false

// For loop in JS :
// for (let index = 0; index < 5; index++) {
//   const element = index;
//   console.log(element);
// }

// While Loop (Known)
// do - while loop (Known)

// for of loops
// This loop is generally used to iterate inside arrays or strings.
// Syntax :
// for(const val of string) {};

// const arr = [1 ,2 ,3, 4, 5]
// for (const i of arr) {
//   console.log(i);
  
// }

// for in loops
// This loop is generally used to iterate inside objects.
// Syntax :
// for(let key in object) {};
// Example :
// student = {
//   name: "Ram",
//   age: 20,
//   cgpa: 9.2,
//   isPass: true
// };

// for(let i in student) {
//   console.log(i);
// }

// Output: name age cgpa isPass
// This means that for in operator returns the keys of the object.
// to print its value too, we write it as:
// console.log(key, student[key]);
// This gives output: name Ram, age 20, cgpa 9.2, isPass true

// Maps in JS: It remembers the key- value pairs and remembers the original insertion order of the pair
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('FR', "France")
//console.log(map);
// it ignores the duplicate data and print it once.
// we can use for of loop by printing key and value separately as :
// for (const [key, value] of map) {
//   console.log(key, ':', value);
// }

// [key, value] is not iteratable on Objects.

// to iterate on objects, we use for in loop.
// for in loop :
// const languages = {
//   'html' : "hyper text markup language",
//   'css' : "cascading StyleSheets",
//   'rb' : "ruby"
// }

// for (const key in languages) {
//   console.log(`the full form of ${key} is ${languages[key]}`);
// }

// for in loop is not operatable on maps.

// for each loop :
// const coding  = ["js", "ruby", "java", "cpp", "python"]
// coding.forEach(function(val) {
//   console.log(val);
// })

// in arrow function, it can bewritten as :
// coding.forEach((val) => {
//   console.log(val);
// })

// Note : for each loop does not return the value.

// const nums = [1, 2, 3, 4, 5, 6]
// const numbers = nums.filter((num) => num > 3)
// console.log(numbers);

// other way of writing this is :
// const ans = nums.filter((val) => {
//   return val > 3
// })
// console.log(ans);

// filter function in JS :

//The .filter() method is used to create a new array containing only those elements that satisfy a 
// given condition (i.e., the callback function returns true).
// It does not modify the original array — it returns a new one.

// const books = [
//   {title : 'Book One', genre : 'Fiction', publish : 1981, edition : 2004},
//   {title : 'Book Two', genre : 'Non-Fiction', publish : 1992, edition : 2008},
//   {title : 'Book Three', genre : 'History', publish : 1999, edition : 2007},
//   {title : 'Book Four', genre : 'Non-Fiction', publish : 1989, edition : 2010},
//   {title : 'Book Five', genre : 'Science', publish : 2009, edition : 2014},
//   {title : 'Book Six', genre : 'Fiction', publish : 1987, edition : 2010},
//   {title : 'Book Seven', genre : 'History', publish : 1986, edition : 1996},
//   {title : 'Book Eight', genre : 'Science', publish : 2011, edition : 2016},
//   {title : 'Book Nine', genre : 'Non-Fiction', publish : 1981, edition : 1989},
// ]

// const userBooks = books.filter((bk) => bk.genre === 'History')
// const userBooks = books.filter((bk) => { return bk.publish >= 2000 })
// const userBooks = books.filter((bk) => bk.genre === 'History' && bk.publish >= 1996)
// console.log(userBooks);

// Map function in JS :
// The .map() method is used to create a new array by applying a function to each element of an
// existing array.
// It does not modify the original array — it returns a new one.

// const numbers = [1, 2, 3, 4, 5]
// const squaredNumbers = numbers.map((num) => num * num)
// console.log(squaredNumbers);

// // other way of writing this is :
// const squaredNumbers1 = numbers.map((val) => {
//   return val * val
// })
// console.log(squaredNumbers1);

// reduce function in JS :
// The .reduce() method is used to reduce an array to a single value by applying a function to
// each element of the array, accumulating the result.
// It does not modify the original array — it returns a new value.

// const values = [1, 2, 3, 4, 5]
// const sum = values.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
// console.log(sum);

// const shoppingCart = [
//   {
//     itemName : "js course",
//     price : 2999,
//   },

//   {
//     itemName : "py course",
//     price : 999,
//   },

//   {
//     itemName : "mobiledev course",
//     price : 5999,
//   },

//   {
//     itemName : "data science course",
//     price : 1999,
//   }
// ]

// const pricePay = shoppingCart.reduce((accumulator, item) => accumulator + item.price, 0);
// console.log(pricePay);


// DOM (Document Object Model) in JS :
// It is a tree-like structure that represents your HTML page in the browser.
// Think of it as the bridge between your JavaScript code and the web page.
// When this page loads in the browser, JavaScript doesn’t directly see this HTML text.
// Instead, the browser converts it into the DOM, a structured object tree

// Because every dynamic website — whether you click a button, fill a form, or open a popup — 
// works by manipulating the DOM with JavaScript.

// while learning DOM, when we have title and performed some operations on it.
// title.innerContent, title.innerHTML and title.innerText gives the same content of HTML.
// However, they are not same. 

// innerText - Returns or sets the visible text inside an element. It triggers reflow 
// (recalculates styles), so it’s a bit slower.

// textContent - Returns or sets all text content, even hidden ones. It does not care about CSS 
// visibility. It’s faster because it doesn’t trigger reflow or style calculation.

// innerHTML - Returns or sets the HTML markup inside the element.

// we came to know about method getElementById.
// Now , we see the important method which will be used in real life. it is querySelector().
// It selects the query which is coming first in the Web Page.

// querySelectorAll() selects all the query at a single time. Its return type is NodeList, which is not
// exactly an array, but a kind of array on which array methods can be used.
// to convert that nodeList into array, we do : 
// Array.from()

// Note : parent.children property gives us the HTML collection.

// other properties used are :

// firstElementChild gives the first child of the parent class.

// lastElementChild gives the last child of the parent class.

// parentElement gives the parent class of the input child.

// nextElementSibling gives the next occuring child of the same parent class.

// childNodes gives the number of child nodes in a parent class. And it not the same number that we 
// think while counting child nodes. It is easily understandable if we get to know about its tree.

// we can also create an element through createElement().

// If we want to create any node and insert some text, then we do it like this :
// div.innerText = "kavya maurya"

// But to optimise its time , we can do :
// const output = document.createTextNode("kavya maurya")
// we can use createTextNode() in such case.

// To append any child to parent node, we use appendChild() method.
// for example , we did :
// function addLanguage(langName) {
//         const li = document.createElement('li');
//         li.innerHTML = `${langName}`;
//         document.querySelector('.language').appendChild(li);
//   }
//   addLanguage("python");
//   addLanguage("java")

// here, we created li element and then added some text to it. Finally, we appended that li to the
// parent class language.

// But , this takes more time as whole tree is traversed and then appended.
// To optimise this, we do :
// function addOptiLanguage(langName) {
//         const li = document.createElement('li');
//         li.appendChild(document.createTextNode(langName));
//         document.querySelector('.language').appendChild(li);
//   }
//   addOptiLanguage("C++");
//   addOptiLanguage("Typescript");

// Edit elements in DOM :

// we have different methods to edit elements in DOM.
// 1. first, select the element which we want to edit. And then change the innerHTML.

// 2. select the element, and then create a new element and name its value through  TextContent. And then
// replace it with selected element one.

// 3. select the element, and then create a new element and name its value through  innerHTML. And then
// replace it with selected element one.

// Remove elements in DOM :
// to remove this, first select the element and then use remove() method.

// Events in JS :

// An event is simply an action or occurrence that happens in the browser, and JavaScript can respond to 
// it. In simple words — Events are things that happen to elements on a web page, and JavaScript lets 
// you react to those things.

// Example actions that are “events”:

// A user clicks a button 🖱️

// A user hovers the mouse over an image 🖼️

// A user types into an input field ⌨️

// A web page loads completely 🌐

// A form is submitted 📤

// A key is pressed ⌨️

// to perform any event, thre are certain methods thorugh which we can do :
// First one is :
// document.getElementById('RR Ghost').onclick = function () {
//         alert("RR GHOST ")
// }

// But this method is not as helpful.

// Second one is to use EventListener as it not only fives onclick functionality but also gives the 
// ability of propogation which we will discuss later.
// document.getElementById('RR Ghost').addEventListener('click', function() {
//         alert("RR GHOST - MANSION ON WHEELS")
// }, false)

// Third one is by using attachEvent() which was used very earlier, but not now.

// Fourth one is onEventListener() present in jQuery which is also not best.

// Now, when we check out the event function, then there comes many properties of events.
// Some of the helpful event properties are :

// type - types of events
// timestamp - tells time and date of event
// defaultPrevented - changes the default behaviour of event
// target
// toElement
// srcElement
// currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrilkey, shiftkey, keyCode

// Now , we will talk about Event Propogation.
// in this, we passed the last parameter as false which is default.
// so, actually, there are 2 contexts in event propogation - Event Bubbling and Event Capturing.

// Event Bubbling means when an event occurs from inside to outside. for this, we write false

// Event Capturing means when an event occurs from outside to inside. for this, we write true.

// if we want to stop any event propagation, then we use e.stopPropagation().

// if we want to prevent any event from happening like not to open an anchor tag, then we use 
// e.preventDefault().



// Async JavaScript : 
// Javascript is a synchronous language which means all events and funtions or codes occur sequentially.
// Also, it is single threaded language. This is for default Javascript.
// Its execution context is it executes one line of code at a time.

// There are 2 types of codes present in javascript:Blocking code and Non-blocking code.
// blocking code blocks the flow of program. while non-blocking code does not block execution.
// example of blocking code is Read File sync. And example of non-blocking code is Read File Async.


// SetTimeout() contains parameters Handler which is a callback function which does not have a name.
// another parameter is timeout. So setTimeout() function does any work after a certain time .

// to stop this timeout function, we use function clearTimeout().

// setTimeIntevel function() is also similar to setimeout function. Just the difference is 
// it continuously repeats that event.
// to stop this infinite occuring function, we use clearTimeIntervel() function.



// API Request :
// Earlier, we were requesting to get the APIs, now its been done with the help of Fetch().
// In earlier times, for this work, we uses XMLHTTPRequest.
// XMLHttpRequest objects are used to interact with servers. You can retrieve data from a URL without having
// to do a full page refresh. This enables a Webpage to update just part of a page without disrupting
// what the user is doing.
// It is used mainly in AJAX (Asynchronous Javascript And XML) programming. 

// it has instance attributes and properties too.
// An example of XMLHttpRequest attribute property is readyState property.
// it returns the state an XMLHttpRequest client is in. The states are :

// State 0 (UNSENT) : Client has been created but request is not sent yet.
// State 1 (OPENED) : Request is being sent.
// State 2 (HEADERS_RECEIVED) : Return message has came but not seen yet.
// State 3 (LOADING) : The response is getting load.
// State 4 (DONE) : the operation is done completely.


// The xhr.responseText is a read-only string property that contains 
// the raw, text-based data received from a server after an 
// XMLHttpRequest (XHR) request has completed.

// The xhr.open() method is used to initialize an XMLHttpRequest object, preparing
//  it to send a network 
// request. it has 2 paramters; method and url.

// to check the state of process, we use readyState property.
// The xhr.readyState property holds the current status of an XMLHttpRequest 
// (XHR) request as it progresses through its lifecycle. It changes from 0 
// (unsent) to 4 (done) during the process, and you can track these changes
//  using the onreadystatechange event handler.

// when we will try to get data from object came from request, it gives undefined.
// this is because the data came from request comes in form of string data type.
// so first we have to convert it into json format and then find out data.
// to change to json , we do : 
// const data = JSON.parse(this.responseText);


// About console.log :
// In reality, console is actually not the part of Javascript. Actually, console.log
// is a debugging tool for DevTools. It is injected during the runtime.



// Promises in JS :
// the promise object represents the eventual completion or failure of an asynchronous operation and its 
// resulting value.
// A promise can be said as a proxy or a value not necessarily known when the promise is created. it allows
// you to associate handlers with an asynchronous actions eventual success value or failure reason. 
// this lets asynchronous methods return values like synchornous methods, instead of immediately returing 
// the final value, it returns a promise to supply the value at some point of time in future.

// a Promise can have 3 states :
// 1. Pending - it is initial state, neither promise is fulfilled nor rejected.
// 2. Fulfilled - operation is completed successfully.
// 3. Rejected - operation got failed.

// const promise1 = new Promise(function(resolve, reject) {
//   // do an async task like DB Calls, cryptography tasks, network calls
//   setTimeout(function() {
//     console.log("Async task is complete");
//     resolve();
//   }, 2000)
// });

// this is a syntax or say a way of creating a promise.

// to consume a promise, we do 
// promise1.then(function() {
//     console.log("Promise consumed");
    
// })
// then method is directly related to 'resolve' parameter. we get a callback function inside then method.
// that callback automatically receives an argument that returns the value coming from timeout.

// in output, we get the timeout statements, but not of then. This is because we had not connected resolve
// and then yet. for this, call the resolve method.


// we can do the above work without making variables and storing in it. like - 
// new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     console.log("Async task");
//     resolve();
//   }, 1000)

// }).then(function() {
//   console.log("Promise completed");
// })

// const promise3 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve({username : "Chai", email : "Chai@example.com"})
//   }, 1000)
// })

// promise3.then(function(user) {
//   console.log(user);
// })

// from this, we get to know that the parameter that we will pass in resolve function will be found in then function.

// const promise4 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     let error = false;

//     if(!error) {
//       resolve({username : "Kavya", password : "1234"});
//     } else {
//       reject('Error. Something went wrong!');
//     }
//   }, 1000)
// })

// const username = promise4.then((user) => {
//   console.log(user);
//   return user.username;
// });
 // here reject is directly related to catch() method.
// console.log(username);
// by consoling the variable through which we want to get the returned value gives error. so this syntax is X.

// promise4
// .then((user) => {
//   console.log(user);
//   return user.username
// })
// .then((myusername) => {
//   console.log(myusername);
// })
// .catch(function(error) {
//   console.log(error);
// })
// this syntax is known as Chaining. this syntax is beneficial in database connecttion.

// after this, there is one method which is always run. it is judt like default case of switch statement.
// known as finally method that tells what actually happened at the last.
// .finally(() => console.log("The promise is either resolved or rejected finally."));


// const promise5 = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     let error = true;

//     if(!error) {
//       resolve({username : "Javascript", password : 123});
//     } else {
//       reject('Error : JS went wrong.');
//     }
//   }, 1000)  
// })

// we can consume the promise by using async await also.
// async await waits for some time until the works completes and move forward, else it gives error.
// async function consumePromise5() {
//   const response = await promise5
//   console.log(response);
// }
// consumePromise5();

// when error is false, it works fine. but when error is true, it gives unhandled promise rejection error, 
// as async await cannot handle the error itself. so for this, we use try catch block.

// async function consumePromise5() {
//   try {
//     const response = await promise5;
//     console.log(response);
//   } catch (error){
//     console.log(error);
//   }
// }

// consumePromise5();


// now if we want an await function for an api call , then we do :
// async function fetchUserData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     // here, fetch itself returns a promise that is in string data type, so we can't access directly.
//     // to getdata, we convert to json format using .json() method.
//     // also, .json() method also returns a promise, so we use await again.
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log('Error fetching user data:', error);
//   }
// }
// fetchUserData();

// we can write this using then catch also.
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => console.log(error));



// Fetch in JS :
// in early days, it was difficult to perform asynchronous requests. then internet explorer came with 
// XMLHttpRequest to fetch xml data via HTTP. But as a web grow, it became difficult to work with it.
// then the Fetch API came into existence to make things easier. It was present in web but not on node js.



// Object Oriented in JS :
// Yes, JS have classes but this feature was introduced in ES6. However, it is important to note that JS is
// primarily a prototype based language, and its classes are primarily syntactic sugar over existing prototype
// based mechanisms. 

// const user = {
//   username: "kavya", 
//   loginCount: 8,
//   signedIn: true,
//   getUserDetails: function() {
//     console.log("Got user details from the user");
//   }
// }

// console.log(user.username);
// console.log(user.getUserDetails());



// Prototype in JS :
// not able to understand it this time. May do later onwards...


// Call in JS :
// function setUsername(username) {
//   this.username = username;
// }

// function createUser(username, email, password) {
//   this.email = email;
//   this.password = password;
//   //setUsername(username);
//   //to call it
//   setUsername.call(this, username); 
// }

// const chai = new createUser("chai", "chai@google.com", 123);
// console.log(chai);
// this output shows that username that was called by using another function is not getting output.
// this means that outer function is not called. yet it is confusing. 

// done but need to revise futher as known little not much...


// Classes in JS :
// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   encryptPassword() {
//     return `${this.password}abc`;
//   }

//   changeUsername() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// const chai = new User("kavya", "kavya@123.com", 123);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());


// now all this can be done without using class that we were doing previously and till now.
// function User(username, email, password) {
//   this.username = username;
//   this.email = email;
//   this.password = password;
// }

// User.prototype.encryptPassword = function() {
//   return `${this.password}abc`;
// }

// const tea = new User("tea", "tea@gmail.com", 456);
// console.log(tea.encryptPassword());


// Inheritance in JS :
// class User {
//   constructor(username) {
//     this.username = username;
//   }

//   logMe() {
//     console.log(`User name is ${this.username}`);
//   }
// }

// // extends keyword is used to inherit properties from parent class
// class Teacher extends User {
//   constructor(username, email, password) {
//     super(username);  // take properties from parent class
//     this.email = email;
//     this.password = password;
    
//   }

//   addCourse() {
//     console.log(`A new course was added by ${this.username}`);
//   }
// }

// const chai = new Teacher("chai", "cha@123.com", 123);
// chai.addCourse();

// const masalaChai = new User("masalachai")
// //masalaChai.addCourse();
// masalaChai.logMe();

// console.log(chai === masalaChai);
// // false because chai is made from teacher class and masalachai made from user class.

// console.log(chai === Teacher);
// // false because chai just take an instance from class teacher, not actual class.

// // to check instance
// console.log(chai instanceof Teacher); // gives true

// console.log(chai instanceof User);



// static in JS : it stops the objects to access its properties or methods infront of attribute or method.


// Bind in JS :
//  Like in Call, our reference of this keyword gets lost when any method was initiated.
// same here, only difference is here it do not get lost completely, but present anywhere else.
// for such cases, bind is used.

// need to understand more this topic...


// Getter and Setter in JS :
// class User {
//   constructor(email, password) {
//     this.email = email;
//     this.password = password;
//   }

//   get password() {
//     return this._password.toUpperCase();
//   }

//   set password(value) {
//     this._password = value.toUpperCase();
//   }
// }


// const kavya = new User("kavya@123.com", "45678")
// console.log(kavya.password);

// this gives error as maximum call stack size exceeeded. 
// this is because constructor is also setting the value and setter is also setting. both of them create error.
// this can be rectified by : 
// changing variable name of getter and setter that should be different from constructor.



// Closures : A closure is the combination of a function bundled together with reference to its 
// surrounding state or lexical  environemnt. a closure gives you access to an outer function scope from 
// an inner functiion. in javascript, closures are created every time a function is created at function 
// creation time.


// Lexical Scoping : if a function is present inside a function, then the inner variables can get access
// to outer function scopes. if we want to access it outside function, then it is wrong.
