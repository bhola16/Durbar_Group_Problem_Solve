
function daysBetweenDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);

  const difference = Math.abs(d1 - d2);

  return difference / (1000 * 60 * 60 * 24);
}

console.log(daysBetweenDates("2020-01-15", "2020-01-20"));
// 5

console.log(daysBetweenDates("2020-01-15", "2019-12-31"));
// 15

console.log(daysBetweenDates("2020-02-28", "2020-03-01"));
// 2 (leap year)

console.log(daysBetweenDates("2022-01-01", "2022-01-01"));
// 0
