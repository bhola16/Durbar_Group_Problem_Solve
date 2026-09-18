function isAnagram(s1: string, s2: string): boolean {
  const str1 = s1.toLowerCase().replace(/[^a-z]/g, "");
  const str2 = s2.toLowerCase().replace(/[^a-z]/g, "");

  if (str1.length !== str2.length) {
    return false;
  }

  const count: Record<string, number> = {};

  for (const char of str1) {
    count[char] = (count[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!count[char]) {
      return false;
    }

    count[char]--;
  }

  return true;
}


console.log(isAnagram("listen", "silent"));
// true

console.log(isAnagram("Hello", "world"));
// false

console.log(isAnagram("A decimal point", "I'm a dot in place"));
// true