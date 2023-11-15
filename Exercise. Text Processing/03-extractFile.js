function extractFile(path) {
  let folders = path.split("\\");
  let file = folders.pop().split(".");
  let extension = file.pop();

  let name = file.filter((word) => !(word == extension));
  name = name.join(".");

  console.log(`File name: ${name}`);
  console.log(`File extension: ${extension}`);
}
extractFile("C:\\Internal\\training-internal\\Template.pptx");
