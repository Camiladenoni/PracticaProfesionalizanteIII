let sumaReal =0;

const pantalla = document.getElementById("numero");
const inputCantidad = document.getElementById("cantidad");
const inputTiempo = document.getElementById("tiempo");
const boton = document.getElementById("iniciar");
const input = document.getElementById("respuesta"); 
const botonVerificar = document.getElementById("verificar"); 

boton.addEventListener("click", () =>{

let cantidad = Number(inputCantidad.value);
let tiempo = Number(inputTiempo.value);
tiempo=tiempo*1000;

if (cantidad <= 0 || tiempo <= 0) {
    alert("Ingresá valores válidos");
    return;
}

let numeros =[]; 

    for (let i= 0; i<cantidad; i++) {
        let numRandom =Math.floor(Math.random() * 31) -10; 
        numeros.push(numRandom);
    }

    sumaReal=numeros.reduce((acc,num)=>acc+num,0);

    let i=0;

    input.style.display = "none";
    botonVerificar.style.display = "none";
    pantalla.textContent = "";


const intervalo = setInterval(()=> {
    pantalla.textContent=numeros[i]; 
    i++; 
    if (i=== numeros.length) {
        clearInterval(intervalo);
         setTimeout(() => {
                pantalla.textContent = "";
                input.style.display = "inline";
                botonVerificar.style.display = "inline";
            }, 500);
        
    }
}, tiempo);
});


botonVerificar.addEventListener("click", () => {

    const valorUsuario = Number(input.value);

    if (valorUsuario === sumaReal) {
        pantalla.textContent = "Correcto!";
    } else {
        pantalla.textContent = "Incorrecto. Era: " + sumaReal;
    }

});