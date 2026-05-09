const API_URL =
  "http://localhost:5000/api";

const products = [

  {
    id: 1,
    name: "Nike Air Max",
    price: 180,
    description:
      "Premium running shoes for modern lifestyle.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
  },

  {
    id: 2,
    name: "Luxury Watch",
    price: 350,
    description:
      "Elegant luxury watch with premium finish.",
    image:
      "https://images.unsplash.com/photo-1523170335258-f5ed11844a49"
  },

  {
    id: 3,
    name: "Streetwear Hoodie",
    price: 120,
    description:
      "Comfortable hoodie for casual fashion.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
  },

  {
    id: 4,
    name: "Classic Sneakers",
    price: 140,
    description:
      "Modern sneakers with premium comfort.",
    image:
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
  }

];

const productsContainer =
  document.getElementById("productsContainer");

/* Display Products */

function displayProducts(items) {

  productsContainer.innerHTML = "";

  items.forEach(product => {

    productsContainer.innerHTML += `

      <div class="product-card">

        <img
          src="${product.image}"
          alt="${product.name}"
        />

        <div class="product-info">

          <h3>${product.name}</h3>

          <p>${product.description}</p>

          <div class="price">
            $${product.price}
          </div>

          <div class="buttons">

            <button
              class="save-btn"
              onclick="saveItem('${product.name}')"
            >
              Save
            </button>

            <button
              class="order-btn"
              onclick="orderItem('${product.name}')"
            >
              Order
            </button>

          </div>

        </div>

      </div>

    `;
  });
}

/* Initial Render */

displayProducts(products);

/* Search */

function searchProducts() {

  const searchValue =
    document
      .getElementById("searchInput")
      .value
      .toLowerCase();

  const filteredProducts =
    products.filter(product =>

      product.name
        .toLowerCase()
        .includes(searchValue)

    );

  displayProducts(filteredProducts);
}

/* Save Item API */

async function saveItem(productName) {

  try {

    const response =
      await fetch(`${API_URL}/saveditems`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          username: "Nasir",

          product: productName

        })

      });

    const data =
      await response.json();

    alert(data.message);

  } catch(error) {

    console.log(error);

    alert("Failed to save item");
  }
}

/* Order API */

async function orderItem(productName) {

  try {

    const response =
      await fetch(`${API_URL}/orders`, {

        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          username: "Nasir",

          product: productName,

          location: "Hyderabad"

        })

      });

    const data =
      await response.json();

    alert(data.message);

  } catch(error) {

    console.log(error);

    alert("Order failed");
  }
}
