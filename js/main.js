// loading screen
let loadScreenDiv = document.querySelector(".loading-screen");
let loadScreenIcon = document.querySelector(".loading-screen i");
$(document).ready(function () {
    $(loadScreenIcon).hide(1000, function () {
        $(loadScreenDiv).slideUp(1500, function () {
            $("body").css("overflow", "auto");
        });
    });
});
// navbar goto section
$(".nav-item").click(function (e) {
    let tar = $(e.target).attr("href");
    let secitem = document.querySelector(tar);
    let secOffSet = $(secitem).offset().top;
    $("body,html").animate({ scrollTop: secOffSet - 50 }, 2000);
    console.log();
})
// navbar scrooldown
let navBar = document.querySelector(".navbar");

$(window).scroll(function () {
    let scrV = $(navBar).offset().top
    if (scrV >= "500") {
        navBar.classList.replace("bg-dark", "bg-white");
        navBar.classList.replace("navbar-dark", "navbar-light");
    }
    else {
        navBar.classList.replace("navbar-light", "navbar-dark");
        navBar.classList.replace("bg-white", "bg-dark");
        navBar.classList.add("text-white");
    }

});
// go to button
let goUpBtn = document.querySelector(".goup i");
$(window).scroll(function () {
    let scrV = $(navBar).offset().top;
    if (scrV >= "150") {
        $(goUpBtn).css("display", "block");
    }
    else {
        $(goUpBtn).css("display", "none");
    }
});
$(goUpBtn).on("click", function () {
    $("body,html").animate({ scrollTop: 0 }, 2000);
})
// owl cursol
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1500,
    dots: true,
    loop: true,
    items: 1
});
// product popup
let productImgs = Array.from(document.getElementsByClassName("product-img"));
let productLayerImg = document.querySelector(".product-layer-img");
let productLayer = document.querySelector(".product-layer");
let currentindex =0;
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let closeBtn = document.getElementById("close");

for (let i = 0; i < productImgs.length; i++) {
    productImgs[i].addEventListener("click",function(e){
    let imgSrc = $(e.target).attr("src");
    let currentindex = productImgs.indexOf(e.target);
    productLayer.classList.replace('d-none','d-flex');
    productLayerImg.style.backgroundImage = `url(${imgSrc})`;
    })
}
function nextProduct(){
    currentindex++;
    if(currentindex > productImgs.length-1){
        currentindex =0;
    }
    imgSrc = productImgs[currentindex].getAttribute("src");
    productLayerImg.style.backgroundImage = `url(${imgSrc})`;
}
nextBtn.addEventListener("click",nextProduct);

function prevProduct(){
    currentindex--
    if(currentindex == -1){
        currentindex = productImgs.length -1;
    }
    imgSrc = productImgs[currentindex].getAttribute("src");
    productLayerImg.style.backgroundImage = `url(${imgSrc})`;
}
prevBtn.addEventListener("click",prevProduct);

function closeProduct(){
    productLayer.classList.replace('d-flex','d-none');
}
closeBtn.addEventListener("click",closeProduct);