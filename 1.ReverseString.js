// Reverse a String
// Reverse the provided string and return the reversed string.

// For example, "hello" should become "olleh".
// reverseString("Howdy") should return the string ydwoH.
// reverseString("Greetings from Earth") should return the string htraE morf sgniteerG.
// "h e l l o"

// In JavaScript, there is no method to reverse a string but we have .reverse() for array & its destructive

// SOLUTION 1
function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += (str[i])
  }
  return reversedStr;
}

reverseString("hello");


// SOLUTION 2
function reverseString(str) {
    let revArr = str.split("") // ["h", "e", ...]
    let rvsStr = []
   
    for(let i = revArr.length - 1; i >= 0; i--){
      rvsStr.push(revArr[i])    
    }
    return rvsStr.join("")
  }

  console.log(reverseString("hello"))


  // SOLUTION 3
  function reverseString(str) {
    return str.split("").reverse().join("")
  }

 