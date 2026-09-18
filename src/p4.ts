function countWordFrequencies(sentence: string): Record<string, number> {
  const words: string[] = sentence.toLowerCase().match(/[a-z0-9]+/g) || [];

  const count: Record<string, number> = {};

  for (const word of words) {
    count[word] = (count[word] || 0) + 1;
  }

  return count;
}

console.log(countWordFrequencies("Hello world, hello!"));

console.log(
  countWordFrequencies("The quick brown fox jumps over the lazy dog."),
);

console.log(countWordFrequencies(""));
