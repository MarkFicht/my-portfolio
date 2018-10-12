import 'jquery';
import './main.scss';

$(document).ready( function () {
    console.log('%c ------ DOM loaded ------', 'color: green; font-weight: bold;');

    const leftTop = $('.left-top');
    const btnOMnie = $('#submenu-me');
    const leftBot = $('.left-bottom');
    const rightTop = $('.right-top');
    const rightBot = $('.right-bottom');

    const btnStart = $('#btn-start');
    const content = $('.content');

    const btnBack = $('#btn-back');

    btnStart.click( function () {

        if (leftTop.hasClass('left-top-move')) {

            $('.blur').css('filter', 'blur(0px)');
            $('.container-content').css('box-shadow', '0 0 20px black');

            leftTop.removeClass('left-top-move');
            leftTop.children('span').removeClass('visibility');

            rightTop.removeClass('right-top-move');
            rightTop.children('span').removeClass('visibility');

            leftBot.removeClass('left-bottom-move');
            leftBot.children('span').removeClass('visibility');

            rightBot.removeClass('right-bottom-move');
            rightBot.children('span').removeClass('visibility');

            content.removeClass('visibilityContent');
        }
        else {

            let cubesMove = setTimeout( function () {
                leftTop.addClass('left-top-move');
                rightTop.addClass('right-top-move');
                leftBot.addClass('left-bottom-move');
                rightBot.addClass('right-bottom-move');
            }, 1100);

            $('.blur').css('filter', 'blur(4px)');
            $('.container-content').css('box-shadow', '0 0 50px black, 0 0 30px black');

            leftTop.children('span').addClass('visibility');
            rightTop.children('span').addClass('visibility');
            leftBot.children('span').addClass('visibility');
            rightBot.children('span').addClass('visibility');
            content.addClass('visibilityContent');
        }
    })

    btnOMnie.click( function () {

        leftTop.removeClass('left-top-move');
        leftTop.addClass('first-section');



    })

    btnBack.click( function () {

        leftTop.addClass('left-top-move');
        leftTop.removeClass('first-section');




    })

})