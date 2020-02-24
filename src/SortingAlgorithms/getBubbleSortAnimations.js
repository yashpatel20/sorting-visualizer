export default function getBubbleSortAnimations(arr){
    //O(n*n) comparision based sorting algorithm
    const array = [...arr]
    const animations = [];
    for(let i=0;i<array.length-1;i++){
        let swapped = false;
        for(let j=0;j<array.length-i-1;j++){
            //two values that are being compared
            animations.push([j,j+1]);
            //change color from secondary to orignal
            animations.push([j,j+1]);
            if(array[j] > array[j+1]){
                animations.push([j,array[j+1],j+1,array[j]]);
                [array[j],array[j+1]] = [array[j+1],array[j]]
                swapped = true
            }else animations.push([j,array[j],j+1,array[j+1]]);
        }
        if(swapped === false) break;
    }
    return animations
}

