const input = 123;

if (input <= 1 || !input) return console.log("Input should be greater than 1");
if (typeof input !== "number") return console.log("Input should be a number");

const leftTruncate = (n) => {
  const splittedN = n.toString().split("");
  splittedN.shift();
  return Number(splittedN.join(""));
};

const rightTruncate = (n) => {
  const splittedN = n.toString().split("");
  splittedN.pop();
  return Number(splittedN.join(""));
};

const primeCalculator = (n) => {
  for (let i = 2; i <= n; i++) {
    const tempCounter = n % i;
    if (tempCounter === 0 && i !== n) return false;
    if (tempCounter === 0 && i === n) return true;
  }
};

const mainFunction = (n) => {
  const numberIsSingular = n > 1 && n <= 9;
  if (n === 2) return "both";
  if (numberIsSingular) {
    const singularResult = primeCalculator(n);
    return singularResult ? "both" : singularResult;
  }

  let leftTruncateResult;
  let rightTruncateResult;

  const leftTruncated = leftTruncate(n);
  const rightTruncated = rightTruncate(n);

  if (!rightTruncated) rightTruncateResult = false;

  const leftDoCalculator = !leftTruncated
    ? (leftTruncateResult = false)
    : leftTruncated === 1
    ? true
    : primeCalculator(leftTruncated);

  const rightDoCalculator = !rightTruncated
    ? (rightTruncateResult = false)
    : rightTruncated === 1
    ? true
    : primeCalculator(rightTruncated);

  let finalResult;
  if (leftDoCalculator && !rightDoCalculator) finalResult = "left";
  if (!leftDoCalculator && rightDoCalculator) finalResult = "right";
  if (leftDoCalculator && rightDoCalculator) finalResult = "both";
  if (!leftDoCalculator && !rightDoCalculator) finalResult = false;

  return {
    leftNumber: {
      number: leftTruncated,
      isPrime: leftDoCalculator,
    },
    rightNumber: {
      number: rightTruncated,
      isPrime: rightDoCalculator,
    },
    finalResult,
  };
};

console.log(mainFunction(input));
