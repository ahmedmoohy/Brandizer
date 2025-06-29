// GSAP Loader Animation
gsap.to("#loader", {
  opacity: 0,
  duration: 1,
  delay: 2,
  onComplete: () => {
    document.body.classList.remove("loading");
  },
});

// Generate Alphabet Buttons
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const alphabetDiv = document.getElementById("alphabet");

for (let char of alphabet) {
  const button = document.createElement("button");
  button.textContent = char;
  button.className =
    "w-10 h-10 bg-gray-700 text-white rounded-full hover:bg-gray-600 focus:outline-none";
  button.onclick = () => filterBrands(char);
  alphabetDiv.appendChild(button);
}

// Generate Brands List
const brands = [
  "Nike",
  "Adidas",
  "Zara",
  "H&M",
  "Calvin Klein",
].sort();

const brandsList = document.getElementById("brandsList");

brands.forEach((brand) => {
  const li = document.createElement("li");
  li.textContent = brand;
  li.className =
    "py-2 cursor-pointer hover:bg-gray-700 hover:text-white";
  li.onclick = () => window.location.href = `brands/brand-${brand.toLowerCase()}.html`;
  brandsList.appendChild(li);
});

// Toggle Sidebar
document.getElementById("toggleSidebar").onclick = () => {
  document.getElementById("sidebar").classList.toggle("closed");
};

// Language Toggle
function toggleLang() {
  const html = document.documentElement;
  if (html.lang === "ar") {
    html.lang = "en";
    html.dir = "ltr";
    document.querySelector("h1").textContent = "Clothing Store";
    document.querySelector("#langToggle").textContent = "Arabic";
  } else {
    html.lang = "ar";
    html.dir = "rtl";
    document.querySelector("h1").textContent = "متجر الملابس";
    document.querySelector("#langToggle").textContent = "English";
  }
}
