function isValidWalk(walk) {
  //insert brilliant code here
  if (typeof walk !== "object") {
    walk = ["n", "s", "w", "e", "e", "n", "s", "w", "e", "e"];
  }

  if (walk.includes("n", "s", "w", "e")) console.log(true);

  console.log(walk);
}

const x = isValidWalk(["x", "s", "x", "x"]);
console.log(x);
