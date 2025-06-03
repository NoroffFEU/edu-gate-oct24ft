const desktopFooter = document.createElement('footer');
desktopFooter.className = 'footer-desktop';

const desktopImg = document.createElement('img');
desktopImg.src = '/public/assets/img/circle-footer.png';
desktopImg.alt = 'Footer illustration desktop';
desktopImg.className = 'footer-img';

desktopFooter.appendChild(desktopImg);

const mobileFooter = document.createElement('footer');
mobileFooter.className = 'footer-mobile';

const mobileImg = document.createElement('img');
mobileImg.src = '/public/assets/img/Circles_illustration_mobile.png';
mobileImg.alt = 'Footer illustration mobile';
mobileImg.className = 'footer-img';

mobileFooter.appendChild(mobileImg);

document.body.appendChild(desktopFooter);
document.body.appendChild(mobileFooter);