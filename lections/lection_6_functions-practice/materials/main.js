function sumAll(){
    var sum = 0;

    for(var i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    return sum;
}


res = sumAll(2, 7, 8)
console.log(res)
res = sumAll(2, 7, 8, 8, 9, 34, 2, 2)
console.log(res)