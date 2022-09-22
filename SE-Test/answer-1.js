//Goals: Remove null or undefined value(nullish)

const question = [
  {
    session_name: "first test",
    classes: [{ class_name: undefined, students: [{ student_name: "John" }] }],
  },
  {
    session_name: null,
    classes: [
      { class_name: "second class", students: [{ student_name: "Doe" }] },
    ],
  },
];

const expected = [
  {
    session_name: "first test",
    classes: [{ students: [{ student_name: "John" }] }],
  },
  {
    classes: [
      { class_name: "second class", students: [{ student_name: "Doe" }] },
    ],
  },
];

const answer = question?.map((obj) => {
  if (obj.hasOwnProperty("session_name")) {
    obj.session_name ?? delete obj.session_name;
  }

  if (obj.hasOwnProperty("classes") && Array.isArray(obj.classes)) {
    obj.classes.map(
      (secondObj) => secondObj.class_name ?? delete secondObj.class_name
    );
  }

  return obj;
});

console.log("Expected", expected);
console.log("Result :>> ", answer);
