window.onload = function() {
  var blocks = document.querySelectorAll('.test-block');
  var maxHeight = window.innerHeight;
  var maxWidth = window.innerWidth;

  setInterval(function () {
    for(i = 0; i < blocks.length; i++) {
      console.log(blocks[i]);
      blocks[i].style.left = getRand(maxHeight);
    }
  }, 2000);

  function getRand(maxValue) {
    return Math.floor(Math.random()*maxValue);
  }
};