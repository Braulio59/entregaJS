const pizzaMenu = [
    {
        id: 0, 
        name: "Muzzarella", 
        ingredients: ["salsa de tomate","Queso Muzzarella", "Oregano","Aceituna"],
        price: 500,
    }, 
    {
        id: 1, 
        name: "Rucula",
        ingredients: ["Salsa de tomate", "Queso Muzzarella,", "Oregano","Aceituna", "Rucula"],
        price : 800,
    },
    {
        id:2,
        name:"Fugazzeta",
        ingredients: ["salsa de tomate","Queso Muzzarella","Cebolla", "Aceituna",],
        price: 600,
    },
    {
        id:3, 
        name:"Napolitana",
        ingredients: ["Salsas de tomate", "Queso Muzzarella","Tomate Fresco","Ajo"],
        price: 700,
    },
    {
        id:4, 
        name: "Roquefort",
        ingredients: ["Salsa de tomate", "Queso Muzzarella","Roquefort", "Parmesano", "Fontina"],
        price: 900,
    }, 
    {
        id: 5,
        name: "Calabresa",
        ingredients:["Salsa de tomate","Queso Muzzarella","Aceituna","Salame"],
        price: 800,
    },
    {
        id: 6,
        name: "Champignones",
        ingredients:["Salsa de tomate","Queso Muzzarella","Champignones","Hongos de pino"],
        price:  900,
    }
] 





const pizzaOrderForm = document.getElementById('pizzaOrderForm')
const pizzaSelectionInput = document.getElementById('pizzaSelection')
const pizzaName = document.getElementById("pizzaName")
const pizzaPrice = document.getElementById("pizzaPrice")

const init = () => {
  pizzaOrderForm.addEventListener('submit', (event) => {
    event.preventDefault()
    orderPizza(pizzaSelectionInput.value, pizzaMenu)
    
  })
} 

const orderPizza = (pizzaId, pizzaList) => {
    let selectedPizza = pizzaList.find(f => pizzaId == f.id) 
    if (!selectedPizza) {  
    pizzaName.textContent = null; 
    pizzaPrice.textContent = null;
    alert("La Pizza que desea ordenar no existe")
    return
    }
    pizzaName.textContent = selectedPizza.name
    pizzaPrice.textContent = selectedPizza.price
}

init()