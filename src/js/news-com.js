var $ = require('jquery');
 
var diotpl=require('core/diotpl.js'); // 简易JS模版解析
 
var Router = require('core/router.js');
var com =require('news/com');
var base=require("babel!core/base.js");



//com 
com.init();

console.log(com);
console.log(base.ver);
// console.log(sum(20,10));

console.log(base.mobileUtil)


console.log(diotpl.v)


// var data = {
//     title: '田田云',
//     list: [{ name: '贤心', city: '杭州' }, { name: '谢亮', city: '北京' }]
// };
// var gettpl = document.getElementById('demo').innerHTML;
// diotpl(gettpl).render(data, function(html){
//   document.getElementById('view').innerHTML = html;
// });
 