// First solution
function squareDigits2(num) {
  const convertNumToString = num.toString();
  const digits = convertNumToString.split("");
  console.log(digits);
  const squares = [];
  digits.forEach((digit) => {
    const number = Number(digit);
    const square = number * number;
    squares.push(square.toString());
  });
  const join = squares.join("");
  const result = Number(join);
  return result;
}

// Refactoring
function squareDigits(num) {
  const res = +num
    .toString()
    .split("")
    .map((x) => Number(x) * Number(x))
    .join("");
  console.log(res);
}
