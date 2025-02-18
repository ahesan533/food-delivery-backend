// Simulated Data
const restaurants = [
    { id: 1, name: "Restaurant 1", menu: [{ name: "Pizza", price: 50 }, { name: "Pasta", price: 28 },{name: "Noodles",price: 25},{name: "Chicken Rice",price: 50},{name: "Cold Coffe",price: 20}] },
    { id: 2, name: "Restaurant 2", menu: [{ name: "Burger", price: 35 }, { name: "Fries", price: 35},{name: "Dhabeli",price: 10},{name: "chicken Tanduri",price: 80},{name: "Mazza",price: 20}] },

];

const cart = [];

// Login and Register Functions
function login() {
    alert("Logging in...");
}

function register() {
    alert("Registering...");
}

// View Menu
function viewMenu(restaurantId) {
    const restaurant = restaurants.find(r => r.id === restaurantId);
    document.getElementById("restaurant-name").textContent = restaurant.name;
    const menuContainer = document.getElementById("food-menu");
    menuContainer.innerHTML = "";
    
    restaurant.menu.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        const addButton = document.createElement("button");
        addButton.textContent = "Add to Cart";
        addButton.onclick = () => addToCart(item);
        li.appendChild(addButton);
        menuContainer.appendChild(li);
    });

    document.getElementById("restaurants").style.display = "none";
    document.getElementById("menu").style.display = "block";
}

// Back to Restaurants
function backToRestaurants() {
    document.getElementById("restaurants").style.display = "flex";
    document.getElementById("menu").style.display = "none";
}

// Add to Cart
function addToCart(item) {
    cart.push(item);
    updateCart();
}

// Update Cart
function updateCart() {
    const cartContainer = document.getElementById("cart-items");
    cartContainer.innerHTML = "";
    
    cart.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price}`;
        cartContainer.appendChild(li);
    });
}

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order placed successfully!");
        cart.length = 0;
        updateCart();
    }
}
