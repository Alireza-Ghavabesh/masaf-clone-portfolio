function createObjects(names, letters) {
  let result = [];
  let index = 0;

  while (index < names.length) {
    for (let i = 0; i < letters.length; i++) {
      if (index < names.length) {
        result.push({ [letters[i]]: [index, index + 1] });
        index += 2;
      }
    }
  }

  return result;
}

let chat_ids = [
  "Adam",
  "Beth",
  "Caleb",
  "Diana",
  "Ethan",
  "Fiona",
  "George",
  "Hannah",
  "Ian",
  "Julia",
  "Kevin",
  "Laura",
  "Michael",
  "Nina",
  "Oscar",
];
let phones = ["09161111111", "09162222222", "0916333333"];

console.log(createObjects(chat_ids, phones));
