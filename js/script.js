const element = document.querySelector('#selectCustom');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: "",
});

document.querySelectorAll('.accordion__header').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;

        if (parent.classList.contains('active')) {
            parent.classList.remove('active');
        } else {
            document
                .querySelectorAll('.catalog__item')
                .forEach((child) => child.classList.remove('active'))

            parent.classList.add('active')
        }
    })
)

const params = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
  };

  function onDisable(evt) {
    if (evt.target.classList.contains(params.disabledClassName)) {
      evt.target.classList.remove(
        params.disabledClassName,
        params.activeClassName
      );
      evt.target.removeEventListener("animationend", onDisable);
    }
  }

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(
        `.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`
      );

      if (
        activeElements.length &&
        !evt.target.closest(`.${params.activeClassName}`)
      ) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(
          `.${params.dropClassName}[data-target="${path}"]`
        );

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
}

setMenuListener();

document.addEventListener("DOMContentLoaded", () => {
  let gallerySlider = new Swiper(".gallery-slides-container", {
    slidesPerView: 2,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 34,
    pagination: {
      el: ".gallery-pagination",
      type: "fraction"
    },
    slidesPerGroup: 3,
    navigation: {
      nextEl: ".gallery-next",
      prevEl: ".gallery-prev"
    },

    breakpoints: {
      256: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },

      578: {
        slidesPerView: 2,
        spaceBetween: 38
      },

      960: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      1360: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  let eventsSlider = new Swiper(".events-conatiner", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    pagination: {
      el: ".events-pagination",
      clickable: true
    },
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".events-next",
      prevEl: ".events-prev"
    },

    breakpoints: {
      240: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10
      },

      568: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 34
      },

      960: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 27
      },

      1360: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});


document.addEventListener("DOMContentLoaded", () => {
  let projectsSlider = new Swiper(".project-container", {
    slidesPerView: 1,
    grid: {
      rows: 1,
      fill: "row"
    },
    spaceBetween: 50,
    slidesPerGroup: 1,
    navigation: {
      nextEl: ".project-next",
      prevEl: ".project-prev"
    },

    breakpoints: {
      441: {
        slidesPerView: 2,
        spaceBetween: 30
      },

      968: {
        slidesPerView: 2,
        spaceBetween: 50
      },

      1360: {
        slidesPerView: 3,
        spaceBetween: 50
      }
    },

    a11y: false,
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slideVisibleClass: "slide-visible",

    on: {
      init: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      },
      slideChange: function () {
        this.slides.forEach((slide) => {
          if (!slide.classList.contains("slide-visible")) {
            slide.tabIndex = "-1";
          } else {
            slide.tabIndex = "";
          }
        });
      }
    }
  });
});

new JustValidate('.contacts__form', {
  rules: {
      name: {
          required: true,
          minLength: 2,
          maxLength: 10
      },
      tel: {
          required: true,
          function: (name, value) => {
              return Number(phone) && phone.lenght === 11
          }
      },
      mail: {
          required: true,
          email: true
      },
  },
  colorWrong: '#FF5C00',
  messages: {
      name: {
          required: 'Вы не ввели имя',
          minLength: 'Введите 2 и более символов',
          maxLength: 'Введите не более 10 символов'
      },
      tel: {
          required: 'Вы не ввели телефон',
          function: 'Здесь должно быть 10 символов'
      },
      mail: {
          required: 'Вы не ввели e-mail'
      }
  }
});

document.querySelectorAll('.accordion__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.accordion__btn').forEach(function(btn){
    btn.classList.remove('accordion__btn--active')});
    e.currentTarget.classList.add('accordion__btn--active');

    document.querySelectorAll('.catalog-content-bottom-left-wrapper').forEach(function(tabsBtn){
    tabsBtn.classList.remove('catalog-content-bottom-left-wrapper--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('catalog-content-bottom-left-wrapper--active');
    });
});

ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" }
    }
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/group.svg',
      iconImageSize: [30, 42],
      iconImageOffset: [-3, -42]
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}

function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);

  btn.setAttribute('aria-expanded', false);

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
    }
  });

  btn.addEventListener("click", function () {
    this.classList.toggle(params.activeClass);

    if (
      !menu.classList.contains(params.activeClass) &&
      !menu.classList.contains(params.hiddenClass)
    ) {
      menu.classList.add(params.activeClass);
      document.body.style.overflow = 'hidden';
      btn.setAttribute('aria-expanded', true);
    } else {
      menu.classList.add(params.hiddenClass);
      document.body.removeAttribute('style');
      btn.setAttribute('aria-expanded', false);
    }
  });

  let burger = document.querySelector('.burger');
  let menuLinks = menu.querySelectorAll('.header-top__link')

  menuLinks.forEach(function(el){
    el.addEventListener('click', function(){
      burger.classList.remove('is-opened');
      menu.classList.remove('is-opened');
      document.body.style.overflow = 'auto';
    })
  });
}

setBurger({
  btnClass: "burger",
  menuClass: "header-top__nav",
  activeClass: "is-opened",
  hiddenClass: "is-closed"
});

document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('search-form_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('search-form_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
    })
})

tippy('.js-tooltip-btn', {
  theme: 'purple',
  maxWidth: 264,
  moveTransition: 'transform 0.3s ease-out',
  trigger: 'click'
});

const swiper = new Swiper('.js-hero-swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  }
});

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
