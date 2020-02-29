let animations = []

export default function getQuickSortAnimations(arr){
    let array = [...arr]
    quickSort(array, 0, array.length-1,animations)
    console.log(animations)
    return animations
}

let quickSort = (array, left, right)=>{
    if(left < right){
        let pivot_idx = Math.floor( Math.random()*(right-left+1)+left )
        let new_pivot_idx = partition(left, right, array, pivot_idx,animations)
        quickSort(array, left, new_pivot_idx-1)
        quickSort(array, new_pivot_idx+1, right)
    }
    return array
}

let partition = (left, right, array, pivot_idx)=>{
    let pivot_Val = array[pivot_idx]
    //swap randomized pivot and right
    animations.push([pivot_idx,right,true])
    animations.push([pivot_idx,right,false])
    animations.push([pivot_idx,array[right],right,array[pivot_idx]])
    swap(array,pivot_idx,right)
    let new_pivot_idx = left
    for(let i=left; i<right; i++){
        //comparing
        animations.push([i,right,true])
        animations.push([i,right,false])
        if(array[i] < pivot_Val){ 
            //swap animation
            animations.push([i,array[new_pivot_idx],new_pivot_idx,array[i]])
            swap(array,i,new_pivot_idx++)
        }else animations.push([i,array[i],new_pivot_idx,array[new_pivot_idx]])
    }
    animations.push([new_pivot_idx,array[right],right, array[new_pivot_idx]])
    swap(array,new_pivot_idx,right)
    return new_pivot_idx
}

let swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}


