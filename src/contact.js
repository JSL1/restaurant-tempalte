//contact.js
function renderContact() {
  
  const main = document.getElementById('main');
  const contact_main = document.createElement('div');
  contact_main.setAttribute('id', 'contact-main');
  main.appendChild(contact_main);
  
  let h2 = document.createElement('h2');
  h2.textContent = 'Get in Contact with us';
  contact_main.appendChild(h2);
  
  let h3 = document.createElement('h3');
  h3.textContent = 'Your business and feedback are greatly appreciated.';
  contact_main.appendChild(h3);
  
  const form = document.createElement('form');
  form.setAttribute('action', '#');
  form.setAttribute('method', 'post');
  form.setAttribute('id', 'contact-form');
    
    contact_main.appendChild(form);
  
    const nameLabel = document.createElement('label');
    //nameLabel.setAttribute('for', 'name');
    nameLabel.textContent = "Your name:";
    form.appendChild(nameLabel);
  
    const nameInput = document.createElement('input');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('name', 'name');
    nameInput.classList.add('textbox-sm');
    nameInput.setAttribute('placeholder', 'John Doe');
    form.appendChild(nameInput);
    
    const emailLabel = document.createElement('p');
    //emailLabel.setAttribute('for', 'email');
    emailLabel.textContent = "Your email:";
    form.appendChild(emailLabel);
  
    const emailInput = document.createElement('input');
    emailInput.setAttribute('type', 'email');
    emailInput.setAttribute('name', 'email');
    emailInput.classList.add('textbox-sm');
    emailInput.setAttribute('placeholder', 'JohnDoe@hotmales.com');
    form.appendChild(emailInput);
    
    const cmntLabel = document.createElement('p');
    //cmntLabel.setAttribute('for', 'text');
    cmntLabel.textContent = "Your comments:";
    form.appendChild(cmntLabel);
  
    const cmntInput = document.createElement('input');
    cmntInput.setAttribute('type', 'text');
    cmntInput.setAttribute('name', 'comment');
    cmntInput.classList.add('textbox-l');
    cmntInput.setAttribute('placeholder', 'Enter your feedback here');
    form.appendChild(cmntInput);
    
    const submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('name', 'submit');
    submit.classList.add('button');
    form.appendChild(submit);
}

export default renderContact;

/*
<div id="contact-main">
          <h2>Get in contact with us</h2>
          <h3>Your business and feedback are greatly appreciated.</h3>
          <form action="#" method="post" id="contact-form">
            <label for="name">Your name:</label>
            <input type="text" name="name" class="textbox-sm" placeholder="John Doe">
            <label for="email">Your email:</label>
            <input type="email" name="email" placeholder="johndoe@hotmales.com" class="textbox-sm">
            <label for="text">Your comments:</label>
            <input type="text" name="comment" class="textbox-l" size="500">
            <input type="submit" name="submit" class="button">
          </form>
        </div>
        */