function updateHeader() {
  const fullscreenImage = document.getElementById('fullscreenImage');
  const pageIndex = document.getElementById('page-index');

  if (window.scrollY > 0) {
    fullscreenImage.classList.add('header-image');
    pageIndex.classList.remove('hidden');
  } else {
    fullscreenImage.classList.remove('header-image');
    pageIndex.classList.add('hidden');
  }
}

// Check scroll position when the page loads
document.addEventListener('DOMContentLoaded', function() {
  updateHeader();
});

// Check scroll position when scrolling
window.addEventListener('scroll', function() {
  updateHeader();
});

// Check scroll position when the window is resized
window.addEventListener('resize', function() {
  updateHeader();
});