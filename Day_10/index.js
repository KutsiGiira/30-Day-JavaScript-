// Exercises:Level 1
// const a = [4, 5, 8, 9]
// const b = [3, 4, 5, 7]
// const countries = ['Finland', 'Sweden', 'Norway']
// create an empty set
const emptyset = new Set();
// Create a set containing 0 to 10 using loop
let nums = new Set();
let u = 1;
while(u <= 10)
{
    nums.add(u);
    u++;
}
console.log(nums);
// Remove an element from a set
nums.delete(4);
console.log(nums);
// Clear a set
nums.clear;
console.log(nums);
// Create a set of 5 string elements from array
const set5 = ("string1", "string2", "string3", "string4", "string5")
const SetFromArr = new Set(set5);
console.log(SetFromArr);
// Create a map of countries and number of characters of a country
const MapOfCont = [
    ["Morroco" , 7],
    ["Japan", 5],
    ["Spain", 5],
]
const Maps = new Map(MapOfCont);
console.log(Maps);