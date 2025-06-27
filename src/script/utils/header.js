const desktopHeader = document.querySelector('.header-desktop');

if (desktopHeader) {
  const nav = document.createElement('nav');
  nav.className = 'desktop-nav';

  const user = JSON.parse(localStorage.getItem('user'));

  const logoLink = document.createElement('a');
  logoLink.href = user ? '/src/pages/dashboard.html' : '/public/index.html';

  const logo = document.createElement('img');
  logo.src = '/public/assets/img/logo-header.png';
  logo.alt = 'Edu-gate Logo';
  logo.className = 'header-logo';

  logoLink.appendChild(logo);

  const ul = document.createElement('ul');
  ul.className = 'nav-links';

  const excludedPages = [
    '/public/index.html',
    '/src/pages/log-in.html',
    '/src/pages/register.html',
    '/src/pages/sign-up.html',
  ];
  const currentPath = window.location.pathname;

  const navLinks = [];
  if (user && !excludedPages.includes(currentPath)) {
    navLinks.push({
      text: 'Dashboard',
      href: '/src/pages/dashboard.html',
    });
  }
  navLinks.push(
    { text: 'About', href: '/src/pages/about.html' },
    { text: 'Contact', href: '/src/pages/contact.html' }
  );

  if (user && !excludedPages.includes(currentPath)) {
    navLinks.push({
      icon: '/public/assets/icons/user-circle.png',
      href: '#edit-profile',
      isProfile: true,
      alt: 'Edit profile icon',
    });
  }

  navLinks.forEach((link) => {
    const li = document.createElement('li');
    if (currentPath.endsWith(link.href)) {
      li.classList.add('current');
    }
    const a = document.createElement('a');
    a.href = link.href;
    if (link.isProfile) {
      const img = document.createElement('img');
      img.src = link.icon;
      img.alt = link.alt || 'Profile icon';
      img.style.width = '64px';
      img.style.height = '64px';
      img.style.verticalAlign = 'middle';
      a.appendChild(img);
    } else {
      a.textContent = link.text;
    }
    li.appendChild(a);
    ul.appendChild(li);
  });

  nav.appendChild(logoLink);
  nav.appendChild(ul);

  desktopHeader.appendChild(nav);
}

const mobileHeader = document.querySelector('.header-mobile');

