// =====================================================
// 08 - CSS CLASS EKLEMEK VE ÇIKARMAK
// =====================================================

// =====================================================
// 1. CLASS EKLEMEK - classList.add()
// =====================================================

// Belirli bir elemente CSS class'ı eklemek için
let element = document.getElementById("test");
element.classList.add("active");

// Birden fazla class eklemek
element.classList.add("highlight", "selected");

// =====================================================
// 2. CLASS ÇIKARMAK - classList.remove()
// =====================================================

// Belirli bir elementten CSS class'ı çıkarmak için
element.classList.remove("active");

// Birden fazla class çıkarmak
element.classList.remove("highlight", "selected");

// =====================================================
// 3. CLASS TOGGLE - classList.toggle()
// =====================================================

// Class varsa çıkar, yoksa ekle (aç/kapa mantığı)
element.classList.toggle("active");

// =====================================================
// 4. CLASS KONTROL ETMEK - classList.contains()
// =====================================================

// Elementte belirli bir class var mı kontrol et
if (element.classList.contains("active")) {
    console.log("Element active class'ına sahip");
} else {
    console.log("Element active class'ına sahip değil");
}

// =====================================================
// 5. TÜM CLASS'LARI GÖRMEK - classList
// =====================================================

// Elementin tüm class'larını görme
console.log("Elementin class'ları:", element.classList);

// Class sayısını öğrenme
console.log("Class sayısı:", element.classList.length);

// =====================================================
// 6. PRATİK ÖRNEKLER
// =====================================================

// Örnek 1 - Buton ile class ekleme/çıkarma
function toggleButton() {
    let btn = document.getElementById("myButton");
    btn.classList.toggle("active");
}

// Örnek 2 - Menü açma/kapama
function toggleMenu() {
    let menu = document.getElementById("menu");
    menu.classList.toggle("open");
}

// Örnek 3 - Dark mode toggle
function toggleDarkMode() {
    let body = document.body;
    body.classList.toggle("dark-mode");
}

// Örnek 4 - Kart seçimi
function selectCard(cardId) {
    // Önce tüm kartlardan selected class'ını çıkar
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.classList.remove("selected");
    });
    
    // Seçilen karta selected class'ını ekle
    let selectedCard = document.getElementById(cardId);
    selectedCard.classList.add("selected"); 
}

// Örnek 5 - Loading durumu
function showLoading() {
    let button = document.getElementById("loadBtn");
    button.classList.add("loading"); 
    button.textContent = "Yükleniyor...";
}

function hideLoading() {
    let button = document.getElementById("loadBtn");
    button.classList.remove("loading");
    button.textContent = "Yükle";
}

// =====================================================
// 7. EVENT LISTENER ÖRNEKLERİ
// =====================================================

// Buton tıklama ile class ekleme
document.addEventListener("DOMContentLoaded", function() {
    let toggleBtn = document.getElementById("toggleBtn");
    if (toggleBtn) {
        toggleBtn.addEventListener("click", function() {
            let target = document.getElementById("target");
            target.classList.toggle("highlight");
        });
    }
});

// Mouse hover ile class ekleme
let hoverElement = document.getElementById("hoverMe");
if (hoverElement) {
    hoverElement.addEventListener("mouseenter", function() {
        this.classList.add("hover-effect");
    });
    
    hoverElement.addEventListener("mouseleave", function() {
        this.classList.remove("hover-effect");
    });
}

// =====================================================
// 8. QUERY SELECTOR İLE ÇOKLU ELEMENT
// =====================================================

// Tüm elementlere class ekleme
let allCards = document.querySelectorAll(".card");
allCards.forEach(card => {
    card.classList.add("animate");
});

// Belirli koşullara göre class ekleme
let inputs = document.querySelectorAll("input");
inputs.forEach(input => {
    if (input.value.length > 0) {
        input.classList.add("has-value");
    }
});

// =====================================================
// 9. ÖNEMLİ NOTLAR
// =====================================================

//  classList.add() - Class ekler(ikinci tıklamada değişiklik olmaz, aynı class eklemeye çalışırsanız değişiklik olmaz)
//  classList.remove() - Class çıkarır  
//  classList.toggle() - Class varsa çıkarır, yoksa ekler(aç/kapa mantığı)
//  classList.contains() - Class var mı kontrol eder
//  classList.replace() - Eski class'ı yeni class ile değiştirir


// =====================================================
// 10. HIZLI REFERANS
// =====================================================

// Temel kullanım:
// element.classList.add("class-name");     // Class ekle
// element.classList.remove("class-name");   // Class çıkar
// element.classList.toggle("class-name");   // Class aç/kapa
// element.classList.contains("class-name"); // Class var mı?

// Çoklu kullanım:
// element.classList.add("class1", "class2");
// element.classList.remove("class1", "class2");

// Class değiştirme:
// element.classList.replace("old-class", "new-class");
