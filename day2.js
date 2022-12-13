const fs = require("fs");
const _ = require("lodash");

const input = fs.readFileSync("./day2.txt", "utf-8");

const scoreForAction = (x) =>
  ({
    X: 1,
    Y: 2,
    Z: 3,
  }[x]);

const scoreForResult = (x) =>
  ({
    X: 0,
    Y: 3,
    Z: 6,
  }[x]);

const scoreResultForA = (x) =>
  ({
    "A X": 3,
    "A Y": 6,
    "A Z": 0,

    "B X": 0,
    "B Y": 3,
    "B Z": 6,

    "C X": 6,
    "C Y": 0,
    "C Z": 3,
  }[x]);

const actionFromGuide = (x) =>
  ({
    "A X": "Z",
    "A Y": "X",
    "A Z": "Y",

    "B X": "X",
    "B Y": "Y",
    "B Z": "Z",

    "C X": "Y",
    "C Y": "Z",
    "C Z": "X",
  }[x]);

const scoreForA = (x) => {
  const action = x.split(" ")[1];
  return scoreForAction(action) + scoreResultForA(x);
};

const scoreForB = (x) => {
  const action = actionFromGuide(x);
  const result = x.split(" ")[1];
  return scoreForAction(action) + scoreForResult(result);
};

const solutionA = _.sum(input.split("\n").filter(Boolean).map(scoreForA));

console.log("A", solutionA);

const solutionB = _.sum(input.split("\n").filter(Boolean).map(scoreForB));

console.log("B", solutionB);
