// // 1- Write a program that allow to user enter number then printit
// x = window.prompt("Enter a number");
// window.alert(x);

// // 2- Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
// x = window.prompt("Enter a number");
// if (x % 3 == 0 && x % 4 == 0) {
//   window.alert("Yes");
// } else {
//   window.alert("No");
// }

// // 3- Write a program that allows the user to insert 2 integers then print the max
// x = window.prompt("Enter First number");
// y = window.prompt("Enter Second number");
// if (x > y) {
//   console.log(x);
// } else if (y > x) {
//   console.log(y);
// }

// // 4- Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
// x = window.prompt("Enter a number");
// if (x < 0){
//     console.log("Negative");
// }
// else{
//     console.log("Postive")
// }

// // 5- Write a program that take 3 integers from user then print the max element and the min element.
// x = window.prompt("Enter First number");
// y = window.prompt("Enter Second number");
// z = window.prompt("Enter Third number");
// if (x > y && x > z) {
//   console.log("max element =", x);
//   if (y < z) {
//     console.log("min element =", y);
//   } else if (z < y) {
//     console.log("min element =", z);
//   }
// } else if (y > x && y > z) {
//   console.log("max element =", y);
//   if (x < z) {
//     console.log("min element =", x);
//   } else if (z < x) {
//     console.log("min element =", z);
//   }
// } else if (z > x && z > y) {
//   console.log("max element =", z);
//   if (x < y) {
//     console.log("min element =", x);
//   } else if (y < z) {
//     console.log("min element =", y);
//   }
// }

// // 6- Write a program that allows the user to insert integer number then check If a number is oven or odd
// x = window.prompt("Enter a number");
// if (x % 2 == 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// // 8- Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
// x = window.prompt("Enter a character");
// if ( x == 'a' || x== 'e' || x == 'i' || x == 'o' || x== 'u' || x == 'A' || x== 'E' || x == 'I' || x == 'O' || x== 'U'){
//     console.log('vowel');
// } else{
//     console.log('Consonant');
// }

// // 9- Write a program that allows user to insert integer then print all numbers between 1 to that’s number
// x = window.prompt("Enter a number");
// for (i = 1 ; i <= x; i++) {
//     console.log(i);
// }

// // 10- Write a program that allows userto insert integerthen print a multiplication table up to 12.
// x = window.prompt("Enter a number");
// for (i = 1; i < 13; i++) {
//   console.log(x * i );
// }

// 11- Writeaprogramthatallowstousertoinsertnumberthenprintallevennumbers between 1 to this number
// x = window.prompt("Enter a number");
// for (i = 1; i <= x; i++) {
//     if ( i % 2 == 0){
//         console.log(i);
//     }
// }

// // 12- Writeaprogramthattaketwointegersthenprintthepower
// x = window.prompt("Enter First number");
// y = window.prompt("Enter Second number");
// z = 1;
// for (i = 0; i < y; i++) {
//     z = z * x;
// }
// console.log(z);

// // 12- Write a program to enter marks of five subjects and calculate total, average and percentage.
// first = Number(window.prompt("Enter First grade"));
// second = Number(window.prompt("Enter Second grade"));
// third = Number(window.prompt("Enter Third grade"));
// fourth = Number(window.prompt("Enter Fourth grade"));
// fifth = Number(window.prompt("Enter Fifth grade"));
// totalMark= first + second + third + fourth + fifth ;
// averageMark = totalMark / 5 ;
// percentage = (totalMark / 500) * 100 ;
// console.log("Total Marks =", totalMark);
// console.log("Average Marks =", averageMark);
// console.log("Percentage =", percentage);

// 13-Write a program to input month number and print number of days in that month.
// x = window.prompt("Enter the month number (1 to 12) ");
// if (x == '1' || x == '3'|| x == '5' ||x == '7'|| x == '8' || x == '10'||x == '12') {
//     console.log(31);
// } else if (x == '4' || x == '6' || x == '9' || x == '11') {
//     console.log(30);
// }
// else if (x == '2') {
//     console.log(28);
// }
// else{
//     console.log('Not a valid month number');
// }

