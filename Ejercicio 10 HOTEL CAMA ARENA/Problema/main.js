//Escribe aquí tu código
var costo_estancia; var habitaciones; var precio;
var costo_estancia = prompt('¿Cúal es el costo por la usar una habitacion en tu hotel?');
var habitaciones = prompt('¿Cúantas habitaciones va a ocupar?');
var precio = costo_estancia*habitaciones;
document.write('Debes cobrar' + ' ' + 'S/.'+precio + ' '+ 'soles');


function calculo(){
	var km=document.getElementById('num_one').value;
	var recorrido=document.getElementById('num_two').value;
	var resultado=(parseFloat(km)*parseFloat(recorrido));

	document.getElementById('tarifa').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('El boleto debe costar'+' '+ 'S/.'+resultado + ' '+ 'soles'); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}

