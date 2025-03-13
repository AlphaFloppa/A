let descriptions = document.querySelectorAll(".post-user-description");
let show_more_buttons = document.querySelectorAll(".reveal-description-button");
let short_descriptions = document.querySelectorAll(".post-short-user-description");
for(let i=0; i<show_more_buttons.length; ++i)
    show_more_buttons[i].addEventListener("click", function(){
        show_more_buttons[i].remove();
        short_descriptions[i].remove();
        descriptions[i].style.position = "static";
        descriptions[i].style.visibility = "visible";    
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
            likes_buttons[i].style.backgroundColor = "red";
        }
        else{
            like_symbols[i].style.color = "red";
            likes_counts[i].style.color = "black";
            likes_buttons[i].style.backgroundColor = "rgba(34, 34, 34, 0.05)";
        }
        likes_buttons[i].IsActive = !likes_buttons[i].IsActive;
    })