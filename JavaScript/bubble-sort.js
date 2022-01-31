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
  
  
    // loop through the array in reverse order
    for(let i=arr.length; i > 0; i--){
      // create another loop to iterate thru
  
      console.log(arr[i], i)
      for(let j=0; j < i-1; j++){
        // compare if the ith item is greater than the next item in the array j
        console.log(arr, arr[j], arr[j+1], j)
        if (arr[j] > arr[j+1]){
        
          // swap
          let temp = arr[j]
          arr[j] = arr[j+1]
          arr[j+1] = temp
        }
      }
    }
    return arr
  }
  console.log(bubbleSort([37,45,29,8]))