// Exercises: Level 1
// Write a pattern which identify if a string is a valid JavaScript variable
const isValidVariableName = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;
console.log(isValidVariableName.test('KutsiGira'));
console.log(isValidVariableName.test('2Kutsi'));