//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

let newArray = [];
function practice(arr){
  for(i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      newArray.push(arr[i])
    }
  }
}


console.log(practice([2,3,4,6]))
console.log(newArray)