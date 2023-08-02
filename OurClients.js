$(document).ready(function () {
    $(".hamburger").click(function () {
        $(this).toggleClass("is-active");
        document.querySelector(".topul").classList.toggle("active");
    });
    let nav = document.querySelector(".Topnav");
    window.onscroll = function () {
        if (document.documentElement.scrollTop > 20) {
            nav.classList.add("sticky");
            // document.querySelector(".Out").classList.add("sticky");
        } else {
            nav.classList.remove("sticky");
            // document.querySelector(".Out").classList.remove("sticky");
        }
    }
});    