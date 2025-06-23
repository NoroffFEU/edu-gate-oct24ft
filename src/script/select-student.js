let students = [];
let currentPage = 1;
const rowsPerPage = 7;

function buildTable(data, filter = '') {
  const tableContainer = document.getElementById('tableContainer');
  tableContainer.innerHTML = '';

  const table = document.createElement('table');
  table.id = 'dataTable';

  const thead = document.createElement('thead');
  thead.innerHTML = `
    <tr>
      <th>Student ID</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Year</th>
    </tr>`;
  table.appendChild(thead);

  const tbody = document.createElement('tbody');

  const searchText = filter.toLowerCase();

  const filteredData = data.filter(student =>
    student.studentId.toLowerCase().includes(searchText) ||
    student.firstName.toLowerCase().includes(searchText) ||
    student.lastName.toLowerCase().includes(searchText) ||
    String(student.year).includes(searchText)
  );

  const startIndex = (currentPage - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  paginatedData.forEach(student => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${student.studentId}</td>
      <td>${student.firstName}</td>
      <td>${student.lastName}</td>
      <td>${student.year}</td>
    `;
    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
  tableContainer.appendChild(table);

  renderPagination(filteredData.length, filter);
}

function renderPagination(totalRows, filter) {
  const paginationContainer = document.getElementById('paginationContainer');
  paginationContainer.innerHTML = '';

  const totalPages = Math.ceil(totalRows / rowsPerPage);
  if (totalPages <= 1) return;

  const createButton = (label, disabled, onClick) => {
    const btn = document.createElement('button');
    btn.textContent = label;
    btn.disabled = disabled;
    btn.onclick = onClick;
    return btn;
  };

  paginationContainer.appendChild(
    createButton('<<', currentPage === 1, () => {
      currentPage = 1;
      buildTable(students, filter);
    })
  );

  paginationContainer.appendChild(
    createButton('<', currentPage === 1, () => {
      currentPage--;
      buildTable(students, filter);
    })
  );

  const addPageButton = (page) => {
    paginationContainer.appendChild(
      createButton(page, page === currentPage, () => {
        currentPage = page;
        buildTable(students, filter);
      })
    );
  };

  if (currentPage <= 2) {
    addPageButton(1);
    addPageButton(2);

    if (totalPages > 4) {
      const dots = document.createElement('span');
      dots.textContent = '...';
      dots.style.margin = '0 5px';
      paginationContainer.appendChild(dots);
    }

    if (totalPages > 3) {
      addPageButton(totalPages - 1);
      addPageButton(totalPages);
    }

  } else {
    for (let i = 1; i <= totalPages; i++) {
      addPageButton(i);
    }
  }

  paginationContainer.appendChild(
    createButton('>', currentPage === totalPages, () => {
      currentPage++;
      buildTable(students, filter);
    })
  );

  paginationContainer.appendChild(
    createButton('>>', currentPage === totalPages, () => {
      currentPage = totalPages;
      buildTable(students, filter);
    })
  );
}

function createSearch() {
  const searchContainer = document.getElementById('searchContainer');
  searchContainer.innerHTML = '';

  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search for student...';
  input.id = 'searchInput';

  input.addEventListener('input', () => {
    currentPage = 1;
    buildTable(students, input.value);
  });

  searchContainer.appendChild(input);
}

function init() {
  fetch('../script/api/students.json')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      students = data;
      createSearch();
      buildTable(students);
    })
    .catch(error => {
      console.error('Error while fetching students.json:', error);
      const tableContainer = document.getElementById('tableContainer');
      tableContainer.innerHTML = '<p>Could not load student data.</p>';
    });
}

document.addEventListener('DOMContentLoaded', init);

