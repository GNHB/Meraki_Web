{
    var dropdown = document.getElementsByClassName("dropdown_btn");
    var i;

    for (i = 0; i < dropdown.length; i++) {
        dropdown[i].addEventListener("click", function () {
            this.classList.toggle("active");
            var dropdownContent = this.nextElementSibling;
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }
        });
    }
};
var app = angular.module('myApp', []);
app.controller("BookController", function ($scope) {
    $scope.books = [
        {
            "cover": "../image/imvBook/duttinh.jpg",
            "title": "Dứt tình",
            "author": "Vũ Trọng Phụng"
        },
        {
            "cover": "../image/imvBook/nhagiakim.jpg",
            "title": "Nhà giả kim",
            "author": "Paulo Coelho"
        },
        {
            "cover": "../image/imvBook/origin.jpg",
            "title": "Origin",
            "author": "Dan Brown"
        },
        {
            "cover": "../image/imvBook/thutoi.jpg",
            "title": "Thú tội",
            "author": "Minato Kanae"
        },
        {
            "cover": "../image/imvBook/trenduongbang.jpg",
            "title": "Trên đường băng",
            "author": "Tony buổi sáng"
        },
        {
            "cover": "../image/imvBook/truockhinhammat.jpg",
            "title": "Trước khi nhắm mắt",
            "author": "Keigo Higashino"
        },
        {
            "cover": "../image/imvBook/truyenkieu.jpg",
            "title": "Truyện Kiều",
            "author": "Nguyễn Du"
        },
        {
            "cover": "../image/imvBook/vongtronmau.jpg",
            "title": "Vòng tròn máu",
            "author": "Edgar Wallace"
        },
        {
            "cover": "../image/imvBook/hoanguc.jpg",
            "title": "Hỏa ngục",
            "author": "Dan Brown"
        },
        {
            "cover": "../image/imvBook/harrypotter.jpg",
            "title": "Harry Potter",
            "author": "J.K.Rowling"
        },
        {
            "cover": "../image/imvBook/luocsuloainguoi.jpg",
            "title": "Lược sử loài người",
            "author": "Yuval Noah Harari"
        },
        {
            "cover": "../image/imvBook/haisophan.jpg",
            "title": "Hai số phận",
            "author": "Jeffrey Archer"
        },
        {
            "cover": "../image/imvBook/bandatgiabaonhieu.jpg",
            "title": "Bạn đắt giá bao nhiêu",
            "author": "Vãn Tình"
        },
        {
            "cover": "../image/imvBook/dambighet.jpg",
            "title": "Dám bị ghét",
            "author": "Kishimi Ichiro"
        },
        {
            "cover": "../image/imvBook/phiasaunghicanx.png",
            "title": "Phía sau nghi can x",
            "author": "Keigo Higashino"
        }
    ]
});
