console.log('Lection_17');


var list = [1, '-22', 0,  '-3', 4, '5', -6, 9, '0'];
var res;

res = list.forEach(function(item, i, source){
    // console.log(item, i, source)
});

// console.log(res);

//---------------------

res = list.filter(function(item, i, source){
    return item > -1;
});

// console.log(res);

//---------------------

res = 
    list.map(function(item, i, source){
        return +item;
    })
    .filter(function(item) {
        return item < 0;
    })

// console.log(res);


var oldRes = [];
for(var i = 0; i < list.length; i++){
    if(+list[i] === 0) break;
    if (+list[i] < 0) {
        oldRes.push(+list[i]);
    }
}

// console.log(oldRes);


//---------------------

res = list.every(function(item){
    // return item > 0;
    return item !== undefined;
});

res = list.some(function(item, i){
    // return item > 0;
    // console.log(item);
    if(i == 2) {
        return true;
    }
    return false;
});

// console.log(res)
//---------------------


list = [2, 15, 12, 7, 6, 11];
// res = list.reduce(function(prev, item, index){
//     console.log("prev:" + prev, "item: " + item, "index: " + index)
//     return prev + item;
// })

// res = list.map(function(item){
//     return {
//         value: item*item
//     }
// }).filter(function(obj){
//     return obj.value <= 100;
// })

// res = list.reduce(function(prev, item){
//     if(item*item < 100) 
//         prev.push({
//             value: item*item
//         })

//    return prev;
// }, [])

// res = list.reduce(function(prev, item, index){
//    return prev + item;
// })
// console.log(res)


// --------------


window.onload = function(){
    var tds = document.querySelectorAll('td');

    for(var i = 0; i < tds.length; i++){
        // tds[i].classList.add('active_2');

        // tds[i].addEventListener('mouseover', function(){
        //     this.style.backgroundColor = 'red';
        //     this.innerHTML += i;
        // })
    }

    // tds.forEach(function(td, i){
    //     td.classList.add('active');

    //     td.addEventListener('mouseover', function(){
    //         this.style.backgroundColor = 'red';
    //         this.innerHTML += i;
    //     })
    // });

    tds.forEach(td => td.classList.add('active'));
}