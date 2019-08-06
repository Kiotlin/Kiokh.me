
var count = 0; //点赞计数

(function(){
    var star = document.getElementsByClassName('star')[0];
    var content = document.getElementsByClassName('star-content')[0];
    star.addEventListener("click", function(){
        star.classList.add('active');
        count = count + 1;
        content.innerHTML = count;
    });

})();