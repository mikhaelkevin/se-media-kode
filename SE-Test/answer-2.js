//Goals: Remove duplicate data
const question = [1, 4, 2, 3, 5, 3, 2, 4];
const expected = [1, 2, 3, 4, 5];

const sortedArr = question?.sort();
const firstAnswer = [...new Set(sortedArr)];
const secondAnswer = sortedArr?.filter(
  (value, index) => sortedArr.indexOf(value) === index
);

console.log("Expected :>>", expected);
console.log("First Answer :>> ", firstAnswer);
console.log("Second Answer :>> ", secondAnswer);
