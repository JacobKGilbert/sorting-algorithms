function merge(arr1, arr2) {
  const result = []
  let Idx1 = 0
  let Idx2 = 0

  while (Idx1 < arr1.length && Idx2 < arr2.length) {
    if (arr1[Idx1] <= arr2[Idx2]) {
      result.push(arr1[Idx1])
      Idx1++
    } else {
      result.push(arr2[Idx2])
      Idx2++
    }
  }
  
  while (Idx1 < arr1.length) {
    result.push(arr1[Idx1])
    Idx1++
  }

  while (Idx2 < arr2.length) {
    result.push(arr2[Idx2])
    Idx2++
  }

  return result
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr

  const midIdx = Math.floor(arr.length/2)
  const leftArr = mergeSort(arr.slice(0, midIdx))
  const rightArr = mergeSort(arr.slice(midIdx))
  return merge(leftArr, rightArr)
}

module.exports = { merge, mergeSort};