let content = $('#container');
let element = content.find(":first");
let slides = element.find("li");
let width = content.width();
let height = content.height();

element.css({
    width: (width * slides.length) + 'px',
    // height: height + 'px'
});
$.each(slides, function (index) {
    let slide = slides.eq(index);
    slide.css({
        width: width + 'px',
        // height: height + 'px'
    })
});
    element.css({
        'transition-timing-function': 'linear',
        'transition-duration': '5000ms',
        'transition-delay': '1000ms',
        'transform': 'translate3d(-'+(width * 2)+'px, 0px, 0px)',
    });

