
function toQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => {
      return encodeURIComponent(key) + "=" + encodeURIComponent(value);
    })
    .join("&");
}

console.log(toQueryString({ search: "hello world", page: 1 }));
// search=hello%20world&page=1

console.log(toQueryString({ page: 1, search: "hello world" }));
// page=1&search=hello%20world

console.log(toQueryString({ sort: "asc", limit: 10 }));
// sort=asc&limit=10

console.log(toQueryString({}));
// ""

console.log(toQueryString({ "first name": "Bhola Bala" }));
// first%20name=Bhola%20Bala
