//           SOME VARIABLES ARE USED MULTIPLE TIMES           

// iterate 0 to 10 using for loop, do the same using while and do while loop
let number = 0;
while(number <= 10){
    console.log(number);
    number++;
}
let nbr = 0;
do{
    console.log(nbr);
    nbr++;
}
while(nbr <= 10);

for(nmb = 0 ; nmb <= 10 ; nmb++)
{
    console.log(nmb);
}
// Iterate 10 to 0 using for loop, do the same using while and do while loop
let nb = 10;
while(nb >= 0){
    console.log(nb);
    nb--;
}
let nbr1 = 10;
do{
    console.log(nbr1);
    nbr1--;
}
while(nbr1 >= 0);
// Iterate 0 to n using for loop
let n;
for(nb2 = 0 ; nb2 >= n ; nb2++){
    console.log(nb2);
}

// Write a loop that makes the following pattern using console.log():
// #
// ##
// ###
// ####
// #####
// ######
// #######

for (let h = 1; h <= 7; h++) {
    let lp = '';
    for (let w = 1; w <= h; w++) {
        lp = lp + '#';
    }
    console.log(lp);
}

// Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

let n1 = 0, n2 = 0;
while(n1 <=10 && n2 <=10)
{
    let R = n1 * n2;
    console.log(`${n1} * ${n2} = ${R}`);
    n1++;
    n2++;
}

// Using loop print the following pattern

//  i    i^2   i^3
//  0    0     0
//  1    1     1
//  2    4     8
//  3    9     27
//  4    16    64
//  5    25    125
//  6    36    216
//  7    49    343
//  8    64    512
//  9    81    729
//  10   100   1000
let nbr = 0;
let Lines = 0;
console.log(`nbr\t\tnbr^2\tnbr^3`);
while(Lines <= 10 && nbr <= 10)
{
    let nbr1 = nbr*nbr;
    let nbr2 = nbr1*nbr;
    console.log(`${nbr}\t\t${nbr1}\t\t${nbr2}`);
    Lines += 1;
    nbr += 1;
}