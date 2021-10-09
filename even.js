// isEven Function
isEven takes as its parameter a number and returns a Boolean value 
representing whether or not the number is even
const isEven = function (num) {
  return num % 2 === 0; // if num is even, the result is 0 and so the whole expression evaluates to true. False when num is odd.
}
// the function returns this value true or false to where it called
// which are the variable declarations below
const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);
//The variable tenIsEven is set to the value returned by isEven(10), namely true. elevenIsEven is set to the value returned by isEven(11), namely false.
console.log(tenIsEven);
console.log(elevenIsEven);
// we DO NOT need to set our function return values before logging the function return to the console.


const isEven  = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));
console.log(isEven(11));