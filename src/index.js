import './style.css';
import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';

const page = (() => {
    // Page container constants
    const navBar = document.createElement('div');
    navBar.id = 'nav-bar'
    const content = document.createElement('div');
    content.id = 'content';

    // Home button
    const homeButton = document.createElement('button');
    homeButton.type = 'button';
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        content.innerHTML = '';
        home();
    });
    navBar.appendChild(homeButton);

    // Menu button
    const menuButton = document.createElement('button');
    menuButton.type = 'button';
    menuButton.textContent = 'Menu';
    menuButton.addEventListener('click', () => {
        content.innerHTML = '';
        menu();
    });
    navBar.appendChild(menuButton);

    // Contact button
    const contactButton = document.createElement('button');
    contactButton.type = 'button';
    contactButton.textContent = 'Contact';
    contactButton.addEventListener('click', () => {
        content.innerHTML = '';
        contact();
    });
    navBar.appendChild(contactButton);

    // Add content to page
    document.body.appendChild(navBar);
    document.body.appendChild(content);
})();

menu();