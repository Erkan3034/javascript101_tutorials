// ========================================
// JavaScript'te Boolean Veri Tipi
// ========================================

// 1. TEMEL BOOLEAN TANIMLAMA
console.log("=== TEMEL BOOLEAN TANIMLAMA ===");

// Boolean değerler - sadece true veya false
let dogru = true;
let yanlis = false;

console.log("Doğru değer:", dogru); // true
console.log("Yanlış değer:", yanlis); // false
console.log("Doğru tipi:", typeof dogru); // "boolean"
console.log("Yanlış tipi:", typeof yanlis); // "boolean"

// Boolean constructor ile oluşturma
let booleanObj = new Boolean(true);
let booleanPrimitive = Boolean(true);

console.log("Boolean objesi:", booleanObj); // [Boolean: true]
console.log("Boolean primitive:", booleanPrimitive); // true
console.log("Obje tipi:", typeof booleanObj); // "object"
console.log("Primitive tipi:", typeof booleanPrimitive); // "boolean"

// 2. KARŞILAŞTIRMA OPERATÖRLERİ
console.log("\n=== KARŞILAŞTIRMA OPERATÖRLERİ ===");

let a = 10;
let b = 5;
let c = "10";

// Eşitlik operatörleri
console.log("a == b:", a == b); // false (10 == 5)
console.log("a != b:", a != b); // true (10 != 5)
console.log("a == c:", a == c); // true (10 == "10" - tip dönüşümü)
console.log("a === c:", a === c); // false (10 === "10" - strict eşitlik)
console.log("a !== c:", a !== c); // true (10 !== "10")

// Büyüklük-küçüklük operatörleri
console.log("a > b:", a > b); // true (10 > 5)
console.log("a < b:", a < b); // false (10 < 5)
console.log("a >= b:", a >= b); // true (10 >= 5)
console.log("a <= b:", a <= b); // false (10 <= 5)

// String karşılaştırmaları
let str1 = "apple";
let str2 = "banana";
console.log("'apple' < 'banana':", str1 < str2); // true (alfabetik sıra)

// 3. MANTIKSAL OPERATÖRLER
console.log("\n=== MANTIKSAL OPERATÖRLER ===");

let x = true;
let y = false;
let z = true;

// AND operatörü (&&) - Tüm değerler true olmalı
console.log("true && true:", x && z); // true
console.log("true && false:", x && y); // false
console.log("false && true:", y && x); // false

// OR operatörü (||) - En az bir değer true olmalı
console.log("true || false:", x || y); // true
console.log("false || false:", y || false); // false
console.log("false || true:", y || x); // true

// NOT operatörü (!) - Değeri tersine çevirir
console.log("!true:", !x); // false
console.log("!false:", !y); // true
console.log("!!true:", !!x); // true (double negation)

// Karmaşık mantıksal ifadeler
let yas = 25;
let lisans = true;
let deneyim = 3;

let isAlabilir = (yas >= 18) && lisans && (deneyim >= 2);
console.log("İş alabilir mi?", isAlabilir); // true

// 4. TRUTHY VE FALSY DEĞERLER
console.log("\n=== TRUTHY VE FALSY DEĞERLER ===");

// Falsy değerler (false olarak değerlendirilen)
console.log("Boolean(false):", Boolean(false)); // false
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean(-0):", Boolean(-0)); // false
console.log("Boolean(0n):", Boolean(0n)); // false (BigInt)
console.log("Boolean(''):", Boolean('')); // false (boş string)
console.log("Boolean(null):", Boolean(null)); // false
console.log("Boolean(undefined):", Boolean(undefined)); // falses
console.log("Boolean(NaN):", Boolean(NaN)); // false

// Truthy değerler (true olarak değerlendirilen)
console.log("Boolean(true):", Boolean(true)); // true
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(-1):", Boolean(-1)); // true
console.log("Boolean('hello'):", Boolean('hello')); // true
console.log("Boolean('0'):", Boolean('0')); // true (string '0')
console.log("Boolean('false'):", Boolean('false')); // true (string 'false')
console.log("Boolean([]):", Boolean([])); // true (boş array)
console.log("Boolean({}):", Boolean({})); // true (boş object)
console.log("Boolean(function(){}):", Boolean(function() {})); // true

// 5. BOOLEAN DÖNÜŞÜMLERI
console.log("\n=== BOOLEAN DÖNÜŞÜMLERI ===");

// Explicit (açık) dönüşüm
let sayi = 42;
let metin = "Hello";
let bosString = "";

console.log("Boolean(42):", Boolean(sayi)); // true
console.log("Boolean('Hello'):", Boolean(metin)); // true
console.log("Boolean(''):", Boolean(bosString)); // false

// Implicit (örtük) dönüşüm
console.log("!!42:", !!sayi); // true
console.log("!!'Hello':", !!metin); // true
console.log("!!'':", !!bosString); // false

// Koşullu ifadelerde otomatik dönüşüm
if (sayi) {
    console.log("42 truthy bir değerdir");
}

if (!bosString) {
    console.log("Boş string falsy bir değerdir");
}

// 6. KOŞULLU İFADELER VE BOOLEAN KULLANIMI
console.log("\n=== KOŞULLU İFADELER ===");

