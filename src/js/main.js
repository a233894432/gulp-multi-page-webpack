/*! functions.js */
var $ = require('jquery');
$.fn.slider = require('ui/slider.js');

var Router = require('core/router.js');  //引入 router
var router = new Router(); // new

$(window).load(function() {
  var slider = $('.banner').slider({
    dots: true,
    fluid: true,
    arrows: true
  });
  $('.slider-arrow').click(function() {
    var fn = this.className.split(' ')[1];

    //  Either do slider.data('slider').next() or .prev() depending on the className
    slider.data('slider')[fn]();
  });
});


router.addRoute('#/', function(req,next){
    console.log("index.html")
	});

