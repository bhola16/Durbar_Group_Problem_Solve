function extractBodyContent(htmlString: string): string {
  const bodyContent = htmlString.split("<body>")[1] ?? "";
  const result = bodyContent.split("</body>")[0];

  return result!;
}

console.log(
  extractBodyContent(`<html>
  <head>
    <title>My Page</title>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is my new React app.</p>
  </body>
</html>`),
);
