//Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start,end){
  let newArray = []

  for(i=start;i<=end;i++){
    newArray.push(i)
  }
  return newArray

}
range(1,5)


//Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

let arr = [1,10]
function addingUpNumbers(arr){
  let pileOfNumbers =0
  arr.forEach(item => { pileOfNumbers += item
  });
  return pileOfNumbers
}

addingUpNumbers(range(1,10))