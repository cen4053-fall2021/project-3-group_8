/**
 * The following JavaSCript file will generate two random numbers that are between 0 and 99 and write them to a file. 
 * It will write them to the ...
 */
let finalString = ""; 

let randomOne = Math.floor(Math.random() * 100); 
let randomTwo = Math.floor(Math.random() * 100); 

finalString = randomOne + " " + randomTwo; 

console.log(`The written contents for the file will be: ${finalString}`);

