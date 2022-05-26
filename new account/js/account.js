const username = document.getElementById('username');
const password = document.getElementById('password');
const form = document.getElementById('form');
let msgDiv1 = document.getElementById('msgDiv1');
msgDiv1.setAttribute('style', 'color:red;margin-bottom:10px;font-size:12px');
let msgDiv2 = document.getElementById('msgDiv2');
msgDiv2.setAttribute('style', 'color:red;margin-bottom:10px;font-size:12px');


form.addEventListener('submit', (e) => {
    let msg
    if (username.value.length == 0) {
        msg = "Username cannot be empty!";
        msgDiv1.innerHTML = msg;
        e.preventDefault();
    }
    if (password.value.length == 0 || password.value == password || password.value.length <= 5 || password.value.length >= 20) {
        msg = "Password cannot be password, not less than 5 and more than 20 characters."
        msgDiv2.innerHTML = msg;
        e.preventDefault();
    }
});