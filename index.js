// var myName = "kaif";
// var myAge = "22";
// console.log(myAge);

// var myAge = 22;
// console.log(myAge);

// console.log(typeof(myAge));

// var iAmkaif = true
// console.log(iAmkaif);

// console.log(typeof(iAmkaif));

// console.log(10 + "20");

// 9 - "5"
// console.log(9 - "5");

// console.log(false - true);


// Difference between null vs undefined?

// var iAmUseless = null;
// console.log(iAmUseless);

// var iAmStandby;
// console.log(iAmStandby);
// console.log(typeof (iAmStandby));

// var myPhoneNumber = 8999861632;
// var myName = "kaif";

// console.log(myPhoneNumber);

// console.log(myName);

// NaN === NaN
// Number.NaN === NaN;
// isNaN(NaN);
// isNaN(Number.NaN);
// Number.isNaN(NaN);

// console.log(Number.isNaN(NaN));

// console.log(3 ** 3);

// var a = 5;
// var b = 10;

// console.log(a=b);

// output b=5; a=10;
// var a = 5;
// var b = 10;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("the value of a is" + a);
// console.log("the value of a is" + b);

// var year = 2020;
// debugger
// if (year % 4 === 0) {
//     if (year % 100 === 0) {
//         if (year % 400 === 0) {
//             console.log("the year " + year + "is a leap year");
//         } else { console.log("the year " + year + "is not a leap year"); }
//     } else {
//         console.log("the year " + year + "is a leap year");
//     }
// } else {
//     console.log("the year " + year + "is not a leap year");
// }

//(1) if..else

// var age = 19;
// if (age > 18) {
//     console.log("you are eligible to vote");
// } else {
//     console.log("you are not eligible to vote");
// }
//   (2)
// var age = 18;
// console.log((age > 18) ? "you can vote" : "you are not eligible to vote");

// // case
// (3) switch statement

// var area = "cricle"
// var PI = 3.142, l = 5, b = 4, r = 3;

// switch (area) {
//     case 'cricle':
//         console.log("the area of the circle is : " + PI * r ** 2);
//         break;
//     case 'triangle':
//         console.log("the area of the triangle is : " + (l * b) / 2);
//         break;
//     case 'recangle':
//         console.log("the area of the circle is : " + (l + b));
//         break;
//     default:
//         console.log("please enter valid data");
//         break;
// }

// (4) while Loop statement

// var num = 0;
// // block scope
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// (5) Do-while Loop statement

// var num = "0";

// do {
//     console.log(num);
//     num++;
// } while (num < 10);

// (6) For Loop

// for (var num = "0"; num < 10; num++) {
//     console.log(num);
// }

// (6) challenge Time
// JavaScript program to print table for given Number (8)?

// for (var num = 1; num <= 10; num++) {
//     var tableof = 8;
//     console.log(tableof + "*" + num + "=" + tableof * num);
// }

// for (var num = 1; num <= 10; num++) {
//     var tableof = 9;
//     console.log(tableof + " * " + num + " = " + tableof * num);
// }


// (1) function definition

// function sum() {
//     var a = 10, b = 20;
//     var total = a + b;
//     console.log(total);
// }
// sum();
//  (2) calling a function

// function sum() {
//     var a = 10, b = 20;
//     var total = a + b;
//     console.log(total);
// }
// sum();

// (3) function Parameter

// function sum(a,b) {
//         var total = a + b;
//         console.log(total);
//     }
//     sum(10,50);


// (4) function arguments

// function sum(a,b) {
//     var total = a + b;
//     console.log(total);
// }
// sum(10,50);


// (5) function expressions

// function sum(a,b) {
//         var total = a + b;
//         console.log(total);
//     }
// var functionexpressions = sum(10,50);




// (6) return keyword

// function sum(a, b) {
//     return total = a + b;

// }
// var functionexpressions = sum(5, 15);
// console.log('the sum of two number is ' + functionexpressions);


