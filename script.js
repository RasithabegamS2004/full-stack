document.getElementById('registrationForm').addEventListener('submit', function(event) {
    // Username validation
    const username = document.getElementById('username').value;
    if (username.length < 5) {
        alert('Username must be at least 5 characters long.');
        event.preventDefault();
        return;
    }

    // Password validation
    const password = document.getElementById('password').value;
    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        event.preventDefault();
        return;
    }

    // Email validation
    const email = document.getElementById('email').value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
    }

    // Date of Birth validation
    const dob = document.getElementById('dob').value;
    if (!dob) {
        alert('Please select your date of birth.');
        event.preventDefault();
        return;
    }

    // Gender validation
    const gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        alert('Please select your gender.');
        event.preventDefault();
        return;
    }

    // Form is valid, allow submission
});