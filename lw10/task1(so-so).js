function IsPrimeNumber(item){
    if(item.length == 0) return new TypeError("UltraPivo");
    if(typeof(item) === "number"){
        for(i=2; i <= Math.sqrt(item,); i++){
            if(item % i === 0){
                console.log(item + " не простое число");
                return false;
            }
        }
        console.log(number + " простое число");
        return true;
    }

    if(!Array.isArray(item)) throw new TypeError("invalid input");
    let unprimesArray = item.filter((item) => !IsPrime(item));
    let array = item.filter(IsPrime);
    if(array.length != 0){
        let str = "";
        array.forEach(element => {
            str += element.toString() + ", ";    
        });
        if (array.length >= 2) {
            console.log(str.substring(0, str.length-2) + " простые числа ");
        }
        else {
            console.log(str.substring(0, str.length-2) + " простое число ");
        }
    }
    if(unprimesArray.length != 0){
        let str2 = "";
        unprimesArray.forEach(element => {
            str2 += element.toString() + ", ";    
        });
        if (unprimesArray.length >= 2) {
            console.log(str2.substring(0, str2.length-2) + " не простые числа ");
        }
        else {
            console.log(str2.substring(0, str2.length-2) + " не простое число ");
        }
    }

  
    function IsPrime(number){
        for(i=2; i <= Math.sqrt(number); i++)
            if(number % i === 0) return false;
        return true;
    }
}

IsPrimeNumber([19, 52, 38]);