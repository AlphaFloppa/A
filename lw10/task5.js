let ObjectsArray2Array = (objsArray) => Array.from(
    objsArray.map((item) => Object.entries(item)).sort((first, second) => first[0][1] - second[0][1]), 
    (item) => item[1][1]);

console.log( ObjectsArray2Array([
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" },
  { "id": 3, "name": "Charlie" }]));