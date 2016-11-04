/**
 * Created by Administrator on 2016/10/26.
 */
$(document).ready(function(){
   "use strict";
    var body=$('body');
    body.niceScroll({
        cursorcolor: "#ccc",//#CC0071 光标颜色
        cursoropacitymax: 1, //改变不透明度非常光标处于活动状态（scrollabar“可见”状态），范围从1到0
        touchbehavior: false, //使光标拖动滚动像在台式电脑触摸设备
        cursorwidth: "8px", //像素光标的宽度
        cursorborder: "0", // 游标边框css定义
        cursorborderradius: "5px",//以像素为光标边界半径
        autohidemode: true, //是否隐藏滚动条
        zindex:200,
        enablekeyboard:true
    });
});

/*导航条插件 jquery.nav*/
$(document).ready(function(){
    "use strict";
    $.fn.extend({
        pageNav:function(){
            this.on('click','a',function(){
                var element=$(this);
                var moduleId=element.attr('data-moduleid');
                if(!element.hasClass('active')){
                    $(this).addClass('active').parent().siblings().children().removeClass('active');
                }
                //获取导航条A标签属性值
                if(moduleId==undefined || moduleId==null)return;
                if(moduleId=='pageOne'){
                    $('html, body').animate({
                        scrollTop:0
                    },1000,function(){
                    });
                }else{
                    var moduleTop=$('#'+moduleId).offset().top;//根据获取过来的属性值，查询对应模块所在位置。
                    var moduleHeight=$('#'+moduleId).outerHeight();
                    $('html, body').animate({
                        scrollTop:moduleTop-(moduleHeight/2)
                    },1000,function(){
                    });
                }
            });
        }
    });
    var navList=$('#nav-toggle');
    navList.pageNav();
});


$(document).ready(function(){
   "use strict";
    var banner=$('#banner');
    if(banner[0]!=undefined || banner[0]!=null){
        banner.unslider({
            pause:true,
            animation: 'fade',
            arrows:false,
            speed: 3000,               // 动画的滚动速度
            delay: 5000,              //  每个滑块的停留时间
            complete: function() {},  //  每个滑块动画完成时调用的方法
            keys: true,               //  是否支持键盘
            dots: true,               //  是否显示翻页圆点
            fluid: true,              //  支持响应式设计（有可能会影响到响应式）
            autoplay: true
        });
    }
    return false;

});


