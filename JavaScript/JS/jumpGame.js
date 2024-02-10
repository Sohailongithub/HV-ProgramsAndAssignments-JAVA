function jumpGame(arr) {
  if (arr.length == 1) {
    return 0;
  }
  let jumps = 0;
  let far = 0;
  let currJumpEnd = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    far = Math.max(far, i + arr[i]);

    if (i == currJumpEnd) {
      jumps++;
      currJumpEnd = far;
    }
  }
  return jumps;
}

let a = [4, 2, 1, 1, 5]; //2-3-5

let countJumps = jumpGame(a);
console.log(countJumps);
