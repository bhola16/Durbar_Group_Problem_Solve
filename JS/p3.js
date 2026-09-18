function titleCaseSentence(str) {
  const words = str.trim().split(/\s+/);

  if (str.trim() === "") {
    return "";
  }

  return words
    .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

console.log(titleCaseSentence("hello world"));
console.log(titleCaseSentence("a short sentence"));
console.log(titleCaseSentence("  HELLO   WORLD  "));
console.log(titleCaseSentence(""));
console.log(titleCaseSentence("   "));