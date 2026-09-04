function extractBodyContent(htmlString) {
    const bodyContent = htmlString.split("<body>")[1];
    const result = bodyContent.split("</body>")[0];

    return result;
}