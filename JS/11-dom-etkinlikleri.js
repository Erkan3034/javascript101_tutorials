
// 1. TIKLAMA ETKİNLİKLERİ (CLICK EVENTS)

// onclick ile fonksiyon çağırma (HTML'de onclick="tiklaFonksiyon()")
function tiklaFonksiyon() {
    console.log("Buton tıklandı!");
    alert("Merhaba! Buton tıklandı!");
    
    let result = document.getElementById("click-result");
    result.innerHTML = "✅ Buton tıklandı - " + new Date().toLocaleTimeString();
    result.style.backgroundColor = "#d4edda";
    result.style.color = "#155724";
}

// addEventListener ile etkinlik ekleme (Modern yöntem)
document.getElementById("btn-2").addEventListener("click", function() {
    console.log("addEventListener ile buton tıklandı!");
    
    let result = document.getElementById("click-result");
    result.innerHTML = "✅ addEventListener ile tıklandı - " + new Date().toLocaleTimeString();
    result.style.backgroundColor = "#cce5ff";
    result.style.color = "#004085";
});

// Çift tıklama etkinliği
document.getElementById("btn-3").addEventListener("dblclick", function() {
    console.log("Çift tıklandı!");
    
    let result = document.getElementById("click-result");
    result.innerHTML = "✅ Çift tıklandı - " + new Date().toLocaleTimeString();
    result.style.backgroundColor = "#fff3cd";
    result.style.color = "#856404";
});

// 2. KLAVYE ETKİNLİKLERİ (KEYBOARD EVENTS)

const keyboardInput = document.getElementById("keyboard-input");
const keyboardResult = document.getElementById("keyboard-result");

// Tuşa basma etkinliği
keyboardInput.addEventListener("keydown", function(event) {
    let keyInfo = `
        <strong>Tuşa Basıldı:</strong> ${event.key}<br>
        <strong>Kod:</strong> ${event.code}<br>
        <strong>Basılı Tuşlar:</strong> ${getPressedKeys(event)}<br>
        <strong>Zaman:</strong> ${new Date().toLocaleTimeString()}
    `;
    
    keyboardResult.innerHTML = keyInfo;
    keyboardResult.style.backgroundColor = "#f8d7da";
    keyboardResult.style.color = "#721c24";
});

// Tuş bırakma etkinliği
keyboardInput.addEventListener("keyup", function(event) {
    console.log("Tuş bırakıldı:", event.key);
});

// Tuş basma (sadece karakter tuşları)
keyboardInput.addEventListener("keypress", function(event) {
    console.log("Karakter tuşu basıldı:", event.key);
});

// Basılı tuşları kontrol etme
function getPressedKeys(event) {
    let keys = [];
    if (event.ctrlKey) keys.push("Ctrl");
    if (event.altKey) keys.push("Alt");
    if (event.shiftKey) keys.push("Shift");
    if (event.metaKey) keys.push("Meta");
    return keys.length > 0 ? keys.join(" + ") : "Hiçbiri";
}

// 3. FARE ETKİNLİKLERİ (MOUSE EVENTS)

const mouseArea = document.getElementById("mouse-area");
const mouseResult = document.getElementById("mouse-result");

// Fare üzerine gelme
mouseArea.addEventListener("mouseenter", function() {
    mouseResult.innerHTML = "🖱️ Fare alana girdi - " + new Date().toLocaleTimeString();
    mouseResult.style.backgroundColor = "#d1ecf1";
    mouseResult.style.color = "#0c5460";
    this.style.backgroundColor = "#e3f2fd";
});

// Fare alandan çıkma
mouseArea.addEventListener("mouseleave", function() {
    mouseResult.innerHTML = "🖱️ Fare alandan çıktı - " + new Date().toLocaleTimeString();
    mouseResult.style.backgroundColor = "#f8d7da";
    mouseResult.style.color = "#721c24";
    this.style.backgroundColor = "#f8f9fa";
});

