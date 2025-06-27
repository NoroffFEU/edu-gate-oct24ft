document.addEventListener('DOMContentLoaded', function () {
  const user = JSON.parse(localStorage.getItem('user'));
  if (!user) {
    const breadcrumb = document.querySelector('.breadcrumb');
    if (breadcrumb) breadcrumb.style.display = 'none';
    return;
  }

  const breadcrumb = document.querySelector('.breadcrumb');
  if (!breadcrumb) return;

  const path = breadcrumb.getAttribute('data-breadcrumb');
  if (!path) return;

  const parts = path.split('>').map((s) => s.trim());
  breadcrumb.innerHTML = parts
    .map((part, i) => {
      const [label, url] = part.split(':');
      if (i < parts.length - 1 && url) {
        return `<a href="${url.trim()}">${label.trim()}</a><span class="breadcrumb-separator">&gt;</span>`;
      } else if (i < parts.length - 1) {
        return `<a href="#">${label.trim()}</a><span class="breadcrumb-separator">&gt;</span>`;
      } else {
        return `<span class="breadcrumb-current">${label.trim()}</span>`;
      }
    })
    .join('');
});
