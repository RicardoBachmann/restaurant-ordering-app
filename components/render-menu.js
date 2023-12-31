const menuEl = document.getElementById("menu");

export function renderMenu(menu) {
  menu.forEach(function (item) {
    menuEl.innerHTML += `
        <div class="menu-item">
            <div class="menu-item-icon">${item.emoji}</div>
              <div class="menu-item-info">
                <div class="menu-item-name">${item.name}</div>
                <div class="menu-item-ingredients">${item.ingredients.join(
                  ", "
                )}</div>
                <div class="menu-item-price">$${item.price}</div>
                </div>
                <button class="add-item-btn">+</button>
        </div>
    
    `;
  });
}
