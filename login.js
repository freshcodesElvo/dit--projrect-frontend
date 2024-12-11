document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        // Gather form data
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Create payload
        const payload = {
            email,
            password
        };

        try {
            // Send POST request to the backend
            const response = await fetch('http://localhost:5000/api/user/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Login successful!');
                // Store the token in local storage or cookies
                localStorage.setItem('token', data.token);
                // Redirect to a protected page or dashboard
                window.location.href = '/dashboard.html';
            } else {
                alert(`Login failed: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while logging in.');
        }
    });
});
