interface CountType {
  [key: string]: number;
}
type ReturnType = string | number;

function findFirstUniqueChar(s: string): ReturnType {
  let count: CountType = {};

  for (let i = 0; i < s.length; i++) {
    let char: string = s[i]!;

    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    let char: string = s[i]!;
    if (count[char] === 1) {
      return s[i]!;
    }
  }
  return -1;
}

console.log(findFirstUniqueChar("aabbcdeff")); // c
console.log(findFirstUniqueChar("aabb")); // -1
console.log(findFirstUniqueChar("abc")); // a
console.log(findFirstUniqueChar("aabbccd")); // d
