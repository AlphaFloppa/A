window.addEventListener("load", function(){
    window.IsSliderExists = false;
    let inital_input = document.querySelector("input[type=\"file\"].first");
    let extra_input = document.querySelector("input[type=\"file\"]:not(.first)");
    inital_input.addEventListener("change", A); // после срабатывания
    extra_input.addEventListener("change", A);
    /**
    * @description если слайдера нет то создает, если есть то добавляет в него фото и перетаскивает прогресс слайдера на добавленное
    * @param {Event} event - событие изменения input 
     */
    function A(event){
        if(event.target.files == null) return null;
        if(!window.IsSliderExists){
            document.querySelector(".creation-container").replaceChild(CreateSlider(), document.querySelector(".preview-area"));
            window.IsSliderExists = true;
            //если слайдер создался значит как минимум одно фото есть
            //document.querySelector("button:disabled").removeAttribute("disabled");  TODO
        }
        let slider = document.querySelector(".post-photos-slider");
        let gallery = document.querySelector(".post-photos-slider .post-photos-gallery");
        let new_img = document.createElement("div");
        gallery.childNodes.forEach(function(photo){photo.classList.remove("active")});
        new_img.classList.add("post-photo", "active");
        putUsersPhoto(new_img, event.target);
        gallery.appendChild(new_img);
        let indexer = slider.querySelector(".post-number");
        indexer.textContent = parseInt(
            indexer.textContent.split("/")[0]) + 1 + "/" + gallery.childElementCount;
        Slider(slider);
    }
    /**
    * @description сует в разметку фото настоящее фото от пользователя из input
    * @param {HTMLImageElement} img - начальная пустая разметка фото
    * @param {File} file_input - input с атрибутом type = "file"
     */
    function putUsersPhoto(img, file_input){
        let file = new FileReader();
        file.readAsDataURL(file_input.files[file_input.files.length - 1]);
        file.addEventListener("load", function(event){
            img.style.backgroundImage = "url(" + event.target.result + ")";
        });

    }
})