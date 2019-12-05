// Initialize array of names  with array literal
let names = [
    "kiran",
    "RAM",
    "KUMAR",
    'RAJA',
    'KUMAR',
    'SAI'
];

console.log(names);
console.log("----------------------------------------");

// Initialize array of NAMES  with array constructor
let NAMES = new Array(
    "kiran",
    "RAM",
    "KUMAR",
    'RAJA',
    'KUMAR',
    'RAM'
);
console.log("// Initialize array of NAMES  with array constructor");
console.log(NAMES)
console.log("----------------------------------------");


// Initialize array of mixed datatypes
let mixedData = [
    "stringdatatype",
    null,
    7,
    [
        "another",
        "array",
    ],
];console.log(mixedData)

console.log("----------------------------------------");

//Indexing Arrays

const len=names.length;
console.log(len);

console.log("----------------------------------------");

const indexof=names.indexOf('KUMAR')
console.log(indexof);

console.log("----------------------------------------");

const lastIndex=names.lastIndexOf('KUMAR')
console.log(lastIndex);

console.log("----------------------------------------");


//Access LAST ELEMENT OF ARRAY (index into) an Array item
var last = NAMES[NAMES.length - 1];
console.log(last);

//Loop over an Array
console.log("----------------------------------------");

NAMES.forEach(function(item, index, array) {
    console.log(item, index);
  });



  let nestedArray = [
    [
        "salmon",
        "halibut",
    ],
    [
        "coral",
        "reef",
    ]
];
console.log("----------------------------------------");
const nestedarray =nestedArray[1][0];
console.log(nestedarray);



//Adding an Item to an Array
NAMES[6]='SHAW'
console.log(NAMES);

//If we add an item and accidentally skip an index, it will create an undefined item in the array.

NAMES[8] = "TARUN";

console.log(NAMES);



// PUSH ADDING ELEMENT END OF THE ARRAY

NAMES.push('ags')
console.log(NAMES);

// UNSHIFT ADDING ELEMENT BEGGING OF THE ARRAY

NAMES.unshift('AGS')
console.log(NAMES);

//Between push() and unshift() you will be able to apend items to the beginning and end of an array.

//Removing an Item from an Array

// Remove the last item from the NAMES array
NAMES.pop();
console.log(NAMES);
// Remove the FIRST item from the NAMES array
NAMES.shift()
console.log(NAMES);
// REMOVE ITEM FROM SPECIFIED POSITION
NAMES.splice(1,2);
console.log(NAMES);

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(1,2));
// SLICE(START INDEX ,ENDINDEX+1)


//Modifying Items in Arrays

animals[5]="CAT"
console.log(animals);

animals.splice(2,3,'dog','kiran')
console.log(animals);
// this splice(starting index, how many remove elements from there itself)

//Looping Through an Array

for (let i = 0; i < animals.length; i++) {
    console.log(i,animals[i]);
    
    
}

for (let mammal of animals) {
    console.log(mammal);
}

//The concat() method merges two or more arrays together to form a new array.
const concat=animals.concat(names,NAMES);
console.log(concat);

//The join() method converts all the elements of an array into a new string.

const join=concat.join( "_" )
console.log(join);
// when we use "" it commbine all the elements in the array


//he toString() method returns a string representing the specified array and its elements.

var array1 = [1, 2,'ram' ,'@','a', '1a'];
console.log(array1.toString());


//The fill() method fills (modifies) all the elements of an array from a start index (default zero) to an end index (default array length) with a static value. 

var fil=[1,3,4,5,6,7]

const result=fil.fill(7,4,7);
console.log(result);

// sytax(replace element, startindex,endindex+1)

//The copyWithin() method shallow copies part of an array to another location in the same array and returns it without modifying its length.

var copyWithin = ['a', 'b', 'c', 'd', 'e'];

// copy to index 0 the element at index 3
console.log(copyWithin.copyWithin(4,1));

//syntax copywithin( copyelemnt print position, which elemnet we want to print copy to postion)

console.log(copyWithin.copyWithin(0,1,2));
//0: a,"b"1: "c"2: "d"3: "d"4: "b"
// syntax (copyelement print position, which elemnet we want to print copy to postion,which elemnet we want to print copy to postion+1 )

//The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
var array1 = [1, 2, 3];

console.log(array1.includes(5));
// expected output: true

function isBelowThreshold(currentValue) {
    return currentValue < 10;
  }
  
  var array1 = [1, 30, 39, 29, 10, 13];
  
  console.log(array1.every(isBelowThreshold));
  // expected output: true
  