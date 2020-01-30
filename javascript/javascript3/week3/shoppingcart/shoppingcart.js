class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrency(currency) {
        fetch(`https://api.exchangerate-api.com/v4/latest/DKK`)
            .then(response => response.json())
            .then(data => {
                let currencyConvert = (data.rates[currency] * this.price).toFixed(2)
                console.log(`Price of ${this.name} in ${currency} is ${currencyConvert}`);
            })
    }

}


class ShoppingCart {
    constructor(products) {
        this.products = products;
    }

    addProduct(product) {
        this.products.push(product)
    }

    removeProduct(product) {
        const newArray = this.products.filter((item) => item.name !== product.name)
        this.products = newArray
    }

    searchProduct(productName) {
        const searchProductByName = this.products.filter(item => item.name === productName.name)
        console.log('Searched product', searchProductByName);
    }
    getTotal() {
        this.totalPrice = this.products
            .map(totalsum => totalsum.price)
            .reduce((total, value) => total + value, 0);
    }

    renderProducts() {
        this.products.forEach(showProducts => {
            const showProductsInHtml = document.querySelector('ul')
            const productsList = document.createElement('li')
            showProductsInHtml.appendChild(productsList)
            productsList.innerHTML = `${showProducts.name} - ${showProducts.price}`;
        })
        document.getElementById('totalprice').innerHTML = `Total price = ${this.totalPrice}`;
        document.getElementById('username').innerHTML = `Username: ${this.user}`;


        const inputValue = document.querySelector('#inputvalue');
        const productList = document.querySelector('#productlist')
        const modal = document.querySelector(".modal")
        const closeBtn = document.querySelector(".close-btn")
        const content = document.getElementById('content')

        const searchName = shoppingCart.products.filter(product => product.name)

        function renderInput() {
            searchName.forEach(item => {
                const searchOption = document.createElement('option')
                productList.appendChild(searchOption)
                searchOption.innerHTML = item.name;
            })
        }
        renderInput()


        inputValue.addEventListener('change', () => {     //source:https://medium.com/@nerdplusdog/a-how-to-guide-for-modal-boxes-with-javascript-html-and-css-6a49d063987e
            content.innerHTML = inputValue.value;
            modal.style.display = "block"
        })
        closeBtn.addEventListener('click', () => {
            modal.style.display = "none"
        })
        window.addEventListener('click', (e) => {
            if (e.target == modal) {
                modal.style.display = "none"
            }
        })

    }


    getUser() {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(response => response.json())
            .then(data => {
                this.user = data.username
                this.renderProducts()
            })
    }
}


const flatscreen = new Product('flat-screen', 5000);
const laptop = new Product('macbook', 4000);
const phone = new Product('iphone', 2500);
const microwave = new Product('microwave', 1500);
const ipod = new Product('ipod', 3400);
const earphones = new Product('earphone', 600);

phone.convertToCurrency('EUR')
laptop.convertToCurrency('USD')


const shoppingCart = new ShoppingCart([flatscreen]);

console.log(shoppingCart);
shoppingCart.addProduct(laptop)
shoppingCart.addProduct(phone)
shoppingCart.addProduct(microwave)
shoppingCart.addProduct(ipod)
shoppingCart.addProduct(earphones)
shoppingCart.removeProduct(laptop)
shoppingCart.getTotal()
shoppingCart.searchProduct(phone)
shoppingCart.getUser()



// AED	UAE Dirham	
// ARS	Argentine Peso	
// AUD	Australian Dollar	
// BGN	Bulgarian Lev	
// BRL	Brazilian Real	
// BSD	Bahamian Dollar	
// CAD	Canadian Dollar	
// CHF	Swiss Franc	
// CLP	Chilean Peso	
// CNY	Chinese Renminbi	
// COP	Colombian Peso	
// CZK	Czech Koruna	
// DKK	Danish Krone	
// DOP	Dominican Peso	
// EGP	Egyptian Pound	
// EUR	Euro	
// FJD	Fiji Dollar	
// GBP	Pound Sterling	 
// GTQ	Guatemalan Quetzal	
// HKD	Hong Kong Dollar	
// HRK	Croatian Kuna	
// HUF	Hungarian Forint	
// IDR	Indonesian Rupiah	
// ILS	Israeli Shekel	
// INR	Indian Rupee	
// ISK	Icelandic Krona	
// JPY	Japanese Yen	
// KRW	South Korean Won	
// KZT	Kazakhstani Tenge
// MXN	Mexican Peso	
// MYR	Malaysian Ringgit	
// NOK	Norwegian Krone	
// NZD	New Zealand Dollar	
// PAB	Panamanian Balboa	
// PEN	Peruvian Nuevo Sol	
// PHP	Philippine Peso	
// PKR	Pakistani Rupee	
// PLN	Polish Zloty	
// PYG	Paraguayan Guarani	
// RON	Romanian Leu	
// RUB	Russian Ruble	
// SAR	Saudi Riyal	 
// SEK	Swedish Krona	
// SGD	Singapore Dollar
// THB	Thai Baht	
// TRY	Turkish Lira	
// TWD	New Taiwan Dollar	
// UAH	Ukrainian Hryvnia	
// USD	US Dollar	 
// UYU	Uruguayan Peso	
// ZAR	South African Rand	
