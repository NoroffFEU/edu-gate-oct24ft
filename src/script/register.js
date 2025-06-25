document.querySelector('form').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent actual submission for now

  // redirect to dashboard page
  window.location.href = '/src/pages/dashboard-student.html';
});
