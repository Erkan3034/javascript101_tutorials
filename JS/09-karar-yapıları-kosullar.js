// =====================================================
// 09 - KARAR YAPILARI VE KOŞULLAR
// =====================================================

// =====================================================
// 1. IF KULLANIMI - Temel Koşul
// =====================================================

// Eğer bir koşul doğruysa çalışır
let yas = 18;
if (yas >= 18) {
    console.log("Reşit olduğun için girebilirsin");
}

// =====================================================
// 2. IF-ELSE KULLANIMI - İki Seçenek
// =====================================================

// Koşul doğruysa bir şey, yanlışsa başka şey yapar
let not = 75;
if (not >= 50) {
    console.log("Geçtin!");
} else {
    console.log("Kaldın!");
}

// =====================================================
// 3. IF-ELSE IF-ELSE - Çoklu Koşul
// =====================================================

// Birden fazla koşul kontrol eder
let puan = 85;
if (puan >= 90) {
    console.log("AA - Mükemmel!");
} else if (puan >= 80) {
    console.log("BA - Çok İyi!");
} else if (puan >= 70) {
    console.log("BB - İyi!");
} else if (puan >= 60) {
    console.log("CB - Orta!");
} else if (puan >= 50) {
    console.log("CC - Geçer!");
} else {
    console.log("FF - Kaldı!");
}

// =====================================================
// 4. NESTED IF - İç İçe Koşullar
// =====================================================

// Koşul içinde koşul
let havaDurumu = "güneşli";
let sicaklik = 25;

if (havaDurumu === "güneşli") {
    console.log("Hava güneşli");
    if (sicaklik > 30) {
        console.log("Çok sıcak, gölgeye kaç!");
    } else if (sicaklik > 20) {
        console.log("İdeal hava, dışarı çıkabilirsin");
    } else {
        console.log("Biraz soğuk, mont giy");
    }
} else {
    console.log("Hava kapalı");
}

// =====================================================
// 5. SWITCH-CASE - Çoklu Seçim
// =====================================================

// Çoklu koşul için daha temiz kod
let gun = "pazartesi";

switch (gun) {
    case "pazartesi":
        console.log("Haftanın başlangıcı");
        break;
    case "salı":
    case "çarşamba":
    case "perşembe":
        console.log("Hafta ortası");
        break;
    case "cuma":
        console.log("Hafta sonu yaklaşıyor");
        break;
    case "cumartesi":
    case "pazar":
        console.log("Hafta sonu!");
        break;
    default:
        console.log("Geçersiz gün");
}


// =====================================================
// 6. TERNARY OPERATOR - Kısa Koşul
// =====================================================

// Tek satırda if-else
let yas2 = 20;
let durum = yas2 >= 18 ? "Reşit" : "Reşit değil";
console.log(durum);

// Daha karmaşık örnek
let not2 = 85;
let sonuc = not2 >= 50 ? "Geçti" : "Kaldı";
console.log("Sonuç:", sonuc);

// =====================================================
// 7. LOGICAL OPERATORS - Mantıksal Operatörler
// =====================================================

// && (AND) - Her iki koşul da doğru olmalı
let yas3 = 25;
let ehliyet = true;

if (yas3 >= 18 && ehliyet === true) {
    console.log("Araba kullanabilirsin");
} else {
    console.log("Araba kullanamazsın");
}

// || (OR) - Koşullardan biri doğru olmalı
let havaDurumu2 = "güneşli";
let semsiye = true;

if (havaDurumu2 === "güneşli" || semsiye === true) {
    console.log("Dışarı çıkabilirsin");
} else {
    console.log("Evde kal");
}

// ! (NOT) - Koşulun tersini alır
let uygun = false;
if (!uygun) {
    console.log("Uygun değil");
} else {
    console.log("Uygun");
}

// =====================================================
// 8. COMPARISON OPERATORS - Karşılaştırma Operatörleri
// =====================================================

let sayi1 = 10;
let sayi2 = 20;

// == (eşit) - Değerleri karşılaştırır
console.log(sayi1 == 10); // true

// === (katı eşit) - Değer ve tip kontrolü
console.log(sayi1 === "10"); // false (tip farklı)

// != (eşit değil)
console.log(sayi1 != 20); // true

// !== (katı eşit değil)
console.log(sayi1 !== "10"); // true

// > (büyük)
console.log(sayi2 > sayi1); // true

// < (küçük)
console.log(sayi1 < sayi2); // true

// >= (büyük eşit)
console.log(sayi1 >= 10); // true

// <= (küçük eşit)
console.log(sayi1 <= 20); // true

// =====================================================
// 9. PRATİK ÖRNEKLER
// =====================================================

