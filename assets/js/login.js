// TAB SWITCH
const loginTab = document.getElementById('loginTab');
const registerTab = document.getElementById('registerTab');

const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');

const goRegister = document.getElementById('goRegister');
const goLogin = document.getElementById('goLogin');

loginTab.addEventListener('click', () => {
    loginTab.classList.add('active');
    registerTab.classList.remove('active');

    loginForm.classList.add('active');
    registerForm.classList.remove('active');
});

registerTab.addEventListener('click', () => {
    registerTab.classList.add('active');
    loginTab.classList.remove('active');

    registerForm.classList.add('active');
    loginForm.classList.remove('active');
});

goRegister.addEventListener('click', () => registerTab.click());
goLogin.addEventListener('click', () => loginTab.click());


// PASSWORD TOGGLE
function togglePassword(inputId, el) {
    const input = document.getElementById(inputId);

    if (input.type === "password") {
        input.type = "text";
        el.innerText = "Hide";
    } else {
        input.type = "password";
        el.innerText = "Show";
    }
}