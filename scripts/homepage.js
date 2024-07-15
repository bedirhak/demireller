document.addEventListener("DOMContentLoaded", function () {
  updateHeight(); // Sayfa yüklendiğinde yüksekliği güncelle
});

// Ekran boyutu değiştiğinde yüksekliği güncelle
window.addEventListener("resize", updateHeight);

function updateHeight() {
  var topElement = document.querySelector(".dk-top");
  var bodyElement = document.querySelector("body");

  // dk-top elementi varsa ve dk-body elementi varsa
  if (topElement && bodyElement) {
    var topElementHeight = topElement.clientHeight;
    bodyElement.style.marginTop = topElementHeight + "px";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var links = document.querySelectorAll(".dk-go-top");
  links.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      var targetId = this.getAttribute("href").substring(1);
      var targetElement = document.getElementById(targetId);

      if (targetElement) {
        var topOffset = targetElement.getBoundingClientRect().top + 80;
        window.scrollTo({ top: topOffset, behavior: "smooth" });
      }
    });
  });
});
