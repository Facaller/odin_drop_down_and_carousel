
export class Carousel {
    constructor () {
        this.slideArray = [];
        this.slideIndex = 0;
        this.slideWidth = 800;
        this.intervalID

        this.slides     = document.querySelectorAll('.slide');
        this.dots       = document.querySelectorAll('.dot');
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
        this.dotClickListener();
        this.updateActiveDot();
        this.slideTimer();
    }

    setSlideIndex () {
        const slides = this.slides;
        const slideArray = this.slideArray;

        slides.forEach(slide => {
            slideArray.push(slide);
        });
    }

    setDotIndex () {
        const dots = this.dots;
        const slideArray = this.slideArray;

        dots.forEach((dot, i) => {
            dot = i;
        });
    }

    dotClickListener() {
        const dotContainer = document.querySelector('.nav-dots');
        
        dotContainer.addEventListener('click', (event) => {
            if (event.target.classList.contains('dot')) {
                const clickedDot = event.target;
                const dotIndex = Array.from(this.dots).indexOf(clickedDot);
        
                if (dotIndex !== -1) {
                    this.slideIndex = dotIndex;
                    this.showCurrentSlide();
                }
            }
            this.updateActiveDot();
            this.clearTimer();
            this.slideTimer();
        });
    }

    updateActiveDot() {
        this.dots.forEach(dot => dot.classList.remove('selected'));
        this.dots[this.slideIndex].classList.add('selected');      
    }

    slideTimer () {
        this.intervalID = setInterval(() => {
            if (this.slideIndex >= this.slideArray.length - 1) {
                this.slideIndex = 0;
            } else {
                this.slideIndex++;
            }
            this.showCurrentSlide();
            this.updateActiveDot();
            console.log(this.slideIndex);
        }, 5000);
    }

    clearTimer () {
        clearInterval(this.intervalID);
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
            this.updateActiveDot();
            this.clearTimer();
            this.slideTimer();
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
            this.updateActiveDot();
            this.clearTimer();
            this.slideTimer();
        });
    }
}