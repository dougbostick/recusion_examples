/* Write your code here! */
// function sumNums (num) {
//   if(num <= 1) return 1;
//   let sum = 0;
//   while(num > 0){
//     sum += num
//     num--;
//   }
//   return sum;
// }

//TESTING FUNCTIONS MUST BE DONE WITH CONSOLE LOGS

const sumNums = (num) => { //3, 2
    //base case --> defines when we stop 
    if(num <= 1) return 1;
    //recursive case --> defines the NEW ARG for the recursive call
    return num + sumNums(num-1)
  }
  
  const res9 = sumNums(3);
  console.log(res9)
  /*
  callstack
  6
  */
  
  function cannonball(h) {
    if (h <= 0)
      return 0;
    if (h <= 1)
      return 1;
    return h ** 2 + cannonball(h - 1);
  }
  
  const reverseString = (str) => {  //hello 
    if(str.length <= 1) return str;
    return str[str.length-1] + reverseString(str.slice(0, str.length - 1));
  }
  
  const getStringLength = (str) => { //5 apple
    if(!str.slice(0)) return 0;
    if(str.slice(1)) return 1 + getStringLength(str.slice(1));
    return 1;
  }
  
  const sumArray = (arr) => { // [1,2,3]
    if(!arr.length) return 0;
    return arr[0] + sumArray(arr.slice(1))
  }
  
  const fibonacci = (n) => {
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fibonacci(n-2) + fibonacci(n-1);
  }
  
  const isPalindrome = (str) => {
    if(str.length <= 1) return true
    if(str[0].toLowerCase() !== str[str.length - 1].toLowerCase()) return false;
    return isPalindrome(str.slice(1, str.length - 1)) ;
  }
  
  // tacocat
  
  
  /**
   * The code below exports your functions so they can be tested.
   * Notice that the names are currently commented out.
   * Uncomment the functions as you write them.
   */
//   module.exports = {
//     sumNums,
//     cannonball,
//     reverseString,
//     getStringLength,
//     sumArray,
//     fibonacci,
//     isPalindrome,
//   };
  