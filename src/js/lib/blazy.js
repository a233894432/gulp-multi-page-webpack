/*!
  hey, [be]Lazy.js - v1.5.2 - 2015.12.01
  A lazy loading and multi-serving image script
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
;
(function(root, blazy) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register bLazy as an anonymous module
        define(blazy);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = blazy();
    } else {
        // Browser globals. Register bLazy on window
        root.Blazy = blazy();
    }
})(window, function() {
    'use strict';

    //private vars
    var source, viewport, isRetina;

    // constructor
    return function Blazy(options) {
        //IE7- fallback for missing querySelectorAll support
        if (!document.querySelectorAll) {
            var s = document.createStyleSheet();
            document.querySelectorAll = function(r, c, i, j, a) {
                a = document.all, c = [], r = r.replace(/\[for\b/gi, '[htmlFor').split(',');
                for (i = r.length; i--;) {
                    s.addRule(r[i], 'k:v');
                    for (j = a.length; j--;) a[j].currentStyle.k && c.push(a[j]);
                    s.removeRule(0);
                }
                return c;
            };
        }

        //options and helper vars
        var scope = this;
        var util = scope._util = {};
        util.elements = [];
        util.destroyed = true;
        scope.options = options || {};
        scope.options.error = scope.options.error || false;
        scope.options.offset = scope.options.offset || 100;
        scope.options.success = scope.options.success || false;
        scope.options.selector = scope.options.selector || '.b-lazy';
        scope.options.separator = scope.options.separator || '#';
        scope.options.container = scope.options.container ? document.querySelectorAll(scope.options.container) : false;
        scope.options.errorClass = 'b-error';
        scope.options.breakpoints = scope.options.breakpoints || false;
        scope.options.loadInvisible = scope.options.loadInvisible || false;
        scope.options.successClass = scope.options.successClass || 'b-loaded';
		scope.options.validateDelay = scope.options.validateDelay || 25;
		scope.options.saveViewportOffsetDelay = scope.options.saveViewportOffsetDelay || 50;
        scope.options.src = source = scope.options.src || 'data-src';
        isRetina = window.devicePixelRatio > 1;
        viewport = {};
        viewport.top = 0 - scope.options.offset;
        viewport.left = 0 - scope.options.offset;


        /* public functions
         ************************************/
        scope.revalidate = function() {
            initialize(this);
        };
        scope.load = function(elements, force) {
            var opt = this.options;
            if (elements.length === undefined) {
                loadElement(elements, force, opt);
            } else {
                each(elements, function(element) {
                    loadElement(element, force, opt);
                });
            }
            return false;
        };
        scope.destroy = function() {
            var self = this;
            var util = self._util;
            if (self.options.container) {
                each(self.options.container, function(object) {
                    unbindEvent(object, 'scroll', util.validateT);
                });
            }
            unbindEvent(window, 'scroll', util.validateT);
            unbindEvent(window, 'resize', util.validateT);
            unbindEvent(window, 'resize', util.saveViewportOffsetT);
            util.count = 0;
            util.elements.length = 0;
            util.destroyed = true;
        };

        //throttle, ensures that we don't call the functions too often
        util.validateT = throttle(function() {
            validate(scope);
        }, scope.options.validateDelay, scope);
        util.saveViewportOffsetT = throttle(function() {
            saveViewportOffset(scope.options.offset);
        }, scope.options.saveViewportOffsetDelay, scope);
        saveViewportOffset(scope.options.offset);

        //handle multi-served image src
        each(scope.options.breakpoints, function(object) {
            if (object.width >= window.screen.width) {
                source = object.src;
                return false;
            }
        });

        // start lazy load
        initialize(scope);
    };


    /* Private helper functions
     ************************************/
    function initialize(self) {
        var util = self._util;
        // First we create an array of elements to lazy load
        util.elements = toArray(self.options.selector);
        util.count = util.elements.length;
        // Then we bind resize and scroll events if not already binded
        if (util.destroyed) {
            util.destroyed = false;
            if (self.options.container) {
                each(self.options.container, function(object) {
                    bindEvent(object, 'scroll', util.validateT);
                });
            }
            bindEvent(window, 'resize', util.saveViewportOffsetT);
            bindEvent(window, 'resize', util.validateT);
            bindEvent(window, 'scroll', util.validateT);
        }
        // And finally, we start to lazy load. Should bLazy ensure domready?
        validate(self);
    }

    function validate(self) {
        var util = self._util;
        for (var i = 0; i < util.count; i++) {
            var element = util.elements[i];
            if (elementInView(element) || hasClass(element, self.options.successClass)) {
                self.load(element);
                util.elements.splice(i, 1);
                util.count--;
                i--;
            }
        }
        if (util.count === 0) {
            self.destroy();
        }
    }

    function elementInView(ele) {
        var rect = ele.getBoundingClientRect();
        return (
            // Intersection
            rect.right >= viewport.left && rect.bottom >= viewport.top && rect.left <= viewport.right && rect.top <= viewport.bottom
        );
    }

    function loadElement(ele, force, options) {
        // if element is visible, not loaded or forced
        if (!hasClass(ele, options.successClass) && (force || options.loadInvisible || (ele.offsetWidth > 0 && ele.offsetHeight > 0))) {
            var dataSrc = ele.getAttribute(source) || ele.getAttribute(options.src); // fallback to default 'data-src'
            if (dataSrc) {
                // console.log(dataSrc);
                var dataSrcSplitted = dataSrc.split(options.separator);
                var src = dataSrcSplitted[isRetina && dataSrcSplitted.length > 1 ? 1 : 0];

                if (src === null || src === undefined || src == "null" || src == "undefined" || src == "") {
                    if (options.error) options.error(ele, "missing");
                    addClass(ele, options.errorClass);
                    return false;
                }

                var isImage = ele.nodeName.toLowerCase() === 'img';
                // cleanup markup, remove data source attributes
                each(options.breakpoints, function(object) {
                    ele.removeAttribute(object.src);
                });
                ele.removeAttribute(options.src);

                //判断图片是否需要裁剪
                var src_type = ele.getAttribute("src-type");
                src = src.replace(".com//",".com/");
                var oSrc = src;
                var parentDom = ele.parentElement;
                var height = parentDom.offsetHeight;
                var width = parentDom.offsetWidth;

                var format =  function(fsrc){
                    if (width <46) {
                        return fsrc.replace(/\/0$/, '/46');
                    }
                    if (width < 64) {
                        return fsrc.replace(/\/0$/, '/64');
                    }
                    if (width < 96) {
                        return  fsrc.replace(/\/0$/, '/96');
                    }
                    return fsrc.replace(/\/0$/, '/132');
                }

                var showImg = function(nSrc){
                    if (isImage || ele.src === undefined) {
                        var img = new Image();
                        img.onerror = function(e) {
                            if(src_type){
                                addClass(ele, options.successClass);
                                ele.onerror = function(){
                                    addClass(ele, options.errorClass);
                                }
                                ele.src = nSrc+'/format/jpeg';
                                if (options.success) options.success(ele);
                            }else{
                                if (options.error) options.error(ele, "invalid");
                                addClass(ele, options.errorClass);
                            }
                        };
                        img.onload = function() {
                            // Is element an image or should we add the src as a background image?
                            isImage ? ele.src = src : ele.style.backgroundImage = 'url("' + src + '")';

                            if(src_type == 'wx-headimg' && options.headimgFun && options.reheadimgurl){

                                var imgWidth = img.width;
                                if(imgWidth == 120){
                                    //微信头像改
                                    options.headimgFun(ele,options.reheadimgurl,width);
                                }
                            }


                            addClass(ele, options.successClass);
                            if (options.success) options.success(ele);
                        };
                        img.src = nSrc; //preload
                        ele.setAttribute("data-img",oSrc);
                    } else {
                        ele.src = nSrc;
                        ele.setAttribute("data-img",oSrc);
                        addClass(ele, options.successClass);
                    }
                }

                //TODO微信头像
                if(src_type == 'wx-headimg'){
                    src = format(src);
                    showImg(src);
                    return ;
                }

                //七牛图片
                if(oSrc.indexOf(".clouddn.com")!=-1){
                    //获取高宽
                    var ele_width = ele.getAttribute('ele-width');
                    var ele_height = ele.getAttribute('ele-height');
                    var doRatioImg = function(eWidth,eHeight){

                        if("imageView2" == src_type){
                            var fWidth = parseInt(width);
                            var fHeight = parseInt(height);
                            if(eWidth){
                                var w_r = eWidth/width ,h_r = eHeight/height;
                                var radio = w_r;
                                if(h_r<w_r){
                                    radio = h_r;
                                }
                                if(radio>=2 && radio<4){
                                    radio = radio*0.6;
                                }else if(radio>4){
                                    radio = 2.6;
                                } else{
                                    radio = 1;
                                }
                                fWidth = parseInt(width*radio);
                                fHeight = parseInt(height*radio);
                            }
                            console.log(eWidth,eHeight,radio);
                            src = src+'|imageView2/1/w/'+fWidth+'/h/'+fHeight;
                        }else if("imageView2/2" == src_type){
                            var fWidth = parseInt(width);
                            var fHeight = parseInt(height);
                            if(eWidth) {
                                var w_r = eWidth / width, h_r = eHeight / height;
                                var radio = w_r;
                                if (h_r < w_r) {
                                    radio = h_r;
                                    if(radio>=2 && radio<3){
                                        radio = radio*0.5;
                                    }else if(radio>=3){
                                        radio = 1.5;
                                    }else{
                                        radio = 1;
                                    }
                                    src = src+'|imageView2/2/h/'+parseInt(fHeight*radio);
                                }else{
                                    if(radio>=2 && radio<3){
                                            radio = radio*0.5;
                                        }else if(radio>=3){
                                            radio = 1.5;
                                        }else{
                                            radio = 1;
                                    }
                                    src = src+'|imageView2/2/w/'+parseInt(fWidth*radio);
                                }
                            }else{
                                src = src+'|imageView2/2/h/'+parseInt(fHeight*1.5);
                            }
                        }
                        showImg(src);
                    }
                    if(!ele_width){
                        var imgurl = oSrc.replace(/\?.*/,'?imageInfo')
                        if(imgurl.indexOf("?imageInfo")==-1){
                            imgurl = imgurl+"?imageInfo";
                        }
                        $.getJSON(imgurl,function(data){
                            if(data.width) {
                                ele.setAttribute('ele-width',data.width);
                                ele.setAttribute('ele-height',data.height);
                            }
                            doRatioImg(data.width,data.height);
                        });
                    }else{
                        doRatioImg(ele_width,ele_height);
                    }
                }else{
                    showImg(src);
                }
            } else {
               /* //如果是个人头像
                 var src_type = ele.getAttribute("src-type");
                 if(src_type == 'wx-headimg' && options.headimgFun && options.reheadimgurl){
                 var parentDom = ele.parentElement;
                 var width = parentDom.offsetWidth;
                 //微信头像改
                 options.headimgFun(ele,options.reheadimgurl,width);
                 }*/
                if (options.error) options.error(ele, "missing");
                if (!hasClass(ele, options.errorClass)) addClass(ele, options.errorClass);
            }
        }
    }

    function hasClass(ele, className) {
        return (' ' + ele.className + ' ').indexOf(' ' + className + ' ') !== -1;
    }
	
	function addClass(ele, className){
		ele.className = ele.className + ' ' + className;
	}

    function toArray(selector) {
		var array = [];
 		var nodelist = document.querySelectorAll(selector);
 		for(var i = nodelist.length; i--; array.unshift(nodelist[i])){}
		return array;
    }

    function saveViewportOffset(offset) {
        viewport.bottom = (window.innerHeight || document.documentElement.clientHeight) + offset;
        viewport.right = (window.innerWidth || document.documentElement.clientWidth) + offset;
    }

    function bindEvent(ele, type, fn) {
        if (ele.attachEvent) {
            ele.attachEvent && ele.attachEvent('on' + type, fn);
        } else {
            ele.addEventListener(type, fn, false);
        }
    }

    function unbindEvent(ele, type, fn) {
        if (ele.detachEvent) {
            ele.detachEvent && ele.detachEvent('on' + type, fn);
        } else {
            ele.removeEventListener(type, fn, false);
        }
    }

    function each(object, fn) {
        if (object && fn) {
            var l = object.length;
            for (var i = 0; i < l && fn(object[i], i) !== false; i++) {}
        }
    }

    function throttle(fn, minDelay, scope) {
        var lastCall = 0;
        return function() {
            var now = +new Date();
            if (now - lastCall < minDelay) {
                return;
            }
            lastCall = now;
            fn.apply(scope, arguments);
        };
    }
});
