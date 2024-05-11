const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, '../Tables-01.html'), 'utf8');

describe('Tables Page', () => {

    // Test for Pre-Loader
    test('Index page contains pre-loader', () => {
        document.documentElement.innerHTML = html;
        const preLoader = document.querySelector('include[src="./partials/preloader.html"]');
        expect(preLoader).toBeTruthy();
    });

    // Test for Breadcrumb Text Content
    test('Breadcrumb text content is correct', () => {
        document.documentElement.innerHTML = html;
        const breadcrumbText = document.querySelector('.flex.items-center.gap-2 li:last-child').textContent;
        expect(breadcrumbText).toBe('Top Products & Brands');
    });

    // Test for Table Section Existence
    test('Table section exists', () => {
        document.documentElement.innerHTML = html;
        const tableSection = document.querySelector('.flex.flex-col.gap-10');
        expect(tableSection).toBeTruthy();
    });

    // Test for Table One Existence
    test('Table One exists', () => {
        document.documentElement.innerHTML = html;
        const tableOne = document.querySelector('include[src="./partials/table-03.html"]');
        expect(tableOne).toBeTruthy();
    });

});
