// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str){

    return str.split("").reduce((rev,char)=> char + rev,"");
}
module.exports = reverse;

/*
Solution 1 -- maitrik
function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  revString = "";
  for (i=0;i<arr.length;i++){
          revString = revString + arr[i]
  };
  return revString
}

Solution 2 -- maitrik/stephen
function reverse(str) {
return str.split("").reverse().join("");
}

Solution 3 -- maitrik/stephen
function reverse(str){
    let reversed = " ";
    for (let character of str){
        reversed = character + reversed
    }
    return reversed
}

Solution 4 -- maitrik/stephen
function reverse(str){
    return str.split("").reduce((rev,char)=> char + rev,"");
}

*/