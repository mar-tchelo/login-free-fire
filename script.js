const passwordInput = document.getElementById('password');
const eyeHidden = document.getElementById('eyeHidden');

function eyeClickHidden(){
    let inputTypeIsPassword = passwordInput.type == 'password';

    if (inputTypeIsPassword) {
        showPassword()
    }else{
        hidePassword();
    }
}

function showPassword(){
    passwordInput.setAttribute('type', 'text');
}

function hidePassword(){
    passwordInput.setAttribute('type','password');
}