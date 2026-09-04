function convertToCamelCase(sentence: string): string {
  const words = sentence.trim().split(/\s+/);

  const firstWord = words[0];
  if (!firstWord) return "";

  let result = firstWord.toLowerCase();

    for (const word of words.slice(1)) {
    const normalizedWord = word.toLowerCase();

    result += normalizedWord.charAt(0).toUpperCase() + normalizedWord.slice(1);
  }

  return result;
}

console.log(convertToCamelCase("hello world  i am bhola"));
console.log(convertToCamelCase("h o"));
console.log(convertToCamelCase(" k ll"));
