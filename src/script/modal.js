function openModal() {
  document.getElementById('modal').style.display = 'flex';
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

function deleteResults() {
  alert('Results deleted.');
  closeModal();
}
