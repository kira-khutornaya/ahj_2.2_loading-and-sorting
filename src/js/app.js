import response from './response';
import Table from './Table';

const table = new Table(response);
table.showTable();

const data = JSON.parse(response);
const fields = Object.keys(data[0]);
let currentValue = 0;
let order = -1;

setInterval(() => {
  order *= -1;
  table.sort(fields[currentValue], order);

  if (order === -1) {
    if (currentValue !== fields.length - 1) currentValue += 1;
    else currentValue = 0;
  }
}, 2000);
