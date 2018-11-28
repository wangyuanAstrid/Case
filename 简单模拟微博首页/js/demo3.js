$(function(){
    var main={
        init: function () {
            main.bindEvent();
        },
      bindEvent:function(){
            // 首页选项卡
            $(".con-left li").on("click", function () {
                var activeIndex=$(".con-left li.active").index();
                var index=$(this).index();
                $(".con-left li").eq(activeIndex).removeClass("active");
                $(this).addClass("active");
                $(".con-right2-txt>li").eq(index).show().siblings().hide();
            });
      }
    };

main.init();
});
function check_name(){
            var input = document.getElementById("name");
            var span=document.getElementById("name_msg");
            var name=input.value;
            var reg=/^\w{3,20}$/;
            if(!reg.test(name)){
                span.className = "error_msg";
            }else{
                  span.className="";
                }
        }
function check_pwd(){
                var input = document.getElementById("pwd");
                var span = document.getElementById("pwd_msg");
                var pwd = input.value;
                var reg=/^\w{6,20}$/;
                if(!reg.test(pwd)){
                    span.className = "error_msg";
                }else{
                    span.className="";
                }
            }