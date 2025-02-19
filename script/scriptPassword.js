'use strict!'
let password = document.querySelector('#password').children[0];

let backBtn = document.querySelector('.password-block__backBtn button');
let saveBtn = document.querySelector('.password-block__saveBtn');

backBtn.addEventListener('click', () => {
    window.location.href = '../index.html'
})

saveBtn.addEventListener('click',() => {
    if(password.value === 'admin'){
        console.log(111)
        window.location.href = '../admin page.html'
    }      
})
