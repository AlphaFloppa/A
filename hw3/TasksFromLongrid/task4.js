function FindElement(array, element){
    if(!Array.isArray(array)){
        console.log("user is dumb");
        return;
    }
    let index = array.indexOf(element);
    let type = typeof(array[0]);
    for(i = 1; i < array.length; i++){
        if(typeof(array[i]) != type){
            console.log("user is dumb");
            return;
        }
    }
    if(index == -1){
        console.log("Элемент отсутствует");
    } else {
        console.log(index);
    }
}