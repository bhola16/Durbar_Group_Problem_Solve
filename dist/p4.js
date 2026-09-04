"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function findLongestWord(sentence) {
    const words = sentence.match(/[a-zA-Z0-9]+/g);
    if (!words) {
        return "";
    }
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// jumped
console.log(findLongestWord("Hello world, how are you today?"));
// Hello
console.log(findLongestWord("cat dog elephant"));
// elephant
console.log(findLongestWord("JavaScript!!! React???"));
// JavaScript
console.log(findLongestWord("abc 12345 xyz"));
// 12345
console.log(findLongestWord(""));
// ""
//# sourceMappingURL=p4.js.map