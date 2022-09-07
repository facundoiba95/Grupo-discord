// 1. Hacer un menu (navbar) que tenga un logo el icono de menu y adentro 4 enlaces que esten ocultos. Hacer un addEventListener al menu para desplegar los elementos.

// 2. Validacion de forms,
//    Hacer un form que tenga email y contraseña y que valide que el email sea un email y la contraseña tenga mayuscula, minuscula, un numero y un simbolo. Si da error, renderizar en el html el texto con un error. Ej, Email invalido / La contraseña tiene que tener una mayuscula, minuscula, un numero y simbolo

// 3. Hacer un input y un boton de enviar. Crear una funcion para pintar en el html lo que escribamos en el input cuando aprentemos el boton de enviar. Y que los datos persistan en el local storage.

// 4. Tenemos el siguiente array de objetos, renderizar cada objeto en una card. (Que queden lindas) 

//EJERCICIO 2
// const form = document.querySelector('.form');
// const password = document.querySelector('.password');
// const email = document.querySelector('.email');
// const ingresar = document.querySelector('.ingresar');
// const messageEmail = document.querySelector('.message-email');
// const messagePassword = document.querySelector('.messagge-pass');

// const validarEmail = e => {
//     e.preventDefault();

//     const inputEmail = email.value.trim();

//     if(!inputEmail.length){
//         alert('El campo esta vacio!')
//         return;
//     } else if(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/.test(inputEmail)){
//         email.style.border= '3px solid green'
//         messageEmail.innerHTML='';
//     } else {
//         messageEmail.innerHTML = 'Email incorrecto'
//         email.style.border = '3px solid red'
//     }
// }

// const validarPassword = e => {
//     e.preventDefault();

//     const passwordValue = password.value.trim();
//     const lowerCase = /[a-z]/g;
//     const upperCase = /[A-Z]/g;
//     const number = /[0-9]/g;
//     const symbol = /(?=.[-_.?/!@#$%^&])/g
    

//     if(passwordValue == ''){
//         alert('El campo esta vacio!')
//         messagePassword.innerHTML ='';
//         return;
//     }

//     if(!passwordValue.match(lowerCase)){
//         messagePassword.textContent = 'Debes incluir una minuscula';
//         password.style.border= '2px solid red'
//     } else if (!passwordValue.match(upperCase)){
//         messagePassword.textContent = 'Debes incluir una mayuscula';
//         password.style.border= '2px solid red'
//     } else if (!passwordValue.match(number)){
//         messagePassword.innerHTML = 'Debes inclui un numero';
//         password.style.border= '2px solid red'
//     } else if (!passwordValue.match(symbol)){
//         messagePassword.innerHTML = 'Debes incluir un simbolo'
//         password.style.border= '2px solid red'
//     } else {
//         messagePassword.innerHTML = 'Contraseña Correcta!'
//         password.style.border ='2px solid green'
//     }
// }



//EJERCICIO 3
// const input = document.querySelector('.input');
// const agregarBtn = document.querySelector('.agregar-btn');
// const lista = document.querySelector('.lista')
// const container = document.querySelector('.container')

// let cars =  JSON.parse(localStorage.getItem('cars')) || [];

// const createHtmlCar = cars =>  `<li>${cars.name}</li>`

// const renderCar = cars =>  lista.innerHTML = cars.map(car => createHtmlCar(car)).join('')

// const saveLocalStorage = cars => localStorage.setItem('cars', JSON.stringify(cars));

// const addCar = e => {
//     e.preventDefault();

//     const nameCar = input.value.trim();

//     if(!nameCar.length){
//         alert('El campo esta vacio!')
//         return;
//     } else if (
//         cars.some(car => car.name.toLowerCase() === nameCar.toLowerCase())
//     ){
//         alert('Ya existe este auto en la lista!');
//         return;
//     } else {
//         cars = [... cars,{name: nameCar}]
//     }

