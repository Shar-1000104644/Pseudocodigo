//Escribe aquí tu código

// var litros; var galones; var conversion;
// var litros = prompt('¿Cúantos litros de leche produciste?');
// var galones = parseFloat(3.785);
// // var conversion = Math.round(litros/galones)
// var conversion =Math.round(litros/galones)
// document.write('Produciste' + ' ' + conversion + ' ' + 'galones de leche'); 

function convertir(){
	var litros=document.getElementById('num_one').value;
	var galones=3.785;
	var resultado=(parseFloat(litros)/parseFloat(galones)).toFixed(4);

	document.getElementById('convertido').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('Produciste' + ' ' + resultado + ' ' + 'galones de leche'); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}