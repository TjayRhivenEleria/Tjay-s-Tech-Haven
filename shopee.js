document.addEventListener("DOMContentLoaded", function () {
  const products = document.querySelectorAll(".product");
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const deleteButton = document.createElement("button"); 
  deleteButton.textContent = "Delete"; 
  let cart = [];

  // The cart UI
  function updateCartUI() {
    cartItems.innerHTML = ""; 
    let total = 0;
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - ${item.price.toFixed(2)}`;

      // Remove button for each item in the cart
      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
        cart.splice(index, 1); 
        updateCartUI();
      });
      li.appendChild(removeButton);

      cartItems.appendChild(li);
      total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
  }

  // Add to cart functionality
  products.forEach((product) => {
    const addButton = product.querySelector("button");
    const name = product.querySelector("h3").textContent;
    const price = parseFloat(product.querySelector("p").textContent.slice(1));

    addButton.addEventListener("click", function () {
      cart.push({ name, price });
      updateCartUI();
    });
  });

  // Place order button functionality
  const checkoutButton = document.querySelector("#cart button");
  checkoutButton.addEventListener("click", function () {
    alert("Your Order is On The Way!");
  });

  // Delete button functionality, Clear the cart array
  deleteButton.addEventListener("click", function () {
    cart = []; 
    updateCartUI(); 
  });


  const cartSection = document.getElementById("cart");
  cartSection.appendChild(deleteButton);
});
