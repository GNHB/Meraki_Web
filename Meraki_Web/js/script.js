var app = angular.module('myApp', []);

/*app.controller('BookController', function ($scope, $http) {

    $http.get('hm.json').success(function (data) {
        $scope.books = data;
        console.log(data);
    });

});*/


/*
app.controller('BookController', function ($scope, $http) {
    $http.get('data/book.json')
        .then(function (result) {
            $scope.books = result.data;
        });
});*/
/* app.controller('BookController', function ($scope, $http) {
    $http.get('hm.json')
           
        .then(function (result) {
            $scope.books = result.data;
        });
            
        });*/


/*Save quote*/
function saveQuote() {

    //get the editable element
    var editElem = document.getElementById("editquote");

    //get the edited element content
    var userVersion = editElem.innerHTML;

    //save the content to local storage
    localStorage.userEdits = userVersion;
}
function checkEdits() {

    //find out if the user has previously saved edits
    if (localStorage.userEdits != null)
        document.getElementById("editquote").innerHTML = localStorage.userEdits;
}

/*Tab profile*/
function openTab(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();



