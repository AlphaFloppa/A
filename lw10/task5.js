let ObjectsArray2Array = (objsArray) => Array.from(
  objsArray.map((item) => Object.entries(item)).sort((first, second) => first[0][1] - second[0][1]),
  (item) => item[1][1]);

objsArray = [
  { "id": 1, "name": "Alice" },
  { "id": 2, "name": "Bob" },
  { "id": 3, "name": "Charlie" },
  { "id": 0, "name": "SSS" }]

console.log(ObjectsArray2Array(objsArray));
console.log(objsArray.map((item) => Object.entries(item)))