import renderHome from './home';
import renderMenu from './menu';
import renderContact from './contact';
import resetPage from './buttonControls';

function createNav() {
  const nav = document.createElement('div');
  nav.setAttribute('id', 'nav')
  const logo = document.createElement('span');
  logo.classList.add('h1');
  logo.innerHTML = '<span class="material-symbols-outlined h1"> local_pizza</span>Goncharov\'s';
  nav.appendChild(logo);
  
  const buttons = document.createElement('div');
  buttons.classList.add('buttons-main');
    const homeButton = document.createElement('span');
    homeButton.classList.add('nav-button');
    homeButton.innerHTML = '<a href="#scrollPosition">Home & Location</a>';
    homeButton.addEventListener('click', () => {
      setButton(homeButton);
      resetPage();
      renderHome();
    });
    
    const menuButton = document.createElement('span');
    menuButton.classList.add('nav-button');
    menuButton.innerHTML = '<a href="#scrollPosition">Menu</a>';
    menuButton.addEventListener('click', () => {
      setButton(menuButton);
      resetPage();
      renderMenu();
    });
    
    const contactButton = document.createElement('span');
    contactButton.classList.add('nav-button');
    contactButton.innerHTML = '<a href="#scrollPosition">Contact Us</a>';
    contactButton.addEventListener('click', () => {
      setButton(contactButton);
      resetPage();
      renderContact();
    });
    
  nav.appendChild(buttons);
  
  buttons.appendChild(homeButton);
  buttons.appendChild(menuButton);
  buttons.appendChild(contactButton);
  
  return nav;
}

function createFooter() {
  const footer = document.createElement('div');
  footer.setAttribute('id', 'footer');
  const logo2 = document.createElement('span');
  logo2.classList.add('h1');
  logo2.innerHTML = "Goncharov's";
  footer.appendChild(logo2);

  const address2 = document.createElement('div');
  address2.classList.add('address');
  address2.innerHTML = "Goncharov's <br />1108 St Louis<br />Windsor ON<br />519-555-3877<br />";
  footer.appendChild(address2);
  
  const navBottom = document.createElement('div');
  navBottom.classList.add('nav-bottom');
  navBottom.innerHTML = '<a href="#">HOME/LOCATIONS</a><br /><a href="#">MENU</a><br /><a href="#">CONTACT</a><br />';
  footer.appendChild(navBottom);
  
  return footer;
}

function createFooter2() {
  const footer2 = document.createElement('div');
  footer2.setAttribute('id', 'footer2');
  footer2.innerHTML = '&copy; 2023 Jeremy St Pierre <img src="images/github-mark.svg">';
  
  return footer2;
}

function createHeader() {
  const header = document.createElement('div');
  header.setAttribute('id', 'header');
  
  const scrollPosition = document.createElement('a');
  scrollPosition.setAttribute('id', 'scrollPosition');
  header.appendChild(scrollPosition);
  
  return header;
}

function createMain() {
  const main = document.createElement('div');
  main.setAttribute('id', 'main');
  
  return main;
}

function setButton (button) {
  const buttons = document.querySelectorAll(".nav-button");
  buttons.forEach((button) => {
    if (button !== this) {
      button.classList.remove("active");
    }
  });
  button.classList.add('active');
}

function initializeWebsite() {
  const page = document.getElementById("content");
  page.appendChild(createNav());
  page.appendChild(createHeader());
  page.appendChild(createMain());
  page.appendChild(createFooter());
  page.appendChild(createFooter2());
  
  renderHome();
}

function log() {
  console.log("this is a log from website.js");
}

export default initializeWebsite;