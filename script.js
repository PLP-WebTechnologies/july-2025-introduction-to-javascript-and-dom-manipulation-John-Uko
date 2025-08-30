// -----------------------------------
// Part 1: Variable Declarations + Conditionals
// -----------------------------------
let cart = [];
let total = 0;

if (cart.length === 0) {
  console.log("Cart is empty. Start shopping!");
}

// -----------------------------------
// Part 2: Custom Functions
// -----------------------------------
function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  const cartTotal = document.getElementById("cart-total");

  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price}`;
    cartList.appendChild(li);
  });

  cartTotal.textContent = `Total: $${total}`;
}

// -----------------------------------
// Part 3: Loop Examples
// -----------------------------------

// Example 1: For loop
for (let i = 1; i <= 3; i++) {
  console.log(`Welcome! Special discount item #${i}`);
}

// Example 2: While loop
let countdown = 3;
while (countdown > 0) {
  console.log(`Hurry! Sale ends in ${countdown} days!`);
  countdown--;
}

// -----------------------------------
// Part 4: DOM Interactions
// -----------------------------------

// Change Hero text dynamically
document.querySelector(".hero h2").textContent = "Exclusive Deals Just for You ✨";

// Add a highlight effect to About section
document.querySelector(".about").style.borderLeft = "5px solid #222";

// Add event listener to footer
document.querySelector("footer").addEventListener("click", () => {
  alert("Thanks for visiting UrbanStyle Store!");
});
