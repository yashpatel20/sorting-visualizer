let animations = [];

const getRadixSortAnimations = arr => {
  const m = getMax(arr);
  for (let exp = 1; Math.floor(m / exp) > 0; exp *= 10)
    countSort(arr, arr.length, exp);
  return arr;
};

const getMax = arr => {
  let m = arr[0];
  for (let i = 1; i < arr.length; i++) if (arr[i] > m) m = arr[i];
  return m;
};

const countSort = (arr, n, exp) => {
  let count = [],
    output = [];
  for (let i = 0; i < n; i++) output.push(0);
  for (let i = 0; i < 10; i++) count.push(0);
  //fill the count array
  for (let i = 0; i < n; i++) {
    animations.push([i, true]);
    animations.push([i, false]);
    count[(arr[i] / exp) % 10]++;
  }
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];
  for (let i = n - 1; i >= 0; i--) {
    output[count[(arr[i] / exp) % 10] - 1] = arr[i];
    count[(arr[i] / exp) % 10]--;
  }
  for (let i = 0; i < n; i++) {
    animations.push([i, output[i], "hmm"]);
    animations.push([i, true]);
    animations.push([i, false]);
    arr[i] = output[i];
  }
};

export default getRadixSortAnimations;
