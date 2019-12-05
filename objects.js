 // Initialize object literal with curly brackets
const objectLiteral = {}
// // Initialize object constructor with new Object
const objectConstructor = new Object()

//Both of these approaches will create an empty object. 
//Using object literals is the more common and preferred method, as it has less potential for inconsistencies and unexpected results.

// Initialize gimli object
const person = {
    name: 'RAM',
    ID: '1',
    SALARY: '10000',
    greet: function() {
      return `Hi, my name is ${this.name}!`
    },
  }
  console.log(person);

  console.log(person.greet());


  //Our new object is person, which has three properties. Each property consists of a name:value pair, also known as key:value pair

    //Accessing Object Properties
   //There are two ways to access an object's properties.
  //Dot notation: .
  //Bracket notation: []
  const Dotnotation =person.name
  console.log(Dotnotation);

    // Retrieve the value of the SALARY property
  const Bracket_notation=person['SALARY']
  console.log(Bracket_notation);


  //Adding and Modifying Object Properties


// Add new age property to person
 person.ID = 139
 person['SALARY']=20000
console.log(person);

person.changegreet = function() {
    return `Hi, my SALARY is ${this.SALARY}!`
    }
  
    

    //Removing Object Properties
    // Remove weapon from gimli
delete person.ID
console.log(person);









//Looping Through Object Properties
const detailsperson = {
    name: 'AGS',
    ID: '5',
    NICKNAME: 'KGF',
  }


  for (let key in detailsperson) {
      console.log(key);   
      
  }

//const details=Object.entries(detailsperson)
//console.log(details);




// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry',
  }
  
  // Initialize another object
  const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express',
  }
  
  // Merge the objects
  const character = Object.assign(name, details)
  
  console.log(character)



  // Initialize an object
const name1 = {
    firstName: 'Philip',
    lastName: 'Fry',
  }
  
  // Initialize another object
  const samekey_with_differnt_values = {
    firstName: 'Delivery Boy',
    lastName: 'Planet Express',
  }
  
  // Merge the objects
  const copy_samekeys_with_differnt_pair_values = Object.assign(name1,  samekey_with_differnt_values)
  
  console.log(copy_samekeys_with_differnt_pair_values)



//Object.freeze()
//Object.freeze() prevents modification to properties and values of an object, and prevents properties from being added or removed from an object.

// Initialize an object
const Freeze = {
  username: 'GOPISURESH',
  password: '9502404512',
}

// Freeze the object
const FreezeNEW = Object.freeze(Freeze)

FreezeNEW.password = '9500'
FreezeNEW.active = true

console.log(FreezeNEW)

// Object.seal()
//Object.seal() prevents new properties from being added to an object, but allows the modification of existing properties

const seal={

    name:'RAMKUMAR',
    passcode:'4512'
}
const sealnew=Object.seal(seal)

sealnew.passcode='784541'
sealnew.active="ram"

console.log(sealnew);

const employees = ['Ron', 'April', 'Andy', 'Leslie']

const pro=Object.getPrototypeOf(employees);
console.log(pro);