function countConnectedFriends(friendships, startPerson) {
  const graph = {};

  for (const [person1, person2] of friendships) {
    if (!graph[person1]) {
      graph[person1] = [];
    }

    if (!graph[person2]) {
      graph[person2] = [];
    }

    graph[person1].push(person2);
    graph[person2].push(person1);
  }

  const visited = new Set();
  const queue = [startPerson];

  visited.add(startPerson);

  while (queue.length > 0) {
    const current = queue.shift();

    for (const friend of graph[current] || []) {
      if (!visited.has(friend)) {
        visited.add(friend);
        queue.push(friend);
      }
    }
  }

  return visited.size;
}

// Test case 1
console.log(countConnectedFriends(
  [["Alice", "Bob"], ["Bob", "Charlie"], ["David", "Eve"]],
  "Alice"
));
// Output: 3

// Test case 2
console.log(countConnectedFriends(
  [["Alice", "Bob"], ["Charlie", "David"]],
  "Eve"
));
// Output: 1

// Test case 3
console.log(countConnectedFriends(
  [["A", "B"], ["B", "C"], ["C", "D"], ["D", "E"]],
  "A"
));
// Output: 5

// Test case 4
console.log(countConnectedFriends([], "John"));
// Output: 1