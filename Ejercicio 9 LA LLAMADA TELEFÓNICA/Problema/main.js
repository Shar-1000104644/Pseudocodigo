// //Escribe aquí tu código
// var minuto; var costo_min; var tarifa;
// var minuto = prompt('¿Cúantos minutos duro la llamada telefónica?');
// var costo_min = prompt('¿Cúal es el precio por minuto de la llamada telefónica?');
// var tarifa = Math.round(minuto*costo_min);
// document.write('Por una llamada telefónica que durá un minuto debes cobrar'+ ' '+ 'S/.' + tarifa + ' '+'soles');


// Se requiere un algoritmo para determinar el costo que tendrá realizar 
// una llamada telefónica con base en el tiempo que dura la llamada y en el costo por minuto.


function llamadaTelefonica(){
	var minutos= document.getElementById('num_one').value;
	var costo_min= document.getElementById('num_two').value;
	var tarifa=(minutos*costo_min).toFixed(2);
	document.getElementById('tarifa').value=tarifa;
	var letra = document.createElement('h1');
	var l=document.createTextNode('Lo que debes pagar es:' + ' ' + 'S/.'+ tarifa)
	letra.appendChild(l);
	document.body.appendChild(letra);
};