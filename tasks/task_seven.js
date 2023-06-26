const number = 45
console.log(typeof number)
const string = '45'
console.log(typeof string)
const boolean = true
console.log(typeof boolean)

console.log(true==1)   // true
console.log(true===1) //false

*/
A falsy value is a value that is considered false when encountered in a Boolean context. JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.
Examples of Falsy values
0 (zero)
'' or “” (empty string)
null.
undefined.
NaN

//
In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false , 0 , -0 , 0n , "" , null , undefined , and NaN . JavaScript uses type coercion in Boolean contexts.
//
