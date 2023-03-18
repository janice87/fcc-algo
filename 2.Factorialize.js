// Factorialize a Number
// Return the factorial of the provided integer.
// If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.


function factorialize(num) {

}

// FOR LOOP 1*2*3*4*5
function factorialize(num) {
    let product = 1
    for (let i = 1; i <= num; i++) {
        product *= i;
    }
        return product;
   }

   // RECURSIVE 5*4*3*2*1
   // function factorialize(num) {
   //   if(num === 0) return 1
   //   return num * factorialize(num - 1)
   // }

// FOR LOOP 5*4*3*2*1
//    function factorialize(num) {
//     let total = 1
//     for(let i = num; num > 1; num--){
//       total *= num
//     }
//     return total
//     // total = 1 * 5 = 5
//   }

console.log(factorialize(5))