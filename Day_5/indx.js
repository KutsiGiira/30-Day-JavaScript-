// Exercise 1 :
// Declare an empty array;
let emptyArray = [];
// Declare an array with more than 5 number of elements
let Arr = [1, 2, 3, 4, 5, 6]
// Find the length of your array
console.log(Arr.length);
// Get the first item, the middle item and the last item of the array
console.log(Arr[0], Arr[3], Arr[5]);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = [1, "BLAACK", "SupGap", 19, true, "B"];
console.log(mixedDataTypes.length);
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];
// Print the array using console.log()
console.log(itCompanies)
// Print the number of companies in the array
console.log(itCompanies.length)
// Print the first company, middle and last company
console.log(itCompanies[0], itCompanies[3], itCompanies[6]);
// Print out each company
console.log(itCompanies[0], itCompanies[1], itCompanies[2], itCompanies[3], itCompanies[4], itCompanies[5], itCompanies[6]);
// Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase(), itCompanies[1].toUpperCase(), itCompanies[2].toUpperCase(), itCompanies[3].toUpperCase(), itCompanies[4].toUpperCase(), itCompanies[5].toUpperCase(), itCompanies[6].toUpperCase());
// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.concat(`are big IT companies`));
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
itCompanies.includes(`IBM`) ? console.log("IBM") : console.log("not found");
itCompanies.includes(`REDDIT`) ? console.log("IBM") : console.log("not found");
itCompanies.includes(`TWITER`) ? console.log("IBM") : console.log("not found");
itCompanies.includes(`Facebook`) ? console.log("Facebook") : console.log("not found");
// Filter out companies which have more than one 'o' without the filter method
// Sort the array using sort() method
console.log(itCompanies.sort());
// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(4, 7));
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(3, 4));
// Remove the first IT company from the array
console.log(itCompanies.shift());
console.log(itCompanies);
// Remove the last IT company from the array
console.log(itCompanies.pop())
console.log(itCompanies)
console.log(`Ex 2`);
// Exercice 3 :

const yo = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
console.log(yo.sort())
console.log(yo[0]);
console.log(yo[yo.length-1])
// Find the median age(one middle item or two middle items divided by two)
const middleIndex = Math.floor(yo.length / 2);
const medianAge = yo.length % 2 === 0 ? (yo[middleIndex - 1] + yo[middleIndex]) / 2 : yo[middleIndex];
console.log("Median Age:", medianAge);
