console.log('Lection 7');


var data = {
    x: 10,
    info: {
        adress: 'Mechnikova',
        city: 'Kiev'
    }
}

data.z = false;

// console.log(data.value, data.x);




// -----------------------------------------

var some = 'val'

data.val = 150;
data['val'] = 250;
// console.log(data, data['val']);

// ----------------------------------------

for(var key in data){
    console.log(
        key,
        '------------', 
        data[key]
    );

    if (key == 'x') {
        console.log('XXX')
        data.some = true;
        data.val = undefined;
        // delete data.val;
    }
}

// var list = [123,23,123,123]
// for(var i = 0; i < list.length; i++){
//     console.log(list[i])
// }


// ----------------------------------------


var info = {
    y: 10,
    sum: function(a, b){
        return a + b;
    }
}

info.sum(20, 10);
Math.random()
console.log()
document.write();

console.log(Math)