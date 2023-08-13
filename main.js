// Declaracion de variables | Objetos | Array:
const precioEntrada = 500;
const respCandy = document.getElementById("respuestaCandy");
const respAzar = document.getElementById("respuestaPelicula");

let pelicula, asientos;
let frase1, frase2, frase3, frase4;

//Array de obj (peliculas)
const cartelera = [
	{
		foto: "./img/cartelera-jp.webp",
		nombre: "JURASSIC PARK",
		director: "Steven Spielberg",
		duracion: "2h 7min",
		genero: "Accion/Aventura/SciFy",
	},
	{
		foto: "./img/cartelera-rocky.webp",
		nombre: "ROCKY",
		director: "John G. Avildsen",
		duracion: "2h",
		genero: "Drama/Deporte",
	},
	{
		foto: "./img/cartelera-titanic.webp",
		nombre: "TITANIC",
		director: "James Cameron",
		duracion: "3h 14min",
		genero: "Drama/Romance",
	},
	{
		foto: "./img/cartelera-topgun.webp",
		nombre: "KARATE KID",
		director: "John G. Avildsen",
		duracion: "2h 6min",
		genero: "Accion/Drama/Familiar",
	},
	{
		foto: "./img/cartelera-mi3.webp",
		nombre: "TOP GUN",
		director: "Tony Scott",
		duracion: "1h 49min",
		genero: "Accion/Drama",
	},
	{
		foto: "./img/cartelera-karatekid.webp",
		nombre: "MISION IMPOSIBLE",
		director: "J.J. Abrams",
		duracion: "2h 6min",
		genero: "Accion/Aventura/Suspenso",
	},
];

//Array de obj (candy)
const itemsDisponibles = [
	{
		producto: "Pochoclos",
		precio: 200,
	},
	{
		producto: "Chocolate",
		precio: 50,
	},
	{
		producto: "Gaseosa",
		precio: 150,
	},
	{
		producto: "Agua",
		precio: 100,
	},
];

//	-----Funciones:-----
//Funcion valor Total Asientos
function valor(a, b) {
	return a * b
}

//Funcion Registro
function saludar() {
	let nombreInput = document.getElementById("nombreInput");
	let saludo = nombreInput.value.toUpperCase();
	let respuestaSaludar = document.getElementById("respuesta");

	if (saludo === "") {
		alert("Debe ingresar un nombre para continuar con la reserva.");
		return;
	} else {
		const mensaje =
			"<strong>¡HOLA " +
			saludo +
			"!</strong>" +
			"<br>" +
			"Puedes seleccionar una película de nuestro catálogo." +
			"<br>" +
			"(Si no sabes cual elegir, podes probar suerte 🍀)";
		respuestaSaludar.innerHTML = mensaje;
	}
}

function seleccionarAlimento() {
	let carrito = [];
	let valor = [];
	let res = 0;

	let i = 0;
	while (i < itemsDisponibles.length) {
		let seleccion = confirm(
			"¿Deseas agregar a la reserva " +
				itemsDisponibles[i].producto +
				" ($" +
				itemsDisponibles[i].precio +
				") " +
				" para acompañar la pelicula?"
		);

		if (seleccion) {
			carrito.push(itemsDisponibles[i].producto); // Metodo .push()
			valor.push(itemsDisponibles[i].precio);
		}

		i += 1;
	}

	for (let i = 0; i < valor.length; i++) {
		res += valor[i];
	}

	frase3 = "Reserva: <br>";
	for (let i = 0; i < carrito.length; i++) {
		frase3 += `${carrito[i]} ($${valor[i]})`;
		if (i < carrito.length - 1) {
			frase3 += " + ";
		}
	}

	frase3 +=
		" Total = <strong>$" +
		res +
		"</strong>.<br> (Podes abonar y retirar por el candy hasta 5 min antes de la pelicula).";
	respCandy.innerHTML = frase3;
}

//Funcion Azar
function probarSuerte() {
	const indice = Math.floor(Math.random() * cartelera.length);
	const peliculaAzar = cartelera[indice].nombre;
	let tot;

	asientos = Number(prompt("Cantidad de asientos: (valor: $500 c/u)"));
	tot = valor(precioEntrada, asientos);

	frase4 =
		"La Suerte dice...: <strong>¡" + peliculaAzar + "!</strong>." + "<br>" + "Cantidad de sientos: " + asientos + ". Valor total: <strong>$" + tot + "</strong>.";
	respAzar.innerHTML = frase4;

	
}

//  -----Ejecucion-----
//Boton Registro
let boton0 = document.querySelector("#registro");
boton0.addEventListener("click", saludar);


//Seleccion pelicula + asientos
const miFormulario = document.getElementById("miFormulario");
const seleccionInput = document.getElementById("seleccionar");
const asientosInput = document.querySelector("#cantAsientos");
const respuestaPelicula = document.getElementById("respuestaPelicula");

miFormulario.addEventListener("submit", function (event) {
	event.preventDefault();

	const peliculaSeleccionada = seleccionInput.value;
	const cantidadAsientos = Number(asientosInput.value);
	const total = valor(precioEntrada, cantidadAsientos)

	respuestaPelicula.innerHTML = `Pelicula seleccionada: <strong>${peliculaSeleccionada}</strong>.<br> Cantidad de sientos: ${cantidadAsientos}. Valor total: <strong>$${total}</strong>.`
});

//Boton Candy
let boton2 = document.getElementById("seleccionarCandy");
boton2.onclick = seleccionarAlimento;

//Boton Azar
let boton3 = document.getElementById("azar");
boton3.addEventListener("click", probarSuerte);
