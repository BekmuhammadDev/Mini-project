let shop = JSON.parse(localStorage.getItem("shop")) ?
JSON.parse(localStorage.getItem("shop")):

[{
    _id: 1, name:"pencil", color:["green","yellow","black"], price:1000,},
    {
    _id: 2, name:"book", color:["green","yellow","black"], price:1000,},
    {
    _id: 3, name:"pen", color:["green","yellow","black"], price:1000,},
    {
    _id: 4, name:"papper", color:["green","yellow","black"], price:1000,},
    {
    _id: 5, name:"marker", color:["green","yellow","black"], price:1000,},
    {
    _id: 6, name:"eraser", color:["green","yellow","black"], price:1000,}

];

localStorage.setItem("shop", JSON.stringify(shop))

function displayProduct() {
    shop.forEach((element, index) => {
        console.log(`${index + 1} ${element.name} - ${element.color} - ${element.price}`);
    });
}


function addProduct() {
    let newProduct = {
        _id: shop.length + 1,
        name: "copybook",
        color: "pink",
        price: 2345,
    }
    shop = [...shop, newProduct];  
    
    localStorage.setItem("shop", JSON.stringify(shop))
}

function UpdateProduct() {
    let productID = 1;

    shop = shop.map((product)  => product._id === productID ? {
        ...product,
        name: "greenpen",
        color: "white",
        price: 222222,
    } : product)
};

function remoweProduct() {
    let productID = 2;
    shop = shop.filter((product) => product._id!== productID);

    localStorage.setItem("shop", JSON.stringify(shop))
}



// addProduct();
UpdateProduct();
remoweProduct();
displayProduct();