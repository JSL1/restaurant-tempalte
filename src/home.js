function renderHome() {
  const main = document.getElementById('main');
  const description = document.createElement('div');
  description.classList.add('description');
    
    const description_container = document.createElement('div');
    description_container.classList.add('description-container');
    
      let h2 = document.createElement('h2');
      h2.innerHTML = "Original wood-fired pizza";
      description_container.appendChild(h2);
      
      let icon = document.createElement('span');
      icon.classList.add('material-symbols-outlined');
      icon.classList.add('h1');
      icon.innerHTML = 'fireplace';
      description_container.appendChild(icon);
      
      let h2_2 = document.createElement('h2');
      h2_2.innerHTML = '<h2>est. 1972</h2>';
      description_container.appendChild(h2_2);
      
      let p_mid = document.createElement('div');
      p_mid.classList.add('p-mid');
      p_mid.innerHTML = "<h3>Goncharov's has been serving delicious pizza since 1972. Our family recipe is cooked to perfection in our iconic wood-fired oven. Unquestionably the best tasting, highest quality pizza or your money back. Come in to Goncharov's tonight!</h3>";
      description_container.appendChild(p_mid);
    
    description.appendChild(description_container);
    
  main.appendChild(description);
  
  const delivery = document.createElement('div');
  delivery.classList.add('delivery');
    
    let h3_delivery = document.createElement('h3');
    h3_delivery.innerHTML = '<span class="material-symbols-outlined">local_taxi</span>FAST, FREE DELIVERY! <span class="material-symbols-outlined">local_taxi</span>';
    delivery.appendChild(h3_delivery);
    
    let h4 = document.createElement('h4');
    h4.innerHTML = 'Just don\'t forget to tip the driver!';
    delivery.appendChild(h4);
  
  main.appendChild(delivery);
    
  const description_address = document.createElement('div');
  
  description_address.classList.add('description');
  description_address.classList.add('address');
  
    const address = document.createElement('address');
    address.classList.add('_address');
      
    description_address.appendChild(address);

      let line1 = document.createElement('h3');
      line1.innerHTML= "Goncharov's Original Wood-fired Pizza<br />";
      address.appendChild(line1);
      let line2 = document.createElement('h3');
      line2.innerHTML = "1108 St. Louis Street<br />";
      address.appendChild(line2);
      let line3 = document.createElement('h3');
      line3.innerHTML = "Windsor ON<br />";
      address.appendChild(line3);
      let line4 = document.createElement('h3');
      line4.innerHTML = "519-555-3877";
      address.appendChild(line4);
      
    description_address.appendChild(address);

    const pizza_location = document.createElement('div');
    pizza_location.setAttribute('id', 'pizza-location');
    
    description_address.appendChild(pizza_location);
    
    const oven_photo = document.createElement('div');
    oven_photo.setAttribute('id', 'oven-photo');
    
    description_address.appendChild(oven_photo);
  
  main.appendChild(description_address);

}

export default renderHome;

/*
        <div class="description">
          <div class="description-container">
            <h2>Original wood-fired pizza</h2>
            <span class="material-symbols-outlined h1">fireplace</span>
            <h2>est. 1972</h2>
            <div class="p-mid">
            <h3>Goncharov's has been serving delicious pizza since 1972. Our family recipe is cooked to perfection in our iconic wood-fired oven. Unquestionably the best tasting, highest quality pizza or your money back. Come in to Goncharov's tonight!</h3>
            </div>
          </div>
        </div>
        <div class="delivery">
          <h3>
            <span class="material-symbols-outlined">local_taxi</span>
            FAST, FREE DELIVERY!
            <span class="material-symbols-outlined">local_taxi</span>
          </h3>
          <h4>Just don't forget to tip the driver!</h4>
        </div>
        <div class="decription address">
          <address>
            <h3>Goncharov's Original Wood-fired Pizza</h3>
            <h3>1108 St. Louis Street</h3>
            <h3>Windsor ON</h3>
            <h3>519-555-3877</h3>
          </address>
          <div id="pizza-location">
            
          </div>
          <div id="oven-photo">
            
          </div>
        </div>
      </div>
*/