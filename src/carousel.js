
export class Carousel {
    constructor () {
        this.slideArray = [];
        this.slideIndex = 0;
        this.slideWidth = 800;
        this.slides     = document.querySelectorAll('.slide');
        this.wrapper    = document.querySelector('.slide-wrapper');
    }

    setSlideIndex () {
        const slides = this.slides;
        const slideArray = this.slideArray;

        slides.forEach(slide => {
            slideArray.push(slide);
        });
    }

    showCurrentSLide () {
        const wrapper    = this.wrapper;
        const index      = this.slideIndex;
        const slideWidth = this.slideWidth;
        
        wrapper.style.transform = `translateX(-${index * slideWidth}px)`
    }
}