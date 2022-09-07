// 1. Hacer un menu (navbar) que tenga un logo el icono de menu y adentro 4 enlaces que esten ocultos. Hacer un addEventListener al menu para desplegar los elementos.

// 2. Validacion de forms,
//    Hacer un form que tenga email y contraseña y que valide que el email sea un email y la contraseña tenga mayuscula, minuscula, un numero y un simbolo. Si da error, renderizar en el html el texto con un error. Ej, Email invalido / La contraseña tiene que tener una mayuscula, minuscula, un numero y simbolo

// 3. Hacer un input y un boton de enviar. Crear una funcion para pintar en el html lo que escribamos en el input cuando aprentemos el boton de enviar. Y que los datos persistan en el local storage.

// 4. Tenemos el siguiente array de objetos, renderizar cada objeto en una card. (Que queden lindas) 

//EJERCICIO 2
const form = document.querySelector('.form');
const password = document.querySelector('.password');
const email = document.querySelector('.email');
const ingresar = document.querySelector('.ingresar');
const messageEmail = document.querySelector('.message-email');
const messagePassword = document.querySelector('.messagge-pass');

const validarEmail = e => {
    e.preventDefault();

    const inputEmail = email.value.trim();

    if(!inputEmail.length){
        alert('El campo esta vacio!')
        return;
    } else if(/^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,4})+$/.test(inputEmail)){
        email.style.border= '3px solid green'
        messageEmail.innerHTML='';
    } else {
        messageEmail.innerHTML = 'Email incorrecto'
        email.style.border = '3px solid red'
    }
}

const validarPassword = e => {
    e.preventDefault();

    const passwordValue = password.value.trim();
    const lowerCase = /[a-z]/g;
    const upperCase = /[A-Z]/g;
    const number = /[0-9]/g;
    const symbol = /(?=.[-_.?/!@#$%^&])/g
    

    if(passwordValue == ''){
        alert('El campo esta vacio!')
        messagePassword.innerHTML ='';
        return;
    }

    if(!passwordValue.match(lowerCase)){
        messagePassword.textContent = 'Debes incluir una minuscula';
        password.style.border= '2px solid red'
    } else if (!passwordValue.match(upperCase)){
        messagePassword.textContent = 'Debes incluir una mayuscula';
        password.style.border= '2px solid red'
    } else if (!passwordValue.match(number)){
        messagePassword.innerHTML = 'Debes inclui un numero';
        password.style.border= '2px solid red'
    } else if (!passwordValue.match(symbol)){
        messagePassword.innerHTML = 'Debes incluir un simbolo'
        password.style.border= '2px solid red'
    } else {
        messagePassword.innerHTML = 'Contraseña Correcta!'
        password.style.border ='2px solid green'
    }
}


const init = () => {
    // form.addEventListener('submit', addPizza)
    form.addEventListener('submit', validarEmail)
    form.addEventListener('submit', validarPassword)

}

init();
