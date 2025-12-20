// منوی همبرگری
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("active");
  }
}

// مودال اتاق‌ها
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("rooms-modal");
  const openBtn = document.getElementById("open-rooms-modal");
  const closeBtn = document.querySelector(".modal-close");

  // باز کردن مودال
  if (openBtn && modal) {
    openBtn.addEventListener("click", function () {
      modal.style.display = "block";
    });
  }

  // بستن با دکمه ×
  if (closeBtn && modal) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  // بستن با کلیک بیرون از مودال
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
