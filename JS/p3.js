function countFilesInFolder(structure) {
  let count = 0;

  for (const item of structure) {
    if (item.type === "file") {
      count++;
    } 
    else if (item.type === "folder") {
      count += countFilesInFolder(item.children);
    }
  }

  return count;
}

// Test case 1
const structure1 = [
  { name: "document.txt", type: "file" },
  {
    name: "images",
    type: "folder",
    children: [
      { name: "photo1.jpg", type: "file" },
      { name: "photo2.png", type: "file" }
    ]
  },
  { name: "report.pdf", type: "file" }
];

console.log(countFilesInFolder(structure1)); // 4

// Test case 2
const structure2 = [
  {
    name: "src",
    type: "folder",
    children: [
      { name: "index.js", type: "file" },
      {
        name: "components",
        type: "folder",
        children: [
          { name: "Button.js", type: "file" },
          { name: "Header.js", type: "file" }
        ]
      }
    ]
  },
  { name: "package.json", type: "file" },
  { name: "empty_folder", type: "folder", children: [] }
];

console.log(countFilesInFolder(structure2)); // 4