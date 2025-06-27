document.addEventListener('DOMContentLoaded', function () {
  const tableContainer = document.getElementById('tableContainer');

  function gradeToNumber(grade) {
    const map = { A: 5, B: 4, C: 3, D: 2, E: 1, F: 0 };
    return map[grade?.toUpperCase()] ?? 0;
  }

  Promise.all([
    fetch('../script/api/results.json').then((res) => res.json()),
    fetch('../script/api/students.json').then((res) => res.json()),
  ])
    .then(([resultsData, studentsData]) => {
      const studentInfoMap = {};
      studentsData.forEach((s) => {
        studentInfoMap[s.studentId] = s;
      });

      function renderTable(subjectFilter = '') {
        const filter = subjectFilter.trim().toLowerCase();

        let allEntries = [];
        resultsData.forEach((student) => {
          if (!student.results || !student.results.length) return;
          student.results.forEach((result) => {
            allEntries.push({
              studentId: student.studentId,
              firstName: studentInfoMap[student.studentId]?.firstName || '',
              lastName: studentInfoMap[student.studentId]?.lastName || '',
              year: studentInfoMap[student.studentId]?.year || '',
              subject: result.subject || '',
              grade: result.grade || '',
              gradeNum: gradeToNumber(result.grade),
            });
          });
        });

        if (filter) {
          allEntries = allEntries.filter((entry) =>
            entry.subject.toLowerCase().includes(filter)
          );
        }

        const studentMap = {};
        allEntries.forEach((entry) => {
          const key = entry.studentId + '|' + entry.subject.toLowerCase();
          if (!studentMap[key] || entry.gradeNum > studentMap[key].gradeNum) {
            studentMap[key] = entry;
          }
        });

        const topStudents = Object.values(studentMap)
          .sort((a, b) => b.gradeNum - a.gradeNum)
          .slice(0, 10);

        const table = document.createElement('table');
        table.id = 'dataTable';
        table.innerHTML = `
          <thead>
            <tr>
              <th>
                <span class="th-mobile"> </span>
                <span class="th-desktop">Student ID</span>
              </th>
              <th>
                <span class="th-mobile"> </span>
                <span class="th-desktop">First name</span>
              </th>
              <th>
                <span class="th-mobile">L. Name</span>
                <span class="th-desktop">Last name</span>
              </th>
              <th>
                <span class="th-mobile">Year</span>
                <span class="th-desktop">Year</span>
              </th>
              <th>
                <span class="th-mobile">Subject</span>
                <span class="th-desktop">Subject</span>
              </th>
              <th>
                <span class="th-mobile">Grade</span>
                <span class="th-desktop">Grade</span>
              </th>
            </tr>
          </thead>
          <tbody>
            ${topStudents
              .map(
                (s) => `
              <tr>
                <td>${s.studentId}</td>
                <td>${s.firstName}</td>
                <td>${s.lastName}</td>
                <td>${s.year}</td>
                <td>${s.subject}</td>
                <td>${s.grade}</td>
              </tr>
            `
              )
              .join('')}
          </tbody>
        `;
        tableContainer.innerHTML = '';
        tableContainer.appendChild(table);
      }

      function createSearch(onSearch) {
        const searchContainer = document.getElementById('searchContainer');
        searchContainer.innerHTML = '';

        const searchWrapper = document.createElement('div');
        searchWrapper.className = 'search-wrapper';

        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = 'Search by subject...';
        input.id = 'searchInput';

        const searchBtn = document.createElement('button');
        searchBtn.type = 'button';
        searchBtn.className = 'search-btn';
        searchBtn.innerHTML = `<img src="/public/assets/icons/search.png" alt="Search" />`;

        searchBtn.addEventListener('click', () => {
          onSearch(input.value);
        });

        input.addEventListener('input', () => {
          onSearch(input.value);
        });

        searchWrapper.appendChild(input);
        searchWrapper.appendChild(searchBtn);
        searchContainer.appendChild(searchWrapper);
      }

      createSearch(renderTable);
      renderTable();
    })
    .catch(() => {
      tableContainer.innerHTML = '<p>Could not load student data.</p>';
    });
});
