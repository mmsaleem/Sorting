function merge(arr1, arr2) {
    let newarr = []
    i = 0
    j = 0
    while(i < arr1.length && j <arr2.length) {
        if(arr1[i] < arr2[j]) {
            newarr.push(arr1[i])
            i++;
        }
         else {
            newarr.push(arr2[j])
            j++;
         }
    }

    while(i < arr1.length) {
        newarr.push(arr1[i])
        i++
    }
   
   while(j < arr2.length) {
    newarr.push(arr2[j])
    j++
   }
  return newarr
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr
    let mid = Math.floor(arr.length/2)
    const left = mergeSort(arr.slice(0, mid))
    const right = mergeSort(arr.slice(mid))
}

module.exports = { merge, mergeSort};