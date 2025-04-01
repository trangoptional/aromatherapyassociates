// load-header.js
document.addEventListener("DOMContentLoaded", function () {
  fetch("/components/header.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      const bestsellersToggle = document.getElementById("bestsellers-toggle");
      const bestsellersMenu = document.getElementById("bestsellers-menu");
      const closeMenu = document.getElementById("close-menu");
      const overlay = document.getElementById("overlay");

      // mobile 
      const menuToggle = document.querySelector(".menu-toggle i"); 
      const mobileMenu = document.getElementById("mobile-menu");
      const closeMobileMenu = document.querySelector("#mobile-menu .close-btn");

      // Mở menu khi click vào "BESTSELLERS"
      bestsellersToggle.addEventListener("click", function (e) {
        e.preventDefault();
        bestsellersMenu.classList.add("active");
        console.log(overlay); // Kiểm tra overlay có lấy được không
        overlay.classList.add("active");
        console.log("Sau khi add class:", overlay.classList);
      });

      // Đóng menu khi click vào dấu "X"
      closeMenu.addEventListener("click", function () {
        bestsellersMenu.classList.remove("active");
        overlay.classList.remove("active");
      });

      // // Xử lý menu mobile
      menuToggle.addEventListener("click", function () {
        mobileMenu.classList.add("active");
        overlay.classList.add("active");
      });
      
      closeMobileMenu.addEventListener("click", function () {
        mobileMenu.classList.remove("active");
        overlay.classList.remove("active");
      });
    });
});
