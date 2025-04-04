const preloadImages = (imageUrls) => {
  imageUrls.forEach((url) => {
    const img = new Image();
    img.src = url;
  });
};

document.addEventListener("DOMContentLoaded", () => {
  preloadImages([
    //Homepage
    "/assets/images/homepage/banners/1870.jpg",
    "/assets/images/homepage/banners/1961.jpg",
    "/assets/images/homepage/banners/1970.jpg",
    "/assets/images/homepage/banners/1979.jpg",
    "/assets/images/homepage/banners/1990.jpg",
    "/assets/images/homepage/banners/1998.jpg",
    "/assets/images/homepage/banners/2003.jpg",
    "/assets/images/homepage/banners/2007.jpg",
    "/assets/images/homepage/banners/1870en.jpg",
    "/assets/images/homepage/banners/1961en.jpg",
    "/assets/images/homepage/banners/1970en.jpg",
    "/assets/images/homepage/banners/1979en.jpg",
    "/assets/images/homepage/banners/1990en.jpg",
    "/assets/images/homepage/banners/1998en.jpg",
    "/assets/images/homepage/banners/2003en.jpg",
    "/assets/images/homepage/banners/2007en.jpg",
    "/assets/images/homepage/slider1.jpg",
    "/assets/images/homepage/slider2.jpg",
    "/assets/images/homepage/slider3.jpg",
    "/assets/images/homepage/slider4.jpg",
    "/assets/images/homepage/sSlider1.jpg",
    "/assets/images/homepage/sSlider2.jpg",
    "/assets/images/homepage/sSlider3.jpg",
    "/assets/images/homepage/sSlider4.jpg",
    "/assets/images/homepage/homepageCollage.jpg",
    "/assets/images/homepage/iconBg1.png",
    "/assets/images/homepage/iconBg2.png",
    "/assets/images/homepage/iconBg3.png",
    //About
    "/assets/images/about/Slider1.png",
    "/assets/images/about/Slider2.png",
    "/assets/images/about/Slider3.png",
    "/assets/images/about/Slider4.png",
    "/assets/images/about/Slider5.png",
    //History
    "/assets/images/history/tarti.png",
    "/assets/images/history/osmanDemirel.png",
    "/assets/images/history/vagon bakım onarım.png",
    "/assets/images/history/dokuma.png",
    "/assets/images/history/basakLogo.png",
    "/assets/images/history/başakLogo.png",
    "/assets/images/history/yolcu koltukları.png",
    "/assets/images/history/boji imalatı.png",
    "/assets/images/history/bilal demirel.png",

    //Quality
    "/assets/images/quality/slider1.jpg",
    "/assets/images/quality/slider2.jpg",
    "/assets/images/quality/slider3.jpg",
    "/assets/images/quality/slider4.jpg",

    //WorldWide
    "/assets/images/worldWide/worldWideBanner.png",

    //Mafsal
    "/assets/images/mafsal/slider1.jpg",
    "/assets/images/mafsal/slider2.jpg",
    "/assets/images/mafsal/slider3.jpg",
    "/assets/images/mafsal/slider4.jpg",
    "/assets/images/mafsal/slider5.jpg",
    "/assets/images/mafsal/1.png",
    "/assets/images/mafsal/2.png",
    "/assets/images/mafsal/3.png",
    "/assets/images/mafsal/4.png",
    "/assets/images/mafsal/5.png",
    "/assets/images/mafsal/6.png",
    "/assets/images/mafsal/7.png",
    "/assets/images/mafsal/8.png",
    "/assets/images/mafsal/9.png",
    "/assets/images/mafsal/10.png",
    "/assets/images/mafsal/11.png",
    "/assets/images/mafsal/12.png",
    "/assets/images/mafsal/13.png",
    "/assets/images/mafsal/14.png",
    "/assets/images/mafsal/15.png",
    "/assets/images/mafsal/16.png",
    "/assets/images/mafsal/igneBilyalı.png",

    //Kardan Milleri
    "/assets/images/miller/slider1.jpg",
    "/assets/images/miller/slider2.jpg",
    "/assets/images/miller/slider3.jpg",
    "/assets/images/miller/slider4.jpg",
    "/assets/images/miller/slider5.jpg",
    "/assets/images/miller/miller1.png",
    "/assets/images/miller/miller2.png",
    "/assets/images/miller/miller3.png",
    "/assets/images/miller/miller4.png",
    "/assets/images/miller/miller5.png",
    "/assets/images/miller/miller6.png",
    "/assets/images/miller/miller7.png",
    "/assets/images/miller/miller8.png",
    "/assets/images/miller/miller9.png",
    "/assets/images/miller/miller10.png",
    "/assets/images/miller/miller11.png",
    "/assets/images/miller/miller12.png",
    "/assets/images/miller/miller13.png",
    "/assets/images/miller/saftBack.png",

    //Tractor
    "/assets/images/traktor/slider1.jpg",
    "/assets/images/traktor/slider2.jpg",
    "/assets/images/traktor/sSlider1.jpg",
    "/assets/images/traktor/sSlider2.jpg",
    "/assets/images/traktor/sSlider3.jpg",
    "/assets/images/traktor/sSlider4.jpg",
    "/assets/images/traktor/sSlider5.jpg",
    "/assets/images/traktor/sSlider6.jpg",
    "/assets/images/traktor/sSlider7.jpg",
    "/assets/images/traktor/sSlider8.jpg",
    "/assets/images/traktor/sSlider9.jpg",
    "/assets/images/traktor/sSlider10.jpg",
    "/assets/images/traktor/sSlider11.jpg",
    "/assets/images/traktor/traktorBg.png",

    // Sıcak Soğuk Dövme
    "/assets/images/hotCold/slider1.jpg",
    "/assets/images/hotCold/slider2.jpg",
    "/assets/images/hotCold/slider3.jpg",
    "/assets/images/hotCold/slider4.jpg",
    "/assets/images/hotCold/slider1.jpg",
    "/assets/images/hotCold/slider2.jpg",
    "/assets/images/hotCold/sSlider1.jpg",
    "/assets/images/hotCold/sSlider2.jpg",
    "/assets/images/hotCold/sSlider3.jpg",
    "/assets/images/hotCold/sSlider4.jpg",
    "/assets/images/hotCold/sSlider5.jpg",
    "/assets/images/hotCold/sSlider6.jpg",
    "/assets/images/hotCold/sSlider7.jpg",
    "/assets/images/hotCold/sSlider8.jpg",
    "/assets/images/hotCold/sSlider9.jpg",
    "/assets/images/hotCold/sSlider10.jpg",
    "/assets/images/hotCold/sSlider11.jpg",
    "/assets/images/hotCold/hotColdBg.png",

    //Katalog
    "/assets/images/catalog/slider1.jpg",
    "/assets/images/catalog/slider2.png",
    "/assets/images/catalog/slider3.jpg",
    "/assets/images/catalog/slider4.png",
    "/assets/images/catalog/slider5.jpg",
    "/assets/images/catalog/catalog1.png",
    "/assets/images/catalog/catalog2.png",
    "/assets/images/catalog/catalog3.png",
    "/assets/images/catalog/catalog4.png",
    "/assets/images/catalog/isoLogo.jpg",

    //Contcat
    "/assets/images/contact/slider1.jpg",
    "/assets/images/contact/slider2.jpg",
    "/assets/images/contact/slider3.jpg",
    "/assets/images/contact/slider4.jpg",
  ]);
});
