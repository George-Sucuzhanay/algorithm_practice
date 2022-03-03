const dataArray = [9, 4, 6, 16, 10, 1, 100, 80, 70]

function sortDataArray(arrayParam){
    // accepts an array as a parameter
    // we will then loop through arr and sort in
    // accending order
    for(let i = 0; i < arrayParam.length; i++){

        for(let j = 0; j < arrayParam.length - i - 1; j++){
            // if one element > greater than the other switch places
            if(arrayParam[j] > arrayParam[j+1]){
                let tempValue = arrayParam[j]
                arrayParam[j] = arrayParam[j+1]
                arrayParam[j+1] = tempValue;
            }
        }
        console.log(arrayParam)

    }
    console.log(arrayParam)
}
sortDataArray(dataArray);