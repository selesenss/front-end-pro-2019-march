function sumAll(){
    var sum = 0;

    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
}


res = sumAll(2, 7, 8)
// console.log(res)
res = sumAll(2, 7, 8, 8, 9, 34, 2, 2)
// console.log(res)



// ----------------------------------------------


function getCentralElems(){
    var listOfCentralElems = [];
    for(var i = 0; i < arguments.length; i++){
        var item = arguments[i]
        
        // getCentral from item
        var count =  item.length % 2 == 0 ? 2 : 1
        var central = Math.ceil(item.length/2) - 1; 

        // if(isEven) {
        //     var slicedElems = item.slice(central, central + 2);
        //     // listOfCentralElems.push(item[central])
        //     // listOfCentralElems.push(item[central + 1])
        //     listOfCentralElems = listOfCentralElems.concat(slicedElems);
        // } else {   
        //     listOfCentralElems.push(item[central])
        // }

        var slicedElems = item.slice(central, central + count);
        listOfCentralElems = listOfCentralElems.concat(slicedElems);

    }

    return listOfCentralElems;
}


var res = getCentralElems(
    [1, 7, 8, 9],
    [2, 6, 8, 9, 3, 4, 5],
    [8, 9, 8, 6],
    [1, 7, 5, 3, 6]
);

console.log(res);