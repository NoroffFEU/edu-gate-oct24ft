// ---------------------------------------mobile view-------------------------------------

// h1 heading
const Heading = document.createElement('h1');
Heading.innerHTML = 'Dashboard';

const dashboard = document.getElementById('heading');
dashboard.appendChild(Heading);

// student initials img
function studentInitialsImg() {
  const imgDiv = document.getElementById('student-initials-mobile');
  const imgIcon = document.createElement('img');
  imgIcon.src = '/public/assets/img/Student initials mobile.png';
  imgIcon.alt = 'student initials icon';
  imgDiv.appendChild(imgIcon);
}
studentInitialsImg();

// student name
const studentName = document.createElement('h2');
studentName.innerHTML = 'Joe Bloggs';

const studentContainer = document.getElementById('student-name');
studentContainer.appendChild(studentName);

// student title
const studentTitle = document.createElement('p');
studentTitle.innerHTML = 'Student at Edugate school';

const studentT = document.getElementById('student-title');
studentT.appendChild(studentTitle);

// profile icon
function profileIcon() {
  const imgDiv = document.getElementById('profile-icon');
  const imgIcon = document.createElement('img');
  imgIcon.src = '/public/assets/icons/profile.png';
  imgIcon.alt = 'student icon';
  imgDiv.appendChild(imgIcon);
}
profileIcon();

// my results icon
function myResultsIcon() {
  const imgDiv = document.getElementById('my-results-icon');
  const imgIcon = document.createElement('img');
  imgIcon.src = '/public/assets/icons/my-results.png';
  imgIcon.alt = 'profile icon';
  imgDiv.appendChild(imgIcon);
}
myResultsIcon();

// logout icon
function logoutIcon() {
  const imgDiv = document.getElementById('logout-icon');
  const imgIcon = document.createElement('img');
  imgIcon.src = '/public/assets/icons/logout-mobile.png';
  imgIcon.alt = 'logout icon';
  imgIcon.addEventListener('click', () => {
    window.location.href = '/public/index.html';
  });
  imgDiv.appendChild(imgIcon);
}
logoutIcon();

// ----------------------------------------desktop view-----------------------------------------
// student initials img
function studentInitialsImgDesktop() {
  const imgDiv = document.getElementById('student-initials-desktop');
  const imgIcon = document.createElement('img');
  imgIcon.src = '/public/assets/img/Student initials.png';
  imgIcon.alt = 'student initials icon';
  imgDiv.appendChild(imgIcon);
}
studentInitialsImgDesktop();

// profile icon
function profileIconDesktop() {
  const imgDiv = document.getElementById('profile-icon-desktop');
  const imgIcon = document.createElement('img');
  imgIcon.src = '/public/assets/icons/see-profile-desktop.png';
  imgIcon.alt = 'student icon';
  imgDiv.appendChild(imgIcon);
}
profileIconDesktop();

// my results icon
function myResultsIconDesktop() {
  const imgDiv = document.getElementById('my-results-icon-desktop');
  const imgIcon = document.createElement('img');
  imgIcon.src = '/public/assets/icons/my-results-desktop.png';
  imgIcon.alt = 'profile icon';
  imgDiv.appendChild(imgIcon);
}
myResultsIconDesktop();

// logout icon
function logoutIconDesktop() {
  const imgDiv = document.getElementById('logout-icon-desktop');
  const imgIcon = document.createElement('img');
  imgIcon.src = '/public/assets/icons/log out.png';
  imgIcon.alt = 'logout icon';
  imgIcon.addEventListener('click', () => {
    window.location.href = '/public/index.html';
  });
  imgDiv.appendChild(imgIcon);
}
logoutIconDesktop();
