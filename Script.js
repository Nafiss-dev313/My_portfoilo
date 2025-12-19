// تابع منوی همبرگری (این حتماً بمونه)
function toggleMenu() {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("active");
  }
}

// کد مودال اتاق‌ها (این رو کامل جایگزین کن)
const modal = document.getElementById("rooms-modal");
const openBtn = document.getElementById("open-rooms-modal");
const closeBtn = document.querySelector(".modal-close");

// باز کردن مودال
if (openBtn) {
  openBtn.onclick = function() {
    modal.style.display = "block";
  }
}

// بستن با دکمه ×
if (closeBtn) {
  closeBtn.onclick = function() {
    modal.style.display = "none";
  }
}

// بستن با کلیک خارج از مودال
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}