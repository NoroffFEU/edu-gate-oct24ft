const desktopHeader = document.querySelector('.header-desktop');

if (desktopHeader) {
  const nav = document.createElement('nav');
  nav.className = 'desktop-nav';

  const logo = document.createElement('img');
  logo.src = '/public/assets/img/logo-header-cropped.png';
  logo.alt = 'Edu-gate Logo';
  logo.className = 'header-logo';

  const ul = document.createElement('ul');
  ul.className = 'nav-links';

  const aboutLi = document.createElement('li');
  const aboutLink = document.createElement('a');
  aboutLink.href = '#about'; // We should add an about page!
  aboutLink.textContent = 'About';
  aboutLi.appendChild(aboutLink);

  const contactLi = document.createElement('li');
  const contactLink = document.createElement('a');
  contactLink.href = '#contact'; //We should add a contact page!
  contactLink.textContent = 'Contact';
  contactLi.appendChild(contactLink);

  ul.appendChild(aboutLi);
  ul.appendChild(contactLi);

  nav.appendChild(logo);
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
    { text: 'About', href: '#about', icon: '/public/assets/icons/about.png' }, // We should add an about page!
    {
      text: 'Contact',
      href: '#contact', // We should add a contact page!
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

  // Create a container for logo and close button
  const dropdownHeader = document.createElement('div');
  dropdownHeader.className = 'dropdown-header';

  // Logo for dropdown
  const dropdownLogo = document.createElement('img');
  dropdownLogo.src = '/public/assets/img/logo-header-cropped.png';
  dropdownLogo.alt = 'Edu-gate Logo';
  dropdownLogo.className = 'dropdown-logo';

  // Add logo and close button to header
  dropdownHeader.appendChild(dropdownLogo);
  dropdownHeader.appendChild(closeBtn);

  // Add header and menu to panel
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
