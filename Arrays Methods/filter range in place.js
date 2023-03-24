/* Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.

The function should only modify the array. It should not return anything.

For instance:

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

alert( arr ); // [3, 1] */




function filterRangeInPlace(arr,a,b){
  for(let i=0;i < arr.length;i++){
   let val = arr[i];

    if (val < a || val > b){
      arr.splice(i,1);
      i--;//reset the index as when you remove a number the number after it get its index changed to the index of the number you just spliced. if you don't have this it will miss the number after the number you delected due to its index turning into the index of the number you just spliced. 
    }
  }
}

let arr = [5,3,8,1];
filterRangeInPlace(arr,1,4);
alert(arr);