var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let area = 0;

  while (left < right) {
    area = Math.max(area, Math.min(left, right) * (right - left));

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
};