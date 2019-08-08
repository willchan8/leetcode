// Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

// Example 1:

// Input:
// [
//  [ 1, 2, 3 ],
//  [ 4, 5, 6 ],
//  [ 7, 8, 9 ]
// ]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:

// Input:
// [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9,10,11,12]
// ]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

var spiralOrder = function(matrix) {
  let results = [];
  
  if (matrix.length === 0) {
      return results;
  }
  
  let colBeg = 0;
  let colEnd = matrix[0].length - 1;
  let rowBeg = 0;
  let rowEnd = matrix.length - 1;
  
  while (colBeg <= colEnd && rowBeg <= rowEnd) {
      // traverse right from colBeg to colEnd on FIRST ROW
      for (let col = colBeg; col <= colEnd; col++) {
          results.push(matrix[rowBeg][col]);
      }
      rowBeg++;
      
      // traverse down from rowBeg to rowEnd on LAST COLUMN
      for (let row = rowBeg; row <= rowEnd; row++) {
          results.push(matrix[row][colEnd]);
      }
      colEnd--;
      
      if (rowBeg <= rowEnd) {
          // traverse left from colEnd to colBeg on LAST ROW
          for (let col = colEnd; col >= colBeg; col--) {
              results.push(matrix[rowEnd][col]);
          }
      }
      rowEnd--;
      
      if (colBeg <= colEnd) {
          // traverse up from rowEnd to rowBeg on FIRST COL
          for (let row = rowEnd; row >= rowBeg; row--) {
              results.push(matrix[row][colBeg]);
          }
      }
      colBeg++;
  }
  
  return results;
};