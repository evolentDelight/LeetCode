/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    //Use the sliding window approach

    let left = 0; //Left of the sliding window
    let maxLength = 0;//Longest substring's length without repeating characters
    let charSet = new Set();//Character Set to keep track of the substring

    for(let right = 0; right < s.length; right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left]);
            left++;
            //Any duplicate characters in front of the sliding window causes sliding window to shorten
            //Beginning with the leftmost character in the sliding window
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right-left + 1);
    }

    return maxLength;
    
};