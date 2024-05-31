function register() {
    // Get form elements
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');
    
    // Clear previous messages
    messageDiv.innerHTML = '';

    // Validate form data
    if (!username || !email || !password) {
        messageDiv.innerHTML = 'All fields are required.';
        return;
    }

    if (!validateEmail(email)) {
        messageDiv.innerHTML = 'Please enter a valid email address.';
        return;
    }

    // If validation passes
    messageDiv.innerHTML = 'Registration successful!';
    // Here you can also add code to send the form data to the server
}

// Function to validate email address
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}