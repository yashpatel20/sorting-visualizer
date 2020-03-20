let animations = [];

const getBogoSortAnimations = arr => {
  let sorted = false;
  while (!sorted) {
    arr = shuffle(arr);
    sorted = isSorted(arr);
  }
  return arr;
};

const isSorted = arr => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return false;
    }
  }
  return true;
};

const shuffle = arr => {
  let count = arr.length,
    temp,
    index;
  while (count > 0) {
    index = Math.floor(Math.random() * count);
    count--;

    temp = arr[count];
    arr[count] = arr[index];
    arr[index] = temp;
  }

  return arr;
};

export default getBogoSortAnimations;
