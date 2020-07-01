
const useingparenthesis=()=>(
  {
    method:"useingparenthesis"
  }
)
// my under--> "(" === {}return
console.log("useingparenthesisTesting",useingparenthesis,useingparenthesis())

// useingparenthesisTesting () => ({
//   method: "useingparenthesis"
// }) {method: "useingparenthesis"}





const useingCurlyBraces=()=>{
  return {
    name:"useingCurlyBraces"
  }
  
}


 console.log("useingCurlyBracesTesting",useingCurlyBraces,useingCurlyBraces())
  
// useingCurlyBracesTesting () => {
//   return {
//     name: "useingCurlyBraces"
//   };
// } {name: "useingCurlyBraces"}


//parenthesis mutline code excution 
const test=(
  `<div>
  <h2>test1</h2>
  <h2>test2</h2>
  <h2>test3</h2>
  <h2>test4</h2>
  </div>`
)
console.log("test",test.props.children)

//test (4) [{…}, {…}, {…}, {…}]
