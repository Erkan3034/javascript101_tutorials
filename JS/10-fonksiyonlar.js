
// FONKSİYONLAR TEMEL KAVRAMLAR

// 1. BASIT FONKSİYON TANIMLAMA
function merhaba() {
    console.log("Merhaba Dünya!");
    alert("Merhaba Dünya!");
}

// 2. PARAMETRE ALAN FONKSİYON
function selamla(isim) {
    console.log("Merhaba " + isim);
    alert("Merhaba " + isim);
}

// 3. BİRDEN FAZLA PARAMETRE ALAN FONKSİYON
function kisiBilgisi(ad, yas, sehir) {
    console.log("Ad: " + ad + ", Yaş: " + yas + ", Şehir: " + sehir);
}

// 4. DEĞER DÖNDÜREN FONKSİYON
function topla(sayi1, sayi2) {
    return sayi1 + sayi2;
}

// 5. KOŞULLU FONKSİYON
function yasKontrolu(yas) {
    if (yas >= 18) {
        return "Yetişkin";
    } else {
        return "Çocuk";
    }
}

// 6. DOM İLE ÇALIŞAN FONKSİYON
function sayfaDegistir() {
    let yazdir = document.getElementById("yazdir");
    yazdir.style.color = "red";
    yazdir.style.fontSize = "20px";
    yazdir.style.fontWeight = "bold";
    yazdir.innerHTML = "Sayfa değiştirildi...";
}

// 7. ÇOKLU İŞLEM YAPAN FONKSİYON
function tamStilUygula() {
    let yazdir = document.getElementById("yazdir");
    yazdir.style.color = "blue";
    yazdir.style.fontSize = "18px";
    yazdir.style.fontWeight = "normal";
    yazdir.style.textAlign = "center";
    yazdir.style.marginTop = "20px";
    yazdir.style.marginBottom = "20px";
    yazdir.style.backgroundColor = "lightyellow";
    yazdir.style.padding = "15px";
    yazdir.style.borderRadius = "10px";
    yazdir.innerHTML = "Stil uygulandı!";
}

// 8. DİZİ İLE ÇALIŞAN FONKSİYON örnek dizi yazdirma
function diziYazdir(dizi) {
    for (let i = 0; i < dizi.length; i++) {
        console.log(dizi[i]);
    }
}

// 9. OBJE İLE ÇALIŞAN FONKSİYON
function kisiBilgisiYazdir(kisi) {
    console.log("Ad: " + kisi.ad);
    console.log("Soyad: " + kisi.soyad);
    console.log("Yaş: " + kisi.yas);
    console.log("Şehir: " + kisi.sehir);    
}

// 10. İÇ İÇE FONKSİYON
function anaFonksiyon() {
    console.log("Ana fonksiyon çalışıyor");
    
    function icFonksiyon() {
        console.log("İç fonksiyon çalışıyor");
    }
    
    icFonksiyon(); // İç fonksiyonu çağır
}

// 11. ARROW FUNCTION (OK FONKSİYONU) - MODERN JAVASCRIPT
// Geleneksel fonksiyon yazımı:
function gelenekselTopla(a, b) {
    return a + b;
}

// Arrow function ile aynı işlem:
const arrowTopla = (a, b) => {
    return a + b;
}

// Tek satır arrow function (return otomatik):
const tekSatirTopla = (a, b) => a + b;

// Tek parametre arrow function (parantez opsiyonel):
const kareAl = x => x * x;

// Parametresiz arrow function:
const selamVer = () => {
    console.log("Merhaba Arrow Function!");
}

// 12. ARROW FUNCTION ÖRNEKLERİ

// DOM ile çalışan arrow function:
const sayfaDegistirArrow = () => {
    let yazdir = document.getElementById("yazdir");
    yazdir.style.color = "green";
    yazdir.style.fontSize = "24px";
    yazdir.innerHTML = "Arrow Function çalıştı!";
}

// Parametreli arrow function:
const kisiSelamla = (isim) => {
    return "Merhaba " + isim + "!";
}

// Çoklu parametre arrow function:
const hesapYap = (sayi1, sayi2, islem) => {
    if (islem === "topla") {
        return sayi1 + sayi2;
    } else if (islem === "cikar") {
        return sayi1 - sayi2;
    } else if (islem === "carp") {
        return sayi1 * sayi2;
    } else if (islem === "bol") {
        return sayi1 / sayi2;
    }
}

// Dizi işlemleri ile arrow function:
const sayilariTopla = (dizi) => {
    let toplam = 0;
    dizi.forEach(sayi => toplam += sayi);
    return toplam;
}

// Koşullu arrow function:
const yasKontroluArrow = (yas) => {
    return yas >= 18 ? "Yetişkin" : "Çocuk";
}

// 13. ARROW FUNCTION VS NORMAL FUNCTION FARKLARI

// Normal function:
function normalFonksiyon() {
    console.log("Normal function:", this);
}

// Arrow function:
const arrowFonksiyon = () => {
    console.log("Arrow function:", this);
}

// 14. ARROW FUNCTION KULLANIM ALANLARI

// Array metodları ile:
const sayilar = [1, 2, 3, 4, 5];

// map() ile arrow function:
const kareler = sayilar.map(sayi => sayi * sayi);

// filter() ile arrow function:
const ciftSayilar = sayilar.filter(sayi => sayi % 2 === 0);

// reduce() ile arrow function:
const toplam = sayilar.reduce((toplam, sayi) => toplam + sayi, 0);

// forEach() ile arrow function:
sayilar.forEach(sayi => console.log("Sayı:", sayi));

// 15. EVENT HANDLER OLARAK ARROW FUNCTION
const butonTikla = () => {
    alert("Buton tıklandı!");
    console.log("Arrow function event handler çalıştı");
}

// FONKSİYON ÇAĞIRMA ÖRNEKLERİ
// merhaba(); // Parametresiz fonksiyon
// selamla("Ahmet"); // Tek parametreli fonksiyon
 kisiBilgisi("Mehmet", 25, "İstanbul"); // Çoklu parametreli fonksiyon
// let sonuc = topla(5, 3); // Değer döndüren fonksiyon
// console.log(sonuc);
// let durum = yasKontrolu(20); // Koşullu fonksiyon
// console.log(durum);

// ARROW FUNCTION ÇAĞIRMA ÖRNEKLERİ
 console.log("Toplama: ",arrowTopla(10, 5)); // Arrow function
 console.log("Tek satır Toplama: ",tekSatirTopla(7, 3)); // Tek satır arrow function
 console.log("Kare: ",kareAl(4)); // Tek parametre arrow function
selamVer(); // Parametresiz arrow function
console.log("Selam: ",kisiSelamla("Zeynep")); // Parametreli arrow function
console.log("Hesap: ",hesapYap(10, 2, "bol")); // Çoklu parametre arrow function
console.log("Toplam: ",sayilariTopla([1, 2, 3, 4, 5])); // Dizi ile arrow function
console.log("Yaş Kontrolu: ",yasKontroluArrow(25)); // Koşullu arrow function
console.log("Kareler:", kareler); // Array map sonucu
console.log("Çift sayılar:", ciftSayilar); // Array filter sonucu
console.log("Toplam:", toplam); // Array reduce sonucu


