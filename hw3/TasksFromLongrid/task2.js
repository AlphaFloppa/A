function IsSimple(number){
    for(let i = 2; i < Math.sqrt(number); i++){
        if(number % i == 0){
            console.log("Не простое число");
            return;
        }
    }
    console.log("Простое число");
}