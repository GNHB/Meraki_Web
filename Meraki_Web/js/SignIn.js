////function register() {

////    var username = document.getElementById("username").value;
////    var password = document.getElementById("password").value;
////    var passwordAgain = document.getElementById("passwordAgain").value;

////    if (password != passwordAgain) {
////        alert("Mật khẩu không trùng khớp vui lòng nhập lại!");
////        return;
////    }
////}

const name = document.getElementById("nameSignIn");
const password = document.getElementById("passwordSignIn");

const errorName = document.getElementById("errorName");
const errorPassword = document.getElementById("errorPassword");

function validated() {
    if (password.value.length <= 6) {
        errorPassword.innerHTML("Mật khẩu phải có ít nhất 6 kí tự!");
        errorPassword.style.color = "red";
    }
}