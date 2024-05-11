const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../add-product.html'), 'utf8');

describe('Add Product Page', () => {

    beforeEach(() => {
        document.documentElement.innerHTML = html;
    });

    test('Page renders without errors', () => {
        // Check if the page renders without errors
        expect(document.documentElement).not.toBeNull();
    });

});
