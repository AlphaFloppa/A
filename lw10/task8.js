const Pivo = (array) => { return array.map((item) => item*3).filter((item) => item>10)}

console.log(Pivo([5, 3, 1, 10, 8, 2, 3, 7]));