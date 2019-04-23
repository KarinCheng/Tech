/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

console.log ("Hi, it's me");

/*Looping a triangle*/
var hash = "";

while (hash.length < 7) {
    console.log (hash = hash + "#");
}

//FizzBuzz
var number = 0;

for (var number = 0 ; number < 100 ; number ++) {
    if (number % 5 == 0 && number % 3 == 0) {
        console.log ("BuzzFizz");
    } else if (number % 5 == 0) {
        console.log ("Buzz");
    } else if (number % 3 == 0) {
        console.log ("Fizz");
    }else {
        console.log (number);
    }
}

//Chessboard
var line = 4;
var i = 0;

while (i < 8){
    if(i % 2 === 0) {
        console.log(("#" + " ").repeat(line));
    }else {
        console.log((" " + "#").repeat(line));
    }i ++;
}