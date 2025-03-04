/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    //Try splice method
        //indexOf() returns the first occurrence of substring or character
    //Recursion for further splice

    if(s.length === 1) return 1;//If there are only one character, return the length of 1
    if(s.length === 0) return 0;

    let index = 0;

    let charToCheck = s[index];//First character in string to check after slice

    let remainingString = s.slice(index + 1);//Remaining String to check for duplicate which ends substring

    let longestHolder = remainingString.indexOf(charToCheck) + 1;//longestHolder to prevent unnecessary checks by skipping over lower valued substring w/o repeating characters

    console.log(index, charToCheck, remainingString)
    console.log(remainingString.indexOf(charToCheck))
    console.log(longestHolder)
};

//Failed due to not considering duplicates within the initial splice
/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    //Try splice method
        //indexOf() returns the first occurrence of substring or character
    //Recursion for further splice

    if(s.length === 1) return 1;//If there are only one character, return the length of 1
    if(s.length === 0) return 0;

    let index = 0;

    let charToCheck = s[index];//First character in string to check after slice

    let remainingString = s.slice(index + 1);//Remaining String to check for duplicate which ends substring
    let loopString = ""//remaining string during loop; after first cut

    let longestHolder = remainingString.indexOf(charToCheck) + 1;//longestHolder to prevent unnecessary checks by skipping over lower valued substring w/o repeating characters
    let tempHolder = 0;//temporary length holder

    console.log(index, charToCheck, remainingString)
    console.log(remainingString.indexOf(charToCheck), s[remainingString.indexOf(charToCheck)])
    console.log(longestHolder)

    while(remainingString !== ""){
        if(remainingString.length < longestHolder) break; //Break early when there are no more possible longer substring

        charToCheck = remainingString[0];
        loopString = remainingString.slice(1);
        tempHolder = loopString.indexOf(charToCheck) + 1//What happens when there aren't any match?
            //Returns 0(thanks to -1 + 1) when reach end of string
        console.log("tempHolder: ", tempHolder, loopString.indexOf(charToCheck))
        console.log(charToCheck, loopString)
        if(!tempHolder) {//when reached end of string, end loop
            tempHolder = remainingString.length + 1;
            remainingString = "";//Declare end of loop, once if statements finish
        }
        else{
            console.log("1: ", remainingString)
            remainingString = remainingString.slice(tempHolder + 1)
            console.log("2: ", remainingString)
        }

        if(tempHolder > longestHolder) longestHolder = tempHolder;

    }

    return longestHolder;
};