//Another common structure for looping in JavaScript is the for loop. 
//The idea of a for loop is very similar to a while, only all the code that relates to the state of the loop is written on one line.
// for loop requires three statements separated by semicolons. 
// The first is for initializing the loop, most commonly to declare our counter variable.
// The second is 'stopping condition' for defining our while condition - validating our variable against the condtion
// The last is 'iteration statement' for updating the state of our loop after every step.
const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
 
  console.log(chorus);
}
console.log("Until the sun comes up!");
//This new chorus program produced the same result as our first program in this exercise.
// But as we can see, our counter variable, repeat, our condition that should be true for our loop to continue, 
// and the incrementing of our counter variable, are all written in one line.


const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  if (repeat === 5) {
    console.log("*change key*");
  }
  console.log(chorus);
}
console.log("Until the sun comes up!");

//Like blocks following if statements, any code can go inside the block following a while. 
//For example, if we're worried our song outro is too repetitive we might decide to change the key after five repetitions.
