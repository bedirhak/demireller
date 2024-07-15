// document.addEventListener("DOMContentLoaded", function () {
//   const tabs = document.querySelectorAll(".dk-mafsal-tab");
//   const contents = document.querySelectorAll(".dk-mafsal-content");

//   tabs.forEach((tab, index) => {
//     tab.addEventListener("click", () => {
//       // Remove active class from all tabs
//       tabs.forEach((t) => t.classList.remove("dk-active-tab"));
//       // Add active class to the clicked tab
//       tab.classList.add("dk-active-tab");

//       // Hide all content
//       contents.forEach((content) => content.classList.remove("active"));
//       // Show content corresponding to the clicked tab
//       contents[index].classList.add("active");
//     });
//   });

//   // Initialize by showing the first tab content
//   tabs[0].classList.add("dk-active-tab");
//   contents[0].classList.add("active");
// });

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".dk-mafsal-tab");
  const contents = document.querySelectorAll(".dk-mafsal-content");

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      tabs.forEach((t) => t.classList.remove("dk-active-tab"));
      // Add active class to the clicked tab
      tab.classList.add("dk-active-tab");

      // Hide all content with fade out effect
      contents.forEach((content) => {
        content.classList.remove("active");
        setTimeout(() => {
          content.style.display = "none";
        }, 300); // match this with the transition duration
      });

      // Show content corresponding to the clicked tab with fade in effect
      setTimeout(() => {
        contents[index].style.display = "block";
        setTimeout(() => {
          contents[index].classList.add("active");
        }, 10); // slight delay to trigger transition
      }, 300); // match this with the transition duration
    });
  });

  // Initialize by showing the first tab content
  tabs[0].classList.add("dk-active-tab");
  contents[0].style.display = "block";
  setTimeout(() => {
    contents[0].classList.add("active");
  }, 10); // slight delay to trigger transition
});
