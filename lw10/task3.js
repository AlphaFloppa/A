function Pivo(array){
    if(array === null || array.length == 0 || array === undefined) return null;
    map = new Map();
    array.forEach(element => {
        map.set(element.toString(), array.join("").match(element).length + array.join("").match(element.toString()).length);
    });
    return Object.fromEntries(map);
}

let abc = Pivo(["привет", "f", 1, "1"]);
//for(let i in a) console.log(i, a[i]);
console.log(abc);