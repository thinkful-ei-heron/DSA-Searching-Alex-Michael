const search = {
  binarySearch(array, value, start, end, counter = 0) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;
    counter = counter + 1;
    if(start > end) {
      console.log('Item not found');
      return 'Item not found';
    }
  
    const index = Math.floor((start + end) / 2);
    let item = array[index];

    if(item === undefined) {
      console.log('Item not found')
      return 'Did not find the item'
    }
  
    // console.log(start, end);
    // console.log(item);
  
    if (item == value) {
      // return `Found the item in ${counter} tries.`;
      return index;
    }
    else if (item < value) {
      return this.binarySearch(array, value, index + 1, end, counter);
    }
    else if (item > value) {
      return this.binarySearch(array, value, start, index - 1, counter);
    }
  },

  indexOf(array, value) {
    let counter = 0;
    for(let i = 0; i < array.length; i++) {
      counter++;
      if(array[i] == value) {
        return i;
        // return `Found the item in ${counter} tries.`;
      }
    }
    return 'Did not find the item';
  }
}

module.exports = search;
// export default search;


// binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8); //12 -> 6 -> 8
// binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16); //12 -> 17 -> 14 -> 15 -> Failed