let animations = []

//heap parent = (i-1)/2 left = 2*i+1 right = 2*i+2
//first build a max heap 
//build a max heap and swap max value with last val then repeat
//do a sift down operations n-1 times , decrease the size of the array by 1 everytime

export default function getHeapSortAnimations(array){
    buildMaxHeap(array)
    let heapSize = array.length
    for(let i = array.length-1;i>0;i--){
        animations.push([0,array[i],i,array[0]])
        swap(array,i,0)
        heapSize--
        siftDown(array,0,heapSize)
    }
    return animations
}

//Binary heap is a complete binary tree with N nodes
//child nodes are the base case as sift down is used
//so run sift down for n/2 to 1 nodes
function buildMaxHeap(array){
    let sizeHeap = array.length
    for(let n = (array.length-2)/2 ; n>=0; n--){
        siftDown(array,n,sizeHeap)
    }
}

function siftDown(array, i, heapSize){
    let left = 2*i+1, right = 2*i+2
    let largest = i
    if(left < heapSize && array[left] > array[largest]) largest = left
    if(right < heapSize && array[right] > array[largest]) largest = right
    
    if(largest!==i){
        animations.push([i,largest,true])
        animations.push([i,largest,false])
        animations.push([i,array[largest],largest,array[i]])
        swap(array, largest, i)
        siftDown(array, largest,heapSize)
    }
}

let swap = (arr, a, b) => {
    let temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}







