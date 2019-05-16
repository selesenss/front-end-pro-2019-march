console.log('lection_15')

window.onload = function () {
    block = document.createElement('div');
    block.innerHTML = 'Hello!';
    block.classList.add('element');

    block.addEventListener('click', function (ev) {
        console.log(ev.target);
    });

    console.dir(block);
    document.querySelector('.block-elem').appendChild(block);
    console.log(document.querySelectorAll('body *'));

    // -------------------------


    var list = ['title 1', 'title 2', 'title 3'];

    var target = document.querySelector('.list');
    var ul = document.createElement('ul')

    for (var i = 0, li; i < list.length; i++) {
        li = document.createElement('li');
        li.innerHTML = list[i];
        ul.appendChild(li);
    }


    target.appendChild(ul);
}