// Task #2
/* Створити функцію яка отримує від користувача день народження,місяць, рік і повертає вік користувача і
якщо сьогодні день народження користувача то вивести привітання.
*/

function HappyBirthday(day, month, year) {
    let now = new Date();

    let age = now.getFullYear() - year;
    console.log(age);

    if (now.getMonth() + 1 === month && now.getDate() === day) {
        console.log("Happy Birthday!")
    }
}

(HappyBirthday(30,4,2001))