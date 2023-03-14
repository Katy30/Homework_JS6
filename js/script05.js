// Task #5
/* Створити функцію яка повертає інформацію скільки днів в цьому місяці а також в наступному
( В цьому місяці 30 днів в наступному 31 )
*/

function getInfo() {
    let now = new Date();
    let year =  now.getFullYear()
    let thisMounts= now.getMonth()+1;
    let nextMounts=thisMounts+1;
    function getDaysCount(month, year){
        switch (month){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                return 31

            case 2:
                return year % 4 === 0 ? 29 : 28

            case 6:
            case 4:
            case 9:
            case 11:
                return 30
        }
    }

    return `В цьому місяці ${getDaysCount(thisMounts, year)} днів, а в наступному ${getDaysCount(nextMounts, year)} днів`;
}

console.log(getInfo());
