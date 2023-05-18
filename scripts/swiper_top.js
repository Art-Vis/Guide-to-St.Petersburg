const projectsPartnerSwiper = new Swiper('.slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      clickable: true,
    },
  
    a11y: {
      prevSlideMessage: 'предыдущий слайд',
      nextSlideMessage: 'следующий слайд',
    },
  })