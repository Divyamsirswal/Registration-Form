const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const age = document.getElementById('age')
const phoneno = document.getElementById('phoneno')

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const isAge = age => {
    if (age>=1 || a<=100){
        return true;
    }else{
        return false;
    }
}

const isPhoneno = phoneno => {
    if(phoneno>=0 || phoneno<=9){
        return true;
    }else{
        return false;
    }
}

const setError = (element,message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');   
};

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const ageValue = age.value.trim();
    const phonenoValue = phoneno.value.trim();

    if(usernameValue === ''){
        setError(username,'Username is Required');
    }else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email,'Email is Required');
    }else if(!isValidEmail(emailValue)){
        setError(email,'Provide a valid email address');
    }else{
        setSuccess(email);
    }

    if(ageValue === ''){
        setError(age,'Age is Required');
    }else if(ageValue>1){
        setSuccess(age);
    }else{
        setError(age,'Provide a valid age');
    }

    if(phoneno === ''){
        setError(phoneno,'Valid phone no Required');
    }else if(phonenoValue>=0 || phoneno <=9){
        setSuccess(phoneno);
    }else{
        setError(phoneno,'Provide a valid phone no')
    }
}; 