// //Escribe aquí tu código
// var mano_obra; var metro_cuadrado; var tarifa;
// var mano_obra = prompt('¿Cúanto cobras por los trabajos de pintura?');
// var metro_cuadrado = prompt('¿Cúantos m2 se pinto?');
// var tarifa = Math.round(mano_obra*metro_cuadrado);
// document.write('Se debe cobrar' + ' '+ 'S/.' + tarifa + ' ' +'soles' )

function calculo(){
	var mano_obra=document.getElementById('num_one').value;
	var m2=document.getElementById('num_two').value;
	var resultado=(parseFloat(mano_obra)*parseFloat(m2));

	document.getElementById('tarifa').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('Se debe cobrar' + ' '+ 'S/.' + resultado + ' ' +'soles' ); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}