// Exercice 1 :
let firstName = "KutsiGira";
let lastName = "BLAACK";
let country = "Morocco";
let city = "Agadir";
let age = 19;
let isMarried = true;
let year = 2024;
console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

let num1 = '10', num2 = 10;
console.log(num1 == num2);
let nbr1 = '9.8', nbr2 = 10;
console.log(parseInt(nbr1) == nbr2);

// Write three JavaScript statement which provide truthy value.

let test1 = true, test2 = "this is a truthy value", test3 = -23;

// Write three JavaScript statement which provide falsy value.

let atp1 = false, atp2 = "", atp3 = 0;
 console.log(4 > 3);
 console.log(4 >= 3);
 console.log(4 < 3);
 console.log(4 <= 3);
 console.log(4 == 4);
 console.log(4 === 4);
 console.log(4 != 4);
 console.log(4 !== 4);
 console.log(4 != "4");
 console.log(4 == "4");
 console.log(4 === "4");
 let word0 = "python", word1 = "jargon";
 console.log(word0.length, word1.length);

 console.log(4 > 3 && 10 < 12);  // True
 console.log(4 > 3 && 10 > 12); // false
 console.log(4 > 3 || 10 < 12); // True
 console.log(4 > 3 || 10 > 12); // True
 console.log(!(4 > 3)); //
 console.log(!(4 < 3));
 console.log(!(false));
 console.log(!(4 > 3 && 10 < 12));
 console.log(!(4 > 3 && 10 > 12));
 console.log(!(4 ==='4'));
 console.log(!(word0.includes("on") && word1.includes("on")));

// What is the year today?
const now =new Date();
console.log(now.getFullYear());
// What is the month today as a number?
console.log(now.getMonth());
// What is the date today?
// What is the day today as a number?
console.log(now.getDay);
// What is the hours now?
console.log(now.getHours());
// What is the minutes now?
console.log(now.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime());

// Exercice 2 :

let height = prompt("enter hight :");
let base = prompt("enter base : ");
let result = 0.5 * base * height;
alert("The result is : " + result);

let a = prompt("Enter side A : ");
let b = prompt("Enter side B : ");
let c = prompt("Enter side C : ");
let Total = +a + +b + +c;
alert("The perimetre of the triangel is : " + Total);

let L = prompt("Give to Length Value :");
let W = prompt("Give the Width Value : ");
let area = +L * +W;
let perimetre = 2*(+L + +W);
alert("Area = " + area + "\nPerimetre = " + perimetre);

