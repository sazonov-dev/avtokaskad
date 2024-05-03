import './scss/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.header__content-gallery-scroll');

  function handleWheel(event) {
    if (event.deltaY !== 0 && Math.abs(event.deltaX) < Math.abs(event.deltaY)) {
      event.preventDefault();
      gallery.scrollLeft += event.deltaY;
    }
  }

  gallery.addEventListener('wheel', handleWheel);
});
