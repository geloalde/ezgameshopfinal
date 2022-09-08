sendCredentials = (event) => {
    const validUsername = 'myadmin';
    const validPassword = 'mypassword1234';
    event.preventDefault();
    const username = document.getElementsByName('username')[0].value;
    const password = document.getElementsByName('password')[0].value;
    let loginErrorForm = document.getElementById('loginErrorForm');
    let loginErrorUser = document.getElementById('loginErrorUser');
    let loginErrorPass = document.getElementById('loginErrorPass');

    if (username == '' && password == '') {
        loginErrorForm.innerHTML = 'Login Form is Empty';
        loginErrorForm.style.display = 'block';
        return false;
    };
    if (username == '') {
        loginErrorUser.innerHTML = 'Enter email address';
        loginErrorUser.style.display = 'block';
        return false;
    };
    if (password == '') {
        loginErrorPass.innerHTML = 'Enter password';
        loginErrorPass.style.display = 'block';
        return false;
    };
    if (validUsername === username && validPassword === password) {
        window.location.href = 'ezgame.html'
    };
    if (validUsername !== username || validPassword !== password) {
        loginErrorForm.innerHTML = 'Incorrect email address or password';
        loginErrorForm.style.display = 'block';
        return false;
    };
}

const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
signupBtn.onclick = (() => {
    loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (() => {
    loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});
signupLink.onclick = (() => {
    signupBtn.click();
    return false;
});
