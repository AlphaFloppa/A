window.addEventListener("load", function(){
    document.querySelectorAll(".post-photos-slider").forEach(function(item){Slider(item)});

    function Slider(slider_item){                    //дает объекту слайдера соответсвующее поведение
        let gallery = slider_item.querySelector(".post-photos-gallery");
        let indexer = slider_item.querySelector(".post-number");
        let switch_forward_btn = slider_item.querySelector(".switch-buttons > .next-photo-button");
        let switch_back_btn = slider_item.querySelector(".switch-buttons > .previous-photo-button");
        if(slider_item.querySelector(".post-photo.active") == null){
            gallery.firstElementChild.classList.add("active");
            indexer.textContent = "1/" + gallery.childElementCount;
        }
        gallery.querySelector(".active").addEventListener("click", A);
        switch_forward_btn.addEventListener("click", function(){
            Switch(gallery.firstElementChild, "next")}
        );
        switch_back_btn.addEventListener("click", function(){
            Switch(gallery.firstElementChild, "previous")}
        );
    }
    /**
 * @description организует логику перехода на другое фото и возможности открытия в модальном окне 
 * @param {photo_html_code} node - разметка фото
 * @param {string} direction - указывает какая была нажата кнопка (с каким направлением)
 * @returns {null} 
 */
    function Switch(node, direction){
        if(!node.classList.contains("active")){    //рекурсивно идет до активного фото(return чтобы после перехода ничего не натворило)
            Switch(node.nextElementSibling, direction);
            return null;
        }
        console.log(node);
        console.log(node.parentNode);
        node.classList.remove("active");
        node.removeEventListener("click", A);
        let indexer = node.parentNode.parentNode.querySelector(".post-number");
        if(direction == "next")
        {
            if(node.nextElementSibling != null && node.nextElementSibling != undefined){
                node.nextElementSibling.classList.add("active");
                indexer.textContent = (parseInt(
                    indexer.textContent.split("/")[0]) + 1) + "/" + node.parentNode.childElementCount;
                if(document.querySelector(".modal-window") == null)
                    node.nextElementSibling.addEventListener("click", A);
                    //    если оно уже не открыто как модальное
            }
            else{
                node.parentNode.firstElementChild.classList.add("active");
                node.parentNode.nextElementSibling.textContent = 1 + "/" + node.parentNode.childElementCount;
                if(document.querySelector(".modal-window") == null)
                    node.parentNode.firstElementChild.addEventListener("click", A);
                //передаем в функцию именно слайдер
            }

        }
        if(direction == "previous")
        {
            if(node.previousElementSibling != null && node.previousElementSibling != undefined){
                node.previousElementSibling.classList.add("active");
                indexer.textContent = (parseInt(
                    indexer.textContent.split("/")[0]) - 1) + "/" + node.parentNode.childElementCount;
                if(document.querySelector(".modal-window") == null)
                    node.previousElementSibling.addEventListener("click", A);
            }
            else{
                node.parentNode.lastElementChild.classList.add("active");
                indexer.textContent = node.parentNode.childElementCount + "/" + node.parentNode.childElementCount;
                if(document.querySelector(".modal-window") == null)
                    node.parentNode.lastElementChild.addEventListener("click", A);
            }
        }      
    }
    /**
    * @description навешивает на копию слайдера класс modal, заново навешивает поведение слайдера и пихает ее в body чтобы стилизовать в style.css в модальном окне, также добавляет возможность выхода
    * @description прогресс просмотра при выходе из модального окна остается
    * @param {slider_html_code} slider - объект с разметкой слайдера 
    */
    function ViewInModal(slider){
        if(document.querySelector(".modal-window") != null) return null;
        let modal_slider = slider.cloneNode(true);
        Slider(modal_slider);
        let exit_btn = document.createElement("button");
        let modal_window = document.createElement("div");
        let modal_layer = document.createElement("div");
        modal_layer.classList.add("modal-layer");
        exit_btn.classList.add("modal-window-exit-btn");
        exit_btn.addEventListener("click", function(){RemoveModal(slider)});
        document.addEventListener("keydown", function(event){
            if(event.code == "Escape"){
                RemoveModal(slider);
            }
        });
        modal_slider.prepend(exit_btn);
        modal_slider.classList.add("modal");
        modal_window.classList.add("modal-window");
        modal_window.prepend(modal_layer);
        modal_window.append(modal_slider);
        modal_window.style.setProperty("transform", "translateY(" + window.pageYOffset + "px)");
        document.querySelector("body").prepend(modal_window);
        document.querySelector("body").style.overflow = "hidden";
        document.querySelector(".modal-layer").addEventListener("click", function(){RemoveModal(slider)});
    }

    function A(event){ViewInModal(event.target.parentNode.parentNode);}
    function RemoveModal(slider){
        if(document.querySelector(".modal-window") != null){
            slider.querySelector(".post-number").textContent = document.querySelector(".modal-window .post-number").textContent;
            slider.querySelector(".post-photos-gallery").innerHTML = document.querySelector(".modal-window .post-photos-gallery").innerHTML;
            Slider(slider);             
            //выгрузка прогресса в основной слайдер путем копирования разметки галереи с active классами и индексатора
            document.querySelector("body").removeChild(document.querySelector(".modal-window"));
            document.querySelector("body").style.overflow = "visible";    
        }
    }
});