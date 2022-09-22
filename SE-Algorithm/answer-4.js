const prisoners = 9;
const step = 3;

const executionProcess = (n, k) => {
  const arrPrisoners = [];
  for (let i = 0; i < n; i++) {
    arrPrisoners.push(i);
  }

  console.log("arrPrisoners", arrPrisoners);
  return null;
};

console.log("Answer :>> ", executionProcess(prisoners, step));
