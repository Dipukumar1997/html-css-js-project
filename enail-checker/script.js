// Function to validate email
const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
};

// Function to validate password (at least 6 characters)
const validatePassword = (password) => {
    return password.length >= 6;
};

// Function to validate phone number (numeric characters only)
const validatePhone = (phone) => {
    const re = /^[0-9]+$/;
    return re.test(phone);
};

// Function to handle form submission
const handleSubmit = (event) => {
    event.preventDefault();
    
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const phone = document.getElementById('phone').value.trim();
    
    const errorMessages = document.getElementById('errorMessages');
    errorMessages.innerHTML = '';

    let isValid = true;

    if (!validateEmail(email)) {
        errorMessages.innerHTML += '<p>Invalid email format</p>';
        isValid = false;
    }

    if (!validatePassword(password)) {
        errorMessages.innerHTML += '<p>Password must be at least 6 characters long</p>';
        isValid = false;
    }

    if (!validatePhone(phone)) {
        errorMessages.innerHTML += '<p>Phone number must contain only numeric digits</p>';
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // Here you can submit the form to your backend or perform any other action
        document.getElementById('myForm').reset(); // Reset form after successful submission
    }
};

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', handleSubmit);
