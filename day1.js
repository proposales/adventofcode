const fs = require("fs");
const _ = require("lodash");

const input = fs.readFileSync("./day1.txt", "utf-8");

const sumCalories = (x) =>
  _.sum(
    x
      .split("\n")
      .map((y) => parseInt(y, 10))
      .filter(Boolean)
  );

const solutionA = _.max(input.split("\n\n").map(sumCalories));

console.log("A", solutionA);

const solutionB = _.sum(
  input.split("\n\n").map(sumCalories).sort().reverse().slice(0, 3)
);

console.log("B", solutionB);
