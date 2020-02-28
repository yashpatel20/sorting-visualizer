import React,{useState, useEffect} from 'react'
import './SortingVisualizer.css'
import getMergeSortAnimations from './SortingAlgorithms/getMergeSortAnimations'
import getBubbleSortAnimations from './SortingAlgorithms/getBubbleSortAnimations';
import getQuickSortAnimations from './SortingAlgorithms/getQuickSortAnimations'

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 0.1;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 320;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}

function resetArray(){
    const randomArr = []
    for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
        randomArr.push(randomIntFromInterval(5,730))
    }
    return randomArr
}

function SortingVisualizer(){

    const [arr,setArr] = useState([])

    useEffect(()=>{
        const randomArr = resetArray()
        setArr(randomArr)
    },[])

    //sorting algoirthms
    const bubbleSort = () => {
        const animations = getBubbleSortAnimations(arr)
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = (i%3!==2)
            if(isColorChange){
                const [barOneIdx,barTwoIdx] = animations[i]
                const barOneStyle = arrayBars[barOneIdx].style
                const barTwoStyle = arrayBars[barTwoIdx].style
                const color = i%3==0 ? SECONDARY_COLOR : PRIMARY_COLOR
                setTimeout(()=>{
                    barOneStyle.backgroundColor = color
                    barTwoStyle.backgroundColor = color
                },i*ANIMATION_SPEED_MS)
            }else{
                setTimeout(()=>{
                    const bar = animations[i]
                    const barOneStyle = arrayBars[bar[0]].style
                    const barTwoStyle = arrayBars[bar[2]].style
                    barOneStyle.height = `${bar[1]}px`
                    barTwoStyle.height = `${bar[3]}px`
                },i*ANIMATION_SPEED_MS)
            }
        }
    }

    const mergeSort = () => {
        const animations = getMergeSortAnimations(arr);
        for(let i=0;i<animations.length;i++){
            const arrayBars = document.getElementsByClassName('array-bar')
            const isColorChange = (i%3 !== 2)
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                  barOneStyle.backgroundColor = color;
                  barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
              } else {
                setTimeout(() => {
                  const [barOneIdx, newHeight] = animations[i];
                  const barOneStyle = arrayBars[barOneIdx].style;
                  barOneStyle.height = `${newHeight}px`
                }, i * ANIMATION_SPEED_MS);
              }

        }
    }

    const quickSort = () => {
        getQuickSortAnimations([3,1,6,5,10,2])
    }


    const arrVal = arr.map((value,idx) => <div style={{height : `${value}px`}} className="array-bar" key={idx}></div>)
    return (
        <div className="array-container">
            {arrVal}
            <button onClick={()=>{
                const randomArr = resetArray()
                setArr(randomArr)
                window.location.reload()
            }}>Generate New Array</button>
            <button onClick={mergeSort}>Merge Sort</button>
            <button onClick={bubbleSort}>Bubble Sort</button>
            <button onClick={quickSort}>Bubble Sort</button>
        </div>
    )
}

export default SortingVisualizer