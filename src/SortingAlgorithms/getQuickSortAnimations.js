export default function getQuickSortAnimations(arr){
    const array = [...arr]
    const animations = quickSort(array, 0, array.length-1)
    console.log(animations)
    return animations
}

//TODO : understand how to reference an array in js

function quickSort(array, left, right){
    const arr = [...array]
    //generate a random pivot
    const pivot_idx = Math.floor( Math.random()*(right-left+1)+left )
    console.log(pivot_idx)
    //partition based on that random pivot
    const new_pivot_idx = partition(left, right, arr, pivot_idx)
    quickSort(arr, left, new_pivot_idx-1)
    quickSort(arr, new_pivot_idx+1, right)
    return arr
}

function partition(left, right, array, pivot_idx){
    const pivot_Val = array[pivot_idx]
    //swap A[pivot_idx] with A{right}
    [array[pivot_idx], array[right]] = [array[right],array[pivot_idx]]
    let new_pivot_idx = left
    for(let i=left; i<right; i++){
        if(array[i] < pivot_Val) [array[i],array[new_pivot_idx]] = [array[new_pivot_idx],array[i]]
        new_pivot_idx++
    }
    [array[new_pivot_idx],array[right]] = [array[right],array[new_pivot_idx]]
    return new_pivot_idx
}