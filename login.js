// loginform login
const loginForm = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username === 'hponemarn' && password === '99999') {
        alert('Login successful!');
        window.location.href = 'index.html';
      } else {
        errorMessage.style.display = 'block';
      }
    });