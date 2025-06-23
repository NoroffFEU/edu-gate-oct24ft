document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const closeBtn = document.querySelector('.popup-close'); // grab the close button

  // add event listener to close button
  closeBtn.addEventListener('click', () => {
    document.getElementById('success-popup').classList.add('hidden');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevent default form submission

    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    try {
      const response = await fetch('/src/script/api/login-user.json');
      const user = await response.json();

      const matchedUser = user.find(
        (user) => user.email === emailInput && user.password === passwordInput
      );

      if (matchedUser) {
        errorMessage.classList.add('hidden'); // hide previous error
        showPopup();
        setTimeout(() => {
          window.location.href = '/src/pages/dashboard-student.html';
        }, 3000); // Redirect after 3 seconds
      } else {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Invalid email or password';
        errorMessage.classList.remove('hidden');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      errorMessage.textContent =
        'Something went wrong. please try again later.';
      errorMessage.classList.remove('hidden');
    }
  });
});

function showPopup() {
  document.getElementById('success-popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('success-popup').classList.add('hidden');
}

window.closePopup = closePopup;