//     renderCar(cars);
//     saveLocalStorage(cars);
// } 




//EJERCICIO 4
let peliculas = [
    {
      id: 1,
      titulo: 'El señor de los anillos: La comunidad del anillo',
      descripcion:
        'Un hobbit de la Comarca y ocho compañeros emprenden un viaje para destruir el poderoso Anillo Único y salvar la Tierra Media del Señor Oscuro Sauron.',
      director: 'Peter Jackson',
      anio: 2001,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMzgyNjdjOWMtMjAyYy00NzQ4LWIwYTQtZDk2ZDQzYWVlN2IwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX720_.jpg',
    },
    {
      id: 2,
      titulo: 'Volver al futuro',
      descripcion:
        'Marty McFly, un estudiante de secundaria de 17 años, es enviado accidentalmente treinta años al pasado en un DeLorean que viaja en el tiempo, inventado por su gran amigo, el excéntrico científico Doc Brown.',
      director: 'Robert Zemeckis',
      anio: 1985,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BYjQxMTIyMWUtMmMyMS00MGNmLTkzNzktOTM2YzMyZmRjYTYzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
      id: 3,
      titulo: 'Harry Potter y la piedra filosofal',
      descripcion:
        'Un niño huérfano se inscribe en una escuela de magia y hechicería, donde aprende la verdad sobre sí mismo, su familia y el terrible mal que acecha al mundo mágico.',
      director: 'Chris Columbus',
      anio: 2001,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMzFiZjhjODUtMWJhZi00ZDk5LThjY2ItZjNjYjc0OGVjY2FmXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
    {
      id: 4,
      titulo: 'Spiderman',
      descripcion:
        'Al ser mordido por una araña modificada genéticamente, un chico de instituto tímido y estudioso adquiere habilidades de araña que al final tendrá que usar para luchar contra el mal como un superhéroe tras una tragedia familiar.',
      director: 'Sam Raimin',
      anio: 2002,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BZDEyN2NhMjgtMjdhNi00MmNlLWE5YTgtZGE4MzNjMTRlMGEwXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX511_.jpg',
    },
    {
      id: 5,
      titulo: 'Fight Club',
      descripcion:
        'Un oficinista insomne y un desentendido fabricante de jabones forman un club de lucha clandestino que se convierte en mucho más.',
      director: 'David Fincher',
      anio: 1999,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BNzJhZjg3MWQtNDk1Zi00ZjMzLWI1ZjUtNmE2MDg0ZDU4MzZlXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg',
    },
    {
      id: 6,
      titulo: 'El Origen',
      descripcion:
        'A un ladrón que roba secretos corporativos a través del uso de la tecnología de compartir sueños, se le da la tarea de implantar una idea en la mente de un jefe de una gran empresa.',
      director: 'Christopher "EL REY" Nolan',
      anio: 2010,
      imagen:
        'https://m.media-amazon.com/images/M/MV5BMTUzMzUyOTktNmYyNS00YTA1LWIxNmQtMGIzZDYxZGI3OTliXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg',
    },
  ];


const listaPelis = document.querySelector('.lista-pelis');

const createHtmlPelis = peliculas => {
    return `
    <li class="item-peli">
         <h2 class="titulo">${peliculas.titulo}</h2>
         <p class="descripcion">${peliculas.descripcion}</p>
         <h4 class="director">${peliculas.director}</h4>
         <h4 class="anio">${peliculas.anio}</h4>
         <img src="${peliculas.imagen}" alt="" class="imagen">  
    </li>
    `
}
const renderPelis = pelis => listaPelis.innerHTML = pelis.map(peli => createHtmlPelis(peli)).join('')




const init = () => {
    //EJERCICIO 2
    // form.addEventListener('submit', validarEmail)
    // form.addEventListener('submit', validarPassword)


    //EJERCICIO 3
    // agregarBtn.addEventListener('click', addCar);
    // renderCar(cars);
    renderPelis(peliculas);

}

init();
