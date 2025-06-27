document.addEventListener('DOMContentLoaded', function () {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    window.location.href = '/src/pages/log-in.html';
    return;
  }

  document.getElementById('dashboard-heading').textContent = 'Dashboard';

  const initialsImg = document.getElementById('dashboard-initials-img');
  function setInitialsImg() {
    initialsImg.src =
      window.innerWidth >= 900
        ? '/public/assets/img/Student initials.png'
        : '/public/assets/img/Student initials mobile.png';
  }
  setInitialsImg();
  window.addEventListener('resize', setInitialsImg);

  let fullName = '';
  if (user.firstName && user.lastName) {
    fullName = `${user.firstName} ${user.lastName}`;
  } else if (user.username) {
    fullName = user.username;
  } else if (user.name) {
    fullName = user.name;
  } else if (user.email) {
    fullName = user.email;
  } else {
    fullName = 'User';
  }
  document.getElementById('dashboard-username').textContent = fullName;

  const role = user.role
    ? user.role.charAt(0).toUpperCase() + user.role.slice(1)
    : 'User';
  document.getElementById('dashboard-role').textContent =
    `${role} at Edugate School`;

  const iconData = {
    student: [
      {
        label: 'My Results',
        icon: 'results.png',
        link: '/src/pages/results.html',
      },
      { label: 'See Profile', icon: 'user-circle.png', link: '#profile' },
      { label: 'Log Out', icon: 'logout.png', link: '#logout' },
    ],
    teacher: [
      {
        label: 'Top Students',
        icon: 'top-students.png',
        link: '/src/pages/top-students.html',
      },
      {
        label: 'Add Results',
        icon: 'add-results.png',
        link: '/src/pages/select-student.html',
      },
      {
        label: 'View Results',
        icon: 'results.png',
        link: '/src/pages/select-student.html',
      },
      { label: 'See Profile', icon: 'user-circle.png', link: '#profile' },
      { label: 'Log Out', icon: 'logout.png', link: '#logout' },
    ],
    admin: [
      {
        label: 'Manage Users',
        icon: 'add-user.png',
        link: '/src/pages/user-management.html',
      },
      {
        label: 'Add Students',
        icon: 'add-student.png',
        link: '/src/pages/add-student.html',
      },
      {
        label: 'Add School',
        icon: 'add-school.png',
        link: '/src/pages/add-school.html',
      },
      {
        label: 'Add Teachers',
        icon: 'add-teacher.png',
        link: '/src/pages/add-teacher.html',
      },
      { label: 'See Profile', icon: 'user-circle.png', link: '#profile' },
      { label: 'Log Out', icon: 'logout.png', link: '#logout' },
    ],
  };

  const icons = iconData[user.role] || [];
  if (user.role === 'student') {
    const idx = icons.findIndex((i) => i.label === 'See Profile');
    if (idx > -1) {
      const [profileIcon] = icons.splice(idx, 1);
      icons.unshift(profileIcon);
    }
  }

  const iconGroup = document.querySelector('.dashboard-icons');
  iconGroup.innerHTML = '';

  icons.forEach((item) => {
    const iconDiv = document.createElement('div');
    iconDiv.className = 'dashboard-icon';

    const img = document.createElement('img');
    img.src = `/public/assets/icons/${item.icon}`;
    img.alt = item.label;
    iconDiv.appendChild(img);

    const label = document.createElement('span');
    label.textContent = item.label;
    iconDiv.appendChild(label);

    iconDiv.addEventListener('click', () => {
      if (item.link === '#logout') {
        localStorage.removeItem('user');
        window.location.href = '/public/index.html';
      } else if (item.link.startsWith('#')) {
      } else {
        window.location.href = item.link;
      }
    });

    iconGroup.appendChild(iconDiv);
  });
});
