var fib = function(N) {
  if (N < 2) {
      return N;
  }
  
  let sequence = [0, 1];
  
  for (let i = 2; i <= N; i++) {
      let sum = sequence[i-1] + sequence[i-2];
      sequence.push(sum);
  }
  
  return sequence[N];
};