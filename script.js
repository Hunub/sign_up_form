const passwordInit = document.getElementById("password");
const passwordConf = document.getElementById("password_confirm");
const passwordMessage = document.getElementById('password_error');
const submit = document.querySelector('button');
const inputs = document.querySelectorAll("input");

console.log("Hello");
passwordConf.addEventListener("focusout",(event)=>{
    
    if (passwordConf.value !== passwordInit.value){
        passwordMessage.innerText = "Please enter the same password";
    } else {
        passwordMessage.innerText = "";
    }
});

submit.addEventListener("click",()=>{
    for(let i=0; i<inputs.length; i++){
        inputs[i].setAttribute("required","");
    }
});

