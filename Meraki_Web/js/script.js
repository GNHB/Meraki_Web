var app = angular.module('myApp', []);



/*SAVE PROFILE QUOTE*/
$('div').on('keydown', function (event) {
    if ($(this).text().length === 243 && event.keyCode != 8) {
        event.preventDefault();
    }
});
let content = document.getElementsByClassName("edit"),
    contentArray = Array.from(content);

let localStore = {
    saveLocalStorage: (item) => {
        localStorage.setItem(item.id, item.innerHTML);
    },
    loadLocalStorage: (item) => {
        let content = localStorage.getItem(item.id);
        if (content) {
            item.innerHTML = content;
        }
    }
};

contentArray.forEach((item) => {
    localStore.loadLocalStorage(item);
    item.addEventListener(
        "blur",
        () => {
            localStore.saveLocalStorage(item);
        },
        false
    );
});
/*SAVE PROFILE INFORMATION*/
(function (W) {
    var D, form, bts, ipt;

    function init() {
        D = W.document, previous = [];
        form = D.getElementsByTagName('form')[0];
        bts = form.getElementsByTagName('button');
        ipt = form.getElementsByTagName('input');
        form.addEventListener('submit', save, false);
        bts[1].addEventListener('click', cancel, false);
        bts[2].addEventListener('click', edit, false);
    }

    function save(e) {
        e.preventDefault();
        form.classList.remove('invert');
        var l = ipt.length;
        while (l--) {
            ipt[l].readOnly = true;
        };
        previous = [];

    }

    function edit(e) {
        e.preventDefault();
        form.classList.add('invert');
        var l = ipt.length;
        while (l--) {
            previous[l] = ipt[l].value;
            ipt[l].readOnly = false;
        }
    }

    function cancel(e) {
        form.classList.remove('invert');
        e.preventDefault();
        var l = ipt.length;
        while (l--) {
            ipt[l].value = previous[l];
            ipt[l].readOnly = true;
        }
    }
    init();
})(window)



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








