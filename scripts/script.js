document.addEventListener("DOMContentLoaded", () => {
  const langButtons = document.querySelectorAll(".languages-list li");
  const translatableElements = document.querySelectorAll("[data-lang]");

  // Varsayılan dili belirle veya localStorage'dan al
  let currentLang = localStorage.getItem("selectedLang") || "tr";
  updateContent(currentLang);

  if (currentLang === "en") {
    document
      .querySelector(".dk-selected-lang")
      ?.classList.remove("dk-selected-lang");
    document
      .querySelector('[data-lang-code="en"]')
      ?.classList.add("dk-selected-lang");
  }

  // Dil değiştirildiğinde içeriği güncelle
  langButtons.forEach((li) => {
    li.addEventListener("click", () => {
      const selectedLang = li.getAttribute("data-lang-code");
      updateContent(selectedLang);
      localStorage.setItem("selectedLang", selectedLang);
      document
        .querySelector(".dk-selected-lang")
        ?.classList.remove("dk-selected-lang");
      li.classList.add("dk-selected-lang");
    });
  });

  function updateContent(lang) {
    translatableElements.forEach((el) => {
      const key = el.getAttribute("data-lang");
      if (translations[lang] && translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });
  }
});
