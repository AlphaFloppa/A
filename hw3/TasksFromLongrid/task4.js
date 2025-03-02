function FindElement(array, element){
    if(!Array.isArray(array)){
        console.log("user is dumb");
        return;
    }
    let type = typeof(array[0]);
    for(let i = 1; i < array.length; i++){
        if(typeof(array[i]) != type){
            console.log("user is dumb");
            return;
        }
    }       
    RecursiveDividing(array, element);
    return result;
}

let i, first_half, second_half, result;
console.log(FindElement([7, 8, 12, 16], 12));

function RecursiveDividing(arr, elem){
    console.log("S");
    if(arr.length === 1){
        result = i;
        console.log("exit");
        return;
    }
    if(arr.length % 2 != 0){
        arr.push(arr[-1] + 1);
    } 
    i = arr.length/2 - 1;
    first_half = arr.slice(0, i + 1);
    second_half = arr.slice(i + 1);
    if(first_half[-1] > elem){
        RecursiveDividing(first_half, elem);
        console.log("0");
    }
    else if(first_half[-1] < elem){
        RecursiveDividing(second_half, elem);
        console.log("1");
    }
    else if(first_half[-1] === elem){
        result = i;
        console.log("2");
    }
    
}