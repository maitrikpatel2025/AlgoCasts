// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    const arrA = stringA.replace(/[^\w]/g,"").toLowerCase().split("").sort()
    const arrB = stringB.replace(/[^\w]/g,"").toLowerCase().split("").sort()
    
    if (arrA.length !== arrB.length){
        return false
    }
    for ( let char in arrA){
        if (arrA[char] !== arrB[char]){
            return false
        }
    }
    return true

}

module.exports = anagrams;
/* 
    const charMapA = {}
    const charMapB = {}
    for (let charA of stringA.replace(/[^\w]/g,"").toLowerCase() ){
        if (charMapA[charA]){
            charMapA[charA] ++
        }
        else{
            charMapA[charA] = 1
        }
    }
      
    for (let charB of stringB.replace(/[^\w]/g,"").toLowerCase() ){
        if (charMapB[charB]){
            charMapB[charB] ++
        }
        else{
            charMapB[charB] = 1
        }
    }

    if (Object.keys(charMapA).length !== Object.keys(charMapB).length ){
        return false
    }
    for (let char in charMapA){
        if (charMapA[char] !== charMapB[char]){
            return false
        }
    }
    return true 
*/