let name = document.getElementById("name");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let validName = false;
let validEmail = false;
let validPhone = false;
$("#danger").hide();
$("#success").hide();


name.addEventListener("blur", () => {
    let regex = /^([a-zA-Z])([a-zA-Z]){2,10}$/;
    let str = name.value;
    if (regex.test(str)) {
        name.classList.remove("is-invalid");
        validName = true;

    }
    else {
        name.classList.add("is-invalid");
         validName = false;
    }
})



email.addEventListener("blur", () => {
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){3,10}$/;
    let str = email.value;
    if (regex.test(str)) {
        email.classList.remove("is-invalid");
         validEmail = true;
    }
    else {
        email.classList.add("is-invalid");
         validEmail = false;
    }
})



phone.addEventListener("blur", () => {
    let regex = /^[0-9]{10}$/
    let str = phone.value;
    if (regex.test(str)) {
        phone.classList.remove("is-invalid");
         validPhone = true;
    }
    else {
        phone.classList.add("is-invalid");
         validPhone = false;
    }
})

let submit = document.getElementById("submit");
submit.addEventListener("click", (e) => {
    e.preventDefault();
    let success = document.getElementById("success");
    let danger = document.getElementById("danger");
    if (validName && validEmail && validPhone) {
        success.classList.add("show");
        $("#success").show();
        $("#danger").hide();
    }
    else {
        danger.classList.add("show");
        $("#success").hide();
        $("#danger").show();
    }
})
