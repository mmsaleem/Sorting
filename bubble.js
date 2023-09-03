function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
     for (let j = i + 1; j < arr.length; j++){
        if (arr[i] > arr[j]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }

     }
    }
     return arr
}

module.exports = bubbleSort;

[10, 5, 0, 1 ,2 , 3, -1, 5, 7]