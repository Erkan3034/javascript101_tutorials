/*
=============================================================================
                            NESNE(OBJECT) - JAVASCRIPT TUTORIAL
=============================================================================

Bu dosya, JavaScript'te nesnelerin (object) kullanımını açıklamaktadır.
Nesneler, key-value çiftleri ile veri saklamak için kullanılan yapılardır.

ÖNEMLİ NOTLAR:
- Nesneler key-value çiftlerinden oluşur
- Key'ler string veya symbol olabilir
- Value'lar herhangi bir veri tipi olabilir
- Nesnelere metot eklenebilir
*/

console.log("=== NESNE(OBJECT) TUTORIAL BAŞLIYOR ===");

// =============================================================================
// 1. OBJECT (NESNE) NEDİR? NASIL OLUŞTURULUR?
// =============================================================================

console.log("\n--- 1. OBJECT NEDİR? NASIL OLUŞTURULUR? ---");

// Object oluşturmanın farklı yolları
console.log("1.1 Object Oluşturma Yöntemleri:");

// 1. Literal syntax (en yaygın)
const kisi = {
    ad: 'Ahmet',
    yas: 25,
    sehir: 'İstanbul'
};
console.log("Literal syntax:", kisi);

// 2. Object constructor
const araba = new Object();
araba.marka = 'Toyota';
araba.model = 'Corolla';
araba.yil = 2020;
console.log("Object constructor:", araba);

// 3. Object.create()
const hayvan = Object.create(null);
hayvan.tur = 'Kedi';
hayvan.isim = 'Pamuk';
console.log("Object.create():", hayvan);

// 4. Boş nesne
const bosNesne = {};
console.log("Boş nesne:", bosNesne);

// =============================================================================
// 2. OBJECT ANAHTAR (KEY) VE DEĞER (VALUE) YAPISININ KULLANIMI/ERİŞİMİ
// =============================================================================

console.log("\n--- 2. OBJECT KEY-VALUE YAPISININ KULLANIMI ---");

// Key-value çiftleri
const ogrenci = {
    ad: 'Mehmet',
    soyad: 'Yılmaz',
    yas: 20,
    'favori-renk': 'mavi', // tire ile key
    123: 'sayısal key' // sayısal key
};

console.log("2.1 Nesne Erişim Yöntemleri:");

// Dot notation (nokta notasyonu)
console.log("Dot notation:");
console.log("Ad:", ogrenci.ad);
console.log("Yaş:", ogrenci.yas);

// Bracket notation (köşeli parantez)
console.log("\nBracket notation:");
console.log("Ad:", ogrenci['ad']);
console.log("Favori renk:", ogrenci['favori-renk']);
console.log("Sayısal key:", ogrenci[123]);

// Dinamik key erişimi
const key = 'yas';
console.log("Dinamik erişim:", ogrenci[key]);

console.log("\n2.2 Nesne Güncelleme:");

// Değer güncelleme
ogrenci.yas = 21;
ogrenci['favori-renk'] = 'yeşil';
console.log("Güncellenmiş nesne:", ogrenci);

// Yeni özellik ekleme
ogrenci.okul = 'İTÜ';
ogrenci['mezuniyet-yili'] = 2025;
console.log("Yeni özellik eklenmiş:", ogrenci);

// Özellik silme
delete ogrenci[123];
console.log("Özellik silinmiş:", ogrenci);

console.log("\n2.3 Nesne Kontrolü:");

// Özellik varlığı kontrolü
console.log("'ad' özelliği var mı?", 'ad' in ogrenci);
console.log("'telefon' özelliği var mı?", 'telefon' in ogrenci);

// hasOwnProperty metodu
console.log("hasOwnProperty('yas'):", ogrenci.hasOwnProperty('yas'));

// =============================================================================
// 3. NESNELERE NASIL METOT EKLERİZ?
// =============================================================================

console.log("\n--- 3. NESNELERE METOT EKLEME ---"); 

// Nesneye metot ekleme
const kullanici = {
    ad: 'Ayşe',
    yas: 30,
    sehir: 'Ankara',
    
    // Metot tanımlama
    tanit: function() {
        return `Merhaba, ben ${this.ad}, ${this.yas} yaşındayım.`;
    },
    
    // ES6 arrow function (dikkat: this kullanımı farklı)
    yasArtir: function() {
        this.yas++;
        return this.yas;
    },
    
    // Kısa metot syntax (ES6)
    bilgiAl() {
        return {
            ad: this.ad,
            yas: this.yas,
            sehir: this.sehir
        };
    }
};

console.log("3.1 Metot Çağırma:");
console.log(kullanici.tanit()); //metot çağırma
console.log("Yeni yaş:", kullanici.yasArtir()); //metot çağırma
console.log("Kullanıcı bilgileri:", kullanici.bilgiAl());

// Dışarıdan metot ekleme
kullanici.selamVer = function() {
    return `Selam ${this.ad}!`;
};

console.log("Eklenen metot:", kullanici.selamVer());

// Dinamik metot ekleme
const metotAdi = 'hosgeldin';
kullanici[metotAdi] = function() {
    return `Hoş geldin ${this.ad}!`;
};

console.log("Dinamik metot:", kullanici[metotAdi]());

// =============================================================================
// 4. OBJECT VE ARRAY DESTRUCTURING KULLANIMI
// =============================================================================

console.log("\n--- 4. OBJECT VE ARRAY DESTRUCTURING ---");

// Object destructuring
const person = {
    ad: 'Ali',
    soyad: 'Veli',
    yas: 28,
    adres: {
        sehir: 'İzmir',
        ilce: 'Konak'
    },
    hobiler: ['kitap', 'müzik', 'spor']
};

