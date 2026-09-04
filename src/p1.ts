function getMonthName(monthNumber: number): string {
    const months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    return months[monthNumber - 1]!;
}

console.log(getMonthName(3));
console.log(getMonthName(10));
console.log(getMonthName(11));
console.log(getMonthName(12));
console.log(getMonthName(13));