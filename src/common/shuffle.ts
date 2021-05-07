const getRandomNumberInRange = (rangeMin: number, rangeMax: number): number => {
  return Math.floor(rangeMin + Math.random() * (rangeMax - rangeMin));
};

const shuffle = (arr: any[]) => {
  const arrLen = arr.length;

  arr.forEach((val, idx) => {
    const minIdx = idx + 1;
    const maxIdx = arrLen - 1;

    const randomIdx = getRandomNumberInRange(minIdx, maxIdx);

    const temp = val;

    arr[idx] = arr[randomIdx];
    arr[randomIdx] = temp;
  });

  return arr;
};

export default shuffle;
