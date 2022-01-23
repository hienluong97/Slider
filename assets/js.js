window.addEventListener("load", function () {
    const sliderMain = document.querySelector(".sliderMain");
    const sliderItems = document.querySelectorAll(".sliderItem");
    const prevBtn = document.querySelector(".prevBtn");
    const nextBtn = document.querySelector(".nextBtn");
    const sliderDots = document.querySelectorAll(".sliderDots li");
    const sliderItemWidth = sliderItems[0].offsetWidth;
    const slidesLenght = sliderItems.length;
    let positionX = 0;
    let index = 0;
    sliderDots[index].style = 'color : lightskyblue';

    nextBtn.addEventListener("click", function () {
        changeSlide(1);
    })
    prevBtn.addEventListener("click", function () {
        changeSlide(-1);
    })

    function changeSlide(direction) {
        if (direction === 1) {
            index++;
            if (index >= slidesLenght) {
                sliderMain.style = 'left: 0px';
                sliderDots[slidesLenght - 1].style = 'color : none';
                sliderDots[0].style = 'color : lightskyblue';
                return index = 0, positionX = 0;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform : translateX(${positionX}px)`;
            sliderDots[index].style = 'color : lightskyblue';
            sliderDots[index - 1].style = 'color : none';

        } else if (direction === -1) {
            index--;
            if (index < 0) {
                index++;
                return;
            }
            positionX = positionX + sliderItemWidth;
            sliderMain.style = `transform : translateX(${positionX}px)`;
            sliderDots[index].style = 'color : lightskyblue';
            sliderDots[index + 1].style = 'color : none';
        }
    }

    function autoSlider() {
        function auto() {
            index++;
            if (index >= slidesLenght) {
                sliderMain.style = 'left: 0px';
                sliderDots[slidesLenght - 1].style = 'color : none';
                sliderDots[0].style = 'color : lightskyblue';
                return index = 0, positionX = 0;
            }
            positionX = positionX - sliderItemWidth;
            sliderMain.style = `transform : translateX(${positionX}px)`;
            sliderDots[index].style = 'color : lightskyblue';
            sliderDots[index - 1].style = 'color : none';
        }
        var SliderAuto = setInterval(auto, 3000);
    }
    autoSlider();
})



