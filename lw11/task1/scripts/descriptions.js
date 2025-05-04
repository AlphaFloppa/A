//let descriptions = document.querySelectorAll(".post-user-description");
let show_more_buttons = document.querySelectorAll(".reveal-description-button");
show_more_buttons.forEach((item) =>   
    item.addEventListener("click", function(){
        item.previousElementSibling.classList.remove("short");    
        item.remove();
    }));