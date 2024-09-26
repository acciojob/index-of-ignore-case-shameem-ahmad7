function indexOfIgnoreCase(s1, s2) {
  // write your code here
	 // Convert both strings to lowercase to make the search case-insensitive
  const s1 = str.toLowerCase();
  const s2 = subStr.toLowerCase();

  // Use indexOf to find the first occurrence of s2 in s1
  return s1.indexOf(s2);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
