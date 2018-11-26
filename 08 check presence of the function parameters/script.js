/* CHALLENGE 8 - Check presence of the function parameters

Throw Error when function square() is called
without arguments.

Create new function and use it as default parameter.
*/

"use strict";

function square(a) {
  console.log(a * a);
}
function squaret(a=10) {
  console.log(a * a);
}
square(10);
// 100

squaret();
// BEFORE: NaN
// AFTER: Uncaught Error: Function square requires
// an argument!
