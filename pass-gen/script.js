// Function to generate random password
const generatePassword = () => {
    // Retrieve user inputs
    const length = parseInt(document.getElementById('length').value);
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    // Define character sets
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // Initialize password variable and character pool
    let password = '';
    let charPool = '';

    // Add selected character types to the character pool
    if (includeUppercase) charPool += uppercaseChars;
    if (includeLowercase) charPool += lowercaseChars;
    if (includeNumbers) charPool += numberChars;
    if (includeSymbols) charPool += symbolChars;

    // Check if at least one character type is selected
    if (charPool.length === 0) {
        alert('Please select at least one character type.');
        return;
    }

    // Generate password randomly
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charPool.length);
        password += charPool[randomIndex];
    }

    // Display generated password
    document.getElementById('passwordOutput').value = password;
};

// Event listener for the Generate Password button
document.getElementById('generateBtn').addEventListener('click', generatePassword);