// (7) anonymous function

// var functionexpressions = function (a, b) {
//     return total = a + b;
// }
// console.log(functionexpressions(5, 15));



// var => function scope
// let and const => block Scope


// function biodata() {
//     let myFirstname = 'kaif';
//     console.log(myFirstname);

//     if (true) {
//         let myLastName = "shikalgar"
//         console.log('inner ' + myLastName);
//         console.log('inner ' + myFirstname);
//     }
//     console.log('innetOuter ' + myLastName);
// }
// biodata();


// (2) template literals (template Strings)

// for(let num = 1; num<= 10; num++) {
//     let tableof = 12;
//     console.log(` ${tableof} * ${num} = ${tableof * num}`);

// }


// (3) Default Parameters

// function mult(a,b=5) {
//     return a*b;
// } console.log(mult(3));

// (7) fat Arrow function

// const sum = () => 'the sum of the two number is $ {(a=5) + (b=6)}';

// Array

// var myFriends = ['kaif', 'faisal'];


// var myFriends = ['kaif', 'faisal', 'arjun', 'vishal'];
// console.log(myFriends[myFriends.length - 1]);

// // if we want to check the length of elements of array
// console.log(myFriends.length);

// we use for loop to navigator

// var myFriends = ['kaif', 'faisal', 'arjun', 'vishal'];

// for (var i = 0; i<myFriends.length; i++) {
//     console.log(myFriends[i]);
// }


// 1)assignment operators
//  var x = 5;
//  var y = 5;

//  console.log("is both the x and y are equal or not" + x == y);

// // 2)Arithmetic Operators

//  console.log("Remainder Operator " + 27%4);

//  increment and Decrement operator

// var num = 15;

// var newnum = num++;

// console.log(num);
// console.log(num++);

// Decrement Operator
// var num = 15;

// var newnum = --num;

// console.log(num);
// console.log(--num);

// 3) comparison Operator:

// var a = 30;
// var b = 10;

// console.log(a < b);
// console.log(a > b);

// 4) logical operator

// var a = 30;
// var b = -10;

// console.log(a < b);

// console.log(a > b && a < b);

// console.log(!(a > b && a < b));

// 5) String Concatenation(operators)

// console.log("kaif " + "shikalgar");


// var myName ="kaif";
// console.log(myName + " shikalgar");

// challenge time

// sol=1
//  console.log(3**3);

// sol=2
// console.log(5 +"kaif");

// sol=3
// var a = 5;
// var b = 10;
// var c = 5;
// console.log("the value of a is "+ a);
// console.log("the value of a is "+ b);

// sol=4

// var a = 5;
// var b = 10;

// a= a+b;
// b = a-b;
// a = a-b;

// console.log("the value of a is "+ a);
// console.log("the value of a is "+ b);

// Sol = 5
// var num1 = 5;
// var num2 = '5';

// console.log(typeof (num1));
// console.log(typeof (num2));
// console.log(num2);

// console.log(num1 == num2);

// challenge Time

// for(var num = 1; num <= 10; num++){
//     var tableof =8;
//     console.log(tableof +"*" + num + " = " + tableof * num);
// }

// 1) function definition

//    function sum() {
//     var a = 10; b = 20;
//     var total =a+b;
//     console.log(total);
//    }
// 2) calling a function

//    sum();

// 3) function Parameter and // 4) function arguments

// function sum(a, b) {
//     var total = a + b;
//     console.log(total);
// }
// sum(20, 30);

// 5) function expressions

//  function sum(a, b) {
//     var total = a + b;
//     console.log(total);
// }
// var funexp = sum(20,30);

// 6) return Keyword

// function sum(a, b) {
//     return total = a+b;
// }
// var funexp = sum(20,30);
// console.log(funexp);

// 7) Anonyous function


// var funexp=function(a, b) {
//     return total = a+b;
// }
// console.log(funexp(20,30));


