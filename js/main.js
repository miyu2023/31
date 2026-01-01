const swiper = new Swiper(".swiper", {
  loop: true, // ループ
  loopAdditionalSlides: 1, //ループ時のスライド複製
  slidesPerView: 2.5, // 一度に表示する枚数
  spaceBetween: 32, // スライド間の距離
  centeredSlides: true, // アクティブなスライドを中央にする
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    600: {
      slidesPerView: 3,
      spaceBetween: 64,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },

    1024: {
      slidesPerView: 4.5,
      spaceBetween: 80,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    },
  },
});

// overlay-script.js
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger-overlay");
  const nav = document.querySelector(".nav-overlay");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");

    const isOpen = hamburger.classList.contains("active");
    hamburger.setAttribute("aria-expanded", isOpen);
    nav.setAttribute("aria-hidden", !isOpen);

    // メニューオープン時に背景スクロールを防止
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // ESCキーでメニューを閉じる
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("active")) {
      hamburger.classList.remove("active");
      nav.classList.remove("active");
      hamburger.setAttribute("aria-expanded", false);
      nav.setAttribute("aria-hidden", true);
      document.body.style.overflow = "";
    }
  });
});
