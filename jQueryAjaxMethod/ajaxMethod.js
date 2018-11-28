/**
 * Created by 师傅 on 2018/11/28.
 */
var ajax ={
    /**
     * 异步请求   get
     * @param option
     * @param successCallback
     * @param errorCallback
     */
    ajaxGetAsyncTrue: function (option, successCallback, errorCallback) {

        var opt = {
            type: "GET",
            dataType: "json",
            timeout: 20000,
            success: function (data) {
                if (successCallback) {
                    successCallback(data);
                }
            },
            error: function (e) {
                if (errorCallback) {
                    errorCallback(e);
                }
            }
        };

        $.extend(opt, option);

        $.ajax(opt);
    },

    /**
     * 异步请求   post
     * @param option
     * @param successCallback
     * @param errorCallback
     */
    ajaxAsyncTrue: function (option, successCallback, errorCallback) {

        if(this.thePlatformInfo){
            $.extend(option.data, {
                client_id: this.thePlatformInfo.clientId,
                userId: this.thePlatformInfo.userId,
                appPlat: this.thePlatformInfo.appPlat,
                bundleId: this.thePlatformInfo.bundleId,
                serverToken: this.thePlatformInfo.serverToken,
                timestamp: new Date().getTime()
            });
        }

        var opt = {
            type: "POST",
            dataType: "json",
            timeout: 20000,
            success: function (data) {
                if (successCallback) {
                    successCallback(data);
                }
            },
            error: function (e) {
                if (errorCallback) {
                    errorCallback(e);
                }
            }
        };

        $.extend(opt, option);

        $.ajax(opt);
    }


}
