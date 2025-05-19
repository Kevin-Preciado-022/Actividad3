let x = 1; // declara la variable x y el valor de esta 
let pares = 0 // declara la variable pares y se establece como contador
let impares = 0 // declara la variable impares y se establece como contador
let total = 0; // declara la variable total y el valor de esta 
do { // inicio del ciclo
total += x; // se 
if (x % 2 === 0) { // se verifica si es par
total -= 1; // si es par se le resta 1  al total
pares++ // se almacena el numero par en esta variable incrementando el contador de pares
} else {
    impares++ // se almacena el numero impares en esta variable incrementando el contador de impares
}
x++; // el valor de x se incrementa con cada iteracion haciendo que el bucle pueda procesarla 
if (x >= 15) { // verifica si x llega a 15 o mas 
console.log("limite superado") // este mensaje a aparece cuando se supera el limite mencinado arriba 
break;} // evita que el bucle siga ejecutandose mas alla del limite
} while (x <= 15); // hace que el bucle continue mientras x sea menor o igual que 15
console.log(total); // se imprime el valor total 
console.log("contar los numeros procesados",pares) // se imprime el numero de pares procesados
console.log("contar los numeros procesados",impares) // se imprime el numero de impares procesados 
