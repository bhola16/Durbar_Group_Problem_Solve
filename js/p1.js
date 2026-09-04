function convertToCamelCase(sentence) {
    const words = sentence.trim().split(/\s+/);

    if (words[0] === "") return "";

    let result = words[0].toLowerCase();

    for (let i = 1; i < words.length; i++) {
        const word = words[i].toLowerCase();
        result += word.charAt(0).toUpperCase() + word.slice(1);
    }

    return result;
}

console.log(convertToCamelCase("hello world  i am bhola"));
console.log(convertToCamelCase("h o"));
console.log(convertToCamelCase(" k ll"));
