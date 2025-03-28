let form_button = document.querySelector(".continue-button");
let input_email = document.getElementById("input-email");
let input_password = document.getElementById("input-password");
let suggest_text = document.querySelector(".text");
let password_switcher = document.querySelector(".eye-icon");
password_switcher.Hidden = true;
form_button.addEventListener("click", OnClick);
password_switcher.addEventListener("mousedown", SwitchPasswordMode);
function OnClick(){
    let temp = document.createElement("style");
    temp.innerHTML = ".input:invalid{outline: 1px solid rgb(225, 64, 64);}";
    document.getElementsByTagName("head")[0].append(temp);
    suggest_text.style.color = "rgba(230, 70, 70, 1)";
    let regexp = /.+@\w+\.ru/d;
    if((input_email.value=="" || input_password.value=="") && document.querySelector(".warning-label-container")==null){
        let warning_label_container = document.createElement("div");
        warning_label_container.classList.add("warning-label-container");
        let warning_text = document.createElement("span");
        warning_text.classList.add("warning-text");
        warning_text.innerHTML = "Поля обязательные";
        let warning_text_emoji = document.createElement("img");
        warning_text_emoji.classList.add("warning-text-emoji");
        warning_text_emoji.setAttribute("src", "../static/empty-input-emoji.png");
        warning_text_emoji.setAttribute("alt", "Try Ctrl-R");
        warning_label_container.append(warning_text_emoji, warning_text);
        document.querySelector("form.form").append(warning_label_container);
    }
    else if(!regexp.test(input_email.value) && document.querySelector(".warning-label-container")==null){
        let warning_label_container = document.createElement("div");
        warning_label_container.classList.add("warning-label-container");
        let warning_text = document.createElement("span");
        warning_text.classList.add("warning-text");
        warning_text.innerHTML = "Неверный формат электропочты";
        let warning_text_emoji = document.createElement("img");
        warning_text_emoji.classList.add("warning-text-emoji");
        warning_text_emoji.setAttribute("src", "../static/wrong-email-emoji.png");
        warning_text_emoji.setAttribute("alt", "Try Ctrl-R");
        warning_label_container.append(warning_text_emoji, warning_text);
        document.querySelector("form.form").append(warning_label_container);
    }
}

function SwitchPasswordMode(){
    if(password_switcher.Hidden){
        password_switcher.setAttribute("src", "../static/eye-closed-icon.png");
        input_password.setAttribute("type", "text");
    }
    else if(!password_switcher.Hidden){
        password_switcher.setAttribute("src", "../static/eye-open-icon.png");
        input_password.setAttribute("type", "password");
    }
    password_switcher.Hidden = !password_switcher.Hidden;
}