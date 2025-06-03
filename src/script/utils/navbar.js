document.addEventListener('DOMContentLoaded', function () {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return;

  const navbarOverlay = document.createElement('div');
  navbarOverlay.className = 'mobile-navbar-overlay';

  const navbar = document.createElement('nav');
  navbar.className = 'mobile-navbar';

  const navTrigger = document.createElement('button');
  navTrigger.className = 'navbar-trigger';
  navTrigger.setAttribute('aria-label', 'Open/Close navigation');
  const navIcon = document.createElement('img');
  navIcon.src = '/public/assets/icons/green-double-arrows-right.png';
  navIcon.alt = 'Toggle navigation';
  navTrigger.appendChild(navIcon);

  const initials = document.createElement('div');
  initials.className = 'navbar-initials';
  initials.textContent = user.username ? user.username[0].toUpperCase() : '?';
  navbar.appendChild(initials);

  let menuItems = [];
  if (user.role === 'student') {
    menuItems = [
      { icon: 'user-circle.png', label: 'Profile', href: '#profile' },
      { icon: 'results.png', label: 'Results', href: '#results' },
      { icon: 'logout.png', label: 'Log out', href: '#logout' },
    ];
  } else if (user.role === 'teacher') {
    menuItems = [
      { icon: 'user-circle.png', label: 'Profile', href: '#profile' },
      { icon: 'results.png', label: 'Results', href: '#results' },
      { icon: 'add-results.png', label: 'Add Results', href: '#add-results' },
      {
        icon: 'top-students.png',
        label: 'Top Students',
        href: '#top-students',
      },
      { icon: 'logout.png', label: 'Log out', href: '#logout' },
    ];
  } else if (user.role === 'admin') {
    menuItems = [
      { icon: 'user-circle.png', label: 'Profile', href: '#profile' },
      { icon: 'add-student.png', label: 'Add Student', href: '#add-student' },
      { icon: 'add-teacher.png', label: 'Add Teacher', href: '#add-teacher' },
      { icon: 'add-school.png', label: 'Add School', href: '#add-school' },
      { icon: 'logout.png', label: 'Log out', href: '#logout' },
    ];
  }

  menuItems.forEach((item) => {
    if (item.label === 'Log out') {
      const spacer = document.createElement('div');
      spacer.className = 'navbar-spacer';
      spacer.style.height = '32px'; // We can adjust this if we want more space!
      navbar.appendChild(spacer);
    }

    const btn = document.createElement('a');
    btn.className = 'navbar-item';
    btn.href = item.href;
    const icon = document.createElement('img');
    icon.src = `/public/assets/icons/${item.icon}`;
    icon.alt = `${item.label} icon`;
    btn.appendChild(icon);
    const span = document.createElement('span');
    span.textContent = item.label;
    btn.appendChild(span);

    if (item.label === 'Log out') {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('user');
        window.location.reload();
      });
    }

    navbar.appendChild(btn);
  });

  navbarOverlay.appendChild(navbar);
  document.body.appendChild(navbarOverlay);
  document.body.appendChild(navbarOverlay);
  document.body.appendChild(navTrigger);

  navTrigger.addEventListener('click', () => {
    navbarOverlay.classList.toggle('open');
    navIcon.classList.toggle('rotated');
  });

  navbarOverlay.addEventListener('click', (e) => {
    if (e.target === navbarOverlay) {
      navbarOverlay.classList.remove('open');
      navIcon.classList.remove('rotated');
    }
  });
});
