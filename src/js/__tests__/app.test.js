import Table from '../Table';
import response from '../response';

describe('Table:', () => {
  describe('createTable method', () => {
    const table = new Table(response);
    table.createTable(table.response);

    test('should create an array with titles of table', () => {
      expect(table.titles).toMatchObject(['id', 'title', 'year', 'imdb']);
    });

    test('should add a new table from response data', () => {
      const tr = table.table.querySelectorAll('tr');
      const td = table.table.querySelectorAll('td');
      const th = table.table.querySelectorAll('th');

      expect(tr.length).toBe(6);
      expect(th.length).toBe(4);
      expect(td.length).toBe(20);
    });
  });
  // the sort method had tested in the next task (№2.3)
});
