// =====================================================
// 07 - PROMPT İLE KULLANICIDAN VERİ ALMAK
// =====================================================

// =====================================================
// 1. PROMPT NEDİR?
// =====================================================

// Prompt, kullanıcıdan veri almak için kullanılan bir JavaScript fonksiyonudur.
// Tarayıcıda bir dialog kutusu açar ve kullanıcının yazdığı metni döndürür.

// =====================================================
// 2. TEMEL KULLANIM
// =====================================================

// Prompt fonksiyonu her zaman bir string döndürür
let kullaniciAdi = prompt("Adınızı girin:");
console.log("Kullanıcının adı:", kullaniciAdi);

// =====================================================
// 3. PROMPT PARAMETRELERİ
// =====================================================

// İlk parametre: Mesaj (zorunlu)
// İkinci parametre: Varsayılan değer (opsiyonel)

// Örnek: Varsayılan değer ile
let yas = prompt("Yaşınızı girin:", "18");
console.log("Girilen yaş:", yas);

// =====================================================
// 4. KULLANICI İPTAL ETMESİ DURUMU
// =====================================================

// Kullanıcı 'İptal' butonuna basarsa:
// - prompt() fonksiyonu null değeri döndürür
// - Bu durumu kontrol etmek önemlidir

let ad = prompt("Adınızı girin:");
if (ad === null) {
    console.log("İşlem iptal edildi.");
} else if (ad === "") {
    console.log("Boş değer girildi.");
} else {
    console.log("Hoş geldiniz, " + ad + "!");
}

// =====================================================
// 5. VERİ TİPİ DÖNÜŞÜMLERİ
// =====================================================

// Prompt her zaman string döndürür:
// Eğer sayı gerekiyorsa, Number() ile dönüştürülmelidir:

let yasString = prompt("Yaşınızı girin:");
let yasNumber = Number(yasString);
console.log("Yaşınız:", yasNumber);
console.log("Veri tipi:", typeof yasNumber);

// =====================================================
// 6. GEÇERLİLİK KONTROLÜ
// =====================================================

// Kullanıcı girdisini kontrol etmek için:

let yasString2 = prompt("Yaşınızı girin:");
let yasNumber2 = Number(yasString2);

if (isNaN(yasNumber2)) {
    console.log("Geçersiz sayı girdiniz!");
} else if (yasNumber2 < 0 || yasNumber2 > 120) {
    console.log("Yaş 0-120 arasında olmalıdır!");
} else {
    console.log("Yaşınız:", yasNumber2);
}

// =====================================================
// 7. ÇOKLU PROMPT KULLANIMI
// =====================================================

// Birden fazla bilgi almak için:

let ad2 = prompt("Adınızı girin:");
let soyad = prompt("Soyadınızı girin:");
let yas3 = prompt("Yaşınızı girin:");

if (ad2 && soyad && yas3) {
    console.log(`Merhaba ${ad2} ${soyad}, ${yas3} yaşındasınız.`);
} else {
    console.log("Tüm bilgileri doldurun!");
}

// =====================================================
// 8. DÖNGÜ İLE PROMPT KULLANIMI
// =====================================================

// Kullanıcı doğru veri girene kadar tekrar sormak:

let gecerliYas;
do {
    gecerliYas = prompt("Yaşınızı girin (0-120 arası):");
    gecerliYas = Number(gecerliYas);
} while (isNaN(gecerliYas) || gecerliYas < 0 || gecerliYas > 120);

console.log("Girdiğiniz yaş:", gecerliYas);

// =====================================================
// 9. PRATİK ÖRNEKLER
// =====================================================

// Örnek 1 - Basit Kişisel Bilgi Formu:
function kisiselBilgiAl() {
    let ad = prompt("Adınızı girin:");
    let soyad = prompt("Soyadınızı girin:");
    let yas = prompt("Yaşınızı girin:");
    
    if (ad && soyad && yas) {
        let yasNumber = Number(yas);
        if (!isNaN(yasNumber)) {
            console.log(`Merhaba ${ad} ${soyad}!`);
            console.log(`Yaşınız: ${yasNumber}`);
            console.log(`Doğum yılınız: ${2024 - yasNumber}`);
        } else {
            console.log("Yaş bilgisi geçersiz!");
        }
    } else {
        console.log("Lütfen tüm bilgileri doldurun!");
    }
}

