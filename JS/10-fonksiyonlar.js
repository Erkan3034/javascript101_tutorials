
// FONKSİYONLAR KONUSU - TEMEL KAVRAMLAR

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
    yazdir.innerHTML = "Sayfa değiştirildi!";
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
}

// 10. İÇ İÇE FONKSİYON
function anaFonksiyon() {
    console.log("Ana fonksiyon çalışıyor");
    
    function icFonksiyon() {
        console.log("İç fonksiyon çalışıyor");
    }
    
    icFonksiyon(); // İç fonksiyonu çağır
}

// FONKSİYON ÇAĞIRMA ÖRNEKLERİ
// merhaba(); // Parametresiz fonksiyon
// selamla("Ahmet"); // Tek parametreli fonksiyon
// kisiBilgisi("Mehmet", 25, "İstanbul"); // Çoklu parametreli fonksiyon
// let sonuc = topla(5, 3); // Değer döndüren fonksiyon
// console.log(sonuc);
// let durum = yasKontrolu(20); // Koşullu fonksiyon
// console.log(durum);


