

const productList = document.querySelector('.splot_sach1');
const productList1 = document.querySelector('.splot_sach3');
const productList2 = document.querySelector('.splot_sach4');
const productList3 = document.querySelector('.splot_sach5');
const productList4 = document.querySelector('.splot_sach6');
const productList5 = document.querySelector('.splot_sach7');
const productList6 = document.querySelector('.splot_sach2');
const productList8 = document.querySelector('.splot_sach8');
const productList9 = document.querySelector('.splot_sach9');
const productList10 = document.querySelector('.splot_sach10');
const productList11 = document.querySelector('.splot_sach11');
const productList12 = document.querySelector('.splot_sach12');
const productList0 = document.querySelector('.splot_sach0');
eventListeners();

function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {

        loadJSON();
        kinhdiJSON();
        vientuongJSON();
        thoJSON();
        thienvandialyJSON();
        vatlycongngheJSON();
        tinhcamJSON();
        phuongtayJSON();
        tamlyJSON();
        namsaoJSON();
        bonsaoJSON();
        basaoJSON();
        kinhtexahoiJSON();
    });

}


/* load product items content form JSON file*/
function loadJSON() {
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

            productList6.innerHTML = html;

        })
        .catch(error => {
            alert(`User live server or local server`);
            /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
        })
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

            productList1.innerHTML = html;

        })
        .catch(error => {
            alert(`User live server or local server`);
            /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
        })
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

            productList2.innerHTML = html;

        })
        ////.catch(error => {
        ////    alert(`User live server or local server`);
        //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
        //})
}
function thienvandialyJSON() {
    fetch('../data/thienvandialy.json')
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
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}
function vatlycongngheJSON() {
    fetch('../data/vatlycongnghe.json')
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
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}
function tinhcamJSON() {
    fetch('../data/tinhcam.json')
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
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}
function phuongtayJSON() {
    fetch('../data/phuongtay.json')
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

            productList8.innerHTML = html;

        })
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}
function tamlyJSON() {
    fetch('../data/tamly.json')
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

            productList9.innerHTML = html;

        })
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}
function namsaoJSON() {
    fetch('../data/namsao.json')
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
                            
                            <img src="${product.Author}" style="width:90px" />
                        </div>
                    </div>
                </div>
            </div>
            `;
            });

            productList10.innerHTML = html;

        })
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}
function bonsaoJSON() {
    fetch('../data/bonsao.json')
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
                            
                            <img src="${product.Author}" style="width=90px" />
                        </div>
                    </div>
                </div>
            </div>
            `;
            });

            productList11.innerHTML = html;

        })
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}
function basaoJSON() {
    fetch('../data/basao.json')
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
                            
                            <img src="${product.Author}" style="width=90px" />
                        </div>
                    </div>
                </div>
            </div>
            `;
            });

            productList12.innerHTML = html;

        })
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}

function kinhtexahoiJSON() {
    fetch('../data/kinhtexahoi.json')
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

            productList0.innerHTML = html;

        })
    ////.catch(error => {
    ////    alert(`User live server or local server`);
    //    /*    URL scheme must be "http" or "https" for CORS request. You need to be serving your index.html locally or have your site hosted on a live server somewhere for the Fetch API to work properly.*/
    //})
}