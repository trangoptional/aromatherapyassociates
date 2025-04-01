document.addEventListener("DOMContentLoaded", function () {
    fetch("/aromatherapyassociates/components/footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer-container").innerHTML = data;
      })
      .catch((error) => console.error("Lỗi tải footer:", error));
  });
  