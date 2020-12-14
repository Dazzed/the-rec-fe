var slideIndex = 0;
showSlides();

document.addEventListener('DOMContentLoaded', function () {
    var currentSlideOne = document.getElementById('currentSlideOneCart');
    var currentSlideTwo = document.getElementById('currentSlideTwoCart');
    var currentSlideThree = document.getElementById('currentSlideThreeCart');
    currentSlideOne.addEventListener('click', function () {
        currentSlide(1)
    });
    currentSlideTwo.addEventListener('click', function () {
        currentSlide(2)
    });
    currentSlideThree.addEventListener('click', function () {
        currentSlide(3)
    });
});

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 3000);
}


$(".addToRecBtn").click(function () {
    $("#modal2").hide();
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
        let tab = tabs[0];
        chrome.tabs.sendMessage(tab.id, { colour: "#ff0000" })
    });
    window.location.replace("productsdetails.html");
});