const products = getAvailableProducts();
console.log(products);

function renderProducts(products) {

  const ulItems = document.querySelector(".products ul");

  for (let i = 0; i < products.length; i++) {
    let liItems = document.createElement("li");
    ulItems.appendChild(liItems);

    let ul = document.createElement("ul");
    liItems.appendChild(ul);

    let li = document.createElement("li");
    li.innerHTML = products[i].name;

    let li1 = document.createElement("li");
    li1.innerHTML = products[i].price;

    let li2 = document.createElement("li");
    li2.innerHTML = products[i].rating;

    let li3 = document.createElement("li");

    ul.append(li, li1, li2, li3); //appending all children of 'ul' at the same time

    let shippingUl = document.createElement("ul");
    li3.appendChild(shippingUl);

    for (let j = 0; j < products[i].shipsTo.length; j++) {
      //creating a new list for shipping countries by looping
      const ship = products[i].shipsTo[j];
      let shippingLi = document.createElement("li");
      shippingLi.innerHTML = ship;
      shippingUl.appendChild(shippingLi);
    }
  }
}

renderProducts(products);
