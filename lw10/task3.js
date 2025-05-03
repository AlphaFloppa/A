function Pivo(array) {
    if (array === null || array.length == 0 || array === undefined) return null;
    let StrArray = array.map((item) => item.toString())
    map = new Map();
   StrArray.forEach(element => {
       map.set(element, StrArray.filter((item) => item == element).length);
   });
    return Object.fromEntries(map);
}


console.log(Pivo(["привет", "f", 1, "1"]));