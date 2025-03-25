const lists = document.querySelector(".card-lists");
const AllProducts = document.querySelector(".all-products");
const quantity = document.createElement("span");
const searchInput = document.getElementById("search-input");
const ligthBtn = document.querySelector(".light");

function myFunction() {
  const element = document.body;
  element.classList.toggle("dark-mode");
}

fetch("products.json")
  .then((response) => response.json())
  .then((data) => {

    const products = data.products

    quantity.innerText = products.length;
    AllProducts.appendChild(quantity);

    products.forEach((item) => {
      const card = document.createElement("div");
      card.classList = "card";

      card.innerHTML = `
        <img src="${item.src}" alt="${item.name}" />
        <div class="card-infos">
          <p class="title">Name: ${item.name}</p>
          <div>
            <h3>Category: ${item.category}</h3>
            <p>Price: $${item.price}</p>
          </div>
          <p>${item.description}</p>
        </div>
      `;

      lists.appendChild(card);
    });

    searchInput.addEventListener("input", (e) => {
      const searchText = e.target.value.toLowerCase();
      const navbarSearch = document.querySelector(".search");

      let searchContent = document.querySelector(".search-content");
      if (!searchContent) {
        searchContent = document.createElement("div");
        searchContent.classList.add("search-content");
        navbarSearch.appendChild(searchContent);
      } else {
        searchContent.innerHTML = "";
      }

      const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchText)
      );

      console.log(filteredProducts);

      filteredProducts.forEach((search) => {
        const searchCard = document.createElement("div");
        searchCard.classList.add("search-card");

        searchCard.innerHTML = `
          <img src="${search.src}" alt="${search.name}" />
          <div class="search-nav-info">
            <p>${search.name}</p>
            <p>$${search.price}</p>
          </div>
        `;

        searchContent.appendChild(searchCard);
      });
    });
  })
  .catch((error) => console.error("Error fetching the products:", error));
