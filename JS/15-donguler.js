/*
=============================================================================
                            DÖNGÜLER (LOOPS) - JAVASCRIPT TUTORIAL
=============================================================================

Bu dosya, JavaScript'te döngülerin kullanımını kapsamlı bir şekilde açıklamaktadır.
Döngüler, belirli bir işlemi tekrar tekrar yapmak için kullanılan yapılardır.

*/

console.log("=== DÖNGÜLER (LOOPS) TUTORIAL BAŞLIYOR ===");

// =============================================================================
// 1. FOR DÖNGÜSÜ KULLANIMI
// =============================================================================

console.log("\n--- 1. FOR DÖNGÜSÜ KULLANIMI ---");

// Temel for döngüsü
console.log("Temel for döngüsü:");
for (let i = 0; i < 5; i++) {
    console.log(`Döngü ${i + 1}`);
}

// Geriye doğru sayma
console.log("\nGeriye doğru sayma:");
for (let i = 5; i >= 1; i--) {
    console.log(`Geri sayım: ${i}`);
}

// Belirli aralıkta sayma
console.log("\nBelirli aralıkta sayma (10-20):");
for (let i = 10; i <= 20; i += 2) {
    console.log(`Çift sayı: ${i}`);
}

// Dizi ile for döngüsü
const meyveler = ['elma', 'armut', 'muz', 'portakal'];
console.log("\nDizi ile for döngüsü:");
for (let i = 0; i < meyveler.length; i++) {
    console.log(`${i + 1}. meyve: ${meyveler[i]}`);
}

// İç içe for döngüsü (çarpım tablosu)
console.log("\nİç içe for döngüsü (çarpım tablosu):");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}

// =============================================================================
// 2. BREAK VE CONTINUE KULLANIMI
// =============================================================================

console.log("\n--- 2. BREAK VE CONTINUE KULLANIMI ---");

// break - Döngüyü tamamen sonlandırma
console.log("break kullanımı (5'te dur):");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("5'e ulaşıldı, döngü sonlandırılıyor!");
        break;
    }
    console.log(`Sayı: ${i}`);
}

// continue - Mevcut iterasyonu atla, bir sonrakine geç
console.log("\ncontinue kullanımı (5'i atla):");
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        console.log("5 atlandı!");
        continue;
    }
    console.log(`Sayı: ${i}`);
}

// Pratik örnek - Sadece çift sayıları yazdır
console.log("\nSadece çift sayıları yazdır:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // Tek sayıları atla
    }
    console.log(`Çift sayı: ${i}`);
}

// Pratik örnek - Belirli koşulda dur
const sayilar = [1, 3, 7, 2, 9, 4, 6];
console.log("\nBelirli koşulda durma:");
for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] > 5) {
        console.log(`${sayilar[i]} bulundu, arama durduruluyor!`);
        break;
    }
    console.log(`Kontrol edilen: ${sayilar[i]}`);
}

// =============================================================================
// 3. WHILE DÖNGÜSÜ
// =============================================================================

console.log("\n--- 3. WHILE DÖNGÜSÜ ---");

// Temel while döngüsü
console.log("Temel while döngüsü:");
let sayac = 1;
while (sayac <= 5) {
    console.log(`While döngüsü ${sayac}`);
    sayac++;
}

// Kullanıcı girişi simülasyonu
console.log("\nKullanıcı girişi simülasyonu:");
let girisSayisi = 0;
const maxGiris = 3;
let gecerliGiris = false;

while (girisSayisi < maxGiris && !gecerliGiris) {
    girisSayisi++;
    console.log(`Giriş denemesi ${girisSayisi}/${maxGiris}`);
    
    // Simüle edilmiş giriş kontrolü
    if (girisSayisi === 2) {
        gecerliGiris = true;
        console.log("Giriş başarılı!");
    }
}

// Koşullu while döngüsü
console.log("\nKoşullu while döngüsü:");
let rastgeleSayi;
let deneme = 0;
while (deneme < 10) {
    rastgeleSayi = Math.floor(Math.random() * 10) + 1;
    deneme++;
    console.log(`Deneme ${deneme}: ${rastgeleSayi}`);
    
    if (rastgeleSayi === 7) {
        console.log("7 bulundu! Döngü sonlandırılıyor.");
        break;
    }
}

// =============================================================================
// 4. FOREACH İLE ARRAY İÇERİSİNDEKİ ÖĞELERİN ÇAĞRILMASI
// =============================================================================

