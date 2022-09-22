//Goals: show the missing number
const question = [9, 6, 4, 2, 3, 5, 7, 0, 1];
const expected = 8;

const sortedArr = question?.sort();

const firstAnswer = sortedArr
  .map((value, index) => (value !== index ? index : null))
  .filter((value) => value);

const secondAnswer = sortedArr.reduce((result, value, index) =>
  value !== index ? (result = index) : result
);

console.log("Expected :>>", expected);
console.log("First Answer :>> ", firstAnswer);
console.log("Second Answer", secondAnswer);
