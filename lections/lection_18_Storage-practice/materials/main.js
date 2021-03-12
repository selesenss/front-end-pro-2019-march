console.log('Lection_18');

// JSON
// WebStorage


// localStorage.x = 'hello x';
// localStorage['example'] = 200;

console.log(window.localStorage)
console.log(localStorage['example']);

var data = {
    x: 10,
    y: 20
}


// localStorage.value = data;


// JSON

var info = {
    adress: {
        street: "Mechnikova",
        code: 4053,
        inCity: true
    },
    city: 'Kiev',
    counter: 0
};

if(!localStorage.info)
    localStorage.info = JSON.stringify(info)

window.onload = function(){
    document.querySelector('#click-me').addEventListener('click', function(){
        if(!localStorage.info) return;

        var valueFromLocal = JSON.parse(localStorage.info);

        valueFromLocal.counter++;

        localStorage.info = JSON.stringify(valueFromLocal);

        // session


        sessionStorage.foo = JSON.stringify(valueFromLocal.adress);
    })
}