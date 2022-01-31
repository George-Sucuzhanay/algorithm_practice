// Using built-in sort JS method

function numberCompare(num1, num2){
  return num1 - num2;
  // if sum returns positive => num2 , num 1
  // if sum returns negative => num1, num2
  
}
function numberCompare2(num1,num2){
  return num2 - num1;

}
// console.log([6,4,15,10].sort(numberCompare))
  // [4,6,15,10]
  // [4,6,10,15]

// console.log([6,4,15,10].sort(numberCompare2))
  // [ 15, 10, 6, 4 ]

function compareByLen(str1,str2){
  return str1.length - str2.length
}
// console.log(["abc", "english", "food", "language", "college"].sort(compareByLen))


// Bubble Sort with JS


function bubbleSort(arr){
  // let temp = arr[idx1];
  // arr[idx1] = arr[idx2];
  // arr[idx2] = temp


  // creates a loop for the variable i based on arr length and counts down until from 4-1
  let noSwaps;
  for(let i=arr.length; i > 0; i--){

    // loops through the array using our previous loop for i to count up from 0-3 (terms of j)
    // this we don't loop unnecessary on the nums that are already sort and instead iterate through those that need to be sorted
    noSwaps = true;
    for(let j=0; j < i-1; j++){
      // compare if the jth item is greater than the next item in the array j
      console.log(arr, arr[j], arr[j+1], i, j)

      if (arr[j] > arr[j+1]){
    
        // swap the nums position in the array if num is greater than the num right after
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
        noSwaps = false;
      }
    }
    console.log("ONE PASS COMPLETE!")
    // if there has been no swaps in an iteration when break the loop and return the arr sorted
    if(noSwaps)break;

  }
  return arr
}
console.log(bubbleSort([37,45,29,8]))

// Big O-notation => O(n)
