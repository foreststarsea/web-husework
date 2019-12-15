        var wrap = document.querySelector(".wrap");
        var next = document.querySelector(".arrow_right");
        var prev = document.querySelector(".arrow_left");
        

        next.onclick = function () {
            next_pic();
        }
        prev.onclick = function () {
            prev_pic();
        }
         var index ;


        function next_pic () {
            index++;
            if(index > 4){
                index = 0;
            }
            showCurrentDot();
            var newLeft;
            if(wrap.style.left === "-4800px"){
                newLeft = 0;
            }else{
                newLeft = parseInt(wrap.style.left)-1200;
            }
            wrap.style.left = newLeft + "px";
        }
        function prev_pic () {
            index--;
            if(index < 0){
                index = 4;
            }
            showCurrentDot();
            var newLeft;
            if(wrap.style.left === "0px"){
                newLeft = -4800;
            }else{
                newLeft = parseInt(wrap.style.left)+1200;
            }
            wrap.style.left = newLeft + "px";
        }

        var timer = null;
        function autoPlay () {
            timer = setInterval(function () {
                next_pic();
            },2000);
        }
        autoPlay();

        var container = document.querySelector(".container");
        container.onmouseenter = function () {
            clearInterval(timer);
        }
        container.onmouseleave = function () {
            autoPlay();    
        }

       
        var dots = document.getElementsByTagName("span");
        function showCurrentDot () {
            for(var i = 0, len = dots.length; i < len; i++){
                dots[i].className = "";
            }
            dots[index].className="on";
        }

        for (var i = 0, len = dots.length; i < len; i++){
            (function(i){
                
                dots[i].onclick = function () {
  
                    var dis = index - i;

                    wrap.style.left = (parseInt(wrap.style.left) +  dis * 1200)+"px";
                    index = i;
                    showCurrentDot();


                }
            })(i);            
        }