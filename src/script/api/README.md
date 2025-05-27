# Usage of mockup JSON file

## This mock login setup is only for local development and testing.

## Do not use this code for real authentication or production use.

### HTML example:

<form id="loginForm">
  <input type="text" id="username" placeholder="Username" required />
  <input type="password" id="password" placeholder="Password" required />
  <button type="submit">Log In</button>
  <div id="loginError" style="color:red;"></div>
</form>

### JavaScript example:

document.getElementById('loginForm').addEventListener('submit', function(e) {
e.preventDefault();

const username = document.getElementById('username').value.trim();
const password = document.getElementById('password').value.trim();
const errorDiv = document.getElementById('loginError');

fetch('/src/script/api/user.json')
.then(res => res.json())
.then(users => {
const user = users.find(
u => u.username === username && u.password === password
);
if (user) {
localStorage.setItem('user', JSON.stringify(user));
window.location.href = '/src/pages/dashboard-' + user.role + '.html';
} else {
errorDiv.textContent = 'Invalid username or password';
}
})
.catch(() => {
errorDiv.textContent = 'Could not load user data.';
});
});
