function nextInLine(arr, item) {
  // Only change code below this line
  if(arr.length>0)
    item = arr[item-1];
  testArr[4] = 10;
  return item;
  // Only change code above this line
}

// Setup
const testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));
