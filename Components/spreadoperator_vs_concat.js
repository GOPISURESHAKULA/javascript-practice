const listone =['Raju','Ramu',"Ravi"]
const listtwo =['kiran','kathik',"karun"]
const spread={...listone,listtwo}
console.log("spread",spread)

//spread {0: "Raju", 1: "Ramu", 2: "Ravi", listtwo: Array(3)}

const spreadarray=[...listone,...listtwo]
console.log("spread array",spreadarray)

// spread array (6) ["Raju", "Ramu", "Ravi", "kiran", "kathik", "karun"]

const spreadarray2=[...listone,listtwo]
console.log("spread array2",spreadarray2)

//spread array2 (4) ["Raju", "Ramu", "Ravi", Array(3)]


const contact=[].concat(listone,listtwo)
console.log("contact",contact)

//contact (6) ["Raju", "Ramu", "Ravi", "kiran", "kathik", "karun"]

// Dealing with an String
const Array=[1,2,3,4]
const string='random';

const spreadString=[...Array,...string]
console.log("spreadString",spreadString)

//spreadString (10) [1, 2, 3, 4, "r", "a", "n", "d", "o", "m"]

const concatString=[].concat(Array,string)
console.log("concatString",concatString)

// concatString (5) [1, 2, 3, 4, "random"]
