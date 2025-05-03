function MergeObjects(obj1, obj2){
    if(Object.keys(obj1) == null) return obj2;
    if(Object.keys(obj2) == null) return obj1;
    let mergement = obj1;
    for(let i of Object.keys(obj2)){
        mergement[i] = obj2[i];
    }
    return mergement;
}

const copy = {...obj1}
const func = (obj1, obj2) => ({...obj1, ...obj2})
// MergeObjects({a: 1, b: 2}, {b: 4, c: 3});
console.log(func({a: 1, b: 2, d: 4}, {b: 4, c: 3}))