var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "inline";
    dots[slideIndex - 1].className += " active";
}


//-----------------------------------------------------------------------------------------------------------------------------

let images = ["assets/images/before-after-1.jpg", "assets/images/before-after-2.jpg", "assets/images/before-after-3.jpg", "assets/images/before-after-4.jpg", "assets/images/before-after-5.jpg", "assets/images/before-after-5.jpg", ]

var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
    $("#image-holder").html(`<img src= ${images[count]} width='600px'>`);
}

function nextImage() {
    //  TODO: Increment the count by 1.
    count++;

    // TODO: Show the loading gif in the "image-holder" div.
    // $("#image-holder").html(`<img src='images/loading.gif' width='200px'/>`);

    // TODO: Use a setTimeout to run displayImage after 1 second.
    setTimeout(displayImage, 1000);

    // TODO: If the count is the same as the length of the image array, reset the count to 0.
    if (count === images.length) {
        count = 0;
    }
}

function startSlideshow() {

    // TODO: Use showImage to hold the setInterval to run nextImage.
    showImage = setInterval(nextImage, 4000);

}

function stopSlideshow() {

    // TODO: Put our clearInterval here:
    clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
// displayImage();
startSlideshow();

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}