//menu.js
function createMenuItem(name, desc, priceS, priceM, priceL) {
  return {
    name: name,
    desc: desc,
    priceS: priceS,
    priceM: priceM,
    priceL: priceL
  }
}

const menuItems = [
  createMenuItem(
    "The Soprano",
    "Buffalo Mozzarella, Prosciutto, Shredded Gabagool and our legendary tomato gravy. Oh, Madone",
    "14.99",
    "18.99",
    "22.99"),
  createMenuItem(
    "The Goodfella",
    "Sundried tomatoes, thinly sliced garlic, hot italian sausage and dusting of parmegianno reggiano.",
    "15.99",
    "19.99",
    "23.99"
    ),
  createMenuItem(
    "The Godfather",
    "Red wine infused tomato sauce, fresh mozzarella, extra virgin olive oil and our signature mini beef meatballs. It's an offer you can't refuse",
    "16.99",
    "20.99",
    "24.99"
  ),
  createMenuItem(
    "The Donnie Brasco",
    "Red Pepper, Shrimp, Pepperoni and a dusting of parmegianno reggianno. Capeesh?",
    "15.99",
    "19.99",
    "23.99"
  ),
  createMenuItem(
    "The Godfather Part II",
    "Arguably the greatest pizza ever made. Shredded pepperoni, mushrooms from the can, green peppers and chopped bacon.",
    "13.99",
    "17.99",
    "21.99"
  ),
  createMenuItem(
    "The Goncharov",
    "The best pizza you've never heard of. Russian stewed beef, mushrooms, basil and a drizzling of fresh cream on top of light mozzarella and our signature tomatoe sauce. Worth killing for.",
    "39.99",
    "43.99",
    "47.99"
  )
];

function renderMenu() {
  const main = document.getElementById('main');
  const menu_main = document.createElement('div');
  menu_main.setAttribute('id', 'menu-main');
  menuItems.forEach(function(item) {
    let menu_item = document.createElement('div');
    menu_item.classList.add('menu-item');
    
      let itemh2 = document.createElement('h2');
      itemh2.classList.add('itemName');
      itemh2.textContent = item.name;
      menu_item.appendChild(itemh2);
      
      let itemicon = document.createElement('img');
      if (item.name == "The Goncharov") {
        itemicon.src = "images/clock.png";
      } else {
        itemicon.src = "images/pizza-icon.png";
        itemicon.classList.add('clock');
        itemicon.style.width = "64px";
      }
      menu_item.appendChild(itemicon);
      
      let itemDesc = document.createElement('h3');
      itemDesc.classList.add('itemDescription');
      itemDesc.textContent = item.desc;
      menu_item.appendChild(itemDesc);
      
      let itemPriceS = document.createElement('h3');
      itemPriceS.classList.add('itemPrice');
      itemPriceS.textContent = "S - " + item.priceS;
      menu_item.appendChild(itemPriceS);
      
      let itemPriceM = document.createElement('h3');
      itemPriceM.classList.add('itemPrice');
      itemPriceM.textContent = "M - " + item.priceM;
      menu_item.appendChild(itemPriceM);
      
      let itemPriceL = document.createElement('h3');
      itemPriceL.classList.add('itemPrice');
      itemPriceL.textContent = "L - " + item.priceL;
      menu_item.appendChild(itemPriceL);
    menu_main.appendChild(menu_item);
  });
  main.appendChild(menu_main);
}

export default renderMenu;
/*
            <h2 class="itemName">The Godfather Part II</h2>
            <img src="images/pizza-icon.png">
            <h3 class="itemDescription">Arguably the greatest pizza ever made. Shredded pepperoni, mushrooms from the can, green peppers and chopped bacon.</h3>
            <h3 class="itemPrice">S - 13.99</h3>
            <h3 class="itemPrice">M - 17.99</h3>
            <h3 class="itemPrice">L - 21.99</h3>
          </div>
          <div class="menu-item">
            <h2 class="itemName">The Goncharov</h2>
            <img src="images/clock.png" class="clock">
            <h3 class="itemDescription">The best pizza you've never heard of. Russian stewed beef, mushrooms, basil and a drizzling of fresh cream on top of light mozzarella and our signature tomatoe sauce. Worth killing for.</h3>
            <h3 class="itemPrice">S - 39.99</h3>
            <h3 class="itemPrice">M - 43.99</h3>
            <h3 class="itemPrice">L - 47.99</h3>
          </div>
        </div>
        */