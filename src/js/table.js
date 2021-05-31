export default class Table {
  constructor(json) {
    this.response = JSON.parse(json);
    this.table = document.createElement('table');
  }

  createTable(data) {
    this.table.innerHTML = '';

    this.titles = ['id', 'title', 'year', 'imdb']; // Object.keys(data[0]);

    const firstRow = document.createElement('tr');
    firstRow.classList.add('row_first');
    this.table.appendChild(firstRow);

    this.titles.forEach((title) => {
      firstRow.innerHTML += `<th class="${title}">${title}</th>`;
      return firstRow;
    });

    data.forEach((el) => {
      this.table.innerHTML += `
        <tr class="row" data-id="${el.id}" data-title="${el.title}" data-year="${el.year}" data-imdb="${el.imdb}">
          <td>${el.id}</td>
          <td>${el.title}</td>
          <td>(${el.year})</td>
          <td>imdb: ${(+el.imdb).toFixed(2)}</td>
        </tr>
      `;
    });
  }

  showTable() {
    this.createTable(this.response);
    const container = document.querySelector('.container');
    container.appendChild(this.table);
  }

  sort(property, order = 1) {
    const rowsArr = [...document.querySelectorAll(`tr[data-${property}]`)];

    rowsArr.sort((a, b) => {
      let a1; let
        b1;
      if (Number(rowsArr[0].dataset[property])) {
        a1 = Number(a.dataset[property]);
        b1 = Number(b.dataset[property]);
      } else {
        a1 = a.dataset[property];
        b1 = b.dataset[property];
      }

      if (a1 > b1) return order;
      if (a1 < b1) return -1 * order;
      return 0;
    });

    this.createTable(rowsArr.map((item) => item.dataset));

    const currentColumn = this.table.querySelector(`th.${property}`);
    if (order === 1) currentColumn.classList.add('arrow_down');
    else currentColumn.classList.add('arrow_up');

    return rowsArr;
  }
}
