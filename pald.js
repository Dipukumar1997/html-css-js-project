// Function to check if a string is a palindrome
const isPalindrome = (str) => {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
    
    // Reverse the cleaned string
    const reversedStr = cleanStr.split('').reverse().join('');
    
    
    // Check if the original and reversed strings are the same
    return cleanStr === reversedStr;
};

// Example usage:
const string1 = "A man, a plan, a canal. Panama!";
console.log(isPalindrome(string1)); // Output: true

const string2 = "race car";
console.log(isPalindrome(string2)); // Output: true

const string3 = "hello world";
console.log(isPalindrome(string3)); // Output: false
