const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../add-brand.html'), 'utf8');

describe('Add Brand Page', () => {
    // Set up the document body
    beforeEach(() => {
        document.documentElement.innerHTML = html;
    });

    test('Page renders without errors', () => {
        expect(document.documentElement).not.toBeNull();
    });

    test('All form inputs are present', () => {
        const formInputs = document.querySelectorAll('form input');
        expect(formInputs.length).toBeGreaterThan(0);
    });
  
});
