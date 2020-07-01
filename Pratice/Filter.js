const filterd=[true,true,false].filter((value)=>Boolean(value));
console.log("filterExmples1",filterd)
// filterExmples1 (2) [true, true]



const items = [
  { id: 1, name: "super Burger", price: 399},
  { id: 2, name: "Pizza", price: 199 },
  { id: 2, name: "fish fires", price: 299},
];
  

const expensiveItems=items.filter(item=>item.price>200)
console.log("filterExmples2",expensiveItems)

// filterExmples2 (2) [{…}, {…}]
