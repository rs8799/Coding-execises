/* Let arr be an array.

Create a function unique(arr) that should return an array with unique items of arr.

For instance: */



function unique(arr){
  let cool = [];

  for(let str of arr){
    if(!cool.includes(str)){
      cool.push(str)
    }
  }
  return cool;
}
let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

















/* 







function unique(arr) {
  let result=[];

  for (let str of arr){
    if(!result.includes(str)){
      result.push(str)
    }
  }
  return result;

}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(strings) ); // Hare, Krishna, :-O

/* let results = arr.filter(function(item, index, array) {
  // if true item is pushed to results and the iteration continues
  // returns empty array if nothing found
}); */ */