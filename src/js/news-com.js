var $ = require('jquery');
 
var diotpl=require('core/diotpl.js'); // ����JSģ�����
 
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
//     title: '������',
//     list: [{ name: '����', city: '����' }, { name: 'л��', city: '����' }]
// };
// var gettpl = document.getElementById('demo').innerHTML;
// diotpl(gettpl).render(data, function(html){
//   document.getElementById('view').innerHTML = html;
// });
 