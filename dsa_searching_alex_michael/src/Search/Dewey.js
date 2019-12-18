const search = require('./Search')

function dewey(num, title) {
  const library = [
    { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
    { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
    { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
    { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
    { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
    { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
    { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
    { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
    { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
    { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
  ];

  let libraryDewey = library.map(item => item.dewey);

  let deweyIndex = search.binarySearch(libraryDewey, num);
  let start = deweyIndex;
  let end = deweyIndex;

  while(start >= 0 && library[start].dewey === num) {
    start--;
  }
  //While loop terminates at first not equal to num, step back
  //to get index of first entry with correct dewey
  start++;
  while(end < library.length &&library[end].dewey === num) {
    end++;
  }
  //Not stepping back with end because slice takes in end but does not
  //include items at the end index

  let deweyLibrary = library.slice(start, end).map(item => item.title);
  
  start = start + search.indexOf(deweyLibrary, title);

  console.log(library[start]);
}

dewey('005.2762', 'JavaScript: The Good Parts');
dewey('005.2762', 'JavaScript: The Definitive Guide');
dewey('220.52081', 'NIV Study Bible');
dewey('005.133', 'Teach Yourself C++ In 21 Days');
dewey('005.133', 'The REXX Language');
dewey('796.8092', 'The Official Chuck Norris Fact Book');