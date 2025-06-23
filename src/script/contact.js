document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('.contact-main');
  main.innerHTML = `
    <h1>Contact</h1>
    <p class="contact-desc">If you have any questions or feedback, please use the contact form. We would love to hear from you.</p>
    <form id="contactForm" novalidate>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" placeholder="example@email.com" maxlength="100" />
        <div class="error-message" id="emailError"></div>
      </div>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Ola" maxlength="50" />
        <div class="error-message" id="nameError"></div>
      </div>
      <div class="form-group">
        <label for="surname">Surname</label>
        <input type="text" id="surname" name="surname" placeholder="Normann" maxlength="50" />
        <div class="error-message" id="surnameError"></div>
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" name="message" placeholder="Your message..." rows="5" maxlength="1000"></textarea>
        <div class="error-message" id="messageError"></div>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  `;

  const form = document.getElementById('contactForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    document
      .querySelectorAll('.error-message')
      .forEach((el) => (el.textContent = ''));
    document
      .querySelectorAll('input, textarea')
      .forEach((el) => el.classList.remove('input-error'));

    let valid = true;

    const email = form.email.value.trim();
    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      document.getElementById('emailError').textContent =
        'Valid email required';
      form.email.classList.add('input-error');
      valid = false;
    }

    if (!form.name.value.trim()) {
      document.getElementById('nameError').textContent = 'Name required';
      form.name.classList.add('input-error');
      valid = false;
    }

    if (!form.surname.value.trim()) {
      document.getElementById('surnameError').textContent = 'Surname required';
      form.surname.classList.add('input-error');
      valid = false;
    }

    if (!form.message.value.trim()) {
      document.getElementById('messageError').textContent = 'Message required';
      form.message.classList.add('input-error');
      valid = false;
    }

    if (valid) {
      form.reset();
      alert('Thank you for contacting us!');
    }
  });
});
