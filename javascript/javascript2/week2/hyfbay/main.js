console.log('Script loaded');

let products = getAvailableProducts();
console.log(products);


const ulItems = document.querySelector('.products ul');
console.log(ulItems);

function renderProducts(products) {
    ulItems.innerHTML = '';
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

        let button = document.createElement('button');
        button.innerText = 'Add to cart';
        button.addEventListener("click", function () {
            addProduct(products[i]);
        });

        ul.append(li, li1, li2, li3, button); //appending all children of 'ul' at the same time

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





//   searching for products
const search = document.querySelector('.search input');
search.addEventListener('input', () => {
    let searchValue = search.value;
    let searching = products.filter(product =>
        product.name.toUpperCase().includes(searchValue.toUpperCase()))
    renderProducts(searching);

});





//  Showing products that ships to country - optional
const countries = document.querySelector('.country select');
countries.addEventListener('change', () => {
    let countryValue = countries.value;
    let filteredProductsByCountry = products.filter(product => {
        let shipping = product.shipsTo.map(country => country.toLowerCase())
        return shipping.includes(countryValue);
    })
    renderProducts(filteredProductsByCountry);
});






// Sort the products - optional
const sort = document.querySelector('.sort select');

sort.addEventListener('change', () => {
    sortValue = sort.value;

    if (sortValue === 'cheap') {
        let lowToHigh = products.sort((a, b) => a.price - b.price);
        renderProducts(lowToHigh);
    }
    else if (sortValue === 'expensive') {
        let highToLow = products.sort((a, b) => b.price - a.price);
        renderProducts(highToLow);
    }
    else {
        let nameSort = products.sort((a, b) => {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        });
        renderProducts(nameSort);
    }
});



// Shopping cart - optional
const cart = document.querySelector('.products ul button');
let cartUl = document.querySelector('.cart ul');

function addProduct(product) {
    let newLi = document.createElement('li');
    cartUl.appendChild(newLi);

    newLi.innerHTML = `<div>${product.name}</div>
    <div>${product.price}</div>`
}




