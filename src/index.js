import './style.css';
import home from './home.js';
import menu from './menu.js';


const page = (() => {
    const navBar = document.createElement('div');
    navBar.id = 'nav-bar'
    const content = document.createElement('div');
    content.id = 'content';

    const homeButton = document.createElement('button');
    homeButton.type = 'button';
    homeButton.textContent = 'Home';
    homeButton.addEventListener('click', () => {
        content.innerHTML = '';
        home();
    });
    navBar.appendChild(homeButton);

    document.body.appendChild(navBar);
    document.body.appendChild(content);
})();

home()
menu()