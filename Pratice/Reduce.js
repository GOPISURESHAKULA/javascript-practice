  // Reduce Methods


  const reduced=[1,2,3,4,5].reduce((prev,next)=>(
    console.log("prev=",prev,"next=",next),
         prev+next     
  ),0)
  
  console.log("reduce Total example 1",reduced)
  
  
  // prev= 0 next= 1
  //  prev= 1 next= 2
  //  prev= 3 next= 3
  //  prev= 6 next= 4
  //  prev= 10 next= 5
  //  reduce Total example 1 15
  