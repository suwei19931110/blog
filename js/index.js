
window.onload = function () {
    var message = document.getElementById('message');
    var slider = document.getElementById('slider');
    var bottom = document.getElementById('bottom');
    var back = document.getElementById('back');
    var timer ;

    message.onclick = function () {
        slider.style.right = 0 + 'px';
    }
    bottom.onclick = function () {
        slider.style.right = -200 + 'px';
    }
//???????
    back.onclick = function () {
        document.documentElement.scrollTop = document.documentElement.scrollTop - 30 ;

        timer = setInterval(back.onclick,50);
        if(document.documentElement.scrollTop == 0){
            clearInterval(timer);
        }
    }

    // function hide(){
    //     if(document.documentElement.scrollTop <= 456){
    //         back.style.display = 'none';
    //     }
    // }
    function show() {
        if(document.documentElement.scrollTop > 456){
            back.style.display = 'block';
        }
    }

    hide();
    show();
}




