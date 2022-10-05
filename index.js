// EASY (1)
const randomArr = (arr) => {
  let even = [];
  let odd = [];
  arr.forEach((e) => (e % 2 === 0 ? even.push(e) : odd.push(e)));
  console.log(`Even numbers : ${even} \nOdd numbers : ${odd}`);
};

randomArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// EASY (2)
const display = (num) => {
  isPrime = (num) => {
    for (var i = 2; i < num; i++)
      if (num % i === 0) {
        return false;
      }
    return true;
  };
  const arr = [2];
  for (var i = 3; i < num; i += 2) isPrime(i) ? arr.push(i) : 0;
  console.log(arr);
};

display(30);

// MEDIUM (1)
function vowelChecker(x) {
  x.match(/[AEIOUaeiou]/g)
    ? console.log("This is a vowel")
    : console.log("This is not a vowel");
}
vowelChecker("A");
vowelChecker("e");
vowelChecker("I");
vowelChecker("o");
vowelChecker("u");
vowelChecker("Z");

// MEDIUM (2)
function anagramChecker(a1, a2) {
  lowercase = (x) => x.toLowerCase().split("").sort().join("");
  lowercase(a1) == lowercase(a2) ? console.log("true") : console.log("false");
}
anagramChecker("god", "DGo");

// MEDIUM (3)
function largestRemainderCheck(x, y) {
  x = Math.abs(x);
  y = Math.abs(y);
  while (y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}

console.log(largestRemainderCheck(336, 360));
console.log(largestRemainderCheck(78, 126));

// Medium (4)
const car = {
  make: "BMW",
  model: "Z4",
  year: 2009,
  mileage: 104000,
  color: "black",
  driveToWork: function () {
    console.log(`old mileage: ${this.mileage}`);
    this.mileage += 33;
    console.log(`new mileage: ${this.mileage}`);
  },
  driveAroundTheWorld: function () {
    console.log(`old mileage: ${this.mileage}`);
    this.mileage += 24000;
    console.log(`new mileage: ${this.mileage}`);
  },
  runErrands: function () {
    console.log(`old mileage: ${this.mileage}`);
    this.mileage += 30;
    console.log(`new mileage: ${this.mileage}`);
  },
};

car.driveToWork();
car.driveAroundTheWorld();
car.runErrands();

// Hard (1)
brackets = (str) => {
  const brackets = ["{}", "[]", "()"];
  brackets.forEach((e) =>
    e === `${str.slice(0, 1)}${str.slice(-1)}` ? console.log(true) : 0
  );
};

brackets("{hello}");
