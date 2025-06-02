window.addEventListener("load", function(){
    document.querySelectorAll(".post-photos-slider").forEach(function(item){Slider(item)});

    function Slider(slider_item){                    //дает объекту слайдера соответсвующее поведение
        let gallery = slider_item.querySelector(".post-photos-gallery");
        let indexer = slider_item.querySelector(".post-number");
        let switch_forward_btn = slider_item.querySelector(".switch-buttons > .next-photo-button");
        let switch_back_btn = slider_item.querySelector(".switch-buttons > .previous-photo-button");
        gallery.firstElementChild.classList.add("active");
        indexer.textContent = "1/" + gallery.childElementCount;
        switch_forward_btn.addEventListener("click", function(){
            Switch(gallery.firstElementChild, "next")}
        );
        switch_back_btn.addEventListener("click", function(){
            Switch(gallery.firstElementChild, "previous")}
        );
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
        node.classList.remove("active");
        let indexer = node.parentNode.nextElementSibling;
        node.removeEventListener("click", function(event){ViewInModal(event.target.parentNode.parentNode)});
        if(direction == "next")
        {
            if(node.nextElementSibling != null && node.nextElementSibling != undefined){
                node.nextElementSibling.classList.add("active");
                indexer.textContent = (parseInt(
                    indexer.textContent.split("/")[0]) + 1) + "/" + node.parentNode.childElementCount;
                    if(!node.parentNode.parentNode.classList.contains("modal"))
                        node.nextElementSibling.addEventListener("click", function(event){ViewInModal(event.target.parentNode.parentNode)});
                    //    если оно уже не открыто как модальное
            }
            else{
                node.parentNode.firstElementChild.classList.add("active");
                node.parentNode.nextElementSibling.textContent = 1 + "/" + node.parentNode.childElementCount;
                if(!node.parentNode.parentNode.classList.contains("modal"))
                    node.parentNode.firstElementChild.addEventListener("click", function(event){ViewInModal(event.target.parentNode.parentNode)});
                //передаем в функцию именно слайдер
            }

        }
        if(direction == "previous")
        {
            if(node.previousElementSibling != null && node.previousElementSibling != undefined){
                node.previousElementSibling.classList.add("active");
                indexer.textContent = (parseInt(
                    indexer.textContent.split("/")[0]) - 1) + "/" + node.parentNode.childElementCount;
                if(!node.parentNode.parentNode.classList.contains("modal"))
                    node.previousElementSibling.addEventListener("click", function(event){ViewInModal(event.target.parentNode.parentNode)});
            }
            else{
                node.parentNode.lastElementChild.classList.add("active");
                indexer.textContent = node.parentNode.childElementCount + "/" + node.parentNode.childElementCount;
                if(!node.parentNode.parentNode.classList.contains("modal"))
                    node.parentNode.lastElementChild.addEventListener("click", function(event){ViewInModal(event.target.parentNode.parentNode)});
            }
        }      
        /**
         * @description навешивает на копию слайдера класс modal и пихает ее в body чтобы стилизовать в style.css в модальном окне, также добавляет доп интерфейс присущий модальному окну
         * @description т.к это копия то для нее остаются обработчики событий для кнопок и прогресс просмотра при выходе из модального окна 
         * @param {slider_html_code} slider - объект с разметкой слайдера 
         */
        function ViewInModal(slider){
            let modal_window = slider;
            let exit_btn = document.createElement("button");
            exit_btn.classList.add("modal-window-exit-btn");
            exit_btn.innerHTML = "<img src = \"Plus 24.png\"/>"
            modal_window.classList.add("modal");
            document.querySelector("body").appendChild(modal_window);
        }
    }
}
});