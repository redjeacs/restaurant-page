import createContactPage from "./contact";
import createRestaurantHomePage from "./home";
import createMenuPage from "./menu";

const createTabs = () => {
  const body = document.querySelector('body');
  const content = document.querySelector('#content');
  const header = document.createElement('header');
  const nav = document.createElement('nav');
  header.appendChild(nav);

  const homeBtn = document.createElement('button');
  homeBtn.id = 'home-btn';
  homeBtn.classList.add('tab');
  homeBtn.textContent = 'Home';
  const menuBtn = document.createElement('button');
  menuBtn.id = 'menu-btn';
  menuBtn.classList.add('tab');
  menuBtn.textContent = 'Menu';
  const contactBtn = document.createElement('button');
  contactBtn.id = 'contact-btn';
  contactBtn.classList.add('tab');
  contactBtn.textContent = 'Contact';

  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);

  body.appendChild(header);
  header.after(content);

  homeBtn.addEventListener('click', () => {
    clearContent();
    createRestaurantHomePage();
  })
  menuBtn.addEventListener('click', () => {
    clearContent();
    createMenuPage();
  })
  contactBtn.addEventListener('click', () => {
    clearContent();
    createContactPage();
  })
}

function clearContent() {
  const content = document.querySelector('#content');
  const pageContent = document.querySelector('.page-content');
  if(pageContent) {
    content.removeChild(pageContent);
  }
}
export default createTabs;