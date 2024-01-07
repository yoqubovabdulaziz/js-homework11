// masala 1

// function getSum(n) {
//   let sumOdd = 1;
//   let sumEven = 0;

//   for (let i = 2; i <= 2 * n; i += 2) {
//     sumEven += i;
//   }

//   for (let j = 1; j < 2 * n; j += 2) {
//     sumOdd *= j;
//   }

//   let result = sumOdd + sumEven;
//   return result;
// }

// let n = 3;
// let output = getSum(n);
// console.log(output);

// masala 2

// function getHighestNumberOfDigits(arr) {
//   let maxDigits = 0;
//   let maxNumber = 0;

//   for (let i = 0; i < arr.length; i++) {
//     let currentNumber = Math.abs(arr[i]);
//     let currentDigits = currentNumber.toString().length;
//     if (currentDigits > maxDigits) {
//       maxDigits = currentDigits;
//       maxNumber = currentNumber;
//     }
//   }

//   return maxNumber;
// }

// // Test
// let arr = [1589, 31851, 512, 180975, 78];
// let output = getHighestNumberOfDigits(arr);
// console.log(output);

// masala 3

// function getStringArr(arr) {
//   let stringArr = arr.filter((element) => typeof element === "string");
//   return stringArr;
// }

// // Test
// let arr = [1, "Abdulaziz", "Elbek", false, [], "Jurabek", {}];
// let output = getStringArr(arr);
// console.log(output);

// masala 4

// function getPunctuationNumber(str) {
//   let sing = [
//     "!",
//     '"',
//     "#",
//     "$",
//     "%",
//     "&",
//     "'",
//     "(",
//     ")",
//     "*",
//     "+",
//     ",",
//     "-",
//     ".",
//     "/",
//     ":",
//     ";",
//     "<",
//     "=",
//     ">",
//     "?",
//     "@",
//     "[",
//     "\\",
//     "]",
//     "^",
//     "_",
//     "`",
//     "{",
//     "|",
//     "}",
//     "~",
//     "'",
//   ];

//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (sing.includes(str[i])) {
//       count++;
//     }
//   }

//   return count;
// }

// let str = "Hello! How are you? I'm doing great. What's new?";
// let output = getPunctuationNumber(str);
// console.log(output);

// masala 5

// function switchLetters(str) {
//   let switchedStr = "";

//   for (let i = 0; i < str.length; i++) {
//     let currentChar = str[i];
//     if (currentChar === currentChar.toLowerCase()) {
//       switchedStr += currentChar.toUpperCase();
//     } else {
//       switchedStr += currentChar.toLowerCase();
//     }
//   }

//   return switchedStr;
// }

// // Test
// const str = "Abdulaziz Programmer";
// const output = switchLetters(str);
// console.log(output);

// masala 6

// function changeObjToArr(obj) {
//   let resultArray = [];

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       let keyValue = key + obj[key];
//       resultArray.push(keyValue);
//     }
//   }

//   return resultArray;
// }

// // Test
// let obj = { a: 1, b: 2, c: 3 };
// let output = changeObjToArr(obj);
// console.log(output);

// masala 7

// function seperateStudents(students) {
//   let result = {
//     grant: [],
//     contract: [],
//   };

//   for (let student of students) {
//     if (student.isGrant) {
//       result.grant.push(student.name);
//     } else {
//       result.contract.push(student.name);
//     }
//   }

//   return result;
// }

// let students = [
//   { name: "Jurabek", isGrant: false },
//   { name: "Elbek", isGrant: true },
//   { name: "Shamshod", isGrant: false },
//   { name: "Kamola", isGrant: false },
//   { name: "Gulnoza", isGrant: true },
//   { name: "Savlatbek", isGrant: false },
// ];

// let output = seperateStudents(students);
// console.log(output);

// masala 8

// const books = [
//   { name: "The Great Gatsby", pages: 180, isReadFinished: true },
//   { name: "To Kill a Mockingbird", pages: 336, isReadFinished: false },
//   { name: "Atom habits", pages: 328, isReadFinished: true },
//   { name: "Pride and Prejudice", pages: 432, isReadFinished: false },
//   { name: "The Catcher in the Rye", pages: 224, isReadFinished: true },
//   { name: "The Hobbit", pages: 310, isReadFinished: false },
//   { name: "The Lord of the Rings", pages: 1178, isReadFinished: true },
//   { name: "Harry Potter", pages: 320, isReadFinished: true },
//   { name: "Fahrenheit 451", pages: 249, isReadFinished: false },
//   { name: "To the Lighthouse", pages: 209, isReadFinished: true },
// ];

// function getTotalPages(books) {
//   let count = 0;

//   for (let book of books) {
//     if (book.isReadFinished) {
//       count += book.pages;
//     }
//   }

//   return count;
// }

// let output = getTotalPages(books);
// console.log(output);

// masala 9

// Object.prototype.keys = function () {
//   return Object.keys(this);
// };

// let obj = { a: 1, b: 2, c: 3 };
// let output = obj.keys();
// console.log(output);

// masala 10

// // Student konstruktori
// function Student(firstName, lastName, university, course, totalYears, isGrant) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.university = university;
//   this.course = course;
//   this.totalYears = totalYears;
//   this.isGrant = isGrant;
// }

// // Prototype ni yaratish
// Student.prototype.getInfo = function () {
//   const grantStatus = this.isGrant
//     ? "grant asosida o'qiydi"
//     : "contract asosida o'qiydi";
//   return `${this.firstName} ${this.lastName} ${this.university} universitetida ${this.course}-kursda ${grantStatus}. ${this.totalYears} yildan keyin universitetdan qutuladi.`;
// };

// // Test
// let student = new Student("Abdulaziz", "Programmer", "TATU", 3, 4, true);
// let output = student.getInfo();
// console.log(output);
