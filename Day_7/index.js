// Declare a function fullName and it print out your full name
function fullName()
{
    console.log(`BLAACK KutsiGira`);
}

fullName();
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullName1(firstName , lastName)
{
    return `${firstName} ${lastName}`
}
console.log(fullName1("BLAACK", "KutsiGira"));

// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(nb1, nb2)
{
    let sum = nb1 + nb2;
    return sum;
}
console.log(addNumbers(3, 5));
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width)
{
    let area = length * width;
    return area;
}
console.log(`Area of a rectangle is ${areaOfRectangle(10, 4)}`);
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function perimeterOfRectangle(lengthrec, widthrec)
{
    let sumrec = 2*(lengthrec + widthrec);
    return sumrec;
}
console.log(`perimetre of rectangle is ${perimeterOfRectangle(4 , 5)}`)
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
function volumeOfRectPrism(Lenght, Width, Height)
{
    let total = Lenght * Width * Height;
    return total;
}
console.log(`rectangular volume = ${volumeOfRectPrism(5, 6, 2)}`)
// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
function areaOfCircle(r)
{
    let Area = Math.PI * r * r;
    return Area;
}
console.log(`area of circle ${areaOfCircle(3)}`);

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
function circumOfCircle(R)
{
    let Area = 2*Math.PI*R
    return Area;
}
console.log(`circum of circle ${circumOfCircle(3)}`);

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
function convertCelsiusToFahrenheit(C)
{
    let oF = (C * 9/5) + 32;
    return oF;
}
console.log(convertCelsiusToFahrenheit(39));
// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month)
{
    let months = [`January`, `February`,`March`, `April` ,`May` ,`June`,`July`, `Augest`, `September`, `October`, `November`, `December`]
    if(month == 0 || month <= 2)
    {
        console.log("Winter");
    }
    else if(month == 3 || month <= 5)
    {
        console.log("Spring");
    }
    else if(month == 6 || month <= 8)
    {
        console.log("Summer");
    }
    else if(month == 9 || month <= 11)
    {
        console.log("Automn");
    }
    else
    {
        console.log("Not Valid");
    }

}
checkSeason(3);

