//Escribe aquí tu código
var pulgada; var metro; var conversion;
var  pulgada= prompt('¿Cúantos metros de tela requieres para tu negocio?');
var metro= 0.0254;
var conversion = Math.round (pulgada/metro);
document.write('Necesitas perdir'+' '+conversion + ' '+ 'pulgadas de tela');