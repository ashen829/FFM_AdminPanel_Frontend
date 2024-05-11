const fs = require('fs');
const path = require('path');


const html = fs.readFileSync(path.resolve(__dirname, '../profile.html'), 'utf8');


describe('Profile Page', () => {
    
  // Test for document title
  test('document title is "Profile"', () => {
    document.documentElement.innerHTML = html;
    expect(document.title).toBe('Profile');
  });

  // Test for elements existence
  test('page contains a profile section', () => {
    document.documentElement.innerHTML = html;
    const profileSection = document.querySelector('.overflow-hidden.rounded-sm.border.border-stroke.bg-white.shadow-default');
    expect(profileSection).toBeTruthy();
  });

// Test for specific contents
test('profile section contains the company name', () => {
    document.documentElement.innerHTML = html;
    const companyName = document.querySelector('.text-2xl.font-medium');
    expect(companyName.textContent.trim()).toBe('FashionFitsMe');
  });

  test('Profile Contains About Us', () => {
    document.documentElement.innerHTML = html;
    const aboutUsSection = document.querySelector('.max-w-180');
    const aboutUsTitle = aboutUsSection.querySelector('h4.font-medium');
    expect(aboutUsTitle.textContent.trim()).toBe('About Us');
});

  // Test for image source
  test('profile section contains the correct image source', () => {
    document.documentElement.innerHTML = html;
    const profileImage = document.querySelector('.rounded-3xl.my-6');
    expect(profileImage.src).toContain('images/imag1.jpg');
  });


});

describe('Social Media Icons Section', () => {
    let socialIcons;
  
    beforeEach(() => {
      document.documentElement.innerHTML = html;
      socialIcons = document.querySelectorAll('a[name="social-icon"]');
    });
  
    test('Each social icon has a valid href attribute', () => {
      socialIcons.forEach(icon => {
        expect(icon.getAttribute('href')).toMatch(/^#/);
      });
    });
  
    test('Each social icon has a valid aria-label attribute', () => {
      socialIcons.forEach(icon => {
        expect(icon.getAttribute('aria-label')).toBeDefined();
        expect(icon.getAttribute('aria-label')).not.toBe('');
      });
    });
  
    test('Each social icon has an associated SVG element', () => {
      socialIcons.forEach(icon => {
        const svgElement = icon.querySelector('svg');
        expect(svgElement).toBeTruthy();
      });
    });
  
  });
  
