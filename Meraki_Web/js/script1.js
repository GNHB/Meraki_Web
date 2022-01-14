
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
});



const productList = document.querySelector('.cs-hidden');
const productList2 = document.querySelector('.cs-hidden2');
const productList3 = document.querySelector('.cs-hidden3');
const productList4 = document.querySelector('.cs-hidden4');
const productList5 = document.querySelector('.cs-hidden5');
/*const productList6 = document.querySelector('.cs-hidden6');*/
eventListeners();

function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON();
        trinhthamJSON();
        kinhdiJSON();
        vientuongJSON();
        thoJSON();
    });

}


/* load product items content form JSON file*/
function loadJSON() {
    fetch('../data/book.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
                html += `
            <div class="swiper-slide ">
                <div class="item-a">
                    <div class="box_best_sellers">
                        <div class="box_img">
                            <img src="${product.imgSrc}" title="${product.name}" />
                        </div>
                        <div class="box_tittle">
                            <a href="../html/DetailBook.html" style="color: black;text-decoration:none;">
                                <p style="font-size:16px"><strong>${product.name}</strong></p>
                            </a>
                            
                            <p style="font-size:14px">${product.Author}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            });
            productList.innerHTML = html;  
          
          
        })
        //.catch(error => {
        //    alert(`User live server or local server`);
            //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.
     
}
function kinhdiJSON() {
    fetch('../data/kinhdi.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
                html += `
            <div class="swiper-slide ">
                <div class="item-a">
                    <div class="box_best_sellers">
                        <div class="box_img">
                            <img src="${product.imgSrc}" title="${product.name}" />
                        </div>
                        <div class="box_tittle">
                            <a href="../html/DetailBook.html" style="color: black;text-decoration:none;">
                                <p style="font-size:16px"><strong>${product.name}</strong></p>
                            </a>
                            
                            <p style="font-size:14px">${product.Author}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            });
           
            productList2.innerHTML = html;
        })
    //.catch(error => {
    //    alert(`User live server or local server`);
    //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.

}
function vientuongJSON() {
    fetch('../data/vientuong.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
                html += `
            <div class="swiper-slide ">
                <div class="item-a">
                    <div class="box_best_sellers">
                        <div class="box_img">
                            <img src="${product.imgSrc}" title="${product.name}" />
                        </div>
                        <div class="box_tittle">
                            <a href="../html/DetailBook.html" style="color: black;text-decoration:none;">
                                <p style="font-size:16px"><strong>${product.name}</strong></p>
                            </a>
                            
                            <p style="font-size:14px">${product.Author}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            });

            productList3.innerHTML = html;
        })
    //.catch(error => {
    //    alert(`User live server or local server`);
    //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.

}
function thoJSON() {
    fetch('../data/tho.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
                html += `
            <div class="swiper-slide ">
                <div class="item-a">
                    <div class="box_best_sellers">
                        <div class="box_img">
                            <img src="${product.imgSrc}" title="${product.name}" />
                        </div>
                        <div class="box_tittle">
                            <a href="../html/DetailBook.html" style="color: black;text-decoration:none;">
                                <p style="font-size:16px"><strong>${product.name}</strong></p>
                            </a>
                            
                            <p style="font-size:14px">${product.Author}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            });

            productList4.innerHTML = html;
        })
    //.catch(error => {
    //    alert(`User live server or local server`);
    //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.

}
function trinhthamJSON() {
    fetch('../data/trinhtham.json')
        .then(response => response.json())
        .then(data => {
            let html = '';
            data.forEach(product => {
                html += `
            <div class="swiper-slide ">
                <div class="item-a">
                    <div class="box_best_sellers">
                        <div class="box_img">
                            <img src="${product.imgSrc}" title="${product.name}" />
                        </div>
                        <div class="box_tittle">
                            <a href="../html/DetailBook.html" style="color: black;text-decoration:none;">
                                <p style="font-size:16px"><strong>${product.name}</strong></p>
                            </a>
                            
                            <p style="font-size:14px">${product.Author}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            });

            productList5.innerHTML = html;
        })
    //.catch(error => {
    //    alert(`User live server or local server`);
    //URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.

}