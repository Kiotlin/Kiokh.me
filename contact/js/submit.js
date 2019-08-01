(function submit(){
    var checkbox = document.getElementById('checkbox');
    var submitButton = document.getElementById('submit');

    checkbox.onclick = function(){
        if(checkbox.checked){
            submitButton.removeAttribute('disabled');
        }else {
            submitButton.setAttribute('disabled','true');
        }
    }

    submitButton.onclick = function(){
        var loader = document.getElementsByClassName('ajax-loader')[0];
        loader.classList.add('is-active');
        setTimeout(loader.classList.remove('is-active'), 2000);
    }

})();