console.log("4.1 Object Destructuring:");

// Temel destructuring
const { ad, soyad, yas } = person;
console.log("Destructuring:", ad, soyad, yas);

// Farklı isimle almak
const { ad: isim, yas: yasBilgisi } = person;
console.log("Farklı isim:", isim, yasBilgisi);

// Varsayılan değer
const { ad: ad2, telefon = 'Belirtilmemiş' } = person;
console.log("Varsayılan değer:", ad2, telefon);

// İç içe nesne destructuring
const { adres: { sehir, ilce } } = person;
console.log("İç içe destructuring:", sehir, ilce);

// Rest operator ile kalan özellikleri al
const { ad: ad3, ...digerBilgiler } = person;
console.log("Rest operator:", ad3, digerBilgiler);

console.log("\n4.2 Array Destructuring:");

const renkler = ['kırmızı', 'yeşil', 'mavi', 'sarı', 'mor'];

// Temel array destructuring
const [ilkRenk, ikinciRenk, ucuncuRenk] = renkler;
console.log("Array destructuring:", ilkRenk, ikinciRenk, ucuncuRenk);

// Atlama (skip)
const [birinci, , ucuncu] = renkler;
console.log("Atlayarak:", birinci, ucuncu);

// Rest operator
const [ilk, ikinci, ...digerRenkler] = renkler;
console.log("Array rest:", ilk, ikinci, digerRenkler);

// Varsayılan değer
const [renk1, renk2, renk3 = 'siyah'] = ['kırmızı', 'yeşil'];
console.log("Array varsayılan:", renk1, renk2, renk3);

console.log("\n4.3 Fonksiyon Parametrelerinde Destructuring:");

// Object parametre destructuring
function kullaniciBilgisi({ ad, yas, sehir = 'Bilinmiyor' }) {
    return `${ad} (${yas}) - ${sehir}`;
}

console.log("Fonksiyon destructuring:", kullaniciBilgisi(person));

// Array parametre destructuring
function renkBilgisi([ilk, ikinci]) {
    return `İlk renk: ${ilk}, İkinci renk: ${ikinci}`;
}

console.log("Array fonksiyon destructuring:", renkBilgisi(renkler));

// =============================================================================
// 5. PRATİK ÖRNEKLER
// =============================================================================

console.log("\n--- 5. PRATİK ÖRNEKLER ---");

// Örnek 1: Ürün yönetimi
console.log("\nÖrnek 1: Ürün yönetimi");
const urun = {
    id: 1,
    ad: 'Laptop',
    fiyat: 15000,
    stok: 5,
    kategoriler: ['Elektronik', 'Bilgisayar'],
    
    // Metotlar
    stokKontrol() {
        return this.stok > 0 ? 'Stokta var' : 'Stokta yok';
    },
    
    fiyatGuncelle(yeniFiyat) {
        this.fiyat = yeniFiyat;
        return `Fiyat güncellendi: ${this.fiyat} TL`;
    },
    
    stokAzalt(miktar = 1) {
        if (this.stok >= miktar) {
            this.stok -= miktar;
            return `Stok azaltıldı. Kalan: ${this.stok}`;
        }
        return 'Yetersiz stok!';
    }
};

console.log("Ürün bilgisi:", urun);
console.log("Stok durumu:", urun.stokKontrol());
console.log(urun.fiyatGuncelle(16000));
console.log(urun.stokAzalt(2));

// Örnek 2: Destructuring ile veri işleme
console.log("\nÖrnek 2: Destructuring ile veri işleme");

const ogrenciListesi = [
    { ad: 'Ahmet', not: 85, sinif: 'A' },
    { ad: 'Mehmet', not: 92, sinif: 'B' },
    { ad: 'Ayşe', not: 78, sinif: 'A' },
  {ad: 'Erkan' , not:95, sinif:'A'}
];

// Her öğrenciyi işle
ogrenciListesi.forEach(({ ad, not, sinif }) => {
    const durum = not >= 80 ? 'Başarılı' : 'Başarısız';
    console.log(`${ad} (${sinif}): ${not} - ${durum}`);
});

// En yüksek notu bul
const enYuksekNot = ogrenciListesi.reduce((max, { not }) => 
    not > max ? not : max, 0
);
console.log("En yüksek not:", enYuksekNot);

console.log("\n=== NESNE(OBJECT) TUTORIAL TAMAMLANDI ===");

/*=============================================================================
                            ÖZET VE İPUÇLARI
=============================================================================

✅ YAPILMASI GEREKENLER:
- Object literal syntax {} kullanın
- Dot notation için basit key'ler kullanın
- Bracket notation için dinamik key'ler kullanın
- Metotlarda this kullanımına dikkat edin
- Destructuring ile kod okunabilirliğini artırın

❌ YAPILMAMASI GEREKENLER:
- Arrow function'da this kullanmayın
- Object key'lerinde boşluk kullanmayın
- Destructuring'de var/let/const unutmayın
- Metot tanımlarken function keyword unutmayın

🔧 TEMEL KAVRAMLAR:
- Key-Value çiftleri
- Dot ve Bracket notation
- Metot tanımlama
- Destructuring
- Rest operator

📝 KULLANIM ALANLARI:
- Veri yapıları
- API yanıtları
- Konfigürasyon
- State yönetimi
- Fonksiyon parametreleri

🎯 PERFORMANS İPUÇLARI:
- Object.create() yerine {} kullanın
- Gereksiz nesne kopyalamadan kaçının
- Destructuring ile sadece ihtiyacınız olan özellikleri alın
- Metotları prototype'a ekleyin (çok sayıda instance için)
*/
