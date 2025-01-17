// // Exercise : 1
var challenge = '30 day of JavaScript';
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(3, 20));
console.log(challenge.includes("Script"));
console.log(challenge.split(','));
console.log(challenge.split(' '));
console.log("Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon".split(', '));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
console.log("You cannot end a sentence with because because because is a conjunction".lastIndexOf("because"));
console.log("You cannot end a sentence with because because because is a conjunction".search("because"));
console.log(' 30 Days Of JavaScript '.trim().length);
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("JavaScript"));
console.log(challenge.match("a"));
console.log("30 Days of".concat(" JavaScript"));
console.log(challenge.repeat(2))

// Exercise : 2

console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
var numOne = 10, numTwo = "10";
console.log(numOne === numTwo);
console.log(numOne === Number(numTwo));
var nbrOne = 9.8, nbrTwo = 10;
console.log(Math.round(nbrOne) === nbrTwo);
console.log("python".includes("on"), "jargon".includes("on"));
console.log("I hope this course is not full of jargon".includes("jargon"));
console.log(Math.random() * 101);
console.log((Math.random()* 101) + 50);
console.log(Math.random() * 255);
console.log("1 1 1 1 1 \
2 1 2 4 8 \
3 1 3 9 27 \
4 1 4 16 6 \
5 1 5 25 125");