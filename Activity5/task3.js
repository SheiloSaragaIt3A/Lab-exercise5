
let textInput = prompt("Enter a string of text:");
let charCount = textInput.length;
let wordCount = textInput.split(/\s+/).filter(word => word.length > 0).length;
let sentenceCount = textInput.split(/[.!?]/).filter(sentence => sentence.length > 0).length;

let words = textInput.split(/\s+/);
let wordOccurrences = {};
for (let word of words) {
    wordOccurrences[word] = (wordOccurrences[word] || 0) + 1;
}
let mostFrequentWord = Object.keys(wordOccurrences).reduce((a, b) => wordOccurrences[a] > wordOccurrences[b] ? a : b);
let mostFrequentWordCount = wordOccurrences[mostFrequentWord];

let totalWordLength = words.reduce((total, word) => total + word.length, 0);
let averageWordLength = totalWordLength / wordCount;

console.log("Character Count:", charCount);
console.log("Word Count:", wordCount);
console.log("Sentence Count:", sentenceCount);
console.log("Most Frequent Word:", mostFrequentWord);
console.log("Occurrences of Most Frequent Word:", mostFrequentWordCount);
console.log("Average Word Length:", averageWordLength);