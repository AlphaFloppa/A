function IsSimple(number){
    for(i = 2; i < Math.sqrt(number); i++){
        if(number % i == 0){
            console.log("Не простое число");
            return;
        }
    }
    console.log("Простое число");
}