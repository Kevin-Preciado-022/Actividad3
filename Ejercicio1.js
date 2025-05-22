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