// traversal of an Array:

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];
// console.log(myFriends[1]);

// if we want to check the length of element of an array :

// console.log(myFriends.length);

// for in loop :
// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// for (var i=0; i<myFriends.length; i++ ){
//     console.log(myFriends[i]);
// }

// for in loop :
// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// for(let element in myFriends){
//     console.log(element);
// }
// for of loop:
// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// for(let element of myFriends){
//     console.log(element);
// }

// Array.prototype.forEach:
// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// myFriends.forEach(function(element,index,array){
// console.log(element + " index : " + index);
// });

// var myFriends = ['vinod', 'ramesh', 'arjun', 'vishal'];

// myFriends.forEach((element,index,array)=>{
// console.log(element + " index : " + index);
// });

// Searching and filter in an Array:
// how to sort and compare an Array:
// how to lnsert,Add,Repalce and Delete Element in Array:

// challenge Time
// const months =['Jan','March','April', 'June', 'July'];
// sol 1:-
// const newMonth = months.splice(5,0,"Dec")
// console.log(months);

// sol 2:-
// const newMonth = months.splice(months.length,0,"Dec")
// console.log(months);
// sol 2:-
// console.log(newMonth);
// sol 3:-
// const months =['Jan','March','April', 'June', 'July'];

// const indexOfMonth = months.splice(1,1,'March');
// if(indexOfMonth != -1) {
// const updateMonth = months.splice(indexOfMonth,1,'March');
// console.log(months);
// }else{
// console.log('No such data found');}


// // let newArr = array1.map((curElem, index, arr) => {
// //     return curElem > 9;
// // })
// // console.log(array1);
// // console.log(newArr);

// let newArr = array1.map((curElem, index, arr) => {
//         return `Index no = ${index} and the value is ${curElem} belong to ${arr}`
//     })
//     console.log(newArr);

// challenge Time
// sol:1

// let arr = [4, 9, 16, 25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) => {
//     return Math.sqrt(curElem);
// });
// console.log(arrSqr);

// sol:2

// let arr = [2, 3, 4, 6, 8];

// let arr2 = arr.map((curElem) => curElem * 2).filter((curElem) => curElem > 10).reduce((accumulator, curElem) => {
//     return accumulator += curElem;
// });
// console.log(arr2);

// Reduce Method :-

// let arr = [5, 6, 2];
// let sum = arr.reduce((accumulator, curElem, index, arr) => {
//     return accumulator *= curElem
// })
// console.log(sum);

// how to fatten an array

// const arr = [
//     ['zone1', 'zone2',]
//     ['zone3', 'zone4'],
//     ['zone5', 'zone6'],
//     ['zone7', 'zone8']
// ];

// let flatArr = arr.reduce((accumulator, currVal) => {
//     return accumulator.concat(currVal);
// })
// console.log(flatArr);


// STRINGS IN JAVASCRIPT:-
// 1)Escape Character:-
//   let anySentence = "we are the so-called \"vikings\" from the north"
//   console.log(anySentence);

// let anySentence = 'we are the so-called "vikings" from the north'
// console.log(anySentence);

// 2)Finding a String in a String:-

// const myBioData = 'I am the thapa Technical';
// console.log(myBioData.indexOf("t",6));

// const myBioData = 'I am the thapa Technical';
// console.log(myBioData.lastIndexOf("t",6));

// 3)Searching for a Sting in a Sting :-
// const myBioData = 'I am the thapa Technical';
// let sData = (myBioData.search("thapa"));
// console.log(myBioData);

// 4) Extracting String Parts:-
// var str = "Apple, Bananaa, kiwi"
// let res = str.slice(0,4)
// console.log(res);

// 11) Challenge Time

// let myTweets = "kaif ayaz shikalgar";
// let myActualTweets = myTweets.slice(0, 10);
// console.log(myActualTweets);
// console.log(myActualTweets.length);

