function indexOfIgnoreCase(str, subStr) {
  // write your code here
	 // Convert both strings to lowercase to make the search case-insensitive
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Use indexOf to find the first occurrence of lowerSubStr in lowerStr
  return lowerStr.indexOf(lowerSubStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
