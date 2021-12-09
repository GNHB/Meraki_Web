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


/*SAVE PROFILE QUOTE*/
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

/*VERTICAL PROFILE TAB*/
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

/*HORIZONTAL PROFILE TAB*/
let tabPanes = document.getElementsByClassName("tab-header")[0].getElementsByTagName("div");

for (let i = 0; i < tabPanes.length; i++) {
    tabPanes[i].addEventListener("click", function () {
        document.getElementsByClassName("tab-header")[0].getElementsByClassName("active")[0].classList.remove("active");
        tabPanes[i].classList.add("active");

        document.getElementsByClassName("tab-content")[0].getElementsByClassName("active")[0].classList.remove("active");
        document.getElementsByClassName("tab-content")[0].getElementsByTagName("div")[i].classList.add("active");
    })
}



