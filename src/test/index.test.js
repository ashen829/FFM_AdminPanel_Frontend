const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync(path.resolve(__dirname, '../index.html'));

describe( 'Index Page',() => {

    //Test for Pre-Loader
    test('Index page contains pre-loader', () => {
        document.documentElement.innerHTML = html;
        const preLoader = document.querySelector('include[src="./partials/preloader.html"]');
        expect(preLoader).toBeTruthy();
    });

    //Test for Side Bar
    test('Index page consists side bar', () => {
        document.documentElement.innerHTML = html;
        const sideBar = document.querySelector('include[src="./partials/sidebar.html"]');
        expect(sideBar).toBeTruthy();
    });

    //Test for Header
    test('Index page consists header', () => {
        document.documentElement.innerHTML = html;
        const sideBar = document.querySelector('include[src="./partials/header.html"]');
        expect(sideBar).toBeTruthy();
    });

    //Test for card item
    test('Check the number of card items', () => {
        const cardItems = document.querySelectorAll('.grid-cols-1 > .rounded-sm');
        expect(cardItems.length).toBe(4);
    });

    //Test for card item
    test('Card item contains price, total views, and percentage change', () => {
        document.documentElement.innerHTML = html;
        const priceElement = document.querySelector('.text-title-md');
        const totalViewsElement = document.querySelector('.font-medium');
        const percentageChangeElement = document.querySelector('.text-sm');
        
        expect(priceElement).toBeTruthy();
        expect(totalViewsElement).toBeTruthy();
        expect(percentageChangeElement).toBeTruthy();
    });
    

    

});
