/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  // Manacher's Algorithm
  let tf = "^#" + s.split("").join("#") + "#$";//tf = transformed
  let len = tf.length;//transformed string's length
  let pRadii = new Array(len).fill(0);//palindromic radii array. Each instance contains total palindromic string
  let center = 0, rightB = 0;//rightBoundary

  for (let i = 1; i < len - 1; i++) {
    pRadii[i] = (rightB > i) ? Math.min(rightB - i, pRadii[2 * center - i]) : 0;

    while (tf[i + 1 + pRadii[i]] === tf[i - 1 - pRadii[i]]){
      pRadii[i]++;
    }

    if (i + pRadii[i] > rightB) {
      center = i;
      rightB = i + pRadii[i];
    }
  }

  let max_len = Math.max(...pRadii);
  let center_index = pRadii.indexOf(max_len);
  return s.substring((center_index - max_len) / 2, (center_index + max_len) / 2);
};