// if-else yapısı
let puan = 85;
let gectiMi = puan >= 60;

if (gectiMi) {
    console.log("Tebrikler! Geçtiniz.");
} else {
    console.log("Maalesef kaldınız.");
}

// Ternary operator (üçlü operatör)
let sonuc = gectiMi ? "Geçti" : "Kaldı";
console.log("Sonuç:", sonuc);

// Switch-case ile boolean
let aktif = true;
switch (aktif) {
    case true:
        console.log("Sistem aktif");
        break;
    case false:
        console.log("Sistem pasif");
        break;
}

// 7. SHORT-CIRCUIT EVALUATION
console.log("\n=== SHORT-CIRCUIT EVALUATION ===");

// && operatörü - ilk falsy değerde durur
let kullanici = { ad: "Ahmet", yas: 30 };
let mesaj = kullanici && kullanici.ad && `Merhaba ${kullanici.ad}`;
console.log("Mesaj:", mesaj); // "Merhaba Ahmet"

// || operatörü - ilk truthy değerde durur
let varsayilanAd = null || undefined || "" || "Misafir";
console.log("Varsayılan ad:", varsayilanAd); // "Misafir"

// Nullish coalescing (??) - sadece null ve undefined için
let deger = null ?? undefined ?? 0 ?? "varsayılan";
console.log("Nullish coalescing:", deger); // 0

// 8. BOOLEAN METODLARI VE ÖZELLİKLERİ
console.log("\n=== BOOLEAN METODLARI ===");

let boolDeger = true;

// toString() metodu
console.log("toString():", boolDeger.toString()); // "true"
console.log("false toString():", false.toString()); // "false"

// valueOf() metodu
console.log("valueOf():", boolDeger.valueOf()); // true

// JSON.stringify ile boolean
let veri = { aktif: true, tamamlandi: false };
console.log("JSON:", JSON.stringify(veri)); // {"aktif":true,"tamamlandi":false}

// 9. PRATİK KULLANIM ÖRNEKLERİ
console.log("\n=== PRATİK KULLANIM ÖRNEKLERİ ===");

// Form validasyonu
function formValidasyonu(ad, email, sifre) {
    let adGecerli = ad && ad.length >= 2;
    let emailGecerli = email && email.includes('@');
    let sifreGecerli = sifre && sifre.length >= 6;

    return adGecerli && emailGecerli && sifreGecerli;
}

console.log("Form geçerli mi?", formValidasyonu("Ali", "ali@test.com", "123456")); // true
console.log("Form geçerli mi?", formValidasyonu("", "ali@test.com", "123")); // false

// Kullanıcı yetkileri kontrolü
function yetkiKontrolu(kullanici) {
    return kullanici &&
        kullanici.aktif &&
        kullanici.onaylanmis &&
        (kullanici.rol === 'admin' || kullanici.rol === 'moderator');
}

let admin = { aktif: true, onaylanmis: true, rol: 'admin' };
let normal = { aktif: true, onaylanmis: true, rol: 'user' };

console.log("Admin yetkisi:", yetkiKontrolu(admin)); // true
console.log("Normal kullanıcı yetkisi:", yetkiKontrolu(normal)); // false

// Toggle (açma/kapama) fonksiyonu
let isikDurumu = false;

function isikToggle() {
    isikDurumu = !isikDurumu;
    return isikDurumu;
}

console.log("Işık durumu:", isikToggle()); // true
console.log("Işık durumu:", isikToggle()); // false

// Array filtreleme
let sayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ciftSayilar = sayilar.filter(sayi => sayi % 2 === 0);
console.log("Çift sayılar:", ciftSayilar); // [2, 4, 6, 8, 10]

// Koşullu class ekleme (web development)
function cssClassOlustur(aktif, vurgulu, hata) {
    let classlar = [];

    if (aktif) classlar.push('active');
    if (vurgulu) classlar.push('highlighted');
    if (hata) classlar.push('error');

    return classlar.join(' ');
}

console.log("CSS Class:", cssClassOlustur(true, false, true)); // "active error"

// Boolean ile cache kontrolü
let cache = {};

function veriAl(anahtar, yenile = false) {
    if (!yenile && cache[anahtar]) {
        console.log("Cache'den alındı:", anahtar);
        return cache[anahtar];
    }

    // Simulated API call
    let veri = `${anahtar} verisi`;
    cache[anahtar] = veri;
    console.log("API'den alındı:", anahtar);
    return veri;
}

veriAl("kullanici1"); // API'den alındı
veriAl("kullanici1"); // Cache'den alındı
veriAl("kullanici1", true); // API'den alındı (yenile = true)

// Feature flag kontrolü
const FEATURES = {
    YENI_TASARIM: true,
    BETA_OZELLIK: false,
    PREMIUM_ICERIK: true
};

function ozellikAktifMi(ozellik) {
    return FEATURES[ozellik] === true;
}

if (ozellikAktifMi('YENI_TASARIM')) {
    console.log("Yeni tasarım aktif");
}

if (ozellikAktifMi('BETA_OZELLIK')) {
    console.log("Beta özellik aktif");
} else {
    console.log("Beta özellik pasif");
}
