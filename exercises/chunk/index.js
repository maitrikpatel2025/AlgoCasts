// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked  = []
    let index = 0
    while (index < array.length) {
        chunked.push(array.slice(index,index+size))
        index += size
    }
    return chunked;
}

module.exports = chunk;


/*
const array = [7, 6, 8, 4]
const size = 2
const chunked = [];

for (let element of array) {
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
}

output 

element 7
chunked_len_before if  0
last_before if undefined
----
chunked_len 1
last undefined
chunked_arry [ [ 7 ] ]
+++++++++
   
element 6
chunked_len_before if  1
last_before if [ 7 ]
----
chunked_len 1
last [ 7, 6 ]
chunked_arry [ [ 7, 6 ] ]
+++++++++
   
element 8
chunked_len_before if  1
last_before if [ 7, 6 ]
----
chunked_len 2
last [ 7, 6 ]
chunked_arry [ [ 7, 6 ], [ 8 ] ]
+++++++++
   
element 4
chunked_len_before if  2
last_before if [ 8 ]
----
chunked_len 2
last [ 8, 4 ]
chunked_arry [ [ 7, 6 ], [ 8, 4 ] ]
+++++++++

solution 1
function chunk(array, size) {
    const chunked  =[]
    for (let element of array){
        //get last element of chunked array if
        const last = chunked[chunked.length - 1]
        // check if last is undefined or last.length  is == size mean
        // chunked array is [1,2] length = 2 and size = 2 
        if(!last|| last.length === size){
            // push new element in chucked array  [1,2] let assume element 3 
            // than push 3 in new array of elemnt 
            chunked.push([element])
        }
        else{
            last.push(element)
        }
    }    
    return(chunked)
}
}*/