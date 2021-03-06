import 'jquery';
import './main.scss';

$(document).ready( function () {
    console.log('%c ------ DOM loaded ------', 'color: green; font-weight: bold;');

    const leftTop = $('.left-top');
    const btnMe = $('#submenu-me');
    const displayMe = $('#select-me');

    const leftBot = $('.left-bottom');
    const btnSkills = $('#submenu-skills');
    const displaySkills = $('#select-skills');

    const rightTop = $('.right-top');
    const btnProj = $('#submenu-projects');
    const displayProj = $('#select-projects');

    const rightBot = $('.right-bottom');
    const btnContact = $('#submenu-contact');
    const displayContact = $('#select-contact');

    //---
    const btnStart = $('#btn-start');
    const btnBack = $('#btn-back');

    const selectContent = $('.select-content');
    const contentDisplay = $('.display-content');

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

            $('.blur').css('filter', 'blur(6px)');
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

        contentDisplay.css('display', 'none');
        displayMe.removeClass('show-selected');
        displaySkills.removeClass('show-selected');
        displayProj.removeClass('show-selected');
        displayContact.removeClass('show-selected');
    })

    //---
    btnMe.click( function () {
        leftTop.removeClass('left-top-move');
        leftTop.addClass('display-section1');

        contentDisplay.css('display', 'block');
        displayMe.addClass('show-selected');
    })
    btnSkills.click( function () {
        leftBot.removeClass('left-bottom-move');
        leftBot.addClass('display-section2');

        contentDisplay.css('display', 'block');
        displaySkills.addClass('show-selected');
    })
    btnProj.click( function () {
        rightTop.removeClass('right-top-move');
        rightTop.addClass('display-section2');

        contentDisplay.css('display', 'block');
        displayProj.addClass('show-selected');
    })
    btnContact.click( function () {
        rightBot.removeClass('right-bottom-move');
        rightBot.addClass('display-section1');

        contentDisplay.css('display', 'block');
        displayContact.addClass('show-selected');
    })

})