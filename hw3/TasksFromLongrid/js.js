function BinarySearch(array, elem){
    let sum = 0;
    for(let b = 50; b > 0; b--){
        if(array.length % 2 != 0){
            array.push(array[-1] + 1);
        }
        let i = array.length / 2 - 1;
        let first_half = array.slice(0, i + 1);
        let second_half = array.slice(i + 1);
        if(first_half[-1] < elem){
            sum += i;
            array = second_half;
            console.log(0);
        }
        else if(first_half[-1] > elem){
            array = first_half;
            console.log(1);
        }
        else if(first_half[-1] = elem){
            console.log(2);
            return sum;
        }
    }
    return sum;
}

console.log(BinarySearch([3, 5, 12, 48], 3));