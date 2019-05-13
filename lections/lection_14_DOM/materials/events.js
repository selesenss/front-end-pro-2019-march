window.onload = function () {
    var block = document.querySelector('.block');

    function handler(ev) {
        console.log(ev.type, ev)
    }

    block.addEventListener('click', handler);
    // block.addEventListener('mouseover', handler);
    // block.addEventListener('mouseout', handler);
    // block.addEventListener('mousemove', handler);

    // block.addEventListener('mousedown', handler);
    // block.addEventListener('mouseup', handler);
    // block.addEventListener('contextmenu', handler);

}