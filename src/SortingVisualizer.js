import React, { useState, useEffect } from "react";
import "./SortingVisualizer.css";
import getMergeSortAnimations from "./SortingAlgorithms/getMergeSortAnimations";
import getBubbleSortAnimations from "./SortingAlgorithms/getBubbleSortAnimations";
import getQuickSortAnimations from "./SortingAlgorithms/getQuickSortAnimations";
import getHeapSortAnimations from "./SortingAlgorithms/getHeapSortAnimations";
import getRadixSortAnimations from "./SortingAlgorithms/getRadixSortAnimations";
import getBogoSortAnimations from "./SortingAlgorithms/getBogoSortAnimations";
import Button from "@material-ui/core/Button";

// Change this value for the speed of the animations.
let ANIMATION_SPEED_MS = 2;

// Change this value for the number of bars (value) in the array.
let NUMBER_OF_ARRAY_BARS;
if (window.screen.width < 400) {
  NUMBER_OF_ARRAY_BARS = 30;
  ANIMATION_SPEED_MS = 10;
} else NUMBER_OF_ARRAY_BARS = window.screen.width / 3.5;

// This is the main color of the array bars.
const PRIMARY_COLOR = "turquoise";

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = "red";

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function resetArray(len) {
  const randomArr = [];
  for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
    randomArr.push(randomIntFromInterval(5, len));
  }
  return randomArr;
}

function SortingVisualizer() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    let len = window.screen.height / 1.4;
    const randomArr = resetArray(len);
    setArr(randomArr);
  }, []);

  //sorting algoirthms
  const bubbleSort = () => {
    const animations = getBubbleSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 == 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const bar = animations[i];
          const barOneStyle = arrayBars[bar[0]].style;
          const barTwoStyle = arrayBars[bar[2]].style;
          barOneStyle.height = `${bar[1]}px`;
          barTwoStyle.height = `${bar[3]}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const mergeSort = () => {
    const animations = getMergeSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = i % 3 !== 2;
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
          barOneStyle.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const quickSort = () => {
    const animations = getQuickSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = animations[i].length === 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = animations[i][2] ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const bar = animations[i];
          const barOneStyle = arrayBars[bar[0]].style;
          const barTwoStyle = arrayBars[bar[2]].style;
          barOneStyle.height = `${bar[1]}px`;
          barTwoStyle.height = `${bar[3]}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const heapSort = () => {
    const animations = getHeapSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      const isColorChange = animations[i].length === 3;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = animations[i][2] ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const bar = animations[i];
          const barOneStyle = arrayBars[bar[0]].style;
          const barTwoStyle = arrayBars[bar[2]].style;
          barOneStyle.height = `${bar[1]}px`;
          barTwoStyle.height = `${bar[3]}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const radixSort = () => {
    const animations = getRadixSortAnimations(arr);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName("array-bar");
      if (animations[i].length === 2) {
        const barOneIdx = animations[i][0];
        const barOneStyle = arrayBars[barOneIdx].style;
        const color = animations[i][1] ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
        }, i * ANIMATION_SPEED_MS);
      } else {
        setTimeout(() => {
          const barOneIdx = animations[i][0];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${animations[i][1]}px`;
        }, i * ANIMATION_SPEED_MS);
      }
    }
  };

  const bogoSort = () => {
    getBogoSortAnimations(arr);
  };

  const numWidth = Math.floor(window.screen.width / (arr.length * 3));
  console.log("width: " + window.screen.width);
  console.log("width: " + window.screen.height);
  const width = `${numWidth}px`;
  const numMargin =
    arr.length < 5
      ? 10
      : arr.length < 8
      ? 8
      : arr.length < 11
      ? 6
      : arr.length < 20
      ? 4
      : arr.length < 50
      ? 3.5
      : arr.length < 100
      ? 3
      : arr.length < 130
      ? 2.5
      : 2;
  const margin = `${numMargin}px`;

  const arrVal = arr.map((value, idx) => (
    <div
      style={{
        height: `${value}px`,
        width: width,
        marginLeft: margin,
        marginRigh: margin,
      }}
      className="array-bar"
      key={idx}
    ></div>
  ));
  return (
    <div>
      <div className="array-container">{arrVal}</div>
      <div className="buttons">
        <span className="generateArray">
          <Button
            variant="contained"
            size="small"
            color="secondary"
            onClick={() => {
              const randomArr = resetArray();
              setArr(randomArr);
              window.location.reload();
            }}
          >
            Generate New Array
          </Button>
        </span>
        <span className="sort">
          <Button
            variant="contained"
            size="small"
            color="primary"
            className="sort"
            onClick={bubbleSort}
          >
            Bubble Sort
          </Button>
        </span>
        <span className="sort">
          <Button
            variant="contained"
            size="small"
            color="primary"
            className="sort"
            onClick={mergeSort}
          >
            Merge Sort
          </Button>
        </span>
        <span className="sort">
          <Button
            variant="contained"
            size="small"
            color="primary"
            className="sort"
            onClick={quickSort}
          >
            Quick Sort
          </Button>
        </span>
        <span className="sort">
          <Button
            variant="contained"
            size="small"
            color="primary"
            className="sort"
            onClick={heapSort}
          >
            Heap Sort
          </Button>
        </span>
        <span className="sort">
          <Button
            variant="contained"
            size="small"
            color="primary"
            className="sort"
            onClick={radixSort}
          >
            Radix Sort
          </Button>
        </span>
        {/* <span className="sort">
          <Button
            variant="contained"
            size="small"
            color="primary"
            className="sort"
            onClick={bogoSort}
          >
            Bogo Sort
          </Button>
        </span> */}
      </div>
    </div>
  );
}

export default SortingVisualizer;
