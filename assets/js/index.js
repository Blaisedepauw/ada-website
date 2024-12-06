$(document).ready(function() {
    var headers = $('h1, h2').filter(function() {
        return this.id;
    });

    var indexHtml = '<ul>';
    headers.each(function(index) {
        indexHtml += '<li data-id="' + this.id + '">' + $(this).text() + '</li>';
    });
    indexHtml += '</ul>';
    $('#page-index').html(indexHtml);

    function highlightCurrentSection() {
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();
        var maxVisibleArea = 0;
        var mostVisibleSection = null;

        headers.each(function(index) {
            var $header = $(this);
            var sectionTop = $header.offset().top;
            var sectionBottom = index < headers.length - 1 ? 
                                $(headers[index + 1]).offset().top : 
                                $(document).height();
            
            var visibleTop = Math.max(sectionTop, scrollPosition);
            var visibleBottom = Math.min(sectionBottom, scrollPosition + windowHeight);
            var visibleArea = Math.max(0, visibleBottom - visibleTop);

            if (visibleArea > maxVisibleArea) {
                maxVisibleArea = visibleArea;
                mostVisibleSection = this;
            }
        });

        if (mostVisibleSection) {
            $('#page-index li').removeClass('active');
            $('#page-index li[data-id="' + mostVisibleSection.id + '"]').addClass('active');
        }
    }

    $('#page-index').on('click', 'li', function() {
        var targetId = $(this).data('id');
        var targetElement = $('#' + targetId);
        var targetOffset = targetElement.offset().top - 50; // 50px offset for any fixed headers

        $('html, body').animate({
            scrollTop: targetOffset
        }, 500);
    });

    $(window).scroll(highlightCurrentSection);
    $(window).resize(highlightCurrentSection); // Re-check on resize
    highlightCurrentSection(); // Initial check
});