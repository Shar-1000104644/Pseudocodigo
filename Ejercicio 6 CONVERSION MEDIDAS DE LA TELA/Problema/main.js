//Escribe aquí tu código
// var pulgada; var metro; var conversion;
// var  pulgada= prompt('¿Cúantos metros de tela requieres para tu negocio?');
// var metro= 0.0254;
// var conversion = Math.round (pulgada/metro);
// document.write('Necesitas perdir'+' '+conversion + ' '+ 'pulgadas de tela');

function convertir(){
	var pulgada=document.getElementById('num_one').value;
	var metro=0.0254;
	var resultado=(parseFloat(pulgada)/parseFloat(metro)).toFixed(4);

	document.getElementById('convertido').value= resultado;
	var letra = document.createElement("h1");
	var t = document.createTextNode('Necesitas pedir' + ' ' + resultado + ' ' + 'pulgadas de tela'); 
	letra.appendChild(t); 
    document.body.appendChild(letra);
}