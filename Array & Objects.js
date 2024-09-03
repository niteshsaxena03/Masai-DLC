function addNum(n, arr) {
  arr.push(n);
  return arr;
}
function removeNum(n, arr) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      arr.splice(i, 1);
      return arr;
    }
  }
  return arr;
}

function CalculateSum(arr) {
  let sum = 0;
  for (let i of arr) sum += i;
  return sum;
}
function CalculateAverage(arr) {
  let sum = 0;
  for (let i of arr) sum += i;
  return sum / arr.length;
}

function ArraySort(arr) {
  return arr.sort();
}

const arr = [5, 3, 8, 1, 2];
console.log(addNum(10, arr));
console.log(removeNum(10, arr));
console.log(CalculateSum(arr));
console.log(CalculateAverage(arr));
console.log(ArraySort(arr));
