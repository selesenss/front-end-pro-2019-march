console.log('Lection 21');

// setTimeout(function(){
//     console.log(1)
//     f();

// }, 1000);

// function f(){
//     console.log(2)
// }

var example = new Promise(function(resolve, reject){
    // setTimeout(function(){
    //     var x = Math.floor(Math.random()*5)
    //     reject(x)
    //     if(x > 2) {
    //         resolve(x);
    //     }

    //     reject(x);
    // }, 1000);
})


// example
//     .then(
//         function(value){
//             console.log('Resolved', value);
//             // return value * 20;
//             return Promise.resolve(value * 20);
//         }, 
//         function(value){
//             console.warn('Rejected', value);

//             // return Promise.resolve();
//             return Promise.reject(value);
//         }
//     )
//     .then(function(value){
//         console.log('Resolved step 2', value);
//     }, function(value){
//         console.warn('Rejected step 2', value);
//     })
//     .catch();

// //----------------------------
function getRandom(from, to){
    return Math.floor(Math.random()*(to - from) + from);
}

//     new Promise(function(resolve, reject){
//         setTimeout(function(){
//             var list = [];
//             list.length = getRandom(0, 10)
//             for(var i = 0; i < list.length; i++){
//                 list[i] = getRandom(-20, 20)
//             }
//             resolve(list);
//         }, 500)
//     })
//     .then(onSuccess)
//     .then(filterData)
//     .then(saveToStorage)
//     .catch(function(error){ console.error(error) })
//     .finally(function(){
//         console.log(arguments)
//     })

function onSuccess(list){
    // code
    console.log('list: ', list);
    if(!list.length) {
        return Promise.reject('List is empty');
    }
    return list;
}

function filterData(values){
    // code
    var filtredList = values.filter(function(val){
        return val > 0;
    });
    if (!filtredList.length) {
       return Promise.reject('We filtred all values')
    }
    return filtredList;
}

function saveToStorage(list){
    localStorage.list = list;
}


// ---------------------------------------------

// Promise.all()


function asyncExampleOne(resolve, reject){
    setTimeout(function(){
        resolve('3s')
    }, 3000)
}

function asyncExampleTwo(resolve, reject){
    setTimeout(function(){
        resolve('5s')
    }, 5000)
}

function asyncExampleThree(resolve, reject){
    setTimeout(function(){
        reject('1s')
    }, 6000)
}


new Promise(asyncExampleOne)
    .then(function(value){
        console.log(value);
        return new Promise(asyncExampleTwo);
    })
    .then(function(value){
        console.log(value);
        return new Promise(asyncExampleTwo);
    })
    .then(function(value){
        console.log(value);
        return new Promise(asyncExampleOne);
    })
    .then(function(value){
        console.log(value);
    })


var listOfAsync = [
    new Promise(asyncExampleOne), 
    new Promise(asyncExampleTwo),
    25,
    Promise.reject(),
    new Promise(asyncExampleOne),
    // new Promise(asyncExampleThree)
];

Promise
    .all(listOfAsync)
    .then(function(values){
        console.log(values);
    })
    .catch(function(err){
        console.error(err);
    });



function getPromise(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve();
        }, getRandom(500, 1500))
    })
}

Promise.all([
    getPromise(),
    getPromise(),
    getPromise()
]).then(function(){
    runAfter([function(){}, function(){}, function(){}]);
})