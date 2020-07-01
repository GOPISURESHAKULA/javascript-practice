  // Object.assign vs spread operator
  // Object.assign Example 1
  const food={
    nonveg:'chiken',
    veg:'panner'
  
  }
  
  
  Object.assign(food, {nonveg:'fish'})
  //  here food is target object
  // We aren't actually using the returned value of the function
  // at all, but we are modifying our target object which we have referenced with the const food.
  console.log("Object.assign Example 1",food)
  
//Object.assign Example 1 {nonveg: "fish", veg: "panner"}





    // Object.assign Example 2
    const foodtarget={
      nonveg:'chiken',
      veg:'panner'
    
    }
    const foodsource2={
      nonveg:'mutton',
      veg:''
    
    }
    
    Object.assign(foodtarget,foodsource2 )
    //  here food is target object
    // hers sourecs will overite target object
    console.log(" Object.assign Example 2",foodtarget)
    


    // spread operator:-
  
    // Spread on the other hand is an operator which copies 
    // properties of one object into a new object. 
    // If we wanted to replicate the above example using spread to modify our variable food...
  
  
  const Spreadfood = { beef: '🌽', bacon: '🥓' };
  
  const newFood = {
    ...Spreadfood,
    beef: '🥩',
  }
  
  console.log("Spreadfood useing const",newFood)

  // Spreadfood useing const {beef: "🥩", bacon: "🥓"}

  
  //or we could declare food with let or var
  // which would allow us to assign a whole new object:


  
  
  let foodlet = {  nonveg:'chiken',
  veg:'panner' };
  
  foodlet = {
    ...foodlet,
    nonveg:'beaf',
      veg:'veg manchurian'
  }
  
  console.log("Spreadfood useing let",foodlet);
  // Spreadfood useing let {nonveg: "beaf", veg: "veg manchurian"}
  