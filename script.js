const passwordInit = document.getElementById("password");
const passwordConf = document.getElementById("password_confirm");
const passwordMessage = document.getElementById('password_error');
const submit = document.querySelector('button');
const inputs = document.querySelectorAll("input");
const form = document.querySelector("form")

function checkPassword(){
    if (passwordConf.value !== passwordInit.value){
        passwordConf.setCustomValidity("Invalid field.");
        passwordMessage.innerText = "Please enter the same password";
    } else {
        passwordMessage.innerText = "";
        passwordConf.setCustomValidity("");
    }
};


passwordConf.addEventListener("input",checkPassword);
passwordInit.addEventListener("focusout",checkPassword);


form.addEventListener("submit",(event)=>{
    if (passwordConf.value !== passwordInit.value){
        event.preventDefault();
    }
});





