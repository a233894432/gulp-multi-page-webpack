// Baseline
/**
 * getXX 用于获取数据
 * doXX  用于实现某些方法
 */
export var ver = "0.0.1" 
export var base = "0.0.2" 
/**----------------------------
    *  私有方法
    ----------------------------*/
/** 
 * 移动端相关数据 =>> mobileUtil 对象
 * 是否是安卓  : isAndroid
 * 是否是IOS   : isIOS
 * 是否是移动端: isMobile
 * 设备平台    : platform [ ios 或 android ]
 * 事件类型    : tapEvent [ tapEvent 或 click ]
 * 系统版本号  : version [ 如: ios 9.1 或 andriod 6.0 ]
 * 是否支持 touch 事件: isSupportTouch
 */
export var mobileUtil = (function (window) {
    var UA = window.navigator.userAgent,
        isAndroid = /android|adr/gi.test(UA),
        isIOS = /iphone|ipod|ipad/gi.test(UA) && !isAndroid,
        isMobile = isAndroid || isIOS,
        platform = isIOS ? 'ios' : (isAndroid ? 'android' : 'default'),
        isSupportTouch = "ontouchend" in document ? true : false;

    var reg = isIOS ? (/os [\d._]*/gi) : (/android [\d._]*/gi),
        verinfo = UA.match(reg),
        version = (verinfo + "").replace(/[^0-9|_.]/ig, "").replace(/_/ig, ".");

    return {
        isIOS: isIOS,
        isAndroid: isAndroid,
        isMobile: isMobile,
        platform: platform,
        version: parseFloat(version),
        isSupportTouch: isSupportTouch,
        tapEvent: isMobile && isSupportTouch ? 'tapEvent' : 'click'
    };
})(window);


 
/**
 * 需要通过 WeixinJSBridge 对象将网页的字体大小设置为默认大小，并且重写设置字体大小的方法，让用户不能在该网页下设置字体大小。
 */
(function() {
    if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
        handleFontSize();
    } else {
        if (document.addEventListener) {
            document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
        } else if (document.attachEvent) {
            document.attachEvent("WeixinJSBridgeReady", handleFontSize);
            document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
        }
    }
    function handleFontSize() {
        WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        WeixinJSBridge.on('menu:setfont', function() {
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
        });
    }
})();

