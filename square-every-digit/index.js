function squareDigits(num) {
  const convertNumToString = num.toString();
  const digits = convertNumToString.split("");
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

const x = squareDigits(9119);
console.log(x);
