import 'jquery';
import './main.scss';

$(document).ready( function () {
    console.log('%c ------ DOM loaded ------', 'color: green; font-weight: bold;');

    const leftTop = $('.left-top');
    const leftBot = $('.left-bottom');
    const rightTop = $('.right-top');
    const rightBot = $('.right-bottom');

    const btnStart = $('#btn-start');
    const content = $('.content');

    btnStart.click( function () {

        if (leftTop.hasClass('left-top-move')) {

            $('.blur').css('filter', 'blur(0px)');
            $('.container-content').css('box-shadow', '0 0 20px black');

            leftTop.removeClass('left-top-move');
            leftTop.children('span').removeClass('animationCube');

            rightTop.removeClass('right-top-move');
            rightTop.children('span').removeClass('animationCube');

            leftBot.removeClass('left-bottom-move');
            leftBot.children('span').removeClass('animationCube');

            rightBot.removeClass('right-bottom-move');
            rightBot.children('span').removeClass('animationCube');

            content.removeClass('animationContent');
        }
        else {

            $('.blur').css('filter', 'blur(4px)');
            $('.container-content').css('box-shadow', '0 0 50px black, 0 0 30px black');

            leftTop.addClass('left-top-move');
            leftTop.children('span').addClass('animationCube');

            rightTop.addClass('right-top-move');
            rightTop.children('span').addClass('animationCube');

            leftBot.addClass('left-bottom-move');
            leftBot.children('span').addClass('animationCube');

            rightBot.addClass('right-bottom-move');
            rightBot.children('span').addClass('animationCube');

            content.addClass('animationContent');
        }


    } )

})