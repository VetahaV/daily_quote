'use strict!'
let password = document.querySelector('#password').children[0];

let saveBtn = document.querySelector('.password-block__saveBtn');

saveBtn.addEventListener('click',(e) => {
    if(password.value === 'admin'){
        e.target.parentElement.href = './admin page.html';
    }      
})
