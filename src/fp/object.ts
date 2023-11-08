// This module has object methods
// @ts-nocheck
const colorObj = (factor, callback) => (color)=>{

    return  ({factor: callback(color),"name": color})
    
  
  }




  

const find = (collection:object,predicate:(val,key?,idx?)=>any)=>{
let prop
for (prop in collection) {
  if(predicate(collection[prop],prop)){
    return collection[prop]
  }
}
return false
}


const customConcat = (hue:object)=>{
  let res:number[]
      return res.concat(hue['warm'],hue['cool'])
    }
  export {colorObj,find,customConcat}