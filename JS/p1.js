function formatCountdown(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

console.log(formatCountdown(3661)); // 01:01:01
console.log(formatCountdown(59));   // 00:00:59
console.log(formatCountdown(3600)); // 01:00:00
console.log(formatCountdown(0));    // 00:00:00
console.log(formatCountdown(86400)); // 24:00:00