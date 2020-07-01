
var obj ={
    outerfunction:function(){
      console.log(this ===obj)//true
        var self=this
      function innerfunction(){
        console.log(this ===obj)//false
        console.log(self ===obj)//true
      }
      return innerfunction;
    }
  
   
  }
  var inner=obj.outerfunction()
   inner()