// Fonksiyonu çağır
kisiselBilgiAl();

// Örnek 2 - Hesap Makinesi:
function hesapMakinesi() {
    let sayi1 = prompt("İlk sayıyı girin:");
    let islem = prompt("İşlemi girin (+, -, *, /):");
    let sayi2 = prompt("İkinci sayıyı girin:");
    
    let num1 = Number(sayi1);
    let num2 = Number(sayi2);
    
    if (isNaN(num1) || isNaN(num2)) {
        console.log("Geçersiz sayı girdiniz!");
        return;
    }
    
    let sonuc;
    switch(islem) {
        case "+":
            sonuc = num1 + num2;
            break;
        case "-":
            sonuc = num1 - num2;
            break;
        case "*":
            sonuc = num1 * num2;
            break;
        case "/":
            sonuc = num2 !== 0 ? num1 / num2 : "Sıfıra bölme hatası!";
            break;
        default:
            sonuc = "Geçersiz işlem!";
    }
    
    console.log(`${num1} ${islem} ${num2} = ${sonuc}`);
}

// Fonksiyonu çağır
hesapMakinesi();

// =====================================================
// 10. ALTERNATİF YÖNTEMLER
// =====================================================

// Prompt dışında kullanıcıdan veri alma yöntemleri:

// 1. HTML Form Elemanları:
// - input, textarea, select, radio, checkbox
// - Daha kullanıcı dostu ve modern

// 2. confirm() fonksiyonu:
// - Evet/Hayır soruları için
// - true/false değer döndürür

let onay = confirm("İşlemi onaylıyor musunuz?");
if (onay) {
    console.log("İşlem onaylandı!");
} else {
    console.log("İşlem iptal edildi!");
}

// 3. alert() fonksiyonu:
// - Sadece bilgi göstermek için
// - Kullanıcıdan veri almaz

alert("Bu bir bilgi mesajıdır!");

// =====================================================
// 11. ÖNEMLİ NOTLAR VE TAVSİYELER
// =====================================================

// ✓ Prompt her zaman string döndürür - sayı gerekiyorsa dönüştürün
// ✓ Kullanıcı iptal ederse null döner - kontrol edin
// ✓ Boş string girişi olabilir - kontrol edin
// ✓ Geçerlilik kontrolü yapın (isNaN, uzunluk, vs.)
// ✓ Kullanıcı dostu mesajlar yazın
// ✓ Modern web uygulamalarında HTML formları tercih edin
// ✓ Prompt bloklayıcıdır - sayfa donar
// ✓ Mobil cihazlarda iyi çalışmayabilir

// =====================================================
// 12. EK ÖRNEKLER
// =====================================================

// Basit prompt örneği
let isim = prompt("Adınızı girin:");
console.log("Merhaba", isim);

// Null kontrolü ile
let yas4 = prompt("Yaşınızı girin:");
if (yas4 !== null) {
    console.log("Yaşınız:", yas4);
} else {
    console.log("İptal edildi");
}

// Sayı dönüşümü ile
let sayi = prompt("Bir sayı girin:");
let sayiNumber = Number(sayi);
if (!isNaN(sayiNumber)) {
    console.log("Girdiğiniz sayı:", sayiNumber);
    console.log("Sayının karesi:", sayiNumber * sayiNumber);
} else {
    console.log("Geçersiz sayı!");
}

// Döngü ile doğru veri girene kadar bekleme
let gecerliSayi;
do {
    gecerliSayi = prompt("1-10 arası sayı girin:");
    gecerliSayi = Number(gecerliSayi);
} while (isNaN(gecerliSayi) || gecerliSayi < 1 || gecerliSayi > 10);
console.log("Girdiğiniz geçerli sayı:", gecerliSayi);

// =====================================================
// 13. ÖZET
// =====================================================

// Prompt fonksiyonu:
// - Kullanıcıdan veri almak için kullanılır
// - String değer döndürür (iptal edilirse null)
// - İki parametre: mesaj ve varsayılan değer
// - Veri tipi dönüşümü gerekebilir
// - Geçerlilik kontrolü önemlidir
// - Modern uygulamalarda HTML formları tercih edilir