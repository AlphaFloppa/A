window.addEventListener("load", function(){
    let a = document.querySelectorAll(".post-photos-slider");
    a.forEach(function(item) {
        item.firstElementChild.firstElementChild.classList.add("active");       //первую фотографию в active
        item.lastElementChild.previousElementSibling.textContent = "1/" + item.firstElementChild.childElementCount;     //установка индексера на 1/колво фото
        item.lastElementChild.lastElementChild.addEventListener("click", function(event) {        //на кнопку
            Switch(item.firstElementChild.firstElementChild, {switchDirection: "next"})}
        );
        item.lastElementChild.firstElementChild.addEventListener("click", function(event) {         //тоже на кнопку
            Switch(item.firstElementChild.firstElementChild, {switchDirection: "previous"})}
        );
    });    


    function Switch(node, data_obj){
        if(!node.classList.contains("active")){           //доходим именно до active фотки
            Switch(node.nextElementSibling, data_obj);
            return null;
        }
        node.classList.remove("active");
        if(data_obj.switchDirection == "next")
        {
            if(node.nextElementSibling != null && node.nextElementSibling != undefined){
                node.nextElementSibling.classList.add("active");
                node.parentNode.nextElementSibling.textContent = (parseInt(
                    node.parentNode.nextElementSibling.textContent.split("/")[0]) + 1) + "/" + node.parentNode.childElementCount; // пересчет индексера
            }
            else{
                node.parentNode.firstElementChild.classList.add("active");
                node.parentNode.nextElementSibling.textContent = 1 + "/" + node.parentNode.childElementCount;
            }

        }
        if(data_obj.switchDirection == "previous")
        {
            if(node.previousElementSibling != null && node.previousElementSibling != undefined){
                node.previousElementSibling.classList.add("active");
                node.parentNode.nextElementSibling.textContent = (parseInt(
                    node.parentNode.nextElementSibling.textContent.split("/")[0]) - 1) + "/" + node.parentNode.childElementCount;
            }
            else{
                node.parentNode.lastElementChild.classList.add("active");
                node.parentNode.nextElementSibling.textContent = node.parentNode.childElementCount + "/" + node.parentNode.childElementCount;
            }
        }      
    }
});