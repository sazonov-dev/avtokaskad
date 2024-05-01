import './scss/styles.scss';

document.addEventListener('DOMContentLoaded', function () {
  const gallery = document.querySelector('.header__content-gallery-scroll');
  const scrollAmount = 100;

  function handleScroll(event) {
    event.preventDefault();
    const delta = event.deltaY || event.detail || event.wheelDelta;
    gallery.scrollLeft += Math.sign(delta) * scrollAmount;
  }

  gallery.addEventListener('wheel', handleScroll);
  gallery.addEventListener('DOMMouseScroll', handleScroll);
});
