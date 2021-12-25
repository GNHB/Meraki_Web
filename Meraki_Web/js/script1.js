
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});



var swiper = new Swiper(".cs-hidden", {
    spaceBetween: 10,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        450: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 4,
        },
        1024: {
            slidesPerView: 6,
        },
    },
});


const productList = document.querySelector('.cs-hidden');
const productList2 = document.querySelector('.cs-hidden2');
const productList3 = document.querySelector('.cs-hidden3');
const productList4 = document.querySelector('.cs-hidden4');
const productList5 = document.querySelector('.cs-hidden5');
const productList6 = document.querySelector('.cs-hidden6');
eventListeners();

function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();

    });

}


// load product items content form JSON file
function loadJSON() {
    fetch('../data/book.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
                html += `
                <li class="item-a">
                <div class="book-box">   
                    <div class="book-box-img">
                         <img src = "${product.imgSrc}" alt = "product image">
                    </div>
                    <div class="book-box-content">
                        <strong>${product.name}</strong>
                        <p>${product.Author}</p>
                    </div>
                </div>
            </li>
            `;
            });
            productList.innerHTML = html;
            productList2.innerHTML = html;
            productList3.innerHTML = html;
            productList4.innerHTML = html;
            productList5.innerHTML = html;
            productList6.innerHTML = html;
        })
        .catch(error => {
            alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
        });
}





$(document).ready(function () {
    $('#autoWidth,#autoWidth2,#autoWidth3,#autoWidth4,#autoWidth5,#autoWidth6').lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
            $('#autoWidth,#autoWidth2,#autoWidth3,#autoWidth4,#autoWidth5,#autoWidth6').removeClass('cS-hidden,cS-hidden2,cS-hidden3,cS-hidden4,cS-hidden5,cS-hidden6');
        }
    });
});

$(document).ready(function () {
    $('#mySwiper2').lightSlider({
        adaptiveHeight: true,
        item: 1,
        slideMargin: 0,
        loop: true
    });
});
