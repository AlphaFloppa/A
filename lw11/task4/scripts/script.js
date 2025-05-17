let descriptions = document.querySelectorAll(".post-user-description");
let toggle_buttons = document.querySelectorAll(".reveal-description-button");
for(let i=0; i<toggle_buttons.length; ++i)
    toggle_buttons[i].addEventListener("click", function(){
        if(toggle_buttons[i].innerHTML == "еще") toggle_buttons[i].innerHTML = "свернуть";
        else if(toggle_buttons[i].innerHTML == "свернуть") toggle_buttons[i].innerHTML = "еще";
        descriptions[i].classList.toggle("short");    
    })




    
let likes_buttons = document.querySelectorAll(".likes-button");
let like_symbols = document.querySelectorAll(".like-symbol");
let likes_counts = document.querySelectorAll(".likes-count");



likes_buttons.forEach(
    (item) => {item.IsActive = false;})
for(let i=0; i<likes_buttons.length; ++i)
    likes_buttons[i].addEventListener("click", function(){
        if(!likes_buttons[i].IsActive){
            like_symbols[i].style.color = "white";
            likes_counts[i].style.color = "white";
            likes_counts[i].innerHTML = toString(parseInt(likes_counts[i].innerHTML) + 1);
            likes_buttons[i].style.backgroundColor = "red";
        }
        else{
            like_symbols[i].style.color = "red";
            likes_counts[i].style.color = "black";
            likes_counts[i].innerHTML = toString(parseInt(likes_counts[i].innerHTML) + 1);
            likes_buttons[i].style.backgroundColor = "rgba(34, 34, 34, 0.05)";
        }
        likes_buttons[i].IsActive = !likes_buttons[i].IsActive;
    })