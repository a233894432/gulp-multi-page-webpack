/*! functions.js */
var $ = require('jquery');

var Router = require('core/router.js'); //引入 router
var router = new Router(); // new


router.addRoute('#/index', function (req, next) {
    console.log("index.html")
});

router.errors(404, function () {
    console.group();
    console.warn('404', arguments);
    console.groupEnd();
    //    router.redirect('#/index')  
})



$('body').on('click', '#btn1', function (e) {
    console.log(e)


})

$('body').on('click', '#btn2', function (e) {

    console.log(e)

    var mask = $('#mask');
    var weuiActionsheet = $('#m-actionsheet');
    weuiActionsheet.addClass('m-actionsheet-toggle');
    mask.show()
        .focus() //加focus是为了触发一次页面的重排(reflow or layout thrashing),使mask的transition动画得以正常触发
        .addClass('m-mask-fade-toggle').one('click', function () {
            hideActionSheet(weuiActionsheet, mask);
        });
    $('#actionsheet_cancel').one('click', function () {
        hideActionSheet(weuiActionsheet, mask);
    });
    mask.unbind('transitionend').unbind('webkitTransitionEnd');

    function hideActionSheet(weuiActionsheet, mask) {
        weuiActionsheet.removeClass('m-actionsheet-toggle');
        mask.removeClass('m-mask-fade-toggle');
        mask.on('transitionend', function () {
            mask.hide();
        }).on('webkitTransitionEnd', function () {
            mask.hide();
        })
    }


})