// // 14- Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer , Find percentage and grade
// first = Number(window.prompt("Enter Physics grade"));
// second = Number(window.prompt("Enter Chemistry grade"));
// third = Number(window.prompt("Enter Biology grade"));
// fourth = Number(window.prompt("Enter Mathematics grade"));
// fifth = Number(window.prompt("Enter Computer grade"));
// totalMark = first + second + third + fourth + fifth;
// percentage = (totalMark / 500) * 100;
// if (percentage >= 90) {
//   console.log("Grad A");
// } else if (percentage >= 80) {
//   console.log("Grad B");
// } else if (percentage >= 70) {
//   console.log("Grad C");
// } else if (percentage >= 70) {
//   console.log("Grad C");
// } else if (percentage >= 60) {
//   console.log("Grad D");
// } else if (percentage >= 40) {
//   console.log("Grad E");
// } else if (percentage < 40) {
//   console.log("Grad F");
// } else {
//   console.log("Invalid Input");
// }

// // 15- Write a program to print total number of days in month
// x = Number(window.prompt("Enter the month number (1 to 12) "));
// switch (x) {
//   case 1:
//     console.log(31);
//     break;
//   case 2:
//     console.log(28);
//     break;
//   case 3:
//     console.log(31);
//     break;
//   case 4:
//     console.log(30);
//     break;
//   case 5:
//     console.log(31);
//     break;
//   case 6:
//     console.log(30);
//     break;
//   case 7:
//     console.log(31);
//     break;
//   case 8:
//     console.log(31);
//     break;
//   case 9:
//     console.log(30);
//     break;
//   case 10:
//     console.log(31);
//     break;
//   case 11:
//     console.log(30);
//     break;
//   case 12:
//     console.log(31);
//     break;
//   default:
//     console.log("Invalid Input, Please enter number from 1 to 12");
// }

// // 16- Write a program to check whether an alphabet is vowel or consonant
// x = window.prompt("Enter a character");
// switch (x) {
//   case "a":
//     console.log("vowel");
//     break;
//   case "e":
//     console.log("vowel");
//     break;
//   case "i":
//     console.log("vowel");
//     break;
//   case "o":
//     console.log("vowel");
//     break;
//   case "u":
//     console.log("vowel");
//     break;
//   case "A":
//     console.log("vowel");
//     break;
//   case "E":
//     console.log("vowel");
//     break;
//   case "I":
//     console.log("vowel");
//     break;
//   case "O":
//     console.log("vowel");
//     break;
//   case "U":
//     console.log("vowel");
//     break;
//   default:
//     console.log("Consonant");
//     break;
// }

// // 17- Write a program to find maximum between two numbers
// x = window.prompt("Enter First number");
// y = window.prompt("Enter Second number");
// z = x > y;
// switch (z) {
//   case true:
//     console.log(x);
//     break;
//   case false:
//     console.log(y);
//     break;
// }

// // 18- Write a program to check whether a number is even or odd
// x = window.prompt("Enter a number");
// z = x % 2 == 0;
// switch (z) {
//   case true:
//     console.log("even");
//     break;
//   case false:
//     console.log("odd");
//     break;
//   default:
//     console.log("Invalid input");
// }

// // 19- Write a program to check whether a number is positive or negative or zero
// x = Number(window.prompt("Enter a number"));
// switch (true) {
//   case x > 0:
//     console.log("positive");
//     break;
//   case x < 0:
//     console.log("negative");
//     break;
//   case x == 0:
//     console.log("zero");
//     break;
//   default:
//     console.log("Invalid input");
// }

// // 20- Write a program to create Simple Calculator
// x = Number(window.prompt("Enter First number"));
// y = Number(window.prompt("Enter Second number"));
// z = window.prompt("Choose the operation (plus / minus / multiplied / divided )");
// switch (z) {
//   case "plus":
//     console.log(x + y);
//     break;
//   case "minus":
//     console.log(x - y);
//     break;
//   case "multiplied":
//     console.log(x * y);
//     break;
//   case "divided":
//     if (y === 0) {
//       console.log("Error: Division by zero is not allowed");
//     } else {
//       console.log(x / y);
//     }
//     break;
//   default:
//     console.log("Invalid Input");
//     break;
// }
