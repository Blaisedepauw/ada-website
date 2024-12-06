window.addEventListener('scroll', function() {
    const fullscreenImage = document.getElementById('fullscreenImage');
    const pageIndex = document.getElementById('page-index');

    if (window.scrollY > 0) {
      fullscreenImage.classList.add('header-image');
      pageIndex.classList.remove('hidden'); // Show the index after scrolling
    } else {
      fullscreenImage.classList.remove('header-image');
      pageIndex.classList.add('hidden'); // Hide the index when at the top
    }
  });

  // Initial check in case the page is loaded with a scroll position
  document.addEventListener('DOMContentLoaded', function() {
    const pageIndex = document.getElementById('page-index');
    if (window.scrollY === 0) {
      pageIndex.classList.add('hidden');
    }
  });
