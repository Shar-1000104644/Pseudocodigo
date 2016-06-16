//Escribe aquí tu código
var mano_obra; var metro_cuadrado; var tarifa;
var mano_obra = prompt('¿Cúanto cobras por los trabajos de pintura?');
var metro_cuadrado = prompt('¿Cúantos m2 se pinto?');
var tarifa = Math.round(mano_obra*metro_cuadrado);
document.write('Se debe cobrar' + ' '+ 'S/.' + tarifa + ' ' +'soles' )