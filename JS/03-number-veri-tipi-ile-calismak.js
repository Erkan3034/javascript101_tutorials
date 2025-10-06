// ========================================
// JavaScript'te Number Veri Tipi
// ========================================

// 1. TEMEL NUMBER TANIMLAMA
console.log("=== TEMEL NUMBER TANIMLAMA ===");

// Tam sayılar (Integer)
let tamSayi = 42;
let negatifSayi = -15;
let sifir = 0;

console.log("Tam sayı:", tamSayi);
console.log("Negatif sayı:", negatifSayi);
console.log("Sıfır:", sifir);

// Ondalıklı sayılar (Float/Decimal)
let ondalikliSayi = 3.14;
let bilimselGosterim = 2.5e6; // 2.5 * 10^6 = 2500000
let kucukSayi = 1.23e-4; // 0.000123

console.log("Ondalıklı sayı:", ondalikliSayi);
console.log("Bilimsel gösterim:", bilimselGosterim);
console.log("Küçük sayı:", kucukSayi);

// Farklı sayı sistemleri
let ikiliSayi = 0b1010; // Binary (2'lik sistem) = 10
let sekizliSayi = 0o12; // Octal (8'lik sistem) = 10
let onaltilikSayi = 0xFF; // Hexadecimal (16'lık sistem) = 255

console.log("Binary 1010:", ikiliSayi);
console.log("Octal 12:", sekizliSayi);
console.log("Hex FF:", onaltilikSayi);

// 2. MATEMATİKSEL İŞLEMLER
console.log("\n=== MATEMATİKSEL İŞLEMLER ===");

let a = 10;
let b = 3;

// Temel aritmetik operatörler
console.log("Toplama:", a + b); // 13
console.log("Çıkarma:", a - b); // 7
console.log("Çarpma:", a * b); // 30
console.log("Bölme:", a / b); // 3.333...
console.log("Mod (Kalan):", a % b); // 1
console.log("Üs alma:", a ** b); // 1000

// Artırma ve azaltma operatörleri
let sayac = 5;
console.log("Sayaç:", sayac); // 5
console.log("Pre-increment:", ++sayac); // 6
console.log("Post-increment:", sayac++); // 6 (sonra 7 olur)
console.log("Sayaç son hali:", sayac); // 7

let azalan = 10;
console.log("Pre-decrement:", --azalan); // 9
console.log("Post-decrement:", azalan--); // 9 (sonra 8 olur)
console.log("Azalan son hali:", azalan); // 8

// 3. MATH OBJESİ İLE İŞLEMLER
console.log("\n=== MATH OBJESİ İLE İŞLEMLER ===");

let sayi = 16.7;

console.log("Mutlak değer:", Math.abs(-15)); // 15
console.log("Yukarı yuvarlama:", Math.ceil(sayi)); // 17
console.log("Aşağı yuvarlama:", Math.floor(sayi)); // 16
console.log("Normal yuvarlama:", Math.round(sayi)); // 17

console.log("Karekök:", Math.sqrt(16)); // 4
console.log("Üs alma:", Math.pow(2, 3)); // 8
console.log("Maksimum:", Math.max(5, 10, 3)); // 10
console.log("Minimum:", Math.min(5, 10, 3)); // 3

// Rastgele sayı üretimi
console.log("Rastgele sayı (0-1):", Math.random());
console.log("Rastgele sayı (1-10):", Math.floor(Math.random() * 10) + 1);

// Trigonometrik fonksiyonlar
console.log("Pi sayısı:", Math.PI);
console.log("Sin(90°):", Math.sin(Math.PI / 2)); // 1
console.log("Cos(0°):", Math.cos(0)); // 1

// 4. NUMBER METODLARI VE ÖZELLİKLERİ
console.log("\n=== NUMBER METODLARI ===");

let buyukSayi = 123456.789;

// toString() - Sayıyı string'e çevirme
console.log("String'e çevirme:", buyukSayi.toString());
console.log("Binary string:", (255).toString(2)); // "11111111"
console.log("Hex string:", (255).toString(16)); // "ff"

// toFixed() - Ondalık basamak sayısını belirleme
console.log("2 ondalık basamak:", buyukSayi.toFixed(2)); // "123456.79"
console.log("0 ondalık basamak:", buyukSayi.toFixed(0)); // "123457"

// toPrecision() - Toplam anlamlı basamak sayısı
console.log("4 anlamlı basamak:", buyukSayi.toPrecision(4)); // "1.235e+5"

