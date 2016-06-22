//Escribe aquí tu código
// var costo_estancia; var habitaciones; var precio;
// var costo_estancia = prompt('¿Cúal es el costo por la usar una habitacion en tu hotel?');
// var habitaciones = prompt('¿Cúantas habitaciones va a ocupar?');
// var precio = costo_estancia*habitaciones;
// document.write('Debes cobrar' + ' ' + 'S/.'+precio + ' '+ 'soles');


// El hotel “Cama Arena” requiere determinar lo que le debe cobrar a un 
// huésped por su estancia en una de sus habitaciones.
// Realice un diagrama de flujo y pseudocódigo que representen 
// el algoritmo para determinar ese cobro.


function calculo(){
	var numeroHabitaciones=document.getElementById('num_one').value;
	var precioHabitacion=document.getElementById('num_two').value;
	var resultado=Math.round(numeroHabitaciones*precioHabitacion);

	document.getElementById('tarifa').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('Debes pagar'+' '+ 'S/.'+resultado + ' '+ 'soles'); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}

