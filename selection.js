function selectionSort(arr) {
    const swap = (arr, idx1, idx2) => 
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]])

    for(let i = 0; i < arr.length; i++) {
        let minimum = i
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[minimum] > arr[j]) {
                minimum = j
            }
        }

        if (i !== minimum ) swap(arr, i, minimum);
    }
}

module.exports = selectionSort;