// toExponential() - Bilimsel gösterim
console.log("Bilimsel gösterim:", buyukSayi.toExponential(2)); // "1.23e+5"

// 5. TİP DÖNÜŞÜMLERI VE PARSING
console.log("\n=== TİP DÖNÜŞÜMLERI ===");

// String'den number'a dönüştürme
let stringSayi = "123";
let stringOndalik = "45.67";
let bozukString = "123abc";

console.log("parseInt():", parseInt(stringSayi)); // 123
console.log("parseFloat():", parseFloat(stringOndalik)); // 45.67
console.log("Number():", Number(stringSayi)); // 123
console.log("+ operatörü:", +stringSayi); // 123

// Bozuk string'ler
console.log("parseInt bozuk:", parseInt(bozukString)); // 123 (başındaki sayıyı alır)
console.log("Number bozuk:", Number(bozukString)); // NaN

// Farklı sistemlerden dönüştürme
console.log("Binary'den:", parseInt("1010", 2)); // 10
console.log("Hex'den:", parseInt("FF", 16)); // 255

// 6. ÖZEL DEĞERLER
console.log("\n=== ÖZEL DEĞERLER ===");

// NaN (Not a Number)
let nanDeger = Number("abc");
console.log("NaN değeri:", nanDeger);
console.log("NaN kontrolü:", isNaN(nanDeger)); // true
console.log("Number.isNaN():", Number.isNaN(nanDeger)); // true

// Infinity
let pozitifSonsuz = 1 / 0;
let negatifSonsuz = -1 / 0;
console.log("Pozitif sonsuz:", pozitifSonsuz); // Infinity
console.log("Negatif sonsuz:", negatifSonsuz); // -Infinity
console.log("Sonlu mu?", isFinite(pozitifSonsuz)); // false

// Number sabitleri
console.log("En büyük sayı:", Number.MAX_VALUE);
console.log("En küçük pozitif sayı:", Number.MIN_VALUE);
console.log("En büyük güvenli integer:", Number.MAX_SAFE_INTEGER);
console.log("En küçük güvenli integer:", Number.MIN_SAFE_INTEGER);

// 7. SAYI KONTROLÜ METODLARI
console.log("\n=== SAYI KONTROLÜ METODLARI ===");

let testSayisi = 42;
let testString = "42";

console.log("Number.isInteger(42):", Number.isInteger(testSayisi)); // true
console.log("Number.isInteger(42.0):", Number.isInteger(42.0)); // true
console.log("Number.isInteger(42.1):", Number.isInteger(42.1)); // false

console.log("Number.isSafeInteger(42):", Number.isSafeInteger(testSayisi)); // true
console.log("Number.isFinite(42):", Number.isFinite(testSayisi)); // true
console.log("Number.isNaN(42):", Number.isNaN(testSayisi)); // false

// typeof kontrolü
console.log("typeof 42:", typeof testSayisi); // "number"
console.log("typeof '42':", typeof testString); // "string"

// 8. PRATİK KULLANIM ÖRNEKLERİ
console.log("\n=== PRATİK KULLANIM ÖRNEKLERİ ===");

// Para hesaplama (ondalık hassasiyet problemi)
let fiyat1 = 0.1;
let fiyat2 = 0.2;
let toplam = fiyat1 + fiyat2;
console.log("0.1 + 0.2 =", toplam); // 0.30000000000000004
console.log("Düzeltilmiş:", Math.round(toplam * 100) / 100); // 0.3

// Yüzde hesaplama
let anaRakam = 150;
let yuzde = 20;
let yuzdeHesabi = (anaRakam * yuzde) / 100;
console.log(`${anaRakam}'nin %${yuzde}'si:`, yuzdeHesabi); // 30

// Aralık kontrolü
function aralikKontrol(sayi, min, max) {
    return sayi >= min && sayi <= max;
}
console.log("25, 10-50 aralığında mı?", aralikKontrol(25, 10, 50)); // true

// Sayı formatlaması
let buyukRakam = 1234567.89;
console.log("Yerel format:", buyukRakam.toLocaleString('tr-TR')); // Türkçe format
console.log("Para formatı:", buyukRakam.toLocaleString('tr-TR', {
    style: 'currency',
    currency: 'TRY'
}));

// Random sayı aralığı fonksiyonu
function rastgeleSayi(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("1-100 arası rastgele:", rastgeleSayi(1, 100));