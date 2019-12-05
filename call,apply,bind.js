const person1={
    firstname:'AGS',
    lastname:'akula',
   
}

const print=function(salary,id){
    
     console.log(`firstname is ${this.firstname} \nlastname is ${this.lastname}\nsalary is ${salary}\nid is ${id}`);

    
}

const person2={
    firstname:'kiran',
    lastname:'kumar',
}

//function borrowing 
//call
print.call(person2,"20000","45") 

//apply
print.apply(person2,["20000","45"])


//bind
let usebind=print.bind(person2,"20000","45")
 console.log(usebind);
 usebind();



































/*




const person1={
    firstname:'AGS',
    lastname:'akula',
    print:function(salary,id) 
    {
     console.log(`firstname is ${this.firstname} \nlastname is ${this.lastname}\nsalary is ${salary}\nid is ${id}`);

    }
}

const person2={
    firstname:'kiran',
    lastname:'kumar',
}

//function borrowing 
//call
person1.print.call(person2,"20000","45") 

//apply
person1.print.apply(person2,["20000","45"])


//bind
let usebind=person1.print.bind(person2,"20000","45")
 console.log(usebind);
 usebind();
*/