document.addEventListener("DOMContentLoaded", function () {
  var aboutSecondParagraph = document.querySelector(
    ".dk-about-second-paragraph"
  );
  var aboutParagraphs = document.querySelector(".dk-about-paragraphs");
  var aboutTextPart = document.querySelector(".dk-about-text-part");

  function moveElement() {
    var windowWidth = window.innerWidth;
    var breakpoint = 880; // 880 pikselde taşıma işlemi yapılacak

    if (windowWidth <= breakpoint) {
      // Küçük ekran
      aboutParagraphs.insertBefore(
        aboutSecondParagraph,
        aboutParagraphs.firstChild
      );
    } else {
      // Büyük ekran
      aboutTextPart.appendChild(aboutSecondParagraph);
    }
  }

  // Sayfa yüklendiğinde ve pencere boyutu değiştiğinde taşıma işlemi yap
  window.addEventListener("load", moveElement);
  window.addEventListener("resize", moveElement);
});
