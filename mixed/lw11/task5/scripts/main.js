window.addEventListener("load", function(){
    let FormatDateTime = (number, offset) => (number + offset < 10 ? "0" : "") + (number + offset);  
    window.IsSliderExists = false;
    let desc_textbox = document.querySelector(".desc-area");
    desc_textbox.value = "";
    let result_btn = document.querySelector(".share-btn");
    result_btn.setAttribute("disabled", "");
    result_btn.addEventListener("click", function(){    //вывод в консоль информации о посте
        console.log("Фотографий: " + document.querySelector(".post-photos-gallery").childElementCount);
        let date = new Date();
        console.log(`Дата создания: ${date.getDay() + 1}.${FormatDateTime(date.getMonth(), 1)}.${date.getFullYear()} ${FormatDateTime(date.getHours(), 0)}:${FormatDateTime(date.getMinutes(), 0)}`);
        console.log("Описание: " + desc_textbox.value);
        console.log("Клиент: " + window.navigator.userAgent);
        alert("Post has been posted, check console");
    })
    desc_textbox.addEventListener("input", function(event){
        if(window.IsSliderExists){      //если картинок нет то и менять не надо
            if(event.target.value !== ""){     //изменилось с "" на не ""
                document.querySelector(".share-btn").removeAttribute("disabled");  
            }
            else if(event.target.value === "" ){   //изменился с не "" на ""
                document.querySelector(".share-btn").setAttribute("disabled", "");
            }
        }
    });
    let inital_input = document.querySelector("input[type=\"file\"].first");
    let extra_input = document.querySelector("input[type=\"file\"]:not(.first)");
    inital_input.addEventListener("change", AddPhoto); // после срабатывания сам input удалится на его месте будет слайдер 
    extra_input.addEventListener("change", AddPhoto);
    /**
    * @description если слайдера нет то создает, если есть то добавляет в него фото и перетаскивает прогресс слайдера на добавленное
    * @param {Event} event - событие изменения input 
     */
    function AddPhoto(event){
        if(event.target.files == null) return null;
        if(!window.IsSliderExists){     //создаем слайдер и навешиваем листенеры
            document.querySelector(".creation-container").replaceChild(CreateSlider(), document.querySelector(".preview-area"));
            window.IsSliderExists = true;
            Slider(document.querySelector(".post-photos-slider")); 
        }
        let slider = document.querySelector(".post-photos-slider");
        let gallery = document.querySelector(".post-photos-slider .post-photos-gallery"); 
        let new_img = document.createElement("div");
        gallery.childNodes.forEach(function(photo){   
            photo.classList.remove("active");
            photo.removeEventListener("click", AddModalBehaviour);
        });
        new_img.classList.add("post-photo", "active");      //установка нового фото как активное
        new_img.addEventListener("click", AddModalBehaviour);
        putUsersPhoto(new_img, event.target);
        gallery.appendChild(new_img);
        let indexer = slider.querySelector(".post-number");
        indexer.textContent = parseInt(     //увеличение текущего индекса после вставки фото
            indexer.textContent.split("/")[0]) + 1 + "/" + gallery.childElementCount;
    }
    /**
    * @description сует в разметку фото настоящее фото от пользователя из input
    * @param {HTMLImageElement} img - начальная пустая разметка фото
    * @param {File} file_input - input с атрибутом type = "file"
     */
    function putUsersPhoto(img, file_input){    //мастшабирование достигается в slider.css
        let file = new FileReader();
        file.readAsDataURL(file_input.files[file_input.files.length - 1]);
        file.addEventListener("load", function(event){
            img.style.backgroundImage = "url(" + event.target.result + ")";
        });

    }
})