// Fare hareket etme
mouseArea.addEventListener("mousemove", function(event) {
    let rect = this.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    
    mouseResult.innerHTML = `🖱️ Fare hareket ediyor - X: ${Math.round(x)}, Y: ${Math.round(y)}`;
    mouseResult.style.backgroundColor = "#d4edda";
    mouseResult.style.color = "#155724";
});

// Fare sağ tıklama
mouseArea.addEventListener("contextmenu", function(event) {
    event.preventDefault(); // Varsayılan sağ tıklama menüsünü engelle
    mouseResult.innerHTML = "🖱️ Sağ tıklandı - " + new Date().toLocaleTimeString();
    mouseResult.style.backgroundColor = "#fff3cd";
    mouseResult.style.color = "#856404";
});

// 4. FORM ETKİNLİKLERİ (FORM EVENTS)

const testForm = document.getElementById("test-form");
const formResult = document.getElementById("form-result");

// Form gönderme etkinliği
testForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Sayfa yenilenmesini engelle
    
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let city = document.getElementById("city-select").value;
    let message = document.getElementById("message-text").value;
    
    let formData = `
        <strong>Form Gönderildi!</strong><br>
        <strong>Ad:</strong> ${name}<br>
        <strong>E-posta:</strong> ${email}<br>
        <strong>Şehir:</strong> ${city}<br>
        <strong>Mesaj:</strong> ${message}<br>
        <strong>Zaman:</strong> ${new Date().toLocaleString()}
    `;
    
    formResult.innerHTML = formData;
    formResult.style.backgroundColor = "#d4edda";
    formResult.style.color = "#155724";
    
    console.log("Form gönderildi:", {name, email, city, message});
});

// Input değişiklik etkinliği
document.getElementById("name-input").addEventListener("input", function() {
    console.log("İsim değişti:", this.value);
    formResult.innerHTML = `📝 İsim değişti: "${this.value}" - ${new Date().toLocaleTimeString()}`;
    formResult.style.backgroundColor = "#cce5ff";
    formResult.style.color = "#004085";
});

// Select değişiklik etkinliği
document.getElementById("city-select").addEventListener("change", function() {
    console.log("Şehir değişti:", this.value);
    formResult.innerHTML = `🏙️ Şehir değişti: "${this.value}" - ${new Date().toLocaleTimeString()}`;
    formResult.style.backgroundColor = "#fff3cd";
    formResult.style.color = "#856404";
});

// Form temizleme fonksiyonu
function formTemizle() {
    testForm.reset();
    formResult.innerHTML = "🗑️ Form temizlendi - " + new Date().toLocaleTimeString();
    formResult.style.backgroundColor = "#f8d7da";
    formResult.style.color = "#721c24";
}

// 5. GÖRSEL ETKİNLİKLER (VISUAL EVENTS)

const colorBoxes = document.querySelectorAll(".color-box");
const visualResult = document.getElementById("visual-result");

// Renk kutularına hover etkinliği
colorBoxes.forEach((box, index) => {
    box.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.1)";
        this.style.boxShadow = "0 4px 8px rgba(0,0,0,0.3)";
        visualResult.innerHTML = `🎨 Kutu ${index + 1} üzerine gelindi - ${new Date().toLocaleTimeString()}`;
        visualResult.style.backgroundColor = "#e2e3e5";
        visualResult.style.color = "#383d41";
    });
    
    box.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
        this.style.boxShadow = "none";
        visualResult.innerHTML = `🎨 Kutu ${index + 1} terk edildi - ${new Date().toLocaleTimeString()}`;
        visualResult.style.backgroundColor = "#d1ecf1";
        visualResult.style.color = "#0c5460";
    });
});

// Rastgele renk değiştirme
function renkDegistir() {
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#96ceb4", "#ffeaa7", "#dda0dd", "#98d8c8"];
    
    colorBoxes.forEach((box, index) => {
        let randomColor = colors[Math.floor(Math.random() * colors.length)];
        box.style.backgroundColor = randomColor;
        box.style.transition = "all 0.5s ease";
    });
    
    visualResult.innerHTML = `🌈 Tüm kutuların rengi değiştirildi - ${new Date().toLocaleTimeString()}`;
    visualResult.style.backgroundColor = "#f8d7da";
    visualResult.style.color = "#721c24";
}

