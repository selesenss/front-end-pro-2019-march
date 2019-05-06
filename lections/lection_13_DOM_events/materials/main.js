console.log('Lection_13');


// console.dir(document)

window.onload = function() {
    var block = document.querySelector('.block')
    console.dir(block);
    // setTimeout(function(){
    //     block.innerHTML += 'FOFOFOFO'
    // }, 5000)

    // block.setAttribute('align', 'right');
    // block.setAttribute('data-dodo-fofo', 'right');

    // var classAttr = block.getAttribute('class')
    // console.log(classAttr)

    // block.className += ' active';

    // classList

    block.classList.add('active');

    // setInterval(function(){
    //     // console.log(block.classList.contains('active'))
    //     // block.classList.remove('active');
    //     // console.log(block.classList.contains('active'))

    //     console.log(block.classList.toggle('hide'));
    // }, 2000)

    
}


// data attrs
// <tag data-*="">

// --------------------------------------------------------------



window.onload = function() {
    var link = document.querySelector('.link')

    link.style.color = "green";
    link.style.backgroundColor = "red";
    // console.dir(link.style)

    setInterval(function(){
        var color = 'rgb(' + getR()+', '+getR()+', '+getR()+')';

        link.style.backgroundColor = color;
    }, 500)

    function getR(){
        return Math.floor(Math.random()*256);
    }

    
}