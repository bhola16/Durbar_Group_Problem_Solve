function trackElevator(startFloor, minFloor, maxFloor, commands) {
  let currentFloor = startFloor;

  for (const command of commands) {
    if (command === "UP") {
      currentFloor = Math.min(currentFloor + 1, maxFloor);
    } 
    else if (command === "DOWN") {
      currentFloor = Math.max(currentFloor - 1, minFloor);
    }
  }

  return currentFloor;
}

// Test case 1
console.log(trackElevator(0, 0, 10, ["UP", "UP", "DOWN", "UP"]));
// Output: 2

// Test case 2
console.log(trackElevator(9, 0, 10, ["UP", "UP", "UP", "DOWN"]));
// Output: 9

// Test case 3
console.log(trackElevator(0, 0, 5, ["DOWN", "DOWN", "UP"]));
// Output: 1

// Test case 4
console.log(trackElevator(5, 0, 10, []));
// Output: 5