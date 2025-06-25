document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const closeBtn = document.querySelector('.popup-close'); // grab the close button

  // add event listener to close button
  closeBtn.addEventListener('click', () => {
    document.getElementById('fail-popup').classList.add('hidden');
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault(); // prevent default form submission

    const emailInput = document.getElementById('email').value.trim();
    const firstNameInput = document.getElementById('first-name').value.trim();
    const surnameInput = document.getElementById('surname').value.trim();
    const passwordInput = document.getElementById('password').value.trim();
    const confirmPasswordInput = document
      .getElementById('confirm-password')
      .value.trim();

    try {
      const response = await fetch('/src/script/api/signup-user.json');
      const user = await response.json();

      const matchedUser = user.find(
        (user) =>
          user.email === emailInput &&
          user.firstName === firstNameInput &&
          user.surname === surnameInput &&
          user.password === passwordInput &&
          user.confirmPassword === confirmPasswordInput
      );

      if (matchedUser) {
        window.location.href = '/src/pages/log-in.html'; // redirect on success
      } else {
        showPopup(); // show popup alert on failure
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      showPopup();
    }
  });
});

function showPopup() {
  document.getElementById('fail-popup').classList.remove('hidden');
}

function closePopup() {
  document.getElementById('fail-popup').classList.add('hidden');
}

window.closePopup = closePopup;
