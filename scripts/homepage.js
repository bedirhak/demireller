document.addEventListener("DOMContentLoaded", function () {
  updateHeight(); // Sayfa yüklendiğinde yüksekliği güncelle

  // Tüm dk-product-texts-each ve dk-slide elementlerini seçiyoruz
  const productTexts = document.querySelectorAll(".dk-product-texts-each");
  const slides = document.querySelectorAll(".dk-slide");

  // Üzerine gelindiğinde sırasına göre slider'ı gösteren fonksiyon
  productTexts.forEach((item, index) => {
    item.addEventListener("mouseover", function () {
      // Öncelikle tüm slider'lardan aktif sınıfını kaldırıyoruz
      slides.forEach((slide) => slide.classList.remove("dk-active"));

      // Sırasına göre ilgili slider'ı aktif hale getiriyoruz
      slides[index].classList.add("dk-active");

      console.log("Çalıştı");
    });
  });

  /* Slider scroll */

  // Scroll olayı dinleyici
  window.addEventListener("scroll", function () {
    // Y pozisyonunu al
    const yPos = window.scrollY || window.pageYOffset;
  });
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

  // İçerik dizisi, yıl ve içerik bilgileri
  const timelineData = {
    1870: {
      content:
        "1790 doğumlu Mısırlızadelerden dedemiz Demirci Ali Usta'nın girişimciliğiyle DEMİRELLER ailesi demircilik işleri ve çeşitli çalik malzeme imalatıyla iştigal etmeye başlamıştır. Piyasa ihtiyaçları doğrultusundakazma, tüfek gibi aletler üretilmiştir. 1920 yılından sonra Cumhuriyet döneminde tüfek imalatının yasaklanmasıyla tartıaletleri imalatı ana üretim konusu olmuştur.",
      imageUrl: "assets/images/history/tarti.png",
    },
    1961: {
      content:
        "Yeni pazar ihtiyaçları doğrultusunda Bilal DEMİREL Adapazarı'na gelir ve tartı aletlerinin üretimine bu ilde devam eder. 1963 yılında küçük kardeşi Osman DEMİREL ve 1967 yılında ağabeyi Hasan DEMİREL ile bir araya gelerek makine imalat işleri için ulusal ihalelere katılmaya başlanır. Su tankları, çöp yakma fırınları, yataklar, ve römorklar kardeşler tarafından ihale ile alınıp imalatı gerçekleştirilen ürünlerden bazılarıdır.",
      imageUrl: "assets/images/history/osmanDemirel.png",
    },
    1970: {
      content:
        "Mahmut DEMİREL yönetime katılır. Kardan milleri ve traktör yedek parçaları ile ilgili artan piyasa talepleri neticesinde şirketin bu alanlarda faaliyet göstermesi gerekliliği görülmüş, bu doğrultuda yatırımlar yapılarak üretime geçilmiştir.",
      imageUrl: "assets/images/history/tarti.png",
    },
    1979: {
      content:
        "Demireller Makine San. ve Tic. A.Ş. adı altında şirket kurulur.",
      imageUrl: "image-1979.jpg",
    },
    1990: {
      content:
        "Nüfus artışıyla orantılı olarak taşıma sektöründe talepler artmış dolayısıyla demiryollarında oluşan onarım ve bakım yetersizliği bu alanda şirketler için yatırım yapma olanağı doğurmuştur. Bu sebeple firmamız yeni tesisler inşaa ederek Vagon Bakım & Onarım bölümünü kurmaya karar vermiştir. Ulusal ihale lere katılım sağlanarak çeşitli tiplerde bakım onarım ve yolcu koltukları imalatları gerçekleştirilmiştir.",
      imageUrl: "assets/images/history/vagon bakım onarım.png",
    },
    1998: {
      content:
        "Türkiye'nin tekstil sektöründeki konumu nedeniyle ev tekstilinde de faaliyet gösterme kararı alınarak firma ismi Demireller Makine-Tekstil San. ve Tic. A.Ş. olarak değiştirilmiştir.",
      imageUrl: "assets/images/history/dokuma.png",
    },
    2003: {
      content:
        "Şirketimiz üç ortağıyla birlikte özelleştirme sonucunda Başak Traktör İş ve Tarım Makineleri San. ve Tic. A.Ş'yi satın almıştır. 2012 yılında SANKO holding'e satılarak iştirakimiz sonlandırılmıştır.",
      imageUrl: "assets/images/history/basakLogo.png",
    },
    2007: {
      content:
        "Mafsal İstavrozları imalatının yanında müşterilerimizden gelen talepler doğrultusun da kardan milleri ve yedek parçalarının üretim ve bakım faaliyetlerinde de bulunma kararı alınmış. Demireller Kardan Milleri ve İş Mak. San. ve Tic. Ltd. Şti. adı altında şirket kurulu mu gerçekleştirilmiştir.",
      imageUrl: "assets/images/logoDikey.png",
    },
  };

  // Tüm zaman çizgisi noktalarını seç
  const timelineDots = document.querySelectorAll(".dk-timeline-dot");
  const popup = document.querySelector(".dk-timeline-popup");
  const popupYear = document.querySelector(".dk-timeline-year");
  const popupContent = document.querySelector(".dk-timeline-content");
  const popupImage = document.querySelector(".dk-timeline-image img");

  // Her bir zaman çizgisi noktasına tıklama olayı ekle
  timelineDots.forEach((dot) => {
    dot.addEventListener("click", function () {
      // Tıklanan yıl
      const year = this.getAttribute("data-year");

      // İçeriği bul ve pop-up'ı güncelle
      if (timelineData[year]) {
        const selectedLang = localStorage.getItem("selectedLang") || "tr";

        const langSuffix = selectedLang === "en" ? "en" : "";
        popupImage.src = `./assets/images/homepage/banners/${year}${langSuffix}.jpeg`;

        // Pop-up'ı görünür yap
        setTimeout(() => {
          popup.style.visibility = "visible";
          popup.style.opacity = 1; // Animasyon için
        }, 250);
      }
    });
  });

  // Pop-up'ı kapatmak için dış tıklama özelliği ekleyebilirsin
  popup.addEventListener("click", function () {
    popup.style.visibility = "hidden";
    popup.style.opacity = 0;
  });

  /* Carousel slider message */

  // Slider mesajlarını içeren bir obje
  const sliderMessages = {
    tr: {
      0: "15 - 210 mm Rulman Ölçülerinde Taşıt ve Makinalar için Mafsal İstavrozu Çözümleri",
      1: "340kNm Max. Torka Kadar Endüstriyel Uygulamalar İçin Kardan Milleri",
      2: "Güvenilir Traktör Yedek Parça Tedarikçiniz",
      3: "Sıcak & Soğuk Dövmede Çözüm Ortağınız",
    },
    en: {
      0: "Universal Joint Kit Solutions for Vehicles and Machinery with Bearing Dimensions of 15 - 210 mm",
      1: "Cardan Shafts for Industrial Applications Up to 340kNm Max. Torque",
      2: "Your Reliable Tractor Spare Parts Supplier",
      3: "Your Solution Partner in Hot & Cold Forging",
    },
  };

  // Slider event'ine listener ekliyoruz
  $("#carouselExampleIndicators").on("slide.bs.carousel", function (e) {
    // Geçiş yapılacak index numarasını alıyoruz
    const nextSlideIndex = $(e.relatedTarget).index();
    let currentLang = localStorage.getItem("selectedLang") || "tr";

    // Eğer obje içerisinde bu index varsa mesajı güncelliyoruz
    if (sliderMessages[currentLang][nextSlideIndex]) {
      console.log("Slider", sliderMessages[currentLang][nextSlideIndex]);
      $(".slider-message p").text(sliderMessages[currentLang][nextSlideIndex]);
    }
  });
});
