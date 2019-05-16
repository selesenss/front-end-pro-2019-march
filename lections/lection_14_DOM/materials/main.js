console.log('Lection_14');

window.onload = function () {

    var container = document.querySelector('.container');
    // var link = document.querySelector('.link');
    // var input = document.querySelector('.input');

    // // console.log(link.href)
    // console.dir(container)
    // // console.dir(input)

    // container.dataset.fullName = "Maxim";

    //----------------------------------------------

    var btn = document.querySelector('.btn');
    console.dir(btn)
    // DOM Level 0
    // btn.onclick = function (event) {
    //     console.dir(event);

    //     this.innerHTML += " Clicked";
    //     event.target.innerHTML += ' target!'
    //     callBackClick1();
    //     callBackClick2();
    // }

    // btn.onclick = callBackClick1;
    // btn.onclick = callBackClick2;

    // setTimeout(function () {
    //     btn.onclick = null;
    // }, 3000)


    // DOM Level 2

    function onClick(event) {
        console.dir(event);

        this.innerHTML += " Clicked";
        event.target.innerHTML += ' target!'
        callBackClick1();
        callBackClick2();
    }

    btn.addEventListener('click', onClick);
    // btn.removeEventListener('click', onClick);
    setTimeout(function () {
        btn.removeEventListener('click', onClick);
    }, 3000)
}




function callBackClick1() {}

function callBackClick2() {}