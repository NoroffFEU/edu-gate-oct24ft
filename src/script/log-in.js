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

    try {
      const response = await fetch('/src/script/api/user.json');
      const user = await response.json();

      const matchedUser = user.find(
        (user) => user.email === emailInput && user.password === passwordInput
      );

      if (matchedUser) {
        showPopup();

        setTimeout(() => {
          window.location.href = '/src/pages/dashboard-student.html';
        }, 3000); // Redirect after 3 seconds
      } else {
        alert('Invalid email or password');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      alert('Something went wrong. please try again later.');
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
