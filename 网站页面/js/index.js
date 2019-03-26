$(function () {
    window.onload = function(){
        window.scrollTo(0,0);
    };
//        顶部颜色变化
    var scrollChange = $(window).scroll(function (event) {
        /*监听滚动条高度*/
        var winPos = $(window).scrollTop();
        /*初始化获取模块高度*/
        var he1 = $('.nav-index .product-img.five-div').height();
        var he2 = $('.nav-index .four-div').height();
        var he3 = $('.nav-us .us-data .container2').height()+20;
        var he4 = $('.nav-product .two-div-text').height()+130;

        if (winPos > 50) {
            $('.nav-menu').css('background-color', '#000').css('transition', 'border-bottom 1s')
        } else {
            $('.nav-menu').css('background-color', 'transparent')
        }
/*模块飞入*/
        if(winPos>he1){
            $('.five-div-img>div').removeClass('fei');
        }
        if(winPos>he4){
            $('.nav-product .two-div-img-product-list').removeClass('fei');
        }

        if(winPos>he3){
            $('.nav-us .us-data .container2').removeClass('fei');
        }


        if(winPos>he2){
            $('.nav-index .four-div-list').removeClass('fei');
        }

    });
//        设置one高度
    var height1 = $('.nav-index-one-img').height();
    $('.nav-index .one-img').height(height1);
    var height2 = $('.nav-us-one-img').height();
    $('.nav-us .one-img').height(height2);


    /*切换div*/
    $(".nav-list li").on("click", function () {
        var activeIndex = $(".nav-list li.active").index();
        var index = $(this).index();
        $(".nav-list li").eq(activeIndex).removeClass("active");
        $(this).addClass("active");
        $(".selected-div>div").eq(index).show().siblings().hide();
        /*切换首页时，设置首张图片大小以及，初始化动画效果*/
        if(index == 0){
            var height1 = $('.nav-index-one-img').height();
            $('.nav-index .one-img').height(height1);
            $('.nav-index.five-div-img>div').addClass('fei');
            $('.nav-index .four-div-word .four-div-list').addClass('fei');
        }
       /*切换关于我们*/
        if(index == 1){
            var height2 = $('.nav-us .nav-us-one-img').height();
            $('.nav-us .one-img').height(height2);
            $('.nav-us .us-data .container2').addClass('fei');
        }
        /*切换产品与服务*/
        if(index == 2){
            var height2 = $('.nav-product .nav-us-one-img').height();
            $('.nav-product .one-img').height(height2);
            $('.nav-product .two-div-img-product-list').addClass('fei');
        }
        /*切换联系我们*/
        if(index == 3){
            var height2 = $('.nav-chat .nav-us-one-img').height();
            $('.nav-chat .one-img').height(height2);
        }
        /*滚动条置顶*/
        window.scrollTo(0,0);

    });

    /*点击事件*/
    var bindEvent = function(){

        /*点击首页了解我们*/
        $('.nav-index-about-us,.nav-index .get-more').off('click').on('click',function(){
            $(".nav-list li").eq(1).addClass("active");
            $(".selected-div>div").eq(1).show().siblings().hide();
            $(".nav-list li").eq(1).siblings().removeClass('active');
        });
    };
    bindEvent();


});