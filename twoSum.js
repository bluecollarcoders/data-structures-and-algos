function twoNumberSum(array, targetSum) {
    let numbers = {};
      for(const number of array) {
          let posibleNum = targetSum - number; 
          if(posibleNum in numbers) {
              return [posibleNum, number];
          } else {
              numbers[number] = true;
          }
      
      }
      return [];
  }
  // line 4 is the targetSum - number in the hashtable {} 
  // the array would contain(array[2,3,4,5], targetSum(10))
  // if any two numbers in the input => array , targetSum it should return the array 
  // if the the two numbers don't it should return an empty array
  // Using a hashtable is the most effient solution {}
  // using a for of loop to iterate over the which creates a variable 
  // let posibleNum = the targetSum minus number constant represents Y 
  // if posibleNum(which is y) in numbers (which is the hashtable) return an array[posibleNum which is Y, and number which is x]
  // if not you store the number in the hashtable which looks like this numbers[number] and that would = true
  
  
  // Do not edit the line below.
  exports.twoNumberSum = twoNumberSum;
  