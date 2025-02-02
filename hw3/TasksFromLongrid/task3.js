function FoundDividers(number){
    for(i = 2; i < Math.sqrt(number); i++){
        if(number % i == 0){
            console.log(i);
            console.log(number / i);
        }
    }
}