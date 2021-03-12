

var data = {
    x: 10,
    y: 20
}


data.z = 300;
data.x = 0;
// delete data.x;

// for(var key in data){
//     console.log(key)
// }

// ----------------

Object.defineProperty(data, 'example', {
    value: 80,
    writable: false,
    enumerable: false,
    configurable: false
});

// for(var key in data){
//     console.log(key)
// }
console.log(data)

Object.defineProperty(data, 'example', {
    value: 250,
    writable: false,
    enumerable: true,
    configurable: true
});

console.log(data);

// get, set