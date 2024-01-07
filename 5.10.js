// masala 1

// function getOddDividersSum(n) {
//   let sum = 0;

//   for (let i = 1; i <= n; i++) {
//     if (n % i === 0 && i % 2 !== 0) {
//       sum += i;
//     }
//   }

//   return sum;
// }

// let n = 30;
// let output = getOddDividersSum(n);
// console.log(output);

// masala 2

// function search(arr, str) {
//   let result = [];

//   for (let name of arr) {
//     if (name.toLowerCase().includes(str.toLowerCase())) {
//       result.push(name);
//     }
//   }

//   return result;
// }

// // Test
// let arr = [
//   "Abdulaziz",
//   "Shahobiddin",
//   "Shohrux",
//   "Shukurjon",
//   "Azamat",
//   "Rahmatulla",
// ];
// let str = "az";
// let output = search(arr, str);
// console.log(output);

// masala 3

// let arr = [2, 5, 7, 10, 0, 18, 15];
// let n = 5;

// function getDividersSum(arr, n) {
//   let sum = 0;
//   for (let el of arr) {
//     if (el % n == 0) {
//       sum += el;
//     }
//   }
//   return sum;
// }

// let output = getDividersSum(arr, n);
// console.log(output);

// masala 4

// let str = "Abdulaziz programmer is full-stack developer.";

// function checkSentence(str) {
//   let firstChar = str[0];
//   let lastChar = str[str.length - 1];

//   return firstChar === firstChar.toUpperCase() && lastChar === ".";
// }
// let output = checkSentence(str);
// console.log(output);

// masala 5

// let str = "Abdulaziz Programmer";

// function getNumberOfCases(str) {
//   let obj = {
//     upperCase: 0,
//     lowerCase: 0,
//   };
//   for (let el of str) {
//     if (el === el.toUpperCase() && el !== " ") {
//       obj.upperCase++;
//     } else if (el === el.toLowerCase() && el !== " ") {
//       obj.lowerCase++;
//     }
//   }
//   return obj;
// }

// let result = getNumberOfCases(str);
// console.log(result);

// masala 6

// let obj = { a: 1, b: 2, c: 3 };

// function changeObjToString(obj) {
//   let result = "";

//   for (const key in obj) {
//     result += key;
//   }

//   for (const key in obj) {
//     result += obj[key];
//   }

//   return result;
// }

// let output = changeObjToString(obj);
// console.log(output);

//masala 7

// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// function getProductsSum(...ids) {
//   let sum = 0;

//   for (let el of products) {
//     if (ids.includes(el.id)) {
//       sum += el.price;
//     }
//   }

//   return sum;
// }

// let output = getProductsSum(4, 6, 9);
// console.log(output);

//masala 8

// let n = 3;
// const products = [
//   { id: 1, name: "Bike", price: 100 },
//   { id: 2, name: "TV", price: 400 },
//   { id: 3, name: "Album", price: 800 },
//   { id: 4, name: "Book", price: 600 },
//   { id: 5, name: "Phone", price: 500 },
//   { id: 6, name: "Computer", price: 1000 },
//   { id: 7, name: "Skate", price: 300 },
//   { id: 8, name: "Keyboard", price: 200 },
//   { id: 9, name: "Bottle", price: 700 },
// ];

// const getTopProducts = (products, n) => products.sort((a, b) => b.price-a.price).splice(0, n).map(el => el.name);

// console.log(getTopProducts(products, n));

// masala 9

// String.prototype.count = function (char) {
//   let count = 0;
//   for (let i = 0; i < this.length; i++) {
//     if (this[i].toLowerCase() === char.toLowerCase()) {
//       count++;
//     }
//   }
//   return count;
// };

// let str = "Abdulaziz Programmer";
// let char = "a";
// let result = str.count(char);

// console.log(result);

// masala 10

// function Product(name, company, price, discount) {
//   this.name = name;
//   this.company = company;
//   this.price = price;
//   this.discount = discount || 0;
// }

// Product.prototype.getInfo = function () {
//   let originalPrice = this.price;
//   let discountedPrice = originalPrice - (originalPrice * this.discount) / 100;

//   if (this.discount > 0) {
//     console.log(
//       `${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${originalPrice}$. Aksiyadagi narxi esa ${discountedPrice}$.`
//     );
//   } else {
//     console.log(
//       `${this.company} kompaniyasi tomonidan ishlab chiqarilgan ${this.name} ning asl narxi ${originalPrice}$. Aksiya mavjud emas!`
//     );
//   }
// };

// // Example usage:
// let p1 = new Product("Iphone 15", "Apple", 1500, 20);
// let p2 = new Product("S22", "Samsung", 1200);

// p1.getInfo();
// p2.getInfo();
