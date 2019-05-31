window.onload = function() {
    var blocks = document.querySelectorAll('.block');
    var data = localStorage.clicks ? JSON.parse(localStorage.clicks) : {};

    blocks.forEach(function(block, i){ 
        var span = block.querySelector('span');
        span.innerHTML = data['id-' + i] || 0;
        block.querySelector('button.click').addEventListener('click', function(){
            data['id-' + i] = data['id-' + i] ? data['id-' + i] + 1 : 1;
            span.innerHTML = data['id-' + i];
            localStorage.clicks = JSON.stringify(data);
        })
    })
    
}


