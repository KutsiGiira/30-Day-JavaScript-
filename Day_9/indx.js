// Explain the difference between forEach, map, filter, and reduce.
    //foreach func doest apply a direct change to the array 
    //map func dircet influece an array in a specific manner
    //filter  is used to fileter a specific thing from an array
    //reduce take to argument the first one is what the change or the output we want to have and the second argument returns the array
// Define a callback function before you use it in forEach, map, filter or reduce.
function func(n)
{
    return n;
}
function pow(func, m)
{
    return func(n)*m
}
console.log(pow(func, 4))
// Use forEach to console.log each country in the countries array.
const arr = ['japan','South Af', 'Morocco', 'Mauritania']
arr.forEach((contry) => console.log(contry));
// Use forEach to console.log each name in the names array.
const arr1 = ['BLAACK','KutsiGira', 'Diff']
arr1.forEach((name) => console.log(name));
// Use forEach to console.log each number in the numbers array.
const arr2 = [10 , 33 , 4 , 2]
arr2.forEach((number) => console.log(number));
// Use map to create a new array by changing each country to uppercase in the countries array.
arr.map((contry) => console.log(contry.toUpperCase()));
// Use map to create an array of countries length from countries array.
arr.map((contry) => console.log(contry.length));
// Use map to create a new array by changing each number to square in the numbers array
arr2.map((number) => console.log(number *=number));
// Use map to change to each name to uppercase in the names array
arr1.map((name) => console.log(name.toUpperCase()));
