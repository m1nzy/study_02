(function ($) {
    'use strict';

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
        $body = $('body'),
        $header = $('header'),
        $section = $('section'),
        $screen = $.screen,
        $inArray = $.inArray;

    $(function () {
        $window.on('scroll', function () {
            var nowScroll = $window.scrollTop(),
                lastScrollTop = 0,
                $rowgroup = $('.rowgroup'),
                $rowgroupBg = $rowgroup.find('.bg'),
                rowgroupTop = $rowgroup.offset().top;
        
            // 헤더 nav 사라짐
            if(nowScroll >= $header.innerHeight()) {
                $header.find('nav').addClass('fade_out');
            } else {
                $header.find('nav').removeClass('fade_out');
            }

            // rowgroup 도착시 배경 움직임
            // console.log('섹션 높이 :'+rowgroupTop + '-------- 현재 높이' + nowScroll);
            if (nowScroll > rowgroupTop) {
                $rowgroupBg.addClass('is_active');
                $rowgroupBg.css({'transform': 'translateX(60px)'})
            } else {
                $rowgroupBg.removeClass('is_active');
                $rowgroupBg.css({'transform': 'translateX(0)'})
            }
        })
    });
})(jQuery);