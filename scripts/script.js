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

  const placeholders = {
    tr: {
      input1: "Ad / Soyad*",
      input2: "Telefon",
      input3: "Şirket",
      input4: "E-mail adresi*",
      input5: "Adres",
      input6: "Şehir",
      input7: "Posta Kodu",
      input8: "Ülke",
      input9: "Konu",
    },
    en: {
      input1: "Name / Surname*",
      input2: "Phone",
      input3: "Company",
      input4: "E-mail address*",
      input5: "Address",
      input6: "City",
      input7: "Postal Code",
      input8: "Country",
      input9: "Subject",
    },
  };

  function changePlaceholders(lang) {
    for (let i = 1; i <= 9; i++) {
      const input = document.querySelector(`[data-lang="input${i}"]`);
      if (input) {
        input.placeholder = placeholders[lang][`input${i}`];
      }
    }
  }

  // Dil değiştirildiğinde içeriği güncelle
  langButtons.forEach((li) => {
    li.addEventListener("click", () => {
      const selectedLang = li.getAttribute("data-lang-code");
      updateContent(selectedLang);
      changePlaceholders(selectedLang);
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
