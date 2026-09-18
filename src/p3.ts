function titleCaseSentence(str: string): string {
  const words: string[] = str.trim().split(/\s+/);

  return words
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(titleCaseSentence("hello world"));
console.log(titleCaseSentence("a short sentence"));
console.log(titleCaseSentence("  HELLO   WORLD  "));
console.log(titleCaseSentence("javaScript is AWESOME"));