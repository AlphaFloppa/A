function CountVowels(str){
    let array = str.toLowerCase().match(/[уеёыаоэяию]/g);
    if(array != null){
        let output = "";
        array.forEach(element => {
            output += element;
        });
        console.log(array.length + " (" + array + ")");
    }
}

CountVowels("Привет МИР");