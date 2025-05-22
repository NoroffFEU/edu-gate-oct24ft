const desktopHeader = document.querySelector('.header-desktop');

if (desktopHeader) {
  const nav = document.createElement('nav');
  nav.className = 'desktop-nav';

  const logoLink = document.createElement('a');
  logoLink.href = '/public/index.html';

  const logo = document.createElement('img');
  logo.src = '/public/assets/img/logo-header.png';
  logo.alt = 'Edu-gate Logo';
  logo.className = 'header-logo';

  logoLink.appendChild(logo);

  const ul = document.createElement('ul');
  ul.className = 'nav-links';

  const user = JSON.parse(localStorage.getItem('user')); // I've added it so we look for the user in local storage

  const navLinks = [];
  if (user) {
    navLinks.push({
      text: 'Dashboard',
      href: '/src/pages/dashboard-student.html',
    });
  }
  navLinks.push(
    { text: 'About', href: '/src/pages/about.html' },
    { text: 'Contact', href: '/src/pages/contact.html' }
  );

  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    const li = document.createElement('li');
    if (currentPath.endsWith(link.href)) {
      li.classList.add('current');
    }
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
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

  const logo = document.createElement('img');
  logo.src = '/public/assets/img/logo-header-cropped.png';
  logo.alt = 'Edu-gate Logo';
  logo.className = 'header-logo';

  const hamburger = document.createElement('button');
  hamburger.className = 'hamburger';
  hamburger.setAttribute('aria-label', 'Open menu');

  const hamburgerIcon = document.createElement('img');
  hamburgerIcon.src = '/public/assets/icons/hamburger-menu.png';
  hamburgerIcon.alt = 'Open menu';
  hamburgerIcon.className = 'hamburger-icon';

  hamburger.appendChild(hamburgerIcon);

  const dropdown = document.createElement('div');
  dropdown.className = 'mobile-dropdown';

  const closeBtn = document.createElement('button');
  closeBtn.className = 'close-dropdown';
  closeBtn.setAttribute('aria-label', 'Close menu');

  const closeIcon = document.createElement('img');
  closeIcon.src = '/public/assets/icons/x-close(1).jpg';
  closeIcon.alt = 'Close menu';
  closeIcon.className = 'close-icon';

  closeBtn.appendChild(closeIcon);

  const menuList = document.createElement('ul');
  menuList.className = 'dropdown-links';

  const links = [
    {
      text: 'Login',
      href: '/src/pages/log-in.html',
      icon: '/public/assets/icons/login.png',
    },
    {
      text: 'Signup',
      href: '/src/pages/sign-up.html',
      icon: '/public/assets/icons/signup.png',
    },
    {
      text: 'About',
      href: '/src/pages/about.html',
      icon: '/public/assets/icons/about.png',
    },
    {
      text: 'Contact',
      href: '/src/pages/contact.html',
      icon: '/public/assets/icons/contact.png',
    },
  ];

  links.forEach((link) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;

    const icon = document.createElement('img');
    icon.src = link.icon;
    icon.alt = `${link.text} icon`;
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

  mobileNav.appendChild(logo);
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
