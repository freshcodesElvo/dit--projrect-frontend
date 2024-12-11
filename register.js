document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const firstName = document.getElementById('first-name').value;
        const secondName = document.getElementById('second-name').value;
        const username = document.getElementById('username').value; 
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const termsChecked = document.getElementById('terms-and-conditions').checked;

        if (!termsChecked) {
            alert('You must agree to the terms and conditions.');
            return;
        }c

        const payload = {
            firstName,
            secondName,
            username, 
            email,
            password
        };

        try {
            const response = await fetch('http://localhost:5000/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Registration successful!');
            } else {
                alert(`Registration failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while registering.');
        }
    });
});
