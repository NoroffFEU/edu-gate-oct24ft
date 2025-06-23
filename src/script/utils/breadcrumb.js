document.addEventListener('DOMContentLoaded', function () {
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
        return `<span>${label.trim()}</span>`;
      }
    })
    .join('');
});
