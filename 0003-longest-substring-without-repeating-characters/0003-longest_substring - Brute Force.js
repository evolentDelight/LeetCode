/**
 * Brute Force Approach
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let array = [];
  let ph = ""//placeholder string

  for(let i = 0; i < s.length; i++){
      ph += s[i];

      if(s.length === 1){
          array.push(ph);
          break;
      }

      for(let j = i + 1; j < s.length; j++){
          console.log("\nBegin")
          console.log("s[i]: " + s[i])
          console.log("ph: " + ph)
          console.log("s[j]: " + s[j])
          if(ph.includes(s[j])){//if duplicate, load substring into array and break
              array.push(ph); 
              console.log("End: " + ph)
              ph = ""
              break;
          }
          else if(j === s.length-1){//At end of string, reset ph
              ph += s[j]
              array.push(ph)
              console.log("End: " + ph)
              ph = ""
          }
          else {
              ph += s[j]
              console.log("Add: " + s[j] + "= " + ph)
              console.log("Continue-")
          }
      }
  }
  console.log(array)

  let len = 0;
  for(let i = 0; i < array.length; i++){
      if(array[i].length > len) len = array[i].length
  }

  return len;
};