
  // splice:-

  // // array.splice(index, number of elements);

  // array.splice(2);  
  // Every element starting from index 2, will be removed

  // Argument 1:
  //  Index, Required. An integer that specifies at what position to add /remove items, Use negative values to specify the position from the end of the array.

  // Argument 2:
  //  Optional. The number of items to be removed. If set to 0(zero), no items will be removed. And if not passed, all item(s) from provided index will be removed.
  
  // Argument 3…n:
  //  Optional. The new item(s) to be added to the array



  var originalarray=[1,2,3,4,5];
  console.log("returned items",originalarray.splice(2));
 
  //returned items (3) [3, 4, 5]
  // shows [3, 4, 5], returned removed item(s) as a new array object.

  console.log("originalarray remains",originalarray);
 
  // originalarray remains (2) [1, 2]
// shows [1, 2], original array altered.


var array2=[6,7,8,9,0];
console.log(array2.splice(2,1));

// shows [8]

  
console.log(array2.splice(2,0));

//shows [] , as no item(s) removed.
 
console.log(array2);

// shows [6,7,9,0]

console.log(array2.splice(-1))
// shows [0] it shows last value

console.log(array2);

//shows [6,7,9,0]

var array3=[11,12,13,14,15];
console.log(array3.splice(2,1,"Ram","kiran"));
// shows [13]
 
console.log(array3);
// shows ) [11, 12, "Ram", "kiran", 14, 15]










// The slice() method can take 2 arguments:


// array.slice(from, until);
// From: Slice the array starting from an element index
// Until: Slice the array until another element index


var slicearraySelect=[1,2,3,4,5,45,56,75]
console.log(slicearraySelect.slice(2))

// shows (6) [3, 4, 5, 45, 56, 75], returned selected element(s).
 
var slicearray1=[1,2,3,4,5,6]
console.log("slicearray1",slicearray1.slice(2,4));
// shows [8, 9]





console.log(slicearray1.slice(-2));
// shows [5,6], returned  last two element(s) in array.


console.log(slicearray1);
// shows [1, 2, 3, 4, 5], original array remains intact.























