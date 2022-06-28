var myModal = new bootstrap.Modal(document.getElementById("myModal"));
let price = document.getElementsByClassName("price");
price[0].innerHTML = "90000";
const productsName = document.getElementById("productsName");
const salesTax = document.getElementById("salesTax");
const totalPrice = document.getElementById("totalPrice");
const container = document.getElementById("container");

function showModal(i, m) {
  // myModal.show()
  console.log(i, m);
}
const renderList = () => {
  let selectedProduct = "";
  let price = "";
  let tax = "";

  products.map((item, index) => {
    selectedProduct += `<p>1 ${item.name}</p>`;
    price = `<p> Total : $ ${products
      .reduce((a, b) => a + parseFloat(b.price), 0)
      .toFixed(2)}</p>`;
    tax = `<p>Sales Tax: $ ${products
      .reduce((a, b) => a + parseFloat(b.tax), 0)
      .toFixed(2)}</p>`;
  });

  //   console.log(products);
  console.log(products.reduce((a, b) => a + parseFloat(b.price), 0));
  //   console.log(products.reduce((a, b) => a + parseFloat(b.tax), 0));
  productsName.innerHTML = selectedProduct;
  totalPrice.innerHTML = price;
  salesTax.innerHTML = tax;
};

let cardProduct = [];
const data = [
  {
    name: "Book",
    price: 12.49,
    isImport: false,
    exceptGoods: true,
  },
  {
    name: "Music CD",
    price: 14.99,
    isImport: false,
    exceptGoods: false,
  },
  {
    name: "Chocolate bar",
    price: 0.85,
    isImport: false,
    exceptGoods: true,
  },
  {
    name: "Imported box of chocolates",
    price: 10.0,
    isImport: true,
    exceptGoods: false,
  },
  {
    name: "Imported bottle of perfume",
    price: 47.5,
    isImport: true,
    exceptGoods: false,
  },
  {
    name: "Imported bottle of perfume",
    price: 47.5,
    isImport: true,
    exceptGoods: false,
  },
  {
    name: "Bottle of perfume",
    price: 18.99,
    isImport: false,
    exceptGoods: false,
  },
  {
    name: "Packet of headache pills",
    price: 9.75,
    isImport: false,
    exceptGoods: true,
  },
  {
    name: "Box of imported chocolates",
    price: 11.25,
    isImport: true,
    exceptGoods: false,
  },
];

data.map((item, index, arr) => {
  cardProduct += `<div class="col">
    <div class="card h-100">
      <div class="card-body">
        <h5 class="card-title name">${item.name}</h5>
        <p class="card-text price">$ ${item.price}</p>
        <a href="#" onclick="setProducts('${item.name}',${item.price},${item.isImport},${item.exceptGoods})" class="btn btn-primary">Add</a>
      </div>
    </div>
  </div>`;
});
container.innerHTML = cardProduct;

// var value = document.getElementById("theInput").innerHTML;
// console.log(value);

// console.log((Math.ceil((p * 1.15) / 0.05) * 0.05).toFixed(2))

const products = [];

function setProducts(n, p, i, e) {
  let taxproducts;
  if (i == true && e == false) {
    taxproducts = (Math.ceil((p * 1.15) / 0.05) * 0.05).toFixed(2);
  } else if (i == false && e == false) {
    taxproducts = (Math.ceil((p * 1.1) / 0.05) * 0.05).toFixed(2);
  } else if (i == true && e == true) {
    taxproducts = (Math.ceil((p * 1.05) / 0.05) * 0.05).toFixed(2);
  } else {
    taxproducts = p;
  }
  products.push({
    name: n,
    price: taxproducts,
    tax: (taxproducts - p).toFixed(2),
  });
  console.log(products);
  renderList();
}

renderList();
