// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
//const sentence = "My name is Bassem.";
let userInput = prompt("Please enter your input:");
let wordCount = 0;
let vowelCount = 0;

for (let i = 0; i < userInput.length; i++) {
    let char = userInput[i];
    
    if (char=== ' ') {
    wordCount++;
    }
    if (char === 'a' || char === 'e' || char === 'i' ||char === 'o' ||char === 'u') {
    vowelCount++;
    }
}
wordCount++;
console.log("Word count is: " + wordCount);
console.log("Vowel count is: " + vowelCount);