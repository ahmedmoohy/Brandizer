// توليد الحروف الأبجدية
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetDiv = document.getElementById("alphabet");

for (let char of alphabet) {
  const span = document.createElement("span");
  span.className = "alphabet-letter";
  span.textContent = char;
  span.addEventListener("click", () => filterBrands(char));
  alphabetDiv.appendChild(span);
}

// توليد قائمة البراندات
const brands = [
  "نَايكي", "أديداس", "بانا ريبابليك", "هندريكس", "زارا",
  "إتش أند إم", "كالفن كلاين", "جوردان", "فِرتيست", "غوكو"
].sort();

const brandsList = document.getElementById("brandsList");

brands.forEach(brand => {
  const li = document.createElement("li");
  li.textContent = brand;
  li.addEventListener("click", () => {
    alert(`انتقل إلى صفحة ${brand}`);
    // يمكنك استبدال هذا بـ window.location.href = `pages/brand-${brand}.html`;
  });
  brandsList.appendChild(li);
});

// تصفية البراندات حسب الحرف
function filterBrands(letter) {
  const filtered = brands.filter(b => b.charAt(0).toUpperCase() === letter);
  brandsList.innerHTML = "";
  if (filtered.length === 0) {
    brandsList.innerHTML = "<p>لا يوجد براندات بهذا الحرف</p>";
  } else {
    filtered.forEach(brand => {
      const li = document.createElement("li");
      li.textContent = brand;
      brandsList.appendChild(li);
    });
  }
}

// Toggle Sidebar
document.getElementById("toggleSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("closed");
});
