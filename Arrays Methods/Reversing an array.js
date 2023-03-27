//The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. 

function reverseArray(arr){
  let newArray =[];
  while(arr.length){
    newArray.push(arr.pop())
  }
  console.log(newArray)
}

console.log(reverseArray([1,2,3,4]))