// 5)Replacing String Content:-

// let myBioData = `kaif ayaz shikalgar`;

// let repalceData = myBioData.replace('ayaz', 'Ayaz');
// console.log(repalceData);

// 6)Extracting String Characters:-
// 7)Other useful methods:-

// let fName = "kaif"
// let lName = "shikalgar"

// console.log(fName + lName);
// console.log(`${fName} ${lName}`);

// var star = "   kaif shikalgar  ";
// console.log(star.trim());

// Date & time Object:-
// 1)Date Methods :-
// new Date()
// let currDate = new Date();
// console.log(currDate);
// console.log(currDate.toLocaleDateString());

// var d = new Date(2022, 10);
// console.log(d.toLocaleString());

// Date Mehhod;-
// const currDate = new Date();

// console.log(currDate.toLocaleString());
// console.log(currDate.getFullYear());
// console.log(currDate.getMonth());
// console.log(currDate.getDate());
// console.log(currDate.getDay());


// 2)Time Methods :-

// const curTime = new Date();


// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());

// Section 9 Math Object in JavaScript :-

// console.log(Math.PI);

// Math.round :-
// let num = 10.2565;
// console.log(Math.round(num));

// Math.pow():-

// console.log(Math.pow(2,3));
// console.log(2**3);

// Math.sqrt() :-
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(36));
// console.log(Math.sqrt(49));

// Math.abs() :-
// console.log(Math.abs(-25));
// console.log(Math.abs(-55.5));
// console.log(Math.abs(-955));

// // Math.ceil() :-
// console.log(Math.ceil(4.4));
// console.log(Math.round(9.1));

// Math.floor() :-
// console.log(Math.floor(4.4));
// console.log(Math.floor(9.1));

// Math.min() :-
// console.log(Math.min(0, 150, 30, 20, -8, -200));
// console.log(Math.floor(9.1))

// // Math.max() :-
// console.log(Math.max(0, 150, 30, 20, -8, -200));

// Math.random() :-
// console.log(Math.floor(Math.random() * 150));

// Math.trunc() :-
// console.log(Math.trunc(4));

// WHAT WE WILL DO :-

// 1)Window vs Document:-
// 2)Dom vs Bom :-
// 3)Dom Navigation :-
// 4)Searching and getting Element Reference :-


// Object Properties :-
// we can now use Dynamic Properties:-

// let myName = "kaif";
// const myBio = {
//     [myName]: "hello how are you?",
//     22: "is my age"
// }
// console.log(myBio);

// No need to write key and value, if

// let myName ="kaif shikalgar";
// let myAge = "22";

// const myBio ={myName,myAge}
// console.log(myBio);

// 7) Spread Operator:-

// const colors = ['red', 'green', 'blue', 'white']
// const Myfavcolors = [...colors, 'yellow', 'black']
// console.log(Myfavcolors);

// ES7 features

// 1) Array include

// const colors = ['red', 'green', 'blue', 'white'];
// const isPresent = colors.includes('red');
// console.log(isPresent);

// 2) **

// console.log(2 ** 3);

// ES8) Features

// String padding
// Object.values()
// Object.entries()

// const message = "my name is kaif ";
// console.log(message);
// console.log(message.padStart(5));

// ES2018)

// const person = { name: 'kaif', age: 22, degree: "mcs" };
// const sPerson = { ...person };
// console.log(person);
// console.log(sPerson);

// const arr = [
//     ['zone1', 'zone2'],
//     ['zone3', 'zone4'],
//     ['zone5', 'zone6'],
//     ['zone7', 'zone8'],
// ];
// console.log(arr.flat());

// ES2019)
// Array.prototype.{flat,flatMap}
// Object.fromEntries()


// ES2020)
// 1)BigInt


// let oldnum = Number.MAX_SAFE_INTEGER;
// console.log(oldnum);
// console.log(oldnum + 10);






