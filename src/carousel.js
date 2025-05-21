
export class Carousel {
    constructor () {
        this.slideArray = [];
        this.slideIndex = 0;
        this.slideWidth = 800;

        this.slides     = document.querySelectorAll('.slide');
        this.wrapper    = document.querySelector('.slide-wrapper');
        this.rightArrow = document.querySelector('.right-arrow');
        this.leftArrow  = document.querySelector('.left-arrow');

        this.init();
    }

    init() {
        this.setSlideIndex();
        this.showCurrentSlide();
        this.rightArrowClick();
        this.leftArrowClick();
    }

    setSlideIndex () {
        const slides = this.slides;
        const slideArray = this.slideArray;

        slides.forEach(slide => {
            slideArray.push(slide);
        });
    }

    showCurrentSlide () {
        const wrapper    = this.wrapper;
        const index      = this.slideIndex;
        const slideWidth = this.slideWidth;
        
        wrapper.style.transform = `translateX(-${index * slideWidth}px)`
    }

    leftArrowClick = () => {
        const leftArrow = this.leftArrow;

        leftArrow.addEventListener('click', () => {
            if (this.slideIndex <= 0) {
                this.slideIndex = this.slideArray.length - 1
            } else {
                this.slideIndex--;
            }
            this.showCurrentSlide();
        });
    }

    rightArrowClick = () => {
        const rightArrow = this.rightArrow;

        rightArrow.addEventListener('click', () => {
            if (this.slideIndex >= this.slideArray.length - 1) {
                this.slideIndex = 0;
            } else {
                this.slideIndex++;
            }
            this.showCurrentSlide();
        });
    }
}