// Exercises 1 :

let age = prompt("Enter your age :");
let gap;
if(age >= 18)
{
    alert("You are old enough to drive");
}
else
{   
    gap = 18 - +age;
    alert("You are left with " + gap + " years to drive");
}

let myAge = 19;
let yourAge = +prompt("Enter your age : ");
let gapp = yourAge - myAge;
if(yourAge > 19)
{
    alert("your are "+ gapp + " Years older than me");
}
else if(yourAge < 19)
{
    alert("your are "+ gapp * - 1 + " years younger than me");

}
else
{
    alert("Same age");
}

let a = 4
let b = 3
if(a > b)
{
    alert(a + " is greater than " + b);
}
else
{
    alert(b + " is greater than " + a);
}

let number = +prompt("Enter a number : ");
if(number % 2 == 0)
{
    alert(number + " is an even number")
}
else
{
    alert(number + " is an odd number");
}

//Exercise 2 :

let grade = +prompt("Enter your grade: ");

if (grade >= 0 && grade <= 49)
{
    alert("F");
}
else if (grade >= 50 && grade <= 59)
{
    alert("D");
}
else if (grade >= 60 && grade <= 69)
{
    alert("C");
}
else if (grade >= 70 && grade <= 79)
{
    alert("B");
}
else if (grade >= 80 && grade <= 100)
{
    alert("A");
}
else
{
    alert("Invalid grade");
}

let mouth0 = prompt("Give mouth : ");
let mouth1 = mouth0.toLowerCase();
if(mouth1 == "september" ||mouth1 == "octobre"|| mouth1 == "november")
{
    alert("the season is Autumn");
}
else if(mouth1 == "decembre" ||mouth1 == "january"|| mouth1 == "february")
{
    alert("the season is Winter");
}
else if(mouth1 == "march" ||mouth1 == "april"|| mouth1 == "may")
{
    alert("the season is Spring");
}
else(mouth1 == "june" ||mouth1 == "july"|| mouth1 == "august")
{
    alert("the season is Summer");
}

let days = prompt("What is the day today ? ");
let day = days.toLowerCase();
if (day == "saturday" || day == "sunday")
{
    alert(day + " is a weekend");
}
else{
    alert(day + " is a working day");
}

// Exercise 3 :

let chher = prompt("Enter a month : ");
let chher1 = chher.toLowerCase();

switch(chher1)
{
    case "january":
        alert(chher1 + " has 31 days");
        break;
    case "february":
        alert(chher1 + " has 28 days");
        break;
    case "april":
        alert(chher1 + " has 30 days");
        break;
        default:
        alert("NOT FOUND");
}