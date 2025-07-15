class InitSlider {
    constructor(selector, options) {
        this.selector = selector;
        this.options = options;
        this.slider = null;
        this.init();
    }

    init() {
        this.slider = new Swiper(this.selector, this.options);
        return this.slider;
    }
}

class InitSliderCollection {
    constructor() {
        this.sliders = {};
        this.init();
    }

    init() {
        this.sliders.top = new InitSlider('.swiper-authors', {
            direction: 'horizontal',
            speed: 300,
            loop: true,
            autoplay: {
                delay: 3000, 
                disableOnInteraction: true, 
            },
            navigation: {
                nextEl: '.swiper-authors-button-next',
                prevEl: '.swiper-authors-button-prev',
            },
            keyboard: {
                enabled: true,
            },
        }).slider;
    }
}

export default InitSliderCollection;