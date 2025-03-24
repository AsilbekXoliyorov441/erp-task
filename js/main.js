const products = [
  {
    name: "Apple 1",
    id: 1,
    price: 1120,
    category: "iPhone",
    description: "Apple 1 is better phone with fast",
    src: "https://picsum.photos/200/300",
  },
  {
    name: "Apple 2",
    id: 2,
    price: 2220,
    category: "iPhone",
    description: "Apple 1 is better phone with fast",
    src: "https://picsum.photos/200/300",
  },
  {
    name: "Apple 3",
    id: 3,
    price: 3220,
    category: "iPhone",
    description: "Apple 1 is better phone with fast",
    src: "https://picsum.photos/200/300",
  },
  {
    name: "Apple 4",
    id: 4,
    price: 4220,
    category: "iPhone",
    description: "Apple 1 is better phone with fast",
    src: "https://picsum.photos/200/300",
  },
  {
    name: "Apple 5",
    id: 5,
    price: 5220,
    category: "iPhone",
    description: "Apple 1 is better phone with fast",
    src: "https://picsum.photos/200/300",
  },
  {
    name: "Apple 6",
    id: 6,
    price: 6220,
    category: "iPhone",
    description: "Apple 1 is better phone with fast",
    src: "https://picsum.photos/200/300",
  },
  {
    name: "Apple 7",
    id: 7,
    price: 7220,
    category: "iPhone",
    description: "Apple 1 is better phone with fast",
    src: "https://picsum.photos/200/300",
  },
  {
    name: "Apple 8",
    id: 8,
    price: 8220,
    category: "iPhone",
    description: "Apple 1 is better phone with fast",
    src: "https://picsum.photos/200/300",
  },
];

const lists = document.querySelector(".card-lists");

const AllProducts = document.querySelector(".all-products");

const quantity = document.createElement("span");

const searchInput = document.getElementById("search-input");

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

  // Eski qidiruv natijalarini tozalash
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
      <img src="${search.src}" alt="${search.title}" />
      <div class="search-nav-info">
          <p>${search.name}</p>
          <p>$${search.price}</p>
      </div>
    `;

    searchContent.appendChild(searchCard);
  });
});

