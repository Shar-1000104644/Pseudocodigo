//Escribe aquí tu código
var kilometros; var recorrido; var boleto;
var recorrido = prompt('¿Cúantos kilometros recorriste?');
var kilometros = prompt('¿Cúanto cobras por kilometro recorrido?');
var boleto = Math.round(recorrido*kilometros);
document.write('El boleto debe costar'+' '+ 'S/.'+boleto + ' '+ 'soles');