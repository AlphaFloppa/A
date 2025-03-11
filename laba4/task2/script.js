let description = document.querySelector(".post-user-description");
let show_more_button = document.querySelector(".reveal-description-button");
let short_description = document.querySelector(".post-short-user-description");
show_more_button.addEventListener("click", function(){
    show_more_button.remove();
    short_description.remove();
    description.style.position = "static";
    description.style.visibility = "visible";    
})
let likes_button = document.querySelector(".likes-button");
let like_symbol = document.querySelector(".like-symbol");
let likes_count = document.querySelector(".likes-count");
likes_button.IsActive = false;
likes_button.addEventListener("click", function(){
    if(!likes_button.IsActive){
        like_symbol.style.color = "white";
        likes_count.style.color = "white";
        likes_button.style.backgroundColor = "red";
    }
    else{
        like_symbol.style.color = "red";
        likes_count.style.color = "black";
        likes_button.style.backgroundColor = "rgba(34, 34, 34, 0.05)";
    }
    likes_button.IsActive = !likes_button.IsActive;
})