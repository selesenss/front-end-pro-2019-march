console.log('L_22')


// xhr request

// console.log(JSON.parse(xhr.responseText))
// console.log(xhr.responseText);

var xhr = new XMLHttpRequest();
xhr.open('GET', '/data.json', true);
// false -> sync
// true -> async

// var async = new Promise(function(resolve, reject){ 
//     xhr.addEventListener('readystatechange', function(){
//         if (xhr.readyState != 4) return;

//         resolve(xhr.responseText)
//     });
//     xhr.send();
// });

// async.then(function(resp){
//     console.log(resp)
// });


//  myFetch

function myFetch(method, url){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);

    return new Promise(function(resolve, reject){
        xhr.addEventListener('readystatechange', function(){
            if (xhr.readyState != 4) return;
    
            resolve(xhr.responseText)
        });
        xhr.send();
    });
}

myFetch('GET', '/data.json')
    .then(function(resp){
        console.log(resp)
    })

// ---------------------------------------

// fetch

fetch('data.json')
    .then(function(resp){
        return resp.json();
    })
    .then(function(value){
        console.log(value)
    })