//Create a function that takes string
//Print the reverse of that string to the console
function reverseString(string){
  let breakUp = string.split("");
  let reverseString = breakUp.reverse()
  let reJoin = reverseString.join()
  return reJoin
}

//reverseString("Police")
//Create a function that takes in a string
//Alert if the string is a palindrome or not

function palindrome(string){
  let reverse = reverseString(string);
  if(reverse===string){
  }alert('Palindrome')
}
palindrome('wow')