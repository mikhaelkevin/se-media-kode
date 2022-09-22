//Goal: find prefix array string
const question = ["flower", "flow", "flight"];
const excpected = "fl";

const findPrefix = (arrWord, result) => {
  if (arrWord?.length === 1) return arrWord[0];
  if (!arrWord?.length) return result;

  const comparedWord = arrWord[0];
  let index = 0;

  while (
    comparedWord[index] &&
    arrWord.every((word) => word[index] === comparedWord[index])
  ) {
    result += comparedWord[index];
    index++;
  }

  return result;
};

console.log("Expected", excpected);
console.log("Answer", findPrefix(question, ""));
// console.log("Compare :>> ", excpected === findPrefix(question));
