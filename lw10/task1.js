function IsPrimeNumber(item){
    if(Number(item)){
        for(i=2; i <= Math.sqrt(item,); i++){
            if(item % i === 0){
                console.log(item + " не простое число");
                return false;
            }
        }
        console.log(number + " простое число");
        return true;
    }
    let array = item;
    if(Array.isArray(item)) array = array.filter(IsPrime);
    else throw new TypeError("invalid input");
    if(array.length != 0){
        let str = "";
        array.forEach(element => {
            str += element.toString() + " ";    
        });
        if(str.split(" ").length > 2) console.log(str.replace("/ (\d)/g", ", $1") +  str + "простые числа");
        else console.log(str + "простое число");
    }
    
    function IsPrime(number){
        for(i=2; i <= Math.sqrt(number); i++)
            if(number % i === 0) return false;
        return true;
    }
}

IsPrimeNumber([19, 52, 38]);