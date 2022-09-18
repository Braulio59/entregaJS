const pizzaMenu = [
    {
        id: 1, 
        name: "Muzzarella", 
        ingredients: ["salsa de tomate","Queso Muzzarella", "Oregano","Aceituna"],
        price: 500,
        img: "assets\\pizza-muzarella.png"
    }, 
    {
        id: 2, 
        name: "Rucula",
        ingredients: ["Salsa de tomate", "Queso Muzzarella,", "Oregano","Aceituna", "Rucula"],
        price : 800,
        img: "assets\\pizza-rucula.png"
    },
    {
        id: 3,
        name:"Fugazzeta",
        ingredients: ["salsa de tomate","Queso Muzzarella","Cebolla", "Aceituna",],
        price: 600,
        img:"assets\\Fugazzeta.png"
    },
    {
        id: 4, 
        name:"Napolitana",
        ingredients: ["Salsas de tomate", "Queso Muzzarella","Tomate Fresco","Ajo"],
        price: 700,
        img: "assets\\pizza-napo.png"
    },
    {
        id: 5, 
        name: "Roquefort",
        ingredients: ["Salsa de tomate", "Queso Muzzarella","Roquefort", "Parmesano", "Fontina"],
        price: 900,
        img: "assets\\Pizza-Roquefort.png"
    }, 
    {
        id: 6,
        name: "Calabresa",
        ingredients:["Salsa de tomate","Queso Muzzarella","Aceituna","Salame"],
        price: 800, 
        img: "assets\\pizza-calabresa.png" 
    },
    {
        id: 7,
        name: "Champignones",
        ingredients:["Salsa de tomate","Queso Muzzarella","Champignones","Hongos de pino"],
        price:  900,
        img: "assets\\1624279230635.png"
    }
] 





const pizzaOrderForm = document.getElementById('pizzaOrderForm')
const pizzaSelectionInput = document.getElementById('pizzaSelection')
const pizzaName = document.getElementById("pizzaName")
const pizzaPrice = document.getElementById("pizzaPrice") 
const pizzaPhoto = document.getElementById("pizza_photo")
const errorMessage = document.getElementById("errorMessage")
const errorText = document.getElementById("error_mensaje") 

const saveLocalStorage = () => {
	localStorage.setItem('pizzaMenu', JSON.stringify(pizzaMenu));
};


const init = () => {
  pizzaOrderForm.addEventListener('submit', (event) => {
    event.preventDefault()
    orderPizza(pizzaSelectionInput.value, pizzaMenu)
    
  })
  pizzaSelectionInput.addEventListener("keydown",() => {
    if(pizzaSelectionInput.value !== "") return
    errorMessage.style.display = "none"
  })
  saveLocalStorage()
} 

const orderPizza = (pizzaId, pizzaList) => {
    if(pizzaId === "") {
        clearValues()
        alert ("Por favor ingresa un número")
        return
    }
    let selectedPizza = pizzaList.find(f => pizzaId == f.id) 
    if (!selectedPizza) {  
    clearValues()
    errorMessage.style.display = "flex"
    errorText.textContent = `No se pudo encontrar la pizza ${pizzaId}`
    return
}

    pizzaName.textContent = selectedPizza.name
    pizzaPrice.textContent = selectedPizza.price
    pizzaPhoto.src = selectedPizza.img
    pizzaPhoto.style.display = "flex"
    errorMessage.style.display = "none"
}

const clearValues = () => {
    pizzaName.textContent = null; 
    pizzaPrice.textContent = null;
    pizzaPhoto.style.display = "none"
}

init()