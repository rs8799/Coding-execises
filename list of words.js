/* List of words

Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop". */

let emptyArray = [];
let ask = prompt("Please enter a word or stop to exit");

while(ask !=="stop"){
  emptyArray.push(ask);
  ask = prompt("try again");
}
console.log(emptyArray)