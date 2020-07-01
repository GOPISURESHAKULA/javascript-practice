// Arrow function not use Defining methods on an object

const calculate = {
    array: [1, 2, 3],
    sum: () => {
      // console.log(this === window); // => true
      // return this.array.reduce((result, item) => result + item);
    }
  };
  console.log(this === window); // => true
  // Throws "TypeError: Cannot read property 'reduce' of undefined"
   calculate.sum();
  // window. It happens because the arrow function binds the context lexically with the window object.
  // Executing this.array is equivalent to window.array, which is undefined.
  
  
  
  
  
  
  
  
  const cal={
    array:[1,2,3,4],
    sum(){
      console.log(this === window)// false
      return this.array.reduce((result,item)=>result+item)
    }
  }
  console.log(" Defining methods on an object",cal.sum())
  
  // Defining methods on an object 10
  
  
  
  
  
  
  function Normalfunction(){
    console.log("Normalfunction",this)// window props
  }
  Normalfunction()
  
  
  
  const ArroWfuction=()=>{
    console.log(this) // undefined
  
  }  
  
  
  ArroWfuction()
  
  // 3. Invoking constructors
  
  // const Message = (text) => {
  //   // this.text = text;
  // };
  
  
  // Throws "TypeError: Message is not a constructor"
  // const helloMessage = new Message('Hello World!');
  // console.log("helloMessage",helloMessage)
  
  
  
  const Message = function(text) {
    this.text = text;
  };
  const helloMessage = new Message('Hello World!');
  console.log(" Invoking constructors!!!",helloMessage.text); // => 'Hello World!'
  
  //Invoking constructors!!! Hello World!
  
  
  
  
  
  
  // 2) Object prototype
  
  // function MyCat(name) {
  //   this.catName = name;
  // }
  // MyCat.prototype.sayCatName = () => {
  //   console.log(this === window); // => true
  //   return this.catName;
  // };
  // const cat = new MyCat('Mew');
  // cat.sayCatName(); // => undefined
  // use the old school function expression:
  
  function MyCat(name) {
    this.catName = name;
  }
  
  MyCat.prototype.sayCatName = function(catName) {
    console.log(this === cat); // => true
    return  console.log("Retruns values",catName,this.catName) 
    //  Retruns values saynameags Mew
  };
  
  
  const cat = new MyCat('Mew');
  cat.sayCatName('saynameags') // => 'Mew'
  
  
  // sayCatName regular function is changing the context to cat object when called as a method: cat.sayCatName().
  
  