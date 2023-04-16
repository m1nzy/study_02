(function($) {
    'use strict';

    var $window = $(window),
        $document = $(document),
        $html = $('html'),
        $head = $('head'),
        $body = $('body'),
        $section = $('section'),
        $screen = $.screen,
        $inArray = $.inArray;

    $(function() {
        $window.on('scroll', function() {
            var nowScroll = $window.scrollTop(),
            $rowgroup = $('.rowgroup'),
            $rowgroupBg = $rowgroup.find('.bg'),
            rowgroupTop = $rowgroup.offset().top;
            
            // rowgroup 도착시 배경 움직임
            // console.log('섹션 높이 :'+rowgroupTop + '-------- 현재 높이' + nowScroll);
            $section.each(function() {
                if(f == true) {
                    if(1400 <= rowgroupTop) {
                        var move = nowScroll * 0.02;
                        $rowgroupBg.addClass('is_active');
                        $rowgroupBg.css({'transform':'translateX(' + move + 'px)'})
                        if((nowScroll - 600) > rowgroupTop || 1400 > nowScroll) {
                            move = 48;
                            $rowgroupBg.removeClass('is_active');
                            $rowgroupBg.css({'transform':'translateX(' + move + 'px)'})
                        }
                    }
                }
            })
        })
    });
})(jQuery);