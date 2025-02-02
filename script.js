$(document).ready(function () {

    var page = $('#fullpage').fullpage({

        // menu에 대한 옵션 설정
        menu: '.nav_bar',
        anchors: ['intro', 'web1', 'web2', 'web3', 'web4', 'app', 'profile'],

        afterLoad: function (anchorLink, index) {
            if (index === 1 || index === 8) { // 첫 번째 섹션 (Intro)
                $('.wrap').addClass('on');
            } else {
                $('.wrap').removeClass('on');
            }
        },

        onLeave: function (index, nextIndex, direction) {
            // 3번째 또는 4번째 섹션에 도착할 때
            if (nextIndex === 3 || nextIndex === 4 || nextIndex === 5 ) {
                $('.nav_web').addClass('on');
            } else {
                // 다른 섹션에 도착하면 해당 클래스 제거
                $('.nav_web').removeClass('on');
            }
        },

        scrollHorizontally: true
    });

    // 페이지 로드 시 첫 번째 li에 active 클래스 추가
    $('.section > div > div > ul > li:first-child').addClass('active');

    // 첫 번째 li의 자식 ul을 display: block으로 설정
    $('.section > div > div > ul > li:first-child > ul').css('opacity', '1');

    // li 클릭 시 활성화 처리
    $('.section > div > div > ul > li').click(function () {
        // 모든 li에서 active 클래스 제거
        $('.section > div > div > ul > li').removeClass('active');

        // 모든 li의 자식 ul을 display: none으로 숨김
        $('.section > div > div > ul > li > ul').css('opacity', '0');

        // 클릭한 li에만 active 클래스 추가
        $(this).addClass('active');

        // 클릭한 li의 자식 ul을 display: block으로 보여줌
        $(this).children('ul').css('opacity', '1');
    });
});