/* CHALLENGE 19 - Iterate over Object

Create a function sumObjectValues() that will sum all values
of the fields that contain numbers.
Ensure that iteration is done only over own properties of the object.
*/

"use strict";

var nums = {
  a: 10,
  b: 20,
  c: "string",
  d: 12
};

// Write code here
function isNumber(value) {
  if (typeof(value)=== "number")
      return value;
}
const sumObjectValues = (arg) => {
  let sum = 0;
  let arr = [];
  arr = Object.values(arg);
  let filter = arr.filter(isNumber);
  for (let f of filter) {
    sum += f;
  }
  return sum;
}
console.log(sumObjectValues(nums));
//42
