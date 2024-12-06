$(document).ready(function () {
  const sliderMessages = [
    "Asansörlü Arka Çeki",
    "Kardan Milleri",
    "Kaldırma Kolu Kancası",
    "Emniyet Çemberi",
    "Hidrolik Ön Dingil",
    "Hidrolik Orta Kol",
    "Arka Çeki Gövdesi",
    "Hidrolik Dingil Başı",
    "Çeki Oku",
    "Sabit Arka Çeki",
    "Bağlantı Konsolu",
  ];

  // Aktif slide'ı ve mesajı güncelleyen fonksiyon
  function updateSliderMessage(index) {
    const messageElement = document.querySelector(".dk-traktor-slider-message");
    messageElement.textContent = sliderMessages[index];
  }

  // Başlangıçta ilk mesajı ayarla
  updateSliderMessage(0);

  // Slider kontrolleri
  let currentSlide = 0;
  const slides = document.querySelectorAll(".dk-slide");
  const totalSlides = slides.length;

  document.getElementById("dk-next-btn").addEventListener("click", function () {
    slides[currentSlide].classList.remove("dk-active");
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add("dk-active");
    updateSliderMessage(currentSlide); // Mesajı güncelle
  });

  document.getElementById("dk-prev-btn").addEventListener("click", function () {
    slides[currentSlide].classList.remove("dk-active");
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides[currentSlide].classList.add("dk-active");
    updateSliderMessage(currentSlide); // Mesajı güncelle
  });

  const textItems = document.querySelectorAll(".dk-traktor-list li");
  const textSlides = document.querySelectorAll(".dk-slide");

  textItems.forEach(function (item, index) {
    item.addEventListener("mouseenter", function () {
      // Tüm slider görsellerinden 'dk-active' sınıfını kaldır
      textSlides.forEach(function (slide) {
        slide.classList.remove("dk-active");
      });

      // İlgili slider görseline 'dk-active' sınıfını ekle
      if (textSlides[index]) {
        textSlides[index].classList.add("dk-active");
      }

      // Slider mesajını güncelle
      const messageElement = document.querySelector(
        ".dk-traktor-slider-message"
      );
      if (messageElement) {
        messageElement.textContent = item.textContent || "";
      }
    });
  });
});