// 6. SÜRÜKLEME ETKİNLİKLERİ (DRAG & DROP)

const draggableItem = document.getElementById("draggable-item");
const dragResult = document.getElementById("drag-result");

let isDragging = false;
let startX, startY, initialX, initialY;

// Sürükleme başlatma
draggableItem.addEventListener("mousedown", function(event) {
    isDragging = true;
    startX = event.clientX;
    startY = event.clientY;
    
    let rect = this.getBoundingClientRect();
    initialX = rect.left;
    initialY = rect.top;
    
    this.style.cursor = "grabbing";
    dragResult.innerHTML = `🖱️ Sürükleme başladı - ${new Date().toLocaleTimeString()}`;
    dragResult.style.backgroundColor = "#d4edda";
    dragResult.style.color = "#155724";
    
    event.preventDefault();
});

// Sürükleme sırasında
document.addEventListener("mousemove", function(event) {
    if (isDragging) {
        let deltaX = event.clientX - startX;
        let deltaY = event.clientY - startY;
        
        draggableItem.style.left = (initialX + deltaX) + "px";
        draggableItem.style.top = (initialY + deltaY) + "px";
        
        dragResult.innerHTML = `🖱️ Sürükleniyor - X: ${Math.round(initialX + deltaX)}, Y: ${Math.round(initialY + deltaY)}`;
        dragResult.style.backgroundColor = "#cce5ff";
        dragResult.style.color = "#004085";
    }
});

// Sürükleme bitirme
document.addEventListener("mouseup", function() {
    if (isDragging) {
        isDragging = false;
        draggableItem.style.cursor = "move";
        
        dragResult.innerHTML = `🖱️ Sürükleme bitti - ${new Date().toLocaleTimeString()}`;
        dragResult.style.backgroundColor = "#fff3cd";
        dragResult.style.color = "#856404";
    }
});

// 7. SAYFA ETKİNLİKLERİ (PAGE EVENTS)

// Sayfa yüklendiğinde
window.addEventListener("load", function() {
    console.log("Sayfa tamamen yüklendi!");
    document.getElementById("page-result").innerHTML = "📄 Sayfa yüklendi - " + new Date().toLocaleTimeString();
});

// Sayfa kapatılırken
window.addEventListener("beforeunload", function(event) {
    event.preventDefault();
    event.returnValue = "Sayfadan ayrılmak istediğinizden emin misiniz?";
});

// Sayfa boyutu değiştiğinde
window.addEventListener("resize", function() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    
    document.getElementById("page-result").innerHTML = `
        📏 Sayfa boyutu değişti<br>
        Genişlik: ${width}px<br>
        Yükseklik: ${height}px<br>
        Zaman: ${new Date().toLocaleTimeString()}
    `;
});

// Kaydırma etkinliği
window.addEventListener("scroll", function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        document.body.style.backgroundColor = "#f0f8ff";
    } else {
        document.body.style.backgroundColor = "#f5f5f5";
    }
});

// Sayfa bilgilerini gösterme
function sayfaBilgisi() {
    let info = `
        <strong>Sayfa Bilgileri:</strong><br>
        <strong>URL:</strong> ${window.location.href}<br>
        <strong>Başlık:</strong> ${document.title}<br>
        <strong>Genişlik:</strong> ${window.innerWidth}px<br>
        <strong>Yükseklik:</strong> ${window.innerHeight}px<br>
        <strong>Kullanıcı Ajanı:</strong> ${navigator.userAgent}<br>
        <strong>Zaman:</strong> ${new Date().toLocaleString()}
    `;
    
    document.getElementById("page-result").innerHTML = info;
    document.getElementById("page-result").style.backgroundColor = "#d1ecf1";
    document.getElementById("page-result").style.color = "#0c5460";
}

