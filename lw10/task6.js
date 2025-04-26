let mapObject = (object, callback) => Object.fromEntries(Object.entries(object).map((item) => callback(item[1])));

//const nums = { "a": 1, "b": 2, "c": 3 };
console.log(mapObject({ "a": 1, "b": 2, "c": 3 }, (x) => x * 2)); // { a: 2, b: 4, c: 6 }