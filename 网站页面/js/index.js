$(function () {
    window.onload = function(){
        window.scrollTo(0,0);
    };
//        顶部颜色变化
    var scrollChange = $(window).scroll(function (event) {
        var winPos = $(window).scrollTop();
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


    /*设置div飞入*/
    /*var mySwiper = new Swiper('.index-swiper-container1', {
     autoplay: true//可选选项，自动滑动
     })*/

    /*切换div*/
    $(".nav-list li").on("click", function () {
        var activeIndex = $(".nav-list li.active").index();
        var index = $(this).index();
        $(".nav-list li").eq(activeIndex).removeClass("active");
        $(this).addClass("active");
        $(".selected-div>div").eq(index).show().siblings().hide();
        if(index == 0){
            var height1 = $('.nav-index-one-img').height();
            $('.nav-index .one-img').height(height1);
            $('.nav-index.five-div-img>div').addClass('fei');
            $('.nav-index .four-div-word .four-div-list').addClass('fei');
        }
        if(index == 1){
            var height2 = $('.nav-us .nav-us-one-img').height();
            $('.nav-us .one-img').height(height2);
            $('.nav-us .us-data .container2').addClass('fei');
        }
        if(index == 2){
            var height2 = $('.nav-product .nav-us-one-img').height();
            $('.nav-product .one-img').height(height2);
            $('.nav-product .two-div-img-product-list').addClass('fei');
        }
        if(index == 3){
            var height2 = $('.nav-chat .nav-us-one-img').height();
            $('.nav-chat .one-img').height(height2);
        }
        window.scrollTo(0,0);

    });
});