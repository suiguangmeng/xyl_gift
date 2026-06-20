$(function(){
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition':"left",
        'navigationColor':['#fff'],
        'css3': true,
        'scrollingSpeed': 700,
        'touchSensitivity': 15,
        'normalScrollElementTouchThreshold': 5,
        'responsiveWidth': 0,
        'fitToSection': true,
        'scrollBar': false,
        'autoScrolling': true,
        'scrollOverflow': false,
        // 允许链接点击
        'onLeave': function(origin, destination, direction){
            return true;
        },
        'afterRender': function(){
            // 页面渲染完成后确保背景显示
            $('.bgcolor').css('opacity', '0.9');
        }
    });
    
    // 确保链接可以点击
    $('a').on('click touchend', function(e) {
        var href = $(this).attr('href');
        if (href && href !== '#' && href !== '') {
            e.stopPropagation();
            window.location.href = href;
        }
    });
});