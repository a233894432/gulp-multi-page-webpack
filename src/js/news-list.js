var Paging = require('ui/paging.js');
var Router = require('core/router.js');
var Page = new Paging({
    size: 10,    //页数
    current: 2,
    showSize: 5,
    container: 'paging', //父容器id
    itemType: 'span', //分页dom类型
    action: function(current) {
        alert('page:' + current);
    }
});
