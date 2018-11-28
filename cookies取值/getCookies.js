/**
 * Created by wangyuan on 2018/11/28.
 */
var xx = {
    getUserInfo: function () {
        var that = this, cookies, Info;
        var name = [];
        //name值可以作为参数传进来
        name[0] = "userId";
        name[1] = "ngvcClientId";
        name[2] = "ngvcTokenKey";
        name[3] = "ngvcSdkaddress";
        Info = {
            userId: that.getCookie(name[0]),
            ngvcClientId: that.getCookie(name[1]),
            ngvcTokenKey: that.getCookie(name[2]),
            ngvcSdkaddress:that.getCookie(name[3])
        };
    },

    /**
     * 获取cookie值
     * @param name
     * @returns {*}
     */
    getCookie: function (name) {
        var dataInfo;
        var strcookie = document.cookie;//获取cookie字符串
        var arrcookie = strcookie.split(";");//分割
        //遍历匹配
        for (var i = 0; i < arrcookie.length; i++) {
            var arr = arrcookie[i].split("=");
            arr[0] = arr[0].replace(/\s/g,'');
            if (arr[0] == name) {
                dataInfo = arr[1];
            }
        }
        return dataInfo;
    }

}
