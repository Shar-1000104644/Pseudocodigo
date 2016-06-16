// //Escribe aquí tu código

// var kilometros; var recorrido; var boleto;
// var recorrido = prompt('¿Cúantos kilometros recorriste?');
// var kilometros = prompt('¿Cúanto cobras por kilometro recorrido?');
// var boleto = Math.round(recorrido*kilometros);
// document.write('El boleto debe costar'+' '+ 'S/.'+boleto + ' '+ 'soles');


function calculo(){
	var km=document.getElementById('num_one').value;
	var recorrido=0.80;
	var resultado=(parseFloat(km)*parseFloat(recorrido)).toFixed(2);
	document.getElementById('tarifa').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('El boleto debe costar'+' '+ 'S/.'+resultado + ' '+ 'soles'); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}