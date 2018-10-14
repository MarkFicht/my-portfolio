import 'jquery';
import './main.scss';

$(document).ready( function () {
    console.log('%c ------ DOM loaded ------', 'color: green; font-weight: bold;');

    const leftTop = $('.left-top');
    const btnMe = $('#submenu-me');
    const displayMe = $('#select-me');

    const leftBot = $('.left-bottom');
    const btnSkills = $('#submenu-skills');

    const rightTop = $('.right-top');
    const btnProj = $('#submenu-projects');

    const rightBot = $('.right-bottom');
    const btnContact = $('#submenu-contact');

    //---
    const btnStart = $('#btn-start');
    const btnBack = $('#btn-back');

    const selectContent = $('.select-content');
    const displayContent = $('.display-content');

    //---
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

            selectContent.removeClass('visibilityContent');
        }
        else {

            let cubesMove = setTimeout( function () {
                leftTop.addClass('left-top-move');
                rightTop.addClass('right-top-move');
                leftBot.addClass('left-bottom-move');
                rightBot.addClass('right-bottom-move');
            }, 1100);

            $('.blur').css('filter', 'blur(5px)');
            $('.container-content').css('box-shadow', '0 0 50px black, 0 0 30px black');

            leftTop.children('span').addClass('visibility');
            rightTop.children('span').addClass('visibility');
            leftBot.children('span').addClass('visibility');
            rightBot.children('span').addClass('visibility');
            selectContent.addClass('visibilityContent');

            btnStart.css('display', 'none');
            $('#btn-start ~ span').css('display', 'none');
        }
    })

    btnBack.click( function () {
        leftTop.removeClass('display-section1');
        leftBot.removeClass('display-section2');
        rightTop.removeClass('display-section2');
        rightBot.removeClass('display-section1');

        leftTop.addClass('left-top-move');
        leftBot.addClass('left-bottom-move');
        rightTop.addClass('right-top-move');
        rightBot.addClass('right-bottom-move');

        displayContent.css('display', 'none');
    })

    //---
    btnMe.click( function () {
        leftTop.removeClass('left-top-move');
        leftTop.addClass('display-section1');

        displayContent.css('display', 'block');
    })
    btnSkills.click( function () {
        leftBot.removeClass('left-bottom-move');
        leftBot.addClass('display-section2');

        displayContent.css('display', 'block');
    })
    btnProj.click( function () {
        rightTop.removeClass('right-top-move');
        rightTop.addClass('display-section2');

        displayContent.css('display', 'block');
    })
    btnContact.click( function () {
        rightBot.removeClass('right-bottom-move');
        rightBot.addClass('display-section1');

        displayContent.css('display', 'block');
    })

})