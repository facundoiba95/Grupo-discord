let pizza = [
    {
        id: 1,
        nombre: "muzzarella",
        ingredientes: ["muzzarella", "salsa de tomate", "aceitunas"],
        precio: 500,
    },
    {
        id: 2,
        nombre: "calabresa",
        ingredientes: ["queso", "longaniza", "salsa de tomate"],
        precio: 900,
    },
    {
        id: 3,
        nombre: "fugazzeta",
        ingredientes: ["queso", "cebolla", "aceitunas"],
        precio: 750,
    },
    {
        id: 4,
        nombre: "napolitana",
        ingredientes: ["queso", "tomate", "albahaca", "aceite de oliva"],
        precio: 1000,
    },
    {
        id: 5,
        nombre: "cuatro quesos",
        ingredientes: ["muzzarella", "parmesano", "roquefort", "robiola"],
        precio: 900,
    },
    {
        id: 6,
        nombre: "argentina",
        ingredientes: ["tomate", "cebolla", "queso"],
        precio: 600,
    },
]

//     Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior. 

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón. 

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input. 

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error. 

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const titulo = document.querySelector('.titulo');
const precio = document.querySelector('.precio');

let nuevoPizza= [];

const isEmpty = value => (value === '' ? true : false)

const addPizza = e => {
    e.preventDefault();

    const inputValue = input.value.trim();

    if(isEmpty(inputValue)){
        alert('Esta vacio!')
        return;
    } else if(
        nuevoPizza = pizza.find((pizza) => pizza.id == inputValue)){
          titulo.textContent = `La Pizza ${nuevoPizza.nombre}`;
          precio.textContent = `Tiene un costo de $${nuevoPizza.precio}`
        return;
    } else {
       alert('No tenemos esa Pizza !')
        return;
    }

}