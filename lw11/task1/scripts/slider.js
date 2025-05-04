window.addEventListener("load", function(){
    let a = document.querySelectorAll(".post-photos-slider");
    a.forEach(function(item) {
        item.firstElementChild.firstElementChild.classList.add("active");
        item.lastElementChild.previousElementSibling.textContent = "1/" + item.firstElementChild.childElementCount;
        item.lastElementChild.lastElementChild.addEventListener("click", function(event) {
            Switch(item.firstElementChild.firstElementChild, {switchDirection: "next"})}
        );
        item.lastElementChild.firstElementChild.addEventListener("click", function(event) {
            Switch(item.firstElementChild.firstElementChild, {switchDirection: "previous"})}
        );
    });    
    //функция для перехода на следующее (в нужном направлении) фото
    //рекурсивно идет до активного фото(return чтобы после перехода ничео не натворило), data_obj - объект с полем направления
    function Switch(node, data_obj){
        if(!node.classList.contains("active")){
            Switch(node.nextElementSibling, data_obj);
            return null;
        }
        node.classList.remove("active");
        if(data_obj.switchDirection == "next")
        {
            if(node.nextElementSibling != null && node.nextElementSibling != undefined){
                node.nextElementSibling.classList.add("active");
                node.parentNode.nextElementSibling.textContent = (parseInt(
                    node.parentNode.nextElementSibling.textContent.split("/")[0]) + 1) + "/" + node.parentNode.childElementCount;
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