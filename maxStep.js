function maxStep(n, k) {
  let position = 0;

  for (let i = 1; i <= n; i++) {
    position += steps;

    //  If Jack steps with each move and lands on k, deduct 1 from the final position (i.e. implies Jack would stay in place on the first move)
    if (position === k) {
      position -= 1;
    }
  }

  return position;
} 