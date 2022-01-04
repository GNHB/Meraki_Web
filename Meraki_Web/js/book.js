var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
app.controller("BookController", function ($scope) {

    $scope.books = [
        {
            
            "cover": "../image/imvBook/duttinh.jpg",
            "title": "Dứt tình",
            "author": "Vũ Trọng Phụng",
            "view": 4234,
            "price": 45000,
            "order": 1200
        },
        {

            "cover": "../image/imvBook/chuchokhongnha.png",
            "title": "Chú chó không nhà",
            "author": "Sarah Lean",
            "view": 2224,
            "price": 85000,
            "order": 620
        },
        {

            "cover": "../image/imvBook/kyananhtrang.jpg",
            "title": "Kỳ án ánh trăng",
            "author": "Quỷ Cổ Nữ",
            "view": 1280,
            "price": 75000,
            "order": 620
        },
        {

            "cover": "../image/imvBook/suoinguon.jpg",
            "title": "Suối nguồn",
            "author": "Ayn Rand",
            "view": 3123,
            "price": 105000,
            "order": 1020
        },
        {

            "cover": "../image/imvBook/troisinhvungve.jpg",
            "title": "Trời sinh vụng về",
            "author": "Lư Tư Hạo",
            "view": 4023,
            "price": 85000,
            "order": 1320
        },
        {
            
            "cover": "../image/imvBook/nhagiakim.jpg",
            "title": "Nhà giả kim",
            "author": "Paulo Coelho",
            "view": 10123,
            "price": 85000,
            "order": 4620
        },
        {
            
            "cover": "../image/imvBook/origin.jpg",
            "title": "Origin",
            "author": "Dan Brown",
            "view": 2273,
            "price": 115000,
            "order": 720
        },
        {
            "cover": "../image/imvBook/thutoi.jpg",
            "title": "Thú tội",
            "author": "Minato Kanae",
            "view": 6233,
            "price": 215000,
            "order": 2620
        },
        {
            "cover": "../image/imvBook/trenduongbang.jpg",
            "title": "Trên đường băng",
            "author": "Tony buổi sáng",
            "view": 9023,
            "price": 55000,
            "order": 3620
        },
        {
            "cover": "../image/imvBook/truockhinhammat.jpg",
            "title": "Trước khi nhắm mắt",
            "author": "Keigo Higashino",
            "view": 4703,
            "price": 95000,
            "order": 2620
        },
        {
            "cover": "../image/imvBook/truyenkieu.jpg",
            "title": "Truyện Kiều",
            "author": "Nguyễn Du",
            "view": 6230,
            "price": 40000,
            "order": 1620
        },
        {
            "cover": "../image/imvBook/vongtronmau.jpg",
            "title": "Vòng tròn máu",
            "author": "Edgar Wallace",
            "view": 7279,
            "price": 80000,
            "order": 930
        },
        {
            "cover": "../image/imvBook/hoanguc.jpg",
            "title": "Hỏa ngục",
            "author": "Dan Brown",
            "view": 3809,
            "price": 135000,
            "order": 922
        },
        {
            "cover": "../image/imvBook/harrypotter.jpg",
            "title": "Harry Potter",
            "author": "J.K.Rowling",
            "view": 12370,
            "price": 135000,
            "order": 4625
        },
        {
            "cover": "../image/imvBook/luocsuloainguoi.jpg",
            "title": "Lược sử loài người",
            "author": "Yuval Noah Harari",
            "view": 8923,
            "price": 96000,
            "order": 750
        },
        {
            "cover": "../image/imvBook/haisophan.jpg",
            "title": "Hai số phận",
            "author": "Jeffrey Archer",
            "view": 5913,
            "price": 145000,
            "order": 420
        },
        {
            "cover": "../image/imvBook/bandatgiabaonhieu.jpg",
            "title": "Bạn đắt giá bao nhiêu",
            "author": "Vãn Tình",
            "view": 11239,
            "price": 78000,
            "order": 2625
        },
        {
            "cover": "../image/imvBook/dambighet.jpg",
            "title": "Dám bị ghét",
            "author": "Kishimi Ichiro",
            "view": 9220,
            "price": 65000,
            "order": 1320
        },
        {
            "cover": "../image/imvBook/phiasaunghicanx.png",
            "title": "Phía sau nghi can X",
            "author": "Keigo Higashino",
            "view": 10233,
            "price": 95000,
            "order": 4610
        }
    ]
    $scope.priceFilter = '';
    
});

