const productsContainer = document.getElementById("products");

// إنشاء 100 منتج كمثال مع تأخير في الظهور
for (let i = 1; i <= 100; i++) {
    const productDiv = document.createElement("div");
    productDiv.className = "product";
    productDiv.style.setProperty('--delay', i); // استخدام المتغير --delay في CSS
    productDiv.innerHTML = `
        <img src="${i}.jpg" alt="منتج ${i}">
        <p>منتج رقم ${i}</p>
        <p>$${(Math.random() * 100).toFixed(2)}</p>
    `;
    productsContainer.appendChild(productDiv);
}

// تبديل اللغة بين العربي والإنجليزي
function toggleLang() {
    const html = document.documentElement;
    if (html.getAttribute("lang") === "ar") {
        html.setAttribute("lang", "en");
        html.setAttribute("dir", "ltr");
        document.querySelector("h1").textContent = "Welcome to the Clothing Store";
        document.querySelector("button").textContent = "Arabic";
    } else {
        html.setAttribute("lang", "ar");
        html.setAttribute("dir", "rtl");
        document.querySelector("h1").textContent = "مرحباً بكم في متجر الملابس";
        document.querySelector("button").textContent = "English";
    }
}
