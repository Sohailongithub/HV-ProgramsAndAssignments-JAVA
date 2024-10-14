// There is a drill in the army. The Army general wants to know the best cumulative power of his troops.
// Troops give the best results when the maximum different level of a soldier stands together. If a troop
// contains 2 same levels of a soldier their power becomes 0. Let assume there are x different levels in the
// army, You have to find the power of the best troop from the army given. Assume 1 soldier power to be 1
// unit.
// 1) Input: army = "wpwkewe" (w,p,k,e : are different levels of soldier) Output: 4 At max 4 is max power of
// any troop formed. (pwke)


//longest substring with unique values
function longestsubstring(s) {
  let substringss = {};
  let start = 0;
  let maxlength = 0;
  let longeststring = 0;

  for (let end = 0; end < s.length; end++) {
    if (s[end] in substringss && substringss[s[end]] >= start) {
      //if the char is present ,update the start by adding 1 to the last occurence index
      start = substringss[s[end]] + 1;
    }
    substringss[s[end]] = end;

    //update the max length
    if (end - start + 1 > maxlength) {
      maxlength = end - start + 1;
      longeststring = start;
    }
  }
  return s.substring(longeststring, longeststring + maxlength);
} input = "abcabcdbb";
let result = longestsubstring(input);
console.log(result);

function twoSum(input, target) {
    let dataSets = {};
    for (let i = 0; i < input.length; i++) {
        let num = input[i];
        let remainingValue = target - num;
        if (remainingValue in dataSets) {
            return [input[dataSets[remainingValue]], input[i]]; // returns the indices of the two numbers
        }
        dataSets[num] = i; // store the index of the current number
    }
    return null; // return null if no pair is found
}


 let input = [1, 4, 2, 2, 5, 7];
  let target = 5;
  console.log(twoSum(input, target));