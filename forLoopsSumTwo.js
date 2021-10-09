//
// Sum of Two
//
// Write a function that takes one argument, an Array of Numbers. It should return the sum of the two lowest positive numbers in that array (an array with a minimum of 4 numbers will be passed in). No empty arrays will be passed in. For example, when an array is passed in like [19, 5, 42, 2, 77], the output should be 7 because 5 + 2 = 7.

var numbers = [2, 5, 42, 22, 77, -1];
var lowest = numbers[0];
var secondLowest = numbers[0];
var sum;

function sumOfTwo (nums) {

  //find lowest

  for (var i = 0; i < nums.length; i++) { //test the next element
    //test to see if <0
    if (nums[i] < 0) {
      nums[i] = "This is negative";
      console.log(nums[i]);
    }
    if (nums[i] < lowest) {
      lowest = nums[i];
      console.log(`${lowest} is now the lowest`);
    } else if (nums[i] < secondLowest) {
      secondLowest = nums[i];
      console.log(`${secondLowest} is now the second lowest`);
    }
  }
  if (numbers[0] === lowest && numbers [0] === secondLowest) { //check if first element is the lowest
    console.log(`First element is the lowest`);
    secondLowest = numbers[1]; //reset second lowest number to second element
    //then need to restart the for loop, but starting on the third element.
  }

  for (var i = 2; i < nums.length; i++) {
    if (nums[i] < secondLowest) {
      secondLowest = nums[i];
    }
  }
  return (lowest + secondLowest);
}

sum = sumOfTwo(numbers);
console.log(sum);
