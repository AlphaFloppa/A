/*let posts_times = document.querySelectorAll(".post-time");
let post_creation_date;
let months_dict = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
for(let i = 0; i < posts_times.length; ++i)
{
    post_creation_date = new Date(parseInt(posts_times[i].innerHTML));
    posts_times[i].innerHTML = post_creation_date.getDate() + " " + months_dict[post_creation_date.getMonth()] + " в " + 
                                post_creation_date.getHours() + ":" + post_creation_date.getMinutes();
                                 
}*/ 
let descriptions = document.querySelectorAll(".post-user-description");
let show_more_buttons = document.querySelectorAll(".reveal-description-button");
for(let i=0; i<show_more_buttons.length; ++i)
    show_more_buttons[i].addEventListener("click", function(){
        show_more_buttons[i].remove();
        descriptions[i].classList.remove("short");    
    })
let likes_buttons = document.querySelectorAll(".likes-button");
let like_symbols = document.querySelectorAll(".like-symbol");
let likes_counts = document.querySelectorAll(".likes-count");
console.log(likes_counts[0].innerHTML);
console.log(likes_buttons);
likes_buttons.forEach(
    (item) => {item.IsActive = false;})
for(let i=0; i<likes_buttons.length; ++i)
    likes_buttons[i].addEventListener("click", function(){
        if(!likes_buttons[i].IsActive){
            like_symbols[i].style.color = "white";
            likes_counts[i].style.color = "white";
            likes_counts[i].innerHTML = (parseInt(likes_counts[i].innerHTML) + 1).toString()
            likes_buttons[i].style.backgroundColor = "red";
        }
        else{
            like_symbols[i].style.color = "red";
            likes_counts[i].style.color = "black";
            likes_counts[i].innerHTML = (parseInt(likes_counts[i].innerHTML) + 1).toString()
            likes_buttons[i].style.backgroundColor = "rgba(34, 34, 34, 0.05)";
        }
        likes_buttons[i].IsActive = !likes_buttons[i].IsActive;
    })