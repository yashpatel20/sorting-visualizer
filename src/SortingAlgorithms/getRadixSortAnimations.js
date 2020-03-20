let animations = [];

const getRadixSortAnimations = arr => {
  const m = getMax(arr);
  //run countsort for all places (units , tens , hundreds ...)
  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
    countSort(arr, arr.length, exp);
  return animations;
};

//Max val in the array
const getMax = arr => {
  let m = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > m) m = arr[i];
  return m;
};

const countSort = (arr, n, exp) => {
  let count = Array(10).fill(0);
  let output = Array(n).fill(0);
  //fill the count array
  for (let i = 0; i < n; i++) {
    //run over the whole array
    animations.push([i, true]);
    animations.push([i, false]);
    count[Math.floor(arr[i] / exp) % 10]++;
  }
  //Get the proper indices in the count array
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];
  //Fill the output array with the index from count for every val
  for (let i = n - 1; i >= 0; i--) {
    animations.push([count[Math.floor(arr[i] / exp) % 10] - 1, arr[i], "hmm"]);
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }
  //Finally fill the arr
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
};

export default getRadixSortAnimations;
