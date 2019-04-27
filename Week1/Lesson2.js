//Minimum
function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

console.log(min(0, 10));
console.log(min(0, -10));

function printFarmInventory(cows, chickens) {
  let cowString = String(cows);
  while (cowString.length < 3) {
    cowString = "0" + cowString;
  }
  console.log(`${cowString} Cows`);
  let chickenString = String(chickens);
  while (chickenString.length < 3) {
    chickenString = "0" + chickenString;
  }
  console.log(`${chickenString} Chickens`);
}
printFarmInventory(7, 11);

//Bean counting
function characterTeller(woord, character) {
  let counted = 0;
  for (let i = 0; i < woord.length; i++) {
    if (woord[i] == character) {
      counted ++;
    }
  }
  return counted;
}

function countBs(woord) {
  return characterTeller(woord, "B");
}

console.log(countBs("BBC"));
console.log(characterTeller("kakkerlak", "k"));

//The sum of range
function sum(start, end){
    var numberArray = [];

    for(var start; start <= end; start++){
        numberArray.push(start);
    }
    return numberArray;
}

console.log(sum(1, 10));