console.log("\n--- 4. FOREACH İLE ARRAY ÖĞELERİNİN ÇAĞRILMASI ---");

// Temel forEach kullanımı
const sehirler = ['İstanbul', 'Ankara', 'İzmir', 'Bursa'];
console.log("Temel forEach:");
sehirler.forEach((sehir) => {
    console.log(`Şehir: ${sehir}`);
});

// İndeks ile forEach
console.log("\nİndeks ile forEach:");
sehirler.forEach((sehir, index) => {
    console.log(`${index + 1}. Şehir: ${sehir}`);
});

// Obje dizisi ile forEach
const ogrenciler = [
    { ad: 'Ahmet', not: 85 },
    { ad: 'Mehmet', not: 92 },
    { ad: 'Ayşe', not: 78 }
];

console.log("\nObje dizisi ile forEach:");
ogrenciler.forEach((ogrenci) => {
    console.log(`${ogrenci.ad}: ${ogrenci.not} puan`);
});

// forEach ile hesaplama
console.log("\nforEach ile hesaplama:");
let toplamNot = 0;
ogrenciler.forEach((ogrenci) => {
    toplamNot += ogrenci.not;
});
const ortalama = toplamNot / ogrenciler.length;
console.log(`Ortalama not: ${ortalama}`);

// =============================================================================
// 5. FILTER İLE ARRAY İÇERİSİNDE SADECE İSTENİLEN BİLGİLERİN YENİ LİSTEYE EKLENMESİ
// =============================================================================

console.log("\n--- 5. FILTER İLE ARRAY FİLTRELEME ---");

// Temel filter kullanımı
const sayilar2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Orijinal dizi:", sayilar2);

// Çift sayıları filtrele
const ciftSayilar = sayilar2.filter((sayi) => sayi % 2 === 0);
console.log("Çift sayılar:", ciftSayilar);

// 5'ten büyük sayıları filtrele
const buyukSayilar = sayilar2.filter((sayi) => sayi > 5);
console.log("5'ten büyük sayılar:", buyukSayilar);

// Obje dizisi filtreleme
const urunler = [
    { ad: 'Laptop', fiyat: 15000, kategori: 'Elektronik' },
    { ad: 'Tişört', fiyat: 100, kategori: 'Giyim' },
    { ad: 'Kitap', fiyat: 50, kategori: 'Kitap' },
    { ad: 'Telefon', fiyat: 8000, kategori: 'Elektronik' },
    { ad: 'Pantolon', fiyat: 300, kategori: 'Giyim' }
];

// Elektronik ürünleri filtrele
const elektronikUrunler = urunler.filter((urun) => urun.kategori === 'Elektronik');
console.log("\nElektronik ürünler:");
elektronikUrunler.forEach((urun) => {
    console.log(`${urun.ad}: ${urun.fiyat} TL`);
});

// 1000 TL'den pahalı ürünleri filtrele
const pahaliUrunler = urunler.filter((urun) => urun.fiyat > 1000);
console.log("\nPahalı ürünler (>1000 TL):");
pahaliUrunler.forEach((urun) => {
    console.log(`${urun.ad}: ${urun.fiyat} TL`);
});

// =============================================================================
// 6. MAP İLE ARRAY İÇERİSİNDEKİ YAPININ DEĞİŞTİRİLEREK YENİ LİSTE OLUŞTURULMASI
// =============================================================================

console.log("\n--- 6. MAP İLE ARRAY DÖNÜŞTÜRME ---");

// Temel map kullanımı
const sayilar3 = [1, 2, 3, 4, 5];
console.log("Orijinal dizi:", sayilar3);

// Sayıları 2 ile çarp
const carpilanSayilar = sayilar3.map((sayi) => sayi * 2);
console.log("2 ile çarpılmış:", carpilanSayilar);

// Sayıları string'e çevir
const stringSayilar = sayilar3.map((sayi) => `Sayı: ${sayi}`);
console.log("String'e çevrilmiş:", stringSayilar);

// Obje dizisi dönüştürme
console.log("\nObje dönüştürme:");
const ogrenciListesi = [
    { ad: 'Ahmet', yas: 20 },
    { ad: 'Mehmet', yas: 22 },
    { ad: 'Ayşe', yas: 19 }
];

// Yaşları 1 artır
const yasArtirilmis = ogrenciListesi.map((ogrenci) => ({
    ...ogrenci,
    yas: ogrenci.yas + 1
}));
console.log("Yaşları artırılmış:", yasArtirilmis);

