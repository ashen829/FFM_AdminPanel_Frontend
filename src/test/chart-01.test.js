// chart-01.test.js
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Construct the path to the HTML file
const htmlFilePath = path.resolve(__dirname, '../partials/chart-01.html');

// Read the HTML file synchronously with UTF-8 encoding
const html = fs.readFileSync(htmlFilePath, 'utf-8');

// Define the test suite
describe('Chart component', () => {
  let dom;
  let container;

  // Initialize the DOM and container before each test
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    container = dom.window.document.body;
  });

    // Test case 1: Check if Total Revenue section is rendered correctly
    test('Total Revenue section is rendered correctly', () => {
      const totalRevenueElement = container.querySelector('.font-semibold.text-primary');
      expect(totalRevenueElement.textContent).toBe('Total Revenue');
    });
  
    // Test case 2: Check if Total Sales section is rendered correctly
    test('Total Sales section is rendered correctly', () => {
      const totalSalesElement = container.querySelector('.font-semibold.text-secondary');
      expect(totalSalesElement.textContent).toBe('Total Sales');
    });

    
});
