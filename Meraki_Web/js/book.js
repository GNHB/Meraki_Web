var app = angular.module('myApp', ['angularUtils.directives.dirPagination']);
app.controller("BookController", function ($scope) {

    $scope.books = [
        {
            
            "cover": "../image/imvBook/duttinh.jpg",
            "title": "Dứt tình",
            "author": "Vũ Trọng Phụng"

        },
        {

            "cover": "../image/imvBook/chuchokhongnha.png",
            "title": "Chú chó không nhà",
            "author": "Sarah Lean"

        },
        {

            "cover": "../image/imvBook/kyananhtrang.jpg",
            "title": "Kỳ án ánh trăng",
            "author": "Quỷ Cổ Nữ"

        },
        {

            "cover": "../image/imvBook/suoinguon.jpg",
            "title": "Suối nguồn",
            "author": "Ayn Rand"

        },
        {

            "cover": "../image/imvBook/tróiinhvungve.jpg",
            "title": "Trời sinh vụng về",
            "author": "Lư Tư Hạo"

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
            "title": "Phía sau nghi can X",
            "author": "Keigo Higashino"
        }
    ]
    $scope.sort = function (keyname) {
        $scope.sortBy = keyname;
        $scope.reverse = !$scope.reverse;
    }
});