// 8. ÖZEL ETKİNLİKLER (CUSTOM EVENTS)

// Özel etkinlik oluşturma
const customEvent = new CustomEvent("ozelEtkinlik", {
    detail: {
        mesaj: "Bu özel bir etkinlik!",
        zaman: new Date().toLocaleTimeString()
    }
});

// Özel etkinliği dinleme
document.addEventListener("ozelEtkinlik", function(event) {
    console.log("Özel etkinlik tetiklendi:", event.detail);
    
    let customResult = document.getElementById("custom-result");
    customResult.innerHTML = `
        <strong>Özel Etkinlik Tetiklendi!</strong><br>
        <strong>Mesaj:</strong> ${event.detail.mesaj}<br>
        <strong>Zaman:</strong> ${event.detail.zaman}
    `;
    customResult.style.backgroundColor = "#d4edda";
    customResult.style.color = "#155724";
});

// Özel etkinliği tetikleme
document.getElementById("custom-trigger").addEventListener("click", function() {
    document.dispatchEvent(customEvent);
});

// 9. ETKİNLİK YÖNETİMİ (EVENT MANAGEMENT)

// Etkinlik dinleyicisini kaldırma örneği
let clickCount = 0;
const testButton = document.createElement("button");
testButton.textContent = "Test Butonu";
testButton.style.margin = "10px";

// Etkinlik dinleyicisi ekleme
function etkinlikEkle() {
    testButton.addEventListener("click", testClickHandler);
    console.log("Etkinlik dinleyicisi eklendi");
}

// Etkinlik dinleyicisi kaldırma
function etkinlikKaldir() {
    testButton.removeEventListener("click", testClickHandler);
    console.log("Etkinlik dinleyicisi kaldırıldı");
}

// Test fonksiyonu
function testClickHandler() {
    clickCount++;
    console.log(`Test butonu tıklandı: ${clickCount} kez`);
}

// 10. ETKİNLİK DELEGASYONU (EVENT DELEGATION)

// Dinamik olarak eklenen elementler için etkinlik delegasyonu
document.addEventListener("click", function(event) {
    if (event.target.classList.contains("dynamic-button")) {
        console.log("Dinamik buton tıklandı:", event.target.textContent);
        event.target.style.backgroundColor = "#28a745";
    }
});

// Dinamik buton ekleme fonksiyonu
function dinamikButonEkle() {
    const button = document.createElement("button");
    button.textContent = "Dinamik Buton " + Math.random().toString(36).substr(2, 5);
    button.className = "dynamic-button";
    button.style.margin = "5px";
    
    document.body.appendChild(button);
}

// Sayfa yüklendiğinde çalışacak kodlar
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM hazır! Tüm etkinlikler yüklendi.");
    
    // Başlangıç renklerini ayarla
    colorBoxes.forEach((box, index) => {
        const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1"];
        box.style.backgroundColor = colors[index % colors.length];
    });
    
    // Draggable elementi başlangıç pozisyonuna ayarla
    draggableItem.style.left = "50px";
    draggableItem.style.top = "50px";
    
    console.log("🎉 Tüm DOM etkinlikleri başarıyla yüklendi!");
});

// ETKİNLİK TİPLERİ ÖZET:
/*
1. Mouse Events: click, dblclick, mouseenter, mouseleave, mousemove, contextmenu
2. Keyboard Events: keydown, keyup, keypress
3. Form Events: submit, input, change, focus, blur
4. Window Events: load, beforeunload, resize, scroll
5. Touch Events: touchstart, touchmove, touchend (mobil cihazlar için)
6. Custom Events: Kendi oluşturduğunuz etkinlikler
7. Event Delegation: Dinamik elementler için etkinlik yönetimi
8. Event Bubbling: Etkinliklerin DOM'da yukarı doğru yayılması
9. Event Capturing: Etkinliklerin DOM'da aşağı doğru yayılması
10. Event Prevention: preventDefault() ve stopPropagation() kullanımı
*/
