function reverseEachWord(str: string):string {

    const newStr = str.split(" ")
    const reverseStr = newStr.map(word => word.split("").reverse().join(""))
    const returnStr = reverseStr.join(" ");

    return returnStr;

}

console.log(reverseEachWord("Hello World"));
console.log(reverseEachWord("JavaScript is fun"));