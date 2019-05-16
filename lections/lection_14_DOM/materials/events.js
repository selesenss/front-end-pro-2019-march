window.onload = function () {
    var block = document.querySelector('.block');

    function handler(ev) {
        console.log(ev.type, ev)
    }

    // block.addEventListener('click', handler);
    // block.addEventListener('mouseover', handler);
    // block.addEventListener('mouseout', handler);
    // block.addEventListener('mousemove', handler);

    // block.addEventListener('mousedown', handler);
    // block.addEventListener('mouseup', handler);
    // block.addEventListener('contextmenu', handler);

    var x, y, diffX, diffY, a, b, startX, startY;

    function onMouseDown(event) {
        x = event.clientX;
        y = event.clientY;
        startX = event.target.offsetLeft;
        startY = event.target.offsetTop;

        document.addEventListener('mousemove', onMouseMove)
    }

    function onMouseMove(event) {
        block.style.left = startX + event.clientX - x + 'px'
        block.style.top = startY + event.clientY - y + 'px'
    }

    function onMouseUp(event) {
        document.removeEventListener('mousemove', onMouseMove)
    }

    block.addEventListener('mousedown', onMouseDown)

    block.addEventListener('mouseup', onMouseUp)

}