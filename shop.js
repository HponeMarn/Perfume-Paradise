   // shopping
const cartCountElement = document.getElementById("cartCount");
const addToCartButton = document.querySelectorAll(".cart-btn");

let cartCount = 0;

addToCartButton.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
    });
});

// price div add mini cart 
  let cart = [];

  function addToCartPrice(name, price,id) {
    cart.push({ name, price, id });
    updateCart();
  }

  function addToCart(button) {
    const card = button.closest('.card-container');
    const message = card.querySelector('.pink-message');
    const price=card.querySelector('.price-cart');

    const name = card.querySelector(".card-title").innerText;
    const priceText = card.querySelector(".price").innerText;
    const prices = parseFloat(priceText.replace("$", ""));

    const id = card.getAttribute("data-product-id");
  
    price.style.display='none';
    message.style.display = 'block';
    message.style.opacity = '1';
    // Optional: Reset animation if clicked twice quickly
    message.style.animation = 'none';
    message.offsetHeight; // trigger reflow
    message.style.animation = '';
      setTimeout(() => {
      message.style.display = 'none';
    }, 2500);
    addToCartPrice(name,prices,id);

    
  }

  function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const totalAmount = document.getElementById("totalAmount");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
      total += item.price;
      cartItems.innerHTML += `
        <div class="cart-item">
          <span>${item.name}</span>
          <span>$${item.price.toFixed(2)}</span>
          <button class="remove-btn" onclick="removeFromCart(${index})">×</button>
        </div>
      `;
    });

    totalAmount.innerText = `Total: $${total.toFixed(2)}`;
    cartCount.innerText = cart.length;
  }

  function removeFromCart(index) {
     cart.splice(index, 1);
    updateCart();

    const card = document.querySelector(`[data-product-id="${removed.id}"]`);
    if (card) {
      // const card = button.closest('.card-container');
      const messagee = card.querySelector('.pink-message');
      const pricee=card.querySelector('.price-cart');

      messagee.style.display='none';
      pricee.style.display = 'inline-block';
      pricee.style.opacity = '1';
    }
  }

// mini cart open offf 
  function toggleCart() {
    const miniCart = document.getElementById("miniCart");
    miniCart.style.display = miniCart.style.display === "block" ? "none" : "block";
  }

  function closeMiniCart() {
    document.getElementById("miniCart").style.display = "none";
  }

  function checkout() {
    alert("Proceeding to checkout!");
  }
  

