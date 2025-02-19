let text = document.querySelector('.quote__txt');
let author = document.querySelector('.quote__author');

let arrKeys = [];
if (localStorage.key(0)) {
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        arrKeys.push(key)
    }
}
// функция сдвигания элементов массива
function rotateArray(arr) {
    if (arr.length > 1) {
        arr.unshift(arr.pop());
    }
}
// создаеь тект на главой странице
function createQuote(arr) {
    text.textContent = localStorage.getItem(arr[0]);
    author.value = arr[0]
    rotateArray(arr)
}
if(arrKeys.length > 0)
createQuote(arrKeys)

function scheduleRotation() {
    let now = new Date();
    let midnight = new Date(now);
    midnight.setHours(24, 0, 0, 0); // Следующая полночь
    const timeToMidnight = midnight - now;
    // запускаем впервые в полночь
    setTimeout(() => {
    // Запуск каждый день в полночь
        setInterval(() => createQuote(arrKeys), 24 * 60 * 60 * 1000);
    }, timeToMidnight);
}
scheduleRotation();