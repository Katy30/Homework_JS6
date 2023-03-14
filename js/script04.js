// Task #4
/* Створити функцію яка повертає сторіччя, функція отримує рік а повертає номер сторіччя. Наприклад:
1810->19
1700 -> 17
1601 ->17
2000 -> 20
*/
function getCentury(year) {
    return Math.ceil(year/100)
}

console.log(getCentury(1810))
console.log(getCentury(1700))
console.log(getCentury(1601))
console.log(getCentury(2000))