(function(_mo) {
    "use strict";
	hello: function(){
		console.log('hello module');
	},
    var Pagination = function(pdom, pageClick) {
        var self = this;
        //��ӵ��ĸ�DOM
        this.htmlDOM = pdom;
        //һ���ж���ҳ
        this.totalPages = totalPages;
        //��ʾ���ٸ��ֲ���ť
        this.visiblePages = visiblePages;
        //��ʾ���ٷ�ҳ��ť
        this.showPageNum = 7;
        //��ҳ��DOM
        this.pageDOM;
        //�ֲ���Ϣ
        this.pageInfo;
        //�ڼ�ҳ/����ҳ
        this.pageState;
        //һ������ҳ
        this.pageTotal;

        //��ǰҳ
        this.page;
        //�Ƿ��½�
        this.createState = true;
        //������ҳ
        this.create = function(totalPages, visiblePages) {
            //һ���ж���ҳ
            this.totalPages = totalPages;
            //��ʾ���ٸ��ֲ���ť
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
            pageTotal.html('�ҵ�&nbsp;' + this.totalElements + '&nbsp;�����');
            if (this.page == 1) {
                this.createState = true;
                if (pageDOM.data("twbs-pagination")) {
                    pageDOM.twbsPagination('destroy');
                }
                // ��ҳ
                pageDOM.twbsPagination({
                    totalPages: this.totalPages, // ÿ�λ�ȡ���ݶ�Ҫ���ã�һ���ж���ҳ��
                    visiblePages: this.totalPages > this.showPageNum ? this.showPageNum : this.totalPages,
                    onPageClick: pageClick
                });
            }
            $(htmlDOM).html(this.dom);
            
        }
    }
    

})(window.module = window._mo = window._mo || {});