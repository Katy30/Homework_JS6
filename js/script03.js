// Task #3
/* Модифікуват завдання 2 добавивши в аргументи функцію вітання яка буде використанна як колбек,
 і в разі дня народження буде вітати користувача
*/
function pattyLetter(userName) {
    console.log(`Dear ${userName} Happy Birthday to you!`)
}

function HappyBirthday(day, month, year,fnLetter, name) {
    let now = new Date();

    let age = now.getFullYear() - year;
    console.log(age);

    if (now.getMonth() + 1 === month && now.getDate() === day) {
        fnLetter(name);
    }
}

HappyBirthday(30,4,2001,pattyLetter, 'Katy')

