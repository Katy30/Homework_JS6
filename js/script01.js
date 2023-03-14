// Task #1
/* Створити функцію яка отримує невизначену кількість аргументів, вираховує їх суму і повертає результат обчислень
*/
function sumArguments(...a) {
    let result=0;
    for (let value of a) {
        result+=value;
    }
    return result;
}

console.log(sumArguments(1,2,3,4,5,6,7,8,9,10))