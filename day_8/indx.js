// Object
// Exercice 1
// Create an empty object called dog
let dog = {};
// Print the the dog object on the console
console.log(dog)
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog = {name : `Inno`, Legs : 4, Color : `Black and White`, Age : `2yo`,bark : function(){return `Woof Woof`}}
// Get name, legs, color, age and bark value from the dog object
console.log(dog.name)
console.log(dog.Legs)
console.log(dog.Color)
console.log(dog.Age)
console.log(dog.bark())

const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }
// Find the person who has many skills in the users object.
console.log(users.Alex.skills.length, users.Asab.skills.length, users.Brook.skills.length, users.Daniel.skills.length, users.John.skills.length, users.Thomas.skills.length, users.Paul.skills.length);
