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
        'afterRender': function(){
            // 页面渲染完成后确保背景显示
            $('.bgcolor').css('opacity', '0.9');
        }
    });
});