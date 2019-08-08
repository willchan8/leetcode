function largestMatrix(arr) {
  if (arr.length === 1) {
    return arr[0][0];
  }

  let maxWidth = 0;

  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr[i].length; j++) {
      if (arr[i][j] === 1) {
        if (arr[i-1][j-1] > 0 && arr[i][j-1] > 0 && arr[i-1][j] > 0) {
          let min = Math.min(arr[i-1][j-1], arr[i][j-1], arr[i-1][j]);
          arr[i][j] = min + 1;
        }
        if (arr[i][j] > maxWidth) {
        maxWidth = arr[i][j];
        }
      }
    }
  }

  return maxWidth;
}