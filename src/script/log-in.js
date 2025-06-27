document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const closeBtn = document.querySelector('.popup-close');

  closeBtn.addEventListener('click', () => {
    document.getElementById('success-popup').classList.add('hidden');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const emailInput = document.getElementById('email').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');

    try {
      const response = await fetch('/src/script/api/user.json');
      const user = await response.json();

      const matchedUser = user.find(
        (user) =>
          (user.email === emailInput || user.username === emailInput) &&
          user.password === passwordInput
      );

      if (matchedUser) {
        errorMessage.classList.add('hidden');
        localStorage.setItem('user', JSON.stringify(matchedUser));
        showPopup();
        setTimeout(() => {
          window.location.href = '/src/pages/dashboard-student.html';
        }, 3000);
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
