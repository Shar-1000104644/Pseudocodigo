//Escribe aquí tu código
var litros; var galones; var conversion;
var litros = prompt('¿Cúantos litros de leche produciste?');
var galones = parseFloat(3.785);
// var conversion = Math.round(litros/galones)
var conversion =Math.round(litros/galones)
document.write('Produciste' + ' ' + conversion + ' ' + 'galones de leche'); 