// Örnek 1 - Yaş kontrolü
function yasKontrolu(yas) {
    if (yas < 0) {
        return "Geçersiz yaş";
    } else if (yas < 13) {
        return "Çocuk";
    } else if (yas < 20) {
        return "Genç";
    } else if (yas < 65) {
        return "Yetişkin";
    } else {
        return "Yaşlı";
    }
}

console.log(yasKontrolu(25)); // Yetişkin

// Örnek 2 - Not hesaplama
function notHesapla(vize, final) {
    let ortalama = (vize * 0.4) + (final * 0.6);
    
    if (ortalama >= 90) {
        return "AA - Mükemmel";
    } else if (ortalama >= 80) {
        return "BA - Çok İyi";
    } else if (ortalama >= 70) {
        return "BB - İyi";
    } else if (ortalama >= 60) {
        return "CB - Orta";
    } else if (ortalama >= 50) {
        return "CC - Geçer";
    } else {
        return "FF - Kaldı";
    }
}

console.log(notHesapla(80, 85)); // BA - Çok İyi

// Örnek 3 - Giriş kontrolü
function girisKontrolu(kullaniciAdi, sifre) {
    if (kullaniciAdi === "admin" && sifre === "12345") {
        return "Giriş başarılı";
    } else if (kullaniciAdi === "" || sifre === "") {
        return "Kullanıcı adı ve şifre gerekli";
    } else {
        return "Giriş başarısız";
    }
}

console.log(girisKontrolu("admin", "12345")); // Giriş başarılı

// =====================================================
// 10. KARMAŞIK KOŞULLAR
// =====================================================

// Birden fazla koşul birleştirme
let yas4 = 25;
let gelir = 50000;
let krediSkoru = 750;

if ((yas4 >= 18 && yas4 <= 65) && gelir >= 30000 && krediSkoru >= 700) {
    console.log("Kredi başvurunuz onaylandı");
} else {
    console.log("Kredi başvurunuz reddedildi");
}

// Koşullu atama
let islem = "topla";
let sayi3 = 10;
let sayi4 = 5;
let sonuc2;

if (islem === "topla") {
    sonuc2 = sayi3 + sayi4;
} else if (islem === "çıkar") {
    sonuc2 = sayi3 - sayi4;
} else if (islem === "çarp") {
    sonuc2 = sayi3 * sayi4;
} else if (islem === "böl") {
    sonuc2 = sayi3 / sayi4;
} else {
    sonuc2 = "Geçersiz işlem";
}

console.log("Sonuç:", sonuc2);

// =====================================================
// 11. TRUTHY VE FALSY DEĞERLER
// =====================================================

// Falsy değerler (yanlış kabul edilen)
// false, 0, "", null, undefined, NaN

let deger = "";
if (deger) {
    console.log("Değer var");
} else {
    console.log("Değer yok veya boş");
}

// Truthy kontrolü
let isim = "Ahmet";
if (isim) {
    console.log("İsim var:", isim);
} else {
    console.log("İsim yok");
}

// =====================================================
// 12. SHORT-CIRCUIT EVALUATION
// =====================================================

// && operatörü - ilk false bulduğunda durur
let kullanici = null;
let varsayilanIsim = "Misafir";
let sonIsim = kullanici && kullanici.isim || varsayilanIsim;
console.log("İsim:", sonIsim); // Misafir

// || operatörü - ilk true bulduğunda durur
let ayar = null;
let varsayilanAyar = "normal";
let aktifAyar = ayar || varsayilanAyar;
console.log("Ayar:", aktifAyar); // normal

// =====================================================
// 13. ÖNEMLİ NOTLAR
// =====================================================

// ✓ == yerine === kullan (tip kontrolü için)
// ✓ Koşulları parantez içinde grupla
// ✓ Karmaşık koşulları değişkenlere ata
// ✓ Switch-case'de break kullanmayı unutma
// ✓ Ternary operator'ı basit durumlar için kullan
// ✓ Nested if'lerden kaçın, fonksiyonlara böl
// ✓ Falsy değerleri kontrol et
// ✓ Kod okunabilirliğini öncelikle düşün

// =====================================================
// 14. HIZLI REFERANS
// =====================================================

// Temel koşul:
// if (koşul) { kod }

// İki seçenek:
// if (koşul) { kod } else { kod }

// Çoklu seçenek:
// if (koşul1) { kod } else if (koşul2) { kod } else { kod }

// Switch-case:
// switch (değişken) { case değer: kod; break; default: kod; }

// Ternary:
// koşul ? doğruysa : yanlışsa

// Mantıksal operatörler:
// && (AND), || (OR), ! (NOT)

// Karşılaştırma:
// ==, ===, !=, !==, >, <, >=, <=
