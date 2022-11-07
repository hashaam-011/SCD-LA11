//A code that stores elements from 1 to 20 in an array and checks whether a
//certain element is present in that array or not.
function checkArray(arr, element) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === element) {
      return true;
    }
  }
  return false;
}

module.exports = checkArray;