if (mobileHeader) {
  const mobileNav = document.createElement('nav');
  mobileNav.className = 'mobile-nav';

  const user = JSON.parse(localStorage.getItem('user'));

  const logoLink = document.createElement('a');
  logoLink.href = user ? '/src/pages/dashboard.html' : '/public/index.html';

  const logo = document.createElement('img');
  logo.src = '/public/assets/img/logo-header-cropped.png';
  logo.alt = 'Edu-gate Logo';
  logo.className = 'header-logo';

  logoLink.appendChild(logo);

  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Open menu');

  const hamburgerIcon = document.createElement('img');
  hamburgerIcon.src = '/public/assets/icons/hamburger-menu.png';
  hamburgerIcon.alt = 'Open menu icon';
  hamburgerIcon.className = 'hamburger-icon';

  hamburger.appendChild(hamburgerIcon);

  const dropdown = document.createElement('div');
  dropdown.className = 'mobile-dropdown';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-dropdown';
  closeBtn.setAttribute('aria-label', 'Close menu');

  const closeIcon = document.createElement('img');
  closeIcon.src = '/public/assets/icons/x-close(1).jpg';
  closeIcon.alt = 'Close menu icon';
  closeIcon.className = 'close-icon';

  closeBtn.appendChild(closeIcon);

  const menuList = document.createElement('ul');
  menuList.className = 'dropdown-links';

  let links = [];

  if (user && user.role === 'student') {
    links = [
      {
        text: 'Dashboard',
        href: '/src/pages/dashboard.html',
        icon: '/public/assets/icons/dashboard.png',
        alt: 'Dashboard icon',
      },
      {
        text: 'Profile',
        href: '#edit-profile',
        icon: '/public/assets/icons/user-circle.png',
        alt: 'Profile icon',
      },
      {
        text: 'About',
        href: '/src/pages/about.html',
        icon: '/public/assets/icons/about.png',
        alt: 'About icon',
      },
      {
        text: 'Contact',
        href: '/src/pages/contact.html',
        icon: '/public/assets/icons/contact.png',
        alt: 'Contact icon',
      },
    ];
  } else if (user && user.role === 'admin') {
    links = [
      {
        text: 'Dashboard',
        href: '/src/pages/dashboard-admin.html',
        icon: '/public/assets/icons/dashboard.png',
        alt: 'Dashboard icon',
      },
      {
        text: 'Profile',
        href: '#edit-profile',
        icon: '/public/assets/icons/user-circle.png',
        alt: 'Profile icon',
      },
      {
        text: 'Manage user',
        href: '/src/pages/user-management.html',
        icon: '/public/assets/icons/user-management.png',
        alt: 'Manage user icon',
      },
      {
        text: 'About',
        href: '/src/pages/about.html',
        icon: '/public/assets/icons/about.png',
        alt: 'About icon',
      },
      {
        text: 'Contact',
        href: '/src/pages/contact.html',
        icon: '/public/assets/icons/contact.png',
        alt: 'Contact icon',
      },
    ];
  } else if (user && user.role === 'teacher') {
    links = [
      {
        text: 'Dashboard',
        href: '/src/pages/dashboard-teacher.html',
        icon: '/public/assets/icons/dashboard.png',
        alt: 'Dashboard icon',
      },
      {
        text: 'Profile',
        href: '#edit-profile',
        icon: '/public/assets/icons/user-circle.png',
        alt: 'Profile icon',
      },
      {
        text: 'Manage results',
        href: '/src/pages/manage-results.html',
        icon: '/public/assets/icons/results.png',
        alt: 'Manage results icon',
      },
      {
        text: 'About',
        href: '/src/pages/about.html',
        icon: '/public/assets/icons/about.png',
        alt: 'About icon',
      },
      {
        text: 'Contact',
        href: '/src/pages/contact.html',
        icon: '/public/assets/icons/contact.png',
        alt: 'Contact icon',
      },
    ];
  } else {
    links = [
      {
        text: 'Login',
        href: '/src/pages/log-in.html',
        icon: '/public/assets/icons/login.png',
        alt: 'Login icon',
      },
      {
        text: 'Signup',
        href: '/src/pages/sign-up.html',
        icon: '/public/assets/icons/signup.png',
        alt: 'Signup icon',
      },
      {
        text: 'About',
        href: '/src/pages/about.html',
        icon: '/public/assets/icons/about.png',
        alt: 'About icon',
      },
      {
        text: 'Contact',
        href: '/src/pages/contact.html',
        icon: '/public/assets/icons/contact.png',
        alt: 'Contact icon',
      },
    ];
  }

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;

    const icon = document.createElement('img');
    icon.src = link.icon;
    icon.alt = link.alt || `${link.text} icon`;
    icon.className = 'menu-icon';

    li.appendChild(a);
    li.appendChild(icon);
    menuList.appendChild(li);
  });

  const panel = document.createElement('div');
  panel.className = 'dropdown-panel';

  const dropdownHeader = document.createElement('div');
  dropdownHeader.className = 'dropdown-header';

  const dropdownLogo = document.createElement('img');
  dropdownLogo.src = '/public/assets/img/logo-header-cropped.png';
  dropdownLogo.alt = 'Edu-gate Logo';
  dropdownLogo.className = 'dropdown-logo';

  dropdownHeader.appendChild(dropdownLogo);
  dropdownHeader.appendChild(closeBtn);

  panel.appendChild(dropdownHeader);
  panel.appendChild(menuList);
  dropdown.appendChild(panel);

  if (user) {
    const spacerLi = document.createElement('li');
    spacerLi.className = 'dropdown-spacer';
    spacerLi.style.pointerEvents = 'none';
    menuList.appendChild(spacerLi);

    const logoutLi = document.createElement('li');
    logoutLi.style.cursor = 'pointer';
    logoutLi.classList.add('logout-link');

    const logoutA = document.createElement('a');
    logoutA.href = '#logout';
    logoutA.textContent = 'Log out';

    const logoutIcon = document.createElement('img');
    logoutIcon.src = '/public/assets/icons/logout.png';
    logoutIcon.alt = 'Log out icon';
    logoutIcon.className = 'menu-icon';

    logoutA.appendChild(logoutIcon);
    logoutLi.appendChild(logoutA);

    logoutLi.addEventListener('click', (e) => {
      e.preventDefault();
      localStorage.removeItem('user');
      window.location.reload();
    });

    menuList.appendChild(logoutLi);
  }

  mobileNav.appendChild(logoLink);
  mobileNav.appendChild(hamburger);
  mobileHeader.appendChild(mobileNav);
  mobileHeader.appendChild(dropdown);

  hamburger.addEventListener('click', () => {
    dropdown.classList.add('open');
  });

  closeBtn.addEventListener('click', () => {
    dropdown.classList.remove('open');
  });
}
