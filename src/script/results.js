document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('.results-main');
  main.innerHTML = '';

  const studentId = localStorage.getItem('selectedStudentId');
  const studentName = localStorage.getItem('selectedStudentName') || 'Student';

  const h1 = document.createElement('h1');
  h1.textContent = 'Student Results';
  main.appendChild(h1);

  const h2 = document.createElement('h2');
  h2.textContent = `Here are the results for ${studentName}`;
  main.appendChild(h2);

  const searchContainer = document.createElement('div');
  searchContainer.id = 'searchContainer';

  const searchWrapper = document.createElement('div');
  searchWrapper.className = 'search-wrapper';

  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search results...';
  searchInput.id = 'searchInput';

  const searchBtn = document.createElement('button');
  searchBtn.type = 'button';
  searchBtn.className = 'search-btn';
  searchBtn.innerHTML = `<img src="/public/assets/icons/search.png" alt="Search" />`;

  searchBtn.addEventListener('click', () => {
    currentPage = 1;
    buildTable(allResults, searchInput.value);
  });

  searchInput.addEventListener('input', () => {
    currentPage = 1;
    buildTable(allResults, searchInput.value);
  });

  searchWrapper.appendChild(searchInput);
  searchWrapper.appendChild(searchBtn);
  searchContainer.appendChild(searchWrapper);
  main.appendChild(searchContainer);

  const addBtnContainer = document.createElement('div');
  addBtnContainer.className = 'add-btn-container';

  const addBtn = document.createElement('button');
  addBtn.className = ' btn-primary btn-small';
  addBtn.textContent = 'Add Results';
  addBtnContainer.appendChild(addBtn);

  main.appendChild(addBtnContainer);

  const tableContainer = document.createElement('div');
  tableContainer.id = 'tableContainer';
  main.appendChild(tableContainer);

  const paginationContainer = document.createElement('div');
  paginationContainer.id = 'paginationContainer';
  main.appendChild(paginationContainer);

  const spacer = document.createElement('div');
  spacer.style.height = '2rem';
  main.appendChild(spacer);

  const backBtn = document.createElement('button');
  backBtn.className = 'btn-secondary';
  backBtn.textContent = 'Back to dashboard';
  backBtn.onclick = () => (window.location.href = 'dashboard.html');
  main.appendChild(backBtn);

  let allResults = [];
  let currentPage = 1;
  const rowsPerPage = 7;

  function buildTable(data, filter = '') {
    tableContainer.innerHTML = '';

    const table = document.createElement('table');
    table.id = 'dataTable';

    const thead = document.createElement('thead');
    thead.innerHTML = `
      <tr>
        <th class="col-year">Year</th>
        <th class="col-term">Term</th>
        <th>Subject</th>
        <th>Exam</th>
        <th class="col-result">Result</th>
        <th>Grade</th>
        <th class="col-edit"></th>
        <th class="col-delete"></th>
        <th class="col-info"><span class="sr-only">Info</span></th>
      </tr>`;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');
    const searchText = filter.toLowerCase();

    const filteredData = data.filter(
      (result) =>
        String(result.year).toLowerCase().includes(searchText) ||
        result.term.toLowerCase().includes(searchText) ||
        result.subject.toLowerCase().includes(searchText) ||
        result.exam.toLowerCase().includes(searchText) ||
        String(result.result).toLowerCase().includes(searchText) ||
        result.grade.toLowerCase().includes(searchText)
    );

    const startIndex = (currentPage - 1) * rowsPerPage;
    const paginatedData = filteredData.slice(
      startIndex,
      startIndex + rowsPerPage
    );

    paginatedData.forEach((result, idx) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td class="col-year">${result.year}</td>
        <td class="col-term">${result.term}</td>
        <td>${result.subject}</td>
        <td>${result.exam}</td>
        <td class="col-result">${result.result}</td>
        <td>${result.grade}</td>
        <td class="col-edit"><a href="#" class="edit-link" data-index="${startIndex + idx}">Edit</a></td>
        <td class="col-delete"><button class="btn-delete" style="font-size:1rem;">Delete</button></td>
        <td class="col-info">
          <img src="/public/assets/icons/info.png" alt="Info" class="info-icon" data-index="${startIndex + idx}" />
        </td>
      `;
      tbody.appendChild(tr);
    });

    table.appendChild(tbody);
    tableContainer.appendChild(table);

    renderPagination(filteredData.length, filter);

    tableContainer.querySelectorAll('.edit-link').forEach((link) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        const idx = parseInt(link.getAttribute('data-index'));
        const grade = allResults[idx];
        const form = document.getElementById('editForm');
        form.year.value = grade.year || '';
        form.term.value = grade.term || '';
        form.subject.value = grade.subject || '';
        form.exam.value = grade.exam || '';
        form.result.value = grade.result || '';
        form.grade.value = grade.grade || '';
        overlay.style.display = 'flex';
        form.dataset.editIndex = idx;
      });
    });

    tableContainer.querySelectorAll('.info-icon').forEach((icon) => {
      icon.addEventListener('click', function (e) {
        e.preventDefault();
        const idx = parseInt(icon.getAttribute('data-index'));
        const grade = allResults[idx];
        const form = document.getElementById('editForm');
        form.year.value = grade.year || '';
        form.term.value = grade.term || '';
        form.subject.value = grade.subject || '';
        form.exam.value = grade.exam || '';
        form.result.value = grade.result || '';
        form.grade.value = grade.grade || '';
        overlay.style.display = 'flex';
        form.dataset.editIndex = idx;
      });
    });

    let deleteIndex = null;

    tableContainer.querySelectorAll('.btn-delete').forEach((btn, i) => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        deleteIndex = (currentPage - 1) * rowsPerPage + i;
        deleteOverlay.style.display = 'flex';
      });
    });
  }

  function renderPagination(totalRows, filter) {
    paginationContainer.innerHTML = '';
    const totalPages = Math.min(8, Math.ceil(totalRows / rowsPerPage));
    if (totalPages <= 1) return;

    const createButton = (label, disabled, onClick) => {
      const btn = document.createElement('button');
      btn.textContent = label;
      btn.disabled = disabled;
      btn.className = 'pagination-btn';
      btn.onclick = onClick;
      return btn;
    };

    paginationContainer.appendChild(
      createButton('<<', currentPage === 1, () => {
        currentPage = 1;
        buildTable(allResults, searchInput.value);
      })
    );

    paginationContainer.appendChild(
      createButton('<', currentPage === 1, () => {
        currentPage--;
        buildTable(allResults, searchInput.value);
      })
    );

    for (let i = 1; i <= totalPages; i++) {
      paginationContainer.appendChild(
        createButton(i, i === currentPage, () => {
          currentPage = i;
          buildTable(allResults, searchInput.value);
        })
      );
    }

    paginationContainer.appendChild(
      createButton('>', currentPage === totalPages, () => {
        currentPage++;
        buildTable(allResults, searchInput.value);
      })
    );

    paginationContainer.appendChild(
      createButton('>>', currentPage === totalPages, () => {
        currentPage = totalPages;
        buildTable(allResults, searchInput.value);
      })
    );
  }

  fetch('../script/api/results.json')
    .then((response) => response.json())
    .then((data) => {
      console.log('Loaded data:', data);
      console.log('selectedStudentId:', studentId);
      const studentResults = data.find((r) => r.studentId === studentId);
      console.log('studentResults:', studentResults);
      allResults = studentResults ? studentResults.results : [];
      buildTable(allResults);
    })
    .catch((err) => {
      tableContainer.innerHTML = '<p>Could not load results data.</p>';
    });

  const overlay = document.createElement('div');
  overlay.id = 'editOverlay';
  overlay.style.display = 'none';
  overlay.innerHTML = `
    <div class="edit-modal">
      <h2>Edit Grade</h2>
      <form id="editForm" class="edit-form-grid">
        <label class="edit-form-label">Year<br><input name="year" required></label>
        <label class="edit-form-label">Term<br><input name="term" required></label>
        <label class="edit-form-label">Subject<br><input name="subject" required></label>
        <label class="edit-form-label">Exam<br><input name="exam" required></label>
        <label class="edit-form-label">Result<br><input name="result" type="number" required></label>
        <label class="edit-form-label">Grade<br><input name="grade" required></label>
        <div class="edit-form-actions">
          <button type="submit" class="btn btn-update">Update</button>
          <button type="button" class="btn btn-secondary" id="cancelEditBtn">Cancel</button>
          <button type="button" class="btn-delete-confirm edit-form-delete-mobile" id="mobileDeleteBtn">Delete</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(overlay);

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      overlay.style.display = 'none';
    }
  });

  document.getElementById('cancelEditBtn').onclick = () => {
    overlay.style.display = 'none';
  };

  document.getElementById('editForm').onsubmit = function (e) {
    e.preventDefault();
    const idx = parseInt(this.dataset.editIndex);
    allResults[idx] = {
      year: this.year.value,
      term: this.term.value,
      subject: this.subject.value,
      exam: this.exam.value,
      result: this.result.value,
      grade: this.grade.value,
    };
    overlay.style.display = 'none';
    buildTable(allResults, searchInput.value);
  };

  const deleteOverlay = document.createElement('div');
  deleteOverlay.id = 'deleteOverlay';
  deleteOverlay.style.display = 'none';
  deleteOverlay.innerHTML = `
    <div class="edit-modal">
      <h2 class="edit-form-title">Delete this student's results?</h2>
      <p>Are you sure you want to delete this student's selected results?</p
      <p>This action is permanent and cannot be undone.</p>
      <div class="edit-form-actions">
        <button type="button" class="btn-delete-confirm" id="confirmDeleteBtn">Yes, delete results</button>
        <button type="button" class="btn btn-secondary" id="cancelDeleteBtn">Cancel</button>
      </div>
    </div>
  `;
  document.body.appendChild(deleteOverlay);

  document.getElementById('confirmDeleteBtn').onclick = function () {
    if (deleteIndex !== null) {
      allResults.splice(deleteIndex, 1);
      buildTable(allResults, searchInput.value);
      deleteOverlay.style.display = 'none';
      deleteIndex = null;
    }
  };

  document.getElementById('cancelDeleteBtn').onclick = function () {
    deleteOverlay.style.display = 'none';
    deleteIndex = null;
  };

  deleteOverlay.addEventListener('click', function (e) {
    if (e.target === deleteOverlay) {
      deleteOverlay.style.display = 'none';
      deleteIndex = null;
    }
  });

  document.getElementById('mobileDeleteBtn').onclick = function () {
    overlay.style.display = 'none';
    deleteOverlay.style.display = 'flex';
  };
});
