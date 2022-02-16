window.addEventListener('load', function () {
    const sliderMain = document.querySelector('.slider__main');
    const sliderItems = document.querySelectorAll('.slider__item');
    const sliderDotItems = document.querySelectorAll('.slider__dot-item')
    const nextBtn = document.querySelector('.slider__next');
    const prevBtn = document.querySelector('.slider__prev');
    let positionX = 0;
    let index = 0;

    const sliderItemWidth = sliderItems[0].offsetWidth;
    const lengthItem = sliderItems.length;

    let myTimerNextSlider = window.setInterval(autoNewSlider, 4000)

    nextBtn.addEventListener('click', function () {
        index++;
        handleChangeSlider()
        window.clearInterval(myTimerNextSlider);
        myTimerNextSlider = window.setInterval(autoNewSlider, 4000);
    })


    prevBtn.addEventListener('click', function () {
        index--;
        handleChangeSlider();
        window.clearInterval(myTimerNextSlider);
        myTimerNextSlider = window.setInterval(autoNewSlider, 4000);
    })

    sliderDotItems.forEach((dotItem, i) => {
        dotItem.addEventListener('click', function () {
            index = i;
            handleChangeSlider()
            window.clearInterval(myTimerNextSlider);
            myTimerNextSlider = window.setInterval(autoNewSlider, 4000);
        })
    }
    )

    function removeDots() {
        sliderDotItems.forEach((dotItem) => {
            dotItem.classList.remove('intro__control-item--selected');
        }
        )
    }

    function handleChangeSlider() {
        if (index >= (lengthItem - 1)) index = lengthItem - 1;
        if (index <= 0) index = 0;
        positionX = (-index * sliderItemWidth);
        sliderMain.style = `transform: translateX(${positionX}px)`
        removeDots();
        sliderDotItems[index].classList.add('intro__control-item--selected')
    }

    function autoNewSlider() {
        index++;
        if (index > (lengthItem - 1)) {
            index = 0;
        }
        handleChangeSlider()
    }

    // Countdown
    var x = setInterval(function () {
        var countDownDate = new Date("Feb 17, 2022 15:37:25").getTime();

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.querySelector(".countdown__time").innerHTML = `${days}d ${hours}:${minutes}:${seconds}`;

        // If the count down is finished, write some text
        if (distance < 0) {
            clearInterval(x);
            document.querySelector(".countdown__time").innerHTML = "EXPIRED";
        }
    }, 1000);
})

