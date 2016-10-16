/**
 * Created by SAMSUNG on 13.10.2016.
 */
var $window = $(window);
var $footer = $('.footer');



var $modal = $('#modal');

var displayScrollY = function ()
{
    console.log('window.scrollY:' + window.scrollY);
    // console.log('$window.scrollTop()' + $window.scrollTop());
    console.log('modalTopPos: ' + $modal.offset().top);
};

var modalTopPos = $modal.offset().top;
// $window.on('scroll', displayScrollY);
var moveUp = function (e)
{
    console.log('inside');
    var windowTopPos = $window.scrollTop();
    var diff = modalTopPos - windowTopPos;

    $modal.css({
        'position': 'fixed',
        'top': diff + 'px'
    });
};
// $window.on('scroll', moveUp);


var $blockBehind = $('#block-behind');
var blockBehind = document.getElementById('block-behind');
var $blockOffsetTop = $blockBehind.offset().top;
var blockTopToViewport = blockBehind.getBoundingClientRect().top;
var modalTopPos = $modal.offset().top;


var inView = function (elem)
{
    var windowHeight = $window.height();
    var windowTopPos = $window.scrollTop();
    var windowBottomPos = (windowTopPos + windowHeight);

    var elemHeight = elem.outerHeight(false);
    var elemTopPos = elem.offset().top;
    var elemBottomPos = elemTopPos + elemHeight;

    if (elemBottomPos >= windowTopPos &&
        elemTopPos <= windowBottomPos)
    {
        return true;
    } else {
        return false;
    }

}



var freezeBlock = function ()
{
    var blockTopToViewport = blockBehind.getBoundingClientRect().top;
    console.log('inView($modal)' + inView($modal));
    console.log('blockTopToViewport:' + blockTopToViewport);
    var windowTopPos = $window.scrollTop();
    var diff = modalTopPos - windowTopPos;

    if(inView($modal))
    {
        $blockBehind.css('position', 'fixed');
        $blockBehind.css('top', '-600px');

        $modal.css('position', 'fixed')
        $modal.css('top', diff);
    }
};
$window.on('scroll', freezeBlock);


$window.trigger('scroll');