// Yeni format oluştur
const formatlanmisOgrenciler = ogrenciListesi.map((ogrenci) => 
    `${ogrenci.ad} (${ogrenci.yas} yaşında)`
);
console.log("Formatlanmış:", formatlanmisOgrenciler);

// Fiyat hesaplama örneği
console.log("\nFiyat hesaplama:");
const fiyatlar = [100, 200, 300, 400];
const indirimliFiyatlar = fiyatlar.map((fiyat) => ({
    orijinal: fiyat,
    indirimli: fiyat * 0.8,
    indirimMiktari: fiyat * 0.2
}));
console.log("İndirimli fiyatlar:", indirimliFiyatlar);

// =============================================================================
// 7. PRATİK ÖRNEKLER
// =============================================================================

console.log("\n--- 7. PRATİK ÖRNEKLER ---");

// Örnek 1: Not hesaplama sistemi
console.log("\nÖrnek 1: Not hesaplama sistemi");
const notlar = [
    { ders: 'Matematik', puan: 85 },
    { ders: 'Fizik', puan: 92 },
    { ders: 'Kimya', puan: 78 },
    { ders: 'Biyoloji', puan: 88 }
];

// Geçer notları filtrele (70 ve üzeri)
const gecenNotlar = notlar.filter((not) => not.puan >= 70);
console.log("Geçer notlar:", gecenNotlar);

// Harf notlarını hesapla
const harfNotlari = notlar.map((not) => {
    let harf;
    if (not.puan >= 90) harf = 'A';
    else if (not.puan >= 80) harf = 'B';
    else if (not.puan >= 70) harf = 'C';
    else if (not.puan >= 60) harf = 'D';
    else harf = 'F';
    
    return {
        ...not,
        harfNotu: harf
    };
});
console.log("Harf notları:", harfNotlari);

// Örnek 2: Ürün envanteri
console.log("\nÖrnek 2: Ürün envanteri");
const envanter = [
    { urun: 'Laptop', stok: 5, fiyat: 15000 },
    { urun: 'Mouse', stok: 20, fiyat: 200 },
    { urun: 'Klavye', stok: 0, fiyat: 500 },
    { urun: 'Monitor', stok: 8, fiyat: 3000 }
];

// Stokta olan ürünleri listele
const stoktaOlanlar = envanter.filter((item) => item.stok > 0);
console.log("Stokta olanlar:", stoktaOlanlar);

// Toplam envanter değerini hesapla
const toplamDeger = envanter.reduce((toplam, item) => {
    return toplam + (item.stok * item.fiyat);
}, 0);
console.log("Toplam envanter değeri:", toplamDeger, "TL");

// Stok uyarısı (stok < 10 olanlar)
const stokUyarisi = envanter.filter((item) => item.stok < 10 && item.stok > 0);
console.log("Stok uyarısı (stok < 10):", stokUyarisi);

console.log("\n=== DÖNGÜLER (LOOPS) TUTORIAL TAMAMLANDI ===");

/*=============================================================================
                            ÖZET VE İPUÇLARI
=============================================================================

✅ YAPILMASI GEREKENLER:
- Döngü türünü kullanım amacına göre seçin
- Sonsuz döngülere dikkat edin
- break ve continue'yu doğru yerlerde kullanın
- Array metotlarını (forEach, filter, map) tercih edin
- Döngü performansını göz önünde bulundurun

❌ YAPILMAMASI GEREKENLER:
- Gereksiz iç içe döngüler kullanmayın
- Array'lerde for...in kullanmayın
- Döngü içinde array'i değiştirmeyin (forEach)
- Break/continue'yu yanlış yerde kullanmayın

🔧 DÖNGÜ TÜRLERİ:
- for: Belirli sayıda tekrar
- while: Koşul sağlandığı sürece
- forEach: Array elemanlarını gezme
- filter: Koşula uygun elemanları seçme
- map: Array elemanlarını dönüştürme

📝 KULLANIM ALANLARI:
- Veri işleme
- Hesaplamalar
- Filtreleme
- Dönüştürme
- Arama
- Validasyon

🎯 PERFORMANS İPUÇLARI:
- Küçük diziler için forEach
- Büyük diziler için for döngüsü
- Filter ve map'i zincirleme kullanın
- Gereksiz döngülerden kaçının
*/
