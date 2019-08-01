//handing submit button onclick event
var checkbox = document.getElementById('checkbox');
var loader = document.getElementsByClassName('ajax-loader')[0];
var submitButton = document.getElementById('submit');
var respon = document.getElementsByClassName('response-output')[0]; 

function validate(){
    var name = document.getElementById('yourname').value;
    var email = document.getElementById('youremail').value;
    var subject = document.getElementById('yoursubject').value;
    var message = document.getElementsByTagName('textarea')[0].value;
    
    if(name!='' && email!='' && subject!='' && message!=''){
        return true;
    }else {
        return false;
    }
}

function reset(){
    loader.classList.remove('is-active');
    submitButton.setAttribute('disabled','true');
    checkbox.checked = false;
}

(function submit(){

    checkbox.onclick = function(){
        if(checkbox.checked){
            submitButton.removeAttribute('disabled');
        }else {
            submitButton.setAttribute('disabled','true');
        }
    }

    submitButton.onclick = function(){
        if(validate()){
            // everything is ok
            loader.classList.add('is-active');
            setTimeout('reset()', 1800);
            respon.classList.remove('validation-errors');
            respon.classList.add('validation-success');
            respon.innerHTML = '送信して終わった。';
        }else {
            respon.classList.add('validation-errors');
            respon.innerHTML = '入力内容に不備があります。確認してもう一度送信してください。';
            submitButton.setAttribute('disabled','true');
            checkbox.checked = false;
        }
    }

})();