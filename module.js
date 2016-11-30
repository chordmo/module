(function(_mo) {
    "use strict";
	hello: function(){
		console.log('hello module');
	},
    var Pagination = function(pdom, pageClick) {
        var self = this;
        //添加到哪个DOM
        this.htmlDOM = pdom;
        //一共有多少页
        this.totalPages = totalPages;
        //显示多少个分布按钮
        this.visiblePages = visiblePages;
        //显示多少分页按钮
        this.showPageNum = 7;
        //分页的DOM
        this.pageDOM;
        //分布信息
        this.pageInfo;
        //第几页/多少页
        this.pageState;
        //一共多少页
        this.pageTotal;

        //当前页
        this.page;
        //是否新建
        this.createState = true;
        //创建分页
        this.create = function(totalPages, visiblePages) {
            //一共有多少页
            this.totalPages = totalPages;
            //显示多少个分布按钮
            this.visiblePages = visiblePages;

            var pageDOM = $('div');
            pageDOM.css({
                "display": "inline-block",
                "float": "left"
            });
            var pageInfo = $('div');
            var pageState = $('font');
            var pageTotal = $('font');
            pageTotal.css({
                'margin-left': "14px"
            });
            if (this.totalPages < 1) {
                this.totalPages = 1
            }
            pageState.html(this.page + '/' + this.totalPages);
            pageTotal.html('找到&nbsp;' + this.totalElements + '&nbsp;条结果');
            if (this.page == 1) {
                this.createState = true;
                if (pageDOM.data("twbs-pagination")) {
                    pageDOM.twbsPagination('destroy');
                }
                // 分页
                pageDOM.twbsPagination({
                    totalPages: this.totalPages, // 每次获取数据都要设置（一共有多少页）
                    visiblePages: this.totalPages > this.showPageNum ? this.showPageNum : this.totalPages,
                    onPageClick: pageClick
                });
            }
            $(htmlDOM).html(this.dom);
            
        }
    }
    

})(window.module = window._mo = window._mo || {});