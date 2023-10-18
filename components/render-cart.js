const cardEl = document.getElementById("cart");

const cart = [];

export function renderCart(menu, itemId) {
  cardEl.innerHTML = `
        <h3>Your order:</h3>
        <div class="cart-items"></div>
        <hr />
            <div class="cart-total">
                <div class="cart-total">Total price:</div>
            </div>
        <button class="confirm-btn">Complete order</button>
    `;

  cart.push(itemId);
  cartTotal += menu[itemId].price;

  console.log(itemId);
}

function renderCartItems() {
  33;
}
