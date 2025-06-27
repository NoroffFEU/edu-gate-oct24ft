document.addEventListener('DOMContentLoaded', function () {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) return;

  const headerMobile = document.querySelector('.header-mobile');
  const pageWrapper = document.querySelector('.page-wrapper');

  const navbarOverlay = document.createElement('div');
  navbarOverlay.className = 'mobile-navbar-overlay';

  const navbar = document.createElement('nav');
  navbar.className = 'mobile-navbar';

  const initials = document.createElement('div');
  initials.className = 'navbar-initials';
  initials.textContent = user.username ? user.username[0].toUpperCase() : '?';
  navbar.appendChild(initials);

  let menuItems = [];
  if (user.role === 'student') {
    menuItems = [
      {
        icon: 'user-circle.png',
        label: 'Profile',
        href: '../pages/dashboard.html',
      },
      {
        icon: 'results.png',
        label: 'Results',
        href: '../pages/results.html',
      },
      { icon: 'logout.png', label: 'Log out', href: '#logout' },
    ];
  } else if (user.role === 'teacher') {
    menuItems = [
      { icon: 'user-circle.png', label: 'Profile', href: '#profile' },
      {
        icon: 'results.png',
        label: 'Results',
        href: '/src/pages/select-student.html',
      },
      {
        icon: 'add-results.png',
        label: 'Add Results',
        href: '/src/pages/select-student.html',
      },
      {
        icon: 'top-students.png',
        label: 'Top Students',
        href: '../pages/top-students.html',
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
      spacer.style.height = '32px';
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
        window.location.href = '/public/index.html';
      });
    }

    navbar.appendChild(btn);
  });

  navbarOverlay.appendChild(navbar);

  const navTrigger = document.createElement('button');
  navTrigger.className = 'navbar-trigger';
  navTrigger.setAttribute('aria-label', 'Open menu');

  const navIcon = document.createElement('img');
  navIcon.src = '/public/assets/icons/green-double-arrows-right.png';
  navIcon.alt = 'Open menu icon';
  navIcon.className = 'navbar-trigger-icon';

  navTrigger.appendChild(navIcon);

  pageWrapper.insertBefore(navTrigger, headerMobile.nextSibling);
  pageWrapper.insertBefore(navbarOverlay, navTrigger.nextSibling);

  navTrigger.addEventListener('click', () => {
    navbarOverlay.classList.toggle('open');
    navTrigger.classList.toggle('open');
    navIcon.classList.toggle('rotated');
  });

  navbarOverlay.addEventListener('click', (e) => {
    if (e.target === navbarOverlay) {
      navbarOverlay.classList.remove('open');
      navTrigger.classList.remove('open');
      navIcon.classList.remove('rotated');
    }
  });

  const headerDesktop = document.querySelector('.header-desktop');
  if (headerDesktop) {
    const oldDesktopNavbar = document.querySelector('.desktop-navbar');
    if (oldDesktopNavbar) oldDesktopNavbar.remove();

    const desktopNavbar = document.createElement('nav');
    desktopNavbar.className = 'desktop-navbar';

    const navList = document.createElement('ul');
    navList.className = 'desktop-navbar-list';

    const spacerLi = document.createElement('li');
    spacerLi.className = 'desktop-navbar-spacer';
    spacerLi.style.height = '32px';
    navList.appendChild(spacerLi);

    const homeLi = document.createElement('li');
    homeLi.className = 'desktop-navbar-item';

    const homeLink = document.createElement('a');
    homeLink.href = '../pages/dashboard.html';
    homeLink.className = 'desktop-navbar-link';

    const homeIcon = document.createElement('img');
    homeIcon.src = '/public/assets/icons/dashboard.png';
    homeIcon.alt = 'Home icon';
    homeIcon.className = 'desktop-navbar-icon';

    const homeSpan = document.createElement('span');
    homeSpan.className = 'desktop-navbar-label';
    homeSpan.textContent = 'Home';

    homeLink.appendChild(homeIcon);
    homeLink.appendChild(homeSpan);
    homeLi.appendChild(homeLink);
    navList.appendChild(homeLi);

    menuItems.forEach((item) => {
      if (item.label === 'Profile') return;

      const li = document.createElement('li');
      li.className = 'desktop-navbar-item';

      const link = document.createElement('a');
      link.href = item.href;
      link.className = 'desktop-navbar-link';

      const icon = document.createElement('img');
      icon.src = `/public/assets/icons/${item.icon}`;
      icon.alt = `${item.label} icon`;
      icon.className = 'desktop-navbar-icon';

      const span = document.createElement('span');
      span.className = 'desktop-navbar-label';
      span.textContent = item.label;

      link.appendChild(icon);
      link.appendChild(span);
      li.appendChild(link);

      if (item.label === 'Log out') {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          localStorage.removeItem('user');
          window.location.href = '/public/index.html';
        });
      }

      navList.appendChild(li);
    });

    desktopNavbar.appendChild(navList);
    headerDesktop.insertAdjacentElement('afterend', desktopNavbar);
  }
});
