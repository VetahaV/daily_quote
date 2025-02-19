let list = document.querySelector('.saveQuote-list');
let addText = document.querySelector('#addQuoteText');
let addAuthor = document.querySelector('#addQuoteAuthor');
let saveBtn = document.querySelector('.saveQuote-btn');
let clearBtn = document.querySelector('.button-clear');
let backBtn = document.querySelector('.button-back');
let er = document.querySelector('.error');
let linkLogo = document.querySelectorAll('.logo a');

linkLogo.forEach(elem => {elem.href = '#'})

saveBtn.addEventListener('click', () => {
    console.log(addAuthor.value)
    if (!addText.value) {
        return er.textContent = 'нет цитаты!'
    }
    if (!addAuthor.value) {
        return er.textContent = 'автор не указан!'
    }
    localStorage.setItem(addAuthor.value, addText.value);
    addAuthor.value = '';
    addText.value = '';
    list.innerHTML = '';
    createList()
})

if (localStorage.length > 0) {
    createList()
}

function createList() {
    for (let key in localStorage) {
        if (!localStorage.hasOwnProperty(key)) {
            continue; // пропустит такие ключи, как "setItem", "getItem" и так далее
        }
        let item = document.createElement('li');
        item.className = 'saveQuote-list__item';
        item.innerHTML = `
        <h4 class="saveQuote-list__item-text">` + localStorage[key] + `</h4>
        <p class="saveQuote-list__item-author"><i>автор:</i>` + key + `</p>
        <button class="editBtn">изменить цитату</button>
        <button class="removeBtn">удалить цитату</button>
        <hr/>`
        list.append(item);
        // кнопка редактирования элемента списка
        let editItemBtns = document.querySelectorAll('.editBtn');
        for (let i = 0; i < editItemBtns.length; i++) {
            editItemBtns[i].addEventListener('click', (e) => {
                let key = e.target.parentElement.children[1].textContent.split(':')[1];
                e.target.parentElement.children[0].innerHTML = `<textarea id="editText"></textarea>
                <button class="saveText">сохранить</button>`;
                let btn = document.querySelector('.saveText');
                let txt = document.querySelector('#editText');
                txt.value = localStorage.getItem(key);
                btn.addEventListener('click', (e) => {
                    let keyLS = e.target.parentElement.nextElementSibling.textContent.split(':')[1];
                    let newTxt = txt.value;
                    e.target.parentElement.innerHTML = txt.value;
                    localStorage.setItem(keyLS, newTxt);
                })
            })
        }
        // кнопка удаления элемента списка
        let removeItemBtns = document.querySelectorAll('.removeBtn');
        for (let i = 0; i < removeItemBtns.length; i++) {
            removeItemBtns[i].addEventListener('click', (e) => {
                let keyLS = e.target.parentElement.children[2].textContent.split(':')[1];
                localStorage.removeItem(keyLS);
                e.target.parentElement.remove();
            })
        }
    }
}
// кнопка очистки всего списка
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    list.innerHTML = '';
})
// кнопка возврата на главную страницу
backBtn.addEventListener('click', () => {
    window.location.href = '../index.html';
})

