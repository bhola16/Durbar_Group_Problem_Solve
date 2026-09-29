function getDayOfWeek(year: number, month: number, day: number): string {
  const date = new Date(year, month - 1, day);

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return days[date.getDay()] ?? "";
}

console.log(getDayOfWeek(2024, 5, 11)); // Saturday
console.log(getDayOfWeek(2023, 1, 1)); // Sunday
