class Slider {
    constructor(query) {
        this.slider = document.querySelector(query); //element slider
        this.slides = [...this.slider.querySelectorAll(".slider-slide")];
        this.currentSlide = Math.max(0, this.slides.findIndex(el => el.classList.contains("is-active"))); //aktualny slide
    }
}

const slider = new Slider("#mySlider");

class Slider {
    constructor() {
        
        this.createPrevNext();
    }

    createPrevNext() {
        this.btnPrev = document.createElement("button");
        this.btnPrev.type = "button";
        this.btnPrev.innerText = "Poprzedni slajd";
        this.btnPrev.classList.add("slider-button", "slider-button-prev");
        this.btnPrev.addEventListener("click", this.slidePrev.bind(this));

        this.btnNext = document.createElement("button");
        this.btnNext.type = "button";
        this.btnNext.innerText = "Następny slajd"
        this.btnNext.classList.add("slider-button", "slider-button-next");
        this.btnNext.addEventListener("click", this.slideNext.bind(this));

        const nav = document.createElement("div");
        nav.classList.add("slider-nav");
        this.slider.append(this.btnPrev);
        this.slider.append(this.btnNext);
        this.slider.append(nav);
    }
}