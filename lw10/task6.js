function mapObject(object, callback) {return Object.fromEntries(Object.entries(object).map((item) => [item[0], callback(item[1])]))}

//const nums = { "a": 1, "b": 2, "c": 3 };
console.log(mapObject({ a: 1, "b": 3, "c": 3, ALLO: 40 }, (x) => x.toString())); // { a: 2, b: 4, c: 6 }