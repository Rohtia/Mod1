//
// Sum of Two
//
// Write a function that takes one argument, an Array of Numbers. It should return the sum of the two lowest positive numbers in that array (an array with a minimum of 4 numbers will be passed in). No empty arrays will be passed in. For example, when an array is passed in like [19, 5, 42, 2, 77], the output should be 7 because 5 + 2 = 7.

var numbers = [19, 5, 42, 22, 77];
var lowest = numbers[0];
var secondLowest = numbers[0];
var sum;

function sumOfTwo (nums) {

  //find lowest

  for (var i = 0; i < nums.length; i++) { //test the next element

      if (nums[i] < lowest) {
        lowest = nums[i];
        console.log(`${lowest} is now the lowest`);
      } else if (nums[i] < secondLowest) {
        secondLowest = nums[i];
        console.log(`${secondLowest} is now the second lowest`);
      }
  }
  // if (nums[0] === lowest && nums [0] === secondLowest) { //check if first element is the lowest
  //   console.log(`First element is the lowest`);
  //   secondLowest = numbers[1]; //reset second lowest number to second element
  //   sumOfTwo(numbers);
  // }
  return (lowest + secondLowest);
}

sum = sumOfTwo(numbers);
console.log(sum);
