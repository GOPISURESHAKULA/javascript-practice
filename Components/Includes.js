const includesExample='Hello world';
  console.log("example1 Include case sentive so toLowerCase Add",includesExample.toLowerCase().includes('h'))
  
  //example1 Include case sentive so toLowerCase Add true
  
  
  const numbers=[1,2,3,4,6]
  console.log("example1.1 Include",numbers,"numbers.includes(2) ",numbers.includes(2))
  
  //example1.1 Include (5) [1, 2, 3, 4, 6] numbers.includes(2)  true
  
  console.log("example1.1 Include",numbers,"numbers.includes(2,4) ",numbers.includes(2,4))
  
  //example1.1 Include Array(5) numbers.includes(2,4)  false

  console.log("example1.1 Include",numbers,"numbers.includes(2,1) ",numbers.includes(2,1))
   
// example1.1 Include (5) [1, 2, 3, 4, 6] numbers.includes(2,1)  true
  