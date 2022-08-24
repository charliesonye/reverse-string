function reverseString(str) {
  // type your code here

    let newArr = Array.from(str)
    let revArr = newArr.reverse()
    
    return revArr.join("")
  
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// 1. newArr <- [str]
// 2. Reverse newArr character order
// 3. Convert to string
// 4. return result

// And a written explanation of your solution
// 1. Take passed in string then convert it to an array and assign it to a variable.
// 2. Call the reverse method on the array 
// 3. Convert back to string
// 4. Return the the new array variable