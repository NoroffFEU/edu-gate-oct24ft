document.addEventListener('DOMContentLoaded', function () {
  const aboutMain = document.querySelector('.about-main');
  if (!aboutMain) return;

  const aboutHero = document.createElement('section');
  aboutHero.className = 'about-hero';

  const h1 = document.createElement('h1');
  h1.textContent = 'About';

  const aboutText = document.createElement('section');
  aboutText.className = 'about-text';

  const p1 = document.createElement('p');
  p1.textContent =
    'Edugate was built to provide students with an easier way to access their exam results.';

  const p2 = document.createElement('p');
  p2.textContent =
    'Schools can sign up, quickly register their students & create private accounts for them to access their results.';

  aboutText.appendChild(p1);
  aboutText.appendChild(p2);

  const aboutBtns = document.createElement('section');
  aboutBtns.className = 'about-btns';

  const signUpBtn = document.createElement('a');
  signUpBtn.href = '../pages/sign-up.html';
  signUpBtn.className = 'btn btn-primary';
  signUpBtn.textContent = 'Sign Up';

  const logInBtn = document.createElement('a');
  logInBtn.href = '../pages/log-in.html';
  logInBtn.className = 'btn btn-secondary';
  logInBtn.textContent = 'Log In';

  aboutBtns.appendChild(signUpBtn);
  aboutBtns.appendChild(logInBtn);

  aboutHero.appendChild(h1);
  aboutHero.appendChild(aboutText);
  aboutHero.appendChild(aboutBtns);

  aboutMain.appendChild(aboutHero);
});
