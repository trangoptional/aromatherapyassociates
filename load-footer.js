document.addEventListener("DOMContentLoaded", function () {
    fetch("/components/footer.html")
      .then((response) => response.text())
      .then((data) => {
        document.getElementById("footer-container").innerHTML = data;

        document.querySelectorAll("style").forEach((style) => {
          if (style.innerHTML.includes("body { background-color: #f1f1f1;")) {
            style.remove();
          }
        });
      })
      .catch((error) => console.error("Lỗi tải footer:", error));
  });
  