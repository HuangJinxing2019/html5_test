window.onload = function(){
    //获取DOM元素
    var arrowEl = document.querySelector("#head > .headMain > .arrow");
    var liNodes = document.querySelectorAll("#head .headMain > .nav > .list > li")
    var UpNodes = document.querySelectorAll("#head .headMain > .nav > .list > li .up")
    var firstLiNode = liNodes[0];
    var firstUpNode = firstLiNode.querySelector(".up")

    var head = document.querySelector("#head")
    var content = document.querySelector("#content")

    var cLiNodes = document.querySelectorAll("#content .list > li")
    var cList = document.querySelector("#content .list")

    var home1LiNodes = document.querySelectorAll("#content > .list .home .home1 > li")
    var home2LiNodes = document.querySelectorAll("#content > .list .home .home2 > li")

    var home1 = document.querySelector("#content > .list .home .home1")

    var aboutUls = document.querySelectorAll("#content > .list > .about .about3 > .item >ul")


    var dotLis = document.querySelectorAll("#content > .dot > li")

    var team3 = document.querySelector("#content > .list > .team > section .team3")
    var team3Ul = document.querySelector("#content > .list > .team .team3 ul")
    var team3Lis = document.querySelectorAll("#content > .list > .team .team3 ul > li")

    var music = document.querySelector("#head > .headMain > .music")
    var audio = document.querySelector("#head > .headMain > .music audio")

    var mask = document.querySelector("#mask")
    var line = document.querySelector("#mask .line")
    var mains = document.querySelectorAll("#mask div")




    //同步当前屏
    var now = 0;

    var timer = 0;

    //上一屏
    var preIndex= 0;

    //开机动画
    loadingAn();
    function loadingAn(){
        var arr = ['bg1.jpg','bg2.jpg','bg3.jpg','bg4.jpg','bg5.jpg','about1.jpg','about2.jpg','about3.jpg','about4.jpg','worksimg1.jpg','worksimg2.jpg','worksimg3.jpg','worksimg4.jpg','team.png','greenLine.png'];
        var flag = 0;

        for(var i=0;i<arr.length;i++){
            var img = new Image();
            img.src = "./img/"+arr[i];
            img.onload = function(){
                flag++;
                line.style.width = flag/arr.length*100+"%";

            }
        }


        line.addEventListener("transitionend",function(){
            if(flag==arr.length){
                line.style.display = 'none'
                for(var i=0;i<mains.length;i++){
                    mains[i].style.height = 0;
                }
            }


        })

        mains[0].addEventListener("transitionend",function(){
            mask.remove();
            anArr[0]["inAn"]();
            home3D();
            audio.play();

        })

    }


    //音频


    music.onclick = function(){
        if(audio.paused){
            audio.play()
            music.style.background = "url(./img/musicon.gif)"
        }else{
            audio.pause();
            music.style.background = "url(./img/musicoff.gif)"
        }
    }

    /*出入场*/
    var anArr=[
        {
            inAn:function(){
                var home1 = document.querySelector("#content > .list .home .home1");
                var home2 = document.querySelector("#content > .list .home .home2");
                home1.style.transform="translateY(0)"
                home2.style.transform="translateY(0)"
                home1.style.opacity = 1
                home2.style.opacity = 1
            },
            outAn:function(){
                var home1 = document.querySelector("#content > .list .home .home1");
                var home2 = document.querySelector("#content > .list .home .home2");
                home1.style.transform="translateY(-600px)"
                home2.style.transform="translateY(100px)"
                home1.style.opacity = 0
                home2.style.opacity = 0
            },

        },
        {
            inAn:function(){
                var plane1 = document.querySelector("#content  .course .plane1");
                var plane2 = document.querySelector("#content  .course .plane2");
                var plane3 = document.querySelector("#content  .course .plane3");
                plane1.style.transform = "translate(0px,0px)"
                plane2.style.transform = "translate(0px,0px)"
                plane3.style.transform = "translate(0px,0px)"

            },
            outAn:function(){
                var plane1 = document.querySelector("#content  .course .plane1");
                var plane2 = document.querySelector("#content  .course .plane2");
                var plane3 = document.querySelector("#content  .course .plane3");
                plane1.style.transform = "translate(-200px,-200px)"
                plane2.style.transform = "translate(-200px,200px)"
                plane3.style.transform = "translate(200px,-200px)"
            },

        },
        {
            inAn:function(){
                var pencel1 = document.querySelector("#content  .works .pencel1");
                var pencel2 = document.querySelector("#content  .works .pencel2");
                var pencel3 = document.querySelector("#content  .works .pencel3");
                pencel1.style.transform = "translateY(0px)"
                pencel2.style.transform = "translateY(0px)"
                pencel3.style.transform = "translateY(0px)"
            },
            outAn:function(){
                var pencel1 = document.querySelector("#content  .works .pencel1");
                var pencel2 = document.querySelector("#content  .works .pencel2");
                var pencel3 = document.querySelector("#content  .works .pencel3");
                pencel1.style.transform = "translateY(-200px)"
                pencel2.style.transform = "translateY(200px)"
                pencel3.style.transform = "translateY(200px)"
            },

        },
        {
            inAn:function(){

                var Rect1 = document.querySelector("#content > .list > .about .about3 > .item:nth-child(1)");
                var Rect2 = document.querySelector("#content > .list > .about .about3 > .item:nth-child(2)");
                Rect1.style.transform = "rotate(0deg)"
                Rect2.style.transform = "rotate(0deg)"


            },
            outAn:function(){
                var Rect1 = document.querySelector("#content > .list > .about .about3 > .item:nth-child(1)");
                var Rect2 = document.querySelector("#content > .list > .about .about3 > .item:nth-child(2)");
                Rect1.style.transform = "rotate(45deg)"
                Rect2.style.transform = "rotate(-45deg)"

            },

        },
        {
            inAn:function(){

                var Rect1 = document.querySelector("#content > .list > .team .team1");
                var Rect2 = document.querySelector("#content > .list > .team .team2");
                Rect1.style.transform = "translateX(0px)"
                Rect2.style.transform = "translateX(0px)"

            },
            outAn:function(){

                var Rect1 = document.querySelector("#content > .list > .team .team1");
                var Rect2 = document.querySelector("#content > .list > .team .team2");
                Rect1.style.transform = "translateX(-200px)"
                Rect2.style.transform = "translateX(200px)"

            },

        }
    ]

    for(var i=0;i<anArr.length;i++){
        anArr[i]["outAn"]();

    }
//			setTimeout(function(){
//				anArr[0].inAn();
//			},2000)


    /*第五屏气泡效果*/

    biubiu()
    function biubiu(){

        var oc = null;

        var time1 = 0
        var time2 = 0

        for(var i=0;i<team3Lis.length;i++){

            team3Lis[i].onmouseenter = function(){
                for(var i = 0;i<team3Lis.length;i++){
                    team3Lis[i].style.opacity = ".5";

                }
                this.style.opacity = "1"
                addCanvas()

                oc.style.left = this.offsetLeft + 'px';
            }
        }


        function addCanvas(){
            if(!oc){
                oc = document.createElement("canvas");
                oc.width = team3Lis[0].offsetWidth;
                oc.height = team3Lis[0].offsetHeight*2/3;
                team3.onmouseleave = function(){
                    for(var i=0;i<team3Lis.length;i++){
                        team3Lis[i].style.opacity = "1";
                    }
                    removeCanvas();
                }

                team3.appendChild(oc);
                qiPao();
            }
        }

        function removeCanvas(){

            oc.remove();
            oc=null;
            clearInterval(time1)
            clearInterval(time2)

        }


        function qiPao(){

            if(oc.getContext){
                var ctx = oc.getContext("2d");
                var arr = [];
                time1 = setInterval(function(){
                    ctx.clearRect(0,0,oc.width,oc.height)
                    //动画
                    for(var i=0;i<arr.length;i++){
                        //						arr[i].r++;
                        //						arr[i].alp -= 0.01;
                        //						if(arr[i].alp<=0){
                        //							arr.splice(i,1)
                        //						}
                        arr[i].deg += 5;
                        arr[i].x = arr[i].startX +Math.sin(arr[i].deg*Math.PI/180)*arr[i].step*2
                        arr[i].y = arr[i].startY -(arr[i].deg*Math.PI/180)*arr[i].step/2
                        if(arr[i].y<=50){
                            arr.splice(i,1)
                        }

                    }

                    //绘制
                    for(const item of arr){
                        ctx.save();
                        ctx.fillStyle = "rgba("+item.red+","+item.green+","+item.blue+","+item.alp+")";
                        ctx.beginPath();
                        ctx.arc(item.x,item.y,item.r,0,2*Math.PI);
                        ctx.fill();
                        ctx.restore();
                    }
                },1000/60)



                time2 = setInterval(function(){
                    var r = Math.random()*6+2;
                    var x = Math.random()*oc.width;
                    var y = oc.height-r;

                    var red = Math.round(Math.random()*255);
                    var green = Math.round(Math.random()*255);
                    var blue = Math.round(Math.random()*255);
                    var alp = 1

                    var deg = 0;
                    var startX = x;
                    var startY = y;
                    var step = Math.random()*20+10;
                    arr.push({
                        x:x,
                        y:y,
                        r:r,
                        red:red,
                        green:green,
                        blue:blue,
                        alp:alp,
                        deg:deg,
                        startX:startX,
                        startY:startY,
                        step:step,
                    })
                },50)
            }
        }

    }




    //窗口的缩放
    window.onresize = function(){
        contentBind()
        cList.style.top = -now*(document.documentElement.clientHeight - head.offsetHeight) +'px'
        arrowEl.style.left = liNodes[now].offsetLeft+liNodes[now].offsetWidth/2 - arrowEl.offsetWidth/2 +'px'
    }


    //滚轮时间
    if(content.addEventListener){
        content.addEventListener('DOMMouseScroll',function(ev){
            ev = ev||event;

            clearTimeout(timer);

            timer = setTimeout(function(){
                fn(ev)
            },200)

        })
    }
    content.onmousewheel = function(ev){
        ev = ev||event

        clearTimeout(timer);

        timer = setTimeout(function(){
            fn(ev)
        },200)

    };
    function fn(ev){

        ev = ev||event;
        var dir = "";
        if(ev.wheelDelta){
            dir = ev.wheelDelta > 0? 'up':'down'
        }else if(ev.detail){
            dir = ev.detail > 0? 'down':'up'
        }
        preIndex = now;
        switch(dir){
            case 'up':
                if(now>0){
                    now--;
                    move(now);
                }


                break;
            case 'down':
                if(now<cLiNodes.length-1){
                    now++;
                    move(now);
                }

                break;

        }

    }


    //头部交互

    headBind();
    function headBind(){
        firstUpNode.style.width = "100%";
        arrowEl.style.left = firstLiNode.offsetLeft+firstLiNode.offsetWidth/2 - arrowEl.offsetWidth/2 +'px'



        for(var i = 0; i<liNodes.length; i++){
            //转绑很重要
            liNodes[i].index = i;

            liNodes[i].onclick = function(){


                move(this.index)
                now = this.index;
            }


        }

        for(var i = 0; i<dotLis.length; i++){
            //转绑很重要
            dotLis[i].index = i;

            dotLis[i].onclick = function(){

                preIndex = now
                move(this.index)
                now = this.index;
            }


        }
    }

    //内容交互
    contentBind();
    function contentBind(){
        content.style.height = document.documentElement.clientHeight - head.offsetHeight +'px'

        for(var i=0;i<cLiNodes.length;i++){
            cLiNodes[i].style.height = document.documentElement.clientHeight - head.offsetHeight +'px'
        }

    }

    function move(index){
        for(var i = 0;i<UpNodes.length;i++){
            UpNodes[i].style.width = ""
        }

        UpNodes[index].style.width = "100%"
        arrowEl.style.left = liNodes[index].offsetLeft+liNodes[index].offsetWidth/2 - arrowEl.offsetWidth/2 +'px'
        cList.style.top = -index*(document.documentElement.clientHeight - head.offsetHeight) +'px'

        for(var i = 0;i<dotLis.length;i++){
            dotLis[i].className = ""
        }
        dotLis[index].className = "active"

        //出入场
        if(anArr[index] && typeof anArr[index]["inAn"] === 'function'){

            anArr[index]["inAn"]()

        }
        if(anArr[preIndex] && typeof anArr[preIndex]["outAn"] === 'function'){

            anArr[preIndex]["outAn"]()

        }
    }


    /*第一屏的3d效果*/

    var oldIndex = 0;
    var timer3D = 0;
    var autoIndex = 0;
//			home3D();
    function home3D(){
        for(var i=0;i<home2LiNodes.length;i++){

            home2LiNodes[i].index = i;
            home2LiNodes[i].onclick = function(){
                clearInterval(timer3D)
                for(var i=0;i<home2LiNodes.length;i++){
                    home2LiNodes[i].classList.remove("active")
                }
                this.classList.add("active");



                //从左往右
                if(this.index > oldIndex){

                    home1LiNodes[this.index].classList.remove("leftShow");
                    home1LiNodes[this.index].classList.remove("leftHide");
                    home1LiNodes[this.index].classList.remove("rightHide");
                    home1LiNodes[this.index].classList.add("rightShow");


                    home1LiNodes[oldIndex].classList.remove("leftShow");
                    home1LiNodes[oldIndex].classList.remove("rightShow");
                    home1LiNodes[oldIndex].classList.remove("rightHide");
                    home1LiNodes[oldIndex].classList.add("leftHide");
                }
                //从右向左

                if(this.index < oldIndex){

                    home1LiNodes[this.index].classList.remove("rightShow");
                    home1LiNodes[this.index].classList.remove("leftHide");
                    home1LiNodes[this.index].classList.remove("rightHide");
                    home1LiNodes[this.index].classList.add("leftShow");


                    home1LiNodes[oldIndex].classList.remove("leftShow");
                    home1LiNodes[oldIndex].classList.remove("rightShow");
                    home1LiNodes[oldIndex].classList.remove("leftHide");
                    home1LiNodes[oldIndex].classList.add("rightHide");
                }


                oldIndex = this.index;
                autoIndex = this.index;
            }
        }
        //自动轮播
        move();
        function move(){
            clearInterval(timer3D)
            timer3D = setInterval(function(){
                autoIndex++;

                if(autoIndex==home1LiNodes.length){
                    autoIndex = 0
                }

                for(var i=0;i<home2LiNodes.length;i++){
                    home2LiNodes[i].classList.remove("active")
                }
                home2LiNodes[autoIndex].classList.add("active");

                home1LiNodes[autoIndex].classList.remove("leftShow");
                home1LiNodes[autoIndex].classList.remove("leftHide");
                home1LiNodes[autoIndex].classList.remove("rightHide");
                home1LiNodes[autoIndex].classList.add("rightShow");


                home1LiNodes[oldIndex].classList.remove("leftShow");
                home1LiNodes[oldIndex].classList.remove("rightShow");
                home1LiNodes[oldIndex].classList.remove("rightHide");
                home1LiNodes[oldIndex].classList.add("leftHide");

                oldIndex = autoIndex;

            },2000)

        }
        home1.onmouseenter = function(){
            clearInterval(timer3D)
        }
        home1.onmouseleave = function(){
            move()
        }



    }


    /*第四屏图片的炸裂效果*/
    picBoom()
    function picBoom(){
        for(var i=0;i<aboutUls.length;i++){

            change(aboutUls[i]);
        }
        function change(ul){
            var src = ul.dataset.src
            var w = ul.offsetWidth/2;
            var h = ul.offsetHeight/2;
            for(var i=0;i<4;i++){

                var liNode = document.createElement("li")

                liNode.style.width = w +'px';
                liNode.style.height = h +'px';

                var imgNode = document.createElement("img")


                imgNode.style.left = -(i%2)*w +'px'
                imgNode.style.top = -Math.floor(i/2)*h +'px'

                imgNode.src = src;

                liNode.appendChild(imgNode)
                ul.appendChild(liNode)



            }




            ul.onmouseenter = function(){

                var imgNodes = this.querySelectorAll("li > img")

                imgNodes[0].style.top = h +'px'
                imgNodes[1].style.left = -2*w +'px'
                imgNodes[2].style.left = w + 'px'
                imgNodes[3].style.top = -2*h +'px'

            }
            ul.onmouseleave = function(){
                var imgNodes = this.querySelectorAll("li > img")
                imgNodes[0].style.top = 0 +'px'
                imgNodes[1].style.left = -w +'px'
                imgNodes[2].style.left = 0 +'px'
                imgNodes[3].style.top = -h +'px'
            }
        }
    }


}