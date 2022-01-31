function merge(arr1, arr2){

    // create empty array that checks for smaller values
    // while loop:
      // while we have exisiting values
      // if value in the array1 is < value in the second array, push value for array1 to results and iterate to the next value in array1
      // if value in array1 > value in array2, push value in array2 to results and move to the next value in array2
  
      // after all values in array1 are exhausted push all remainaing values from array2
      let results = []
      // results be our final array sorted
      let i = 0;
      // assigns the i of arr1 to start at i of 0
      let j = 0;
      // assigns the j of arr2 to start at j of 0
  
      while(i < arr1.length && j < arr2.length){
        // while the times we iterate in arr1 and arr2 are LESS THAN the length of BOTH array lengths do the following
        if(arr2[j] > arr1[i]){
          // if item in arr2 is greater than item in arr1 push item in arr1 to our results array
          results.push(arr1[i])
          // increase i by 1
          i++
        }
        else{
          // if item in arr2 is less than item in arr1 push the item in arr2 to our results array
          results.push(arr2[j])
          // increase j by 1
          j++
        }
      }
      // while the i is less than arr1 length, increase j by 1 and push remainaing items to results array
      while(i < arr1.length){
        results.push(arr1[i])
        i++
      }
      // while the j is less than arr2 length, increase j by 1 and push remainaing items to results array
       while(j < arr2.length){
        results.push(arr2[j])
        j++
      }
      // return the array results
      return results
  
  }
  
  function mergeSort(arr){
    if(arr.length <= 1) return arr
    mergeSort
  }
  console.log(mergeSort([10,24,76,73,72,1,9]))
  // console.log(merge([1,10,50], [2,14,99,100]))
  
  // [1,10,50] , [2,14,99,100]
  // [1,2], [10,2], [10,14], [50,99], [99],[100]
  
  // [1,2,10,14,50,99,100]
  
  // MergeSort Algo
  