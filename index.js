function isPalindrome(word) {
  // Optimized two-pointer solution
  let left = 0;
  let right = word.length - 1;

  while (left < right) {
    if (word[left] !== word[right]) {
      return false; // If characters don't match, it's not a palindrome
    }
    left++;
    right--;
  }

  return true; // If loop completes, it's a palindrome
}

/* 
  Pseudocode:
  1. Set two pointers: one at the beginning (left) and one at the end (right).
  2. While left pointer is less than right pointer:
     - If characters at left and right don't match, return false.
     - Move left pointer forward and right pointer backward.
  3. If loop completes, return true (it's a palindrome).
*/

/*
  Explanation:
  This function checks if a given word is a palindrome by comparing characters 
  from both ends towards the center. It stops early if a mismatch is found, 
  making it more efficient than reversing the string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // Custom test cases
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("noon"));
}

// Export the function for testing
module.exports = isPalindrome;


