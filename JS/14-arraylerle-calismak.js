/*
=============================================================================
                    DİZİ(ARRAY) VERİ TİPİYLE ÇALIŞMAK - JAVASCRIPT TUTORIAL
=============================================================================

Bu dosya, JavaScript'te dizi (array) veri tipi ile çalışmayı kapsamlı bir şekilde açıklamaktadır.
Diziler, birden fazla değeri tek bir değişkende saklamak için kullanılan temel veri yapılarıdır.

ÖNEMLİ NOTLAR:
- Diziler sıfır tabanlı indeksleme kullanır (0, 1, 2, ...)
- Dizi elemanları farklı veri tiplerinde olabilir
- Diziler dinamik boyutludur (eleman eklenip çıkarılabilir)
- JavaScript'te diziler aslında özel objelerdir
*/

console.log("=== DİZİ(ARRAY) VERİ TİPİYLE ÇALIŞMAK TUTORIAL BAŞLIYOR ===");

// =============================================================================
// 1. DİZİ (ARRAY) OLUŞTURMAK VE DİZİ İÇİNDEKİ ELEMANLARA ULAŞMAK
// =============================================================================

console.log("\n--- 1. DİZİ OLUŞTURMAK VE ELEMANLARA ULAŞMAK ---");

// Dizi oluşturmanın farklı yolları
console.log("\n1.1 Dizi Oluşturma Yöntemleri:");

// 1. Literal syntax (en yaygın yöntem)
const meyveler = ['elma', 'armut', 'muz', 'portakal'];
console.log("Literal syntax:", meyveler);

// 2. Array constructor
const sayilar = new Array(1, 2, 3, 4, 5);
console.log("Array constructor:", sayilar);

// 3. Boş dizi oluşturma
const bosDizi = [];
const bosDizi2 = new Array();
console.log("Boş diziler:", bosDizi, bosDizi2);

// 4. Array.from() ile dizi oluşturma
const stringDizi = Array.from('JavaScript');
console.log("Array.from string:", stringDizi);

const sayiDizi = Array.from({length: 5}, (_, i) => i * 2);
console.log("Array.from callback:", sayiDizi);

// 5. Array.of() ile dizi oluşturma
const tekEleman = Array.of(7);
console.log("Array.of tek eleman:", tekEleman);

console.log("\n1.2 Dizi Elemanlarına Erişim:");

// Dizi elemanlarına indeks ile erişim
console.log("İlk meyve (index 0):", meyveler[0]);
console.log("İkinci meyve (index 1):", meyveler[1]);
console.log("Son meyve (index -1):", meyveler[meyveler.length - 1]);

// Olmayan indeks erişimi
console.log("Olmayan indeks (10):", meyveler[10]); // undefined

// Dizi uzunluğu
console.log("Meyveler dizisi uzunluğu:", meyveler.length);

// Dizi içeriğini kontrol etme
console.log("Dizi boş mu?", bosDizi.length === 0);
console.log("Dizi undefined mı?", meyveler === undefined);
console.log("Dizi null mı?", meyveler === null);

console.log("\n1.3 Dizi Elemanlarını Döngü ile Gezme:");

// for döngüsü ile gezme
console.log("For döngüsü ile:");
for (let i = 0; i < meyveler.length; i++) {
    console.log(`${i}: ${meyveler[i]}`);
}

// for...of döngüsü ile gezme
console.log("For...of döngüsü ile:");
for (let meyve of meyveler) {
    console.log(meyve);
}

// forEach metodu ile gezme
console.log("forEach metodu ile:");
meyveler.forEach((meyve, index) => {
    console.log(`${index}: ${meyve}`);
});

// for...in döngüsü ile indeks gezme (dikkatli kullanın!)
console.log("For...in döngüsü ile indeksler:");
for (let index in meyveler) {
    console.log(`${index}: ${meyveler[index]}`);
}

// =============================================================================
// 2. DİZİYE YENİ ELEMAN EKLEMEK, ÇIKARTMAK VE GÜNCELLEMEK
// =============================================================================

console.log("\n--- 2. DİZİYE ELEMAN EKLEME, ÇIKARMA VE GÜNCELLEME ---");

console.log("\n2.1 Diziye Eleman Ekleme:");

const sehirler = ['İstanbul', 'Ankara'];
console.log("Başlangıç:", sehirler);

// push() - Dizi sonuna eleman ekleme
sehirler.push('İzmir');
console.log("push('İzmir') sonrası:", sehirler);

// Birden fazla eleman ekleme
sehirler.push('Bursa', 'Antalya');
console.log("Birden fazla eleman ekleme:", sehirler);

// unshift() - Dizi başına eleman ekleme
sehirler.unshift('Adana');
console.log("unshift('Adana') sonrası:", sehirler);

// splice() - Belirli pozisyona eleman ekleme
sehirler.splice(2, 0, 'Gaziantep', 'Konya'); // 2. pozisyona ekle, hiçbirini silme
console.log("splice(2, 0, 'Gaziantep', 'Konya') sonrası:", sehirler);

console.log("\n2.2 Diziden Eleman Çıkarma:");

// pop() - Dizi sonundan eleman çıkarma
const sonSehir = sehirler.pop();
console.log("pop() - Çıkarılan:", sonSehir, "Kalan:", sehirler);

// shift() - Dizi başından eleman çıkarma
const ilkSehir = sehirler.shift();
console.log("shift() - Çıkarılan:", ilkSehir, "Kalan:", sehirler);

// splice() - Belirli pozisyondan eleman çıkarma
const cikarilanlar = sehirler.splice(1, 2); // 1. pozisyondan 2 eleman çıkar
console.log("splice(1, 2) - Çıkarılanlar:", cikarilanlar, "Kalan:", sehirler);

// delete operatörü (önerilmez - undefined bırakır)
delete sehirler[0];
console.log("delete sehirler[0] sonrası:", sehirler);

console.log("\n2.3 Dizi Elemanlarını Güncelleme:");

const notlar = [85, 92, 78, 96, 88];
console.log("Başlangıç notlar:", notlar);

// Direkt indeks ile güncelleme
notlar[2] = 90;
console.log("notlar[2] = 90 sonrası:", notlar);

// splice() ile güncelleme
notlar.splice(0, 1, 95); // 0. pozisyondaki elemanı 95 ile değiştir
console.log("splice(0, 1, 95) sonrası:", notlar);

console.log("\n2.4 Dizi Kopyalama ve Birleştirme:");

// slice() ile kopyalama
const notlarKopya = notlar.slice();
console.log("slice() ile kopya:", notlarKopya);

// Belirli aralığı kopyalama
const ilkUcNot = notlar.slice(0, 3);
console.log("İlk 3 not:", ilkUcNot);

// concat() ile birleştirme
const ders1 = ['Matematik', 'Fizik'];
const ders2 = ['Kimya', 'Biyoloji'];
const tumDersler = ders1.concat(ders2);
console.log("concat() ile birleştirme:", tumDersler);

// Spread operator ile birleştirme (ES6)
const tumDersler2 = [...ders1, ...ders2, 'Tarih'];
console.log("Spread operator ile birleştirme:", tumDersler2);

// =============================================================================
// 3. ARRAY (DİZİ) METOTLARININ KULLANIMI VE ARRAY İÇİNDE ARRAY OLUŞTURMA
// =============================================================================

console.log("\n--- 3. ARRAY METOTLARI VE İÇ İÇE DİZİLER ---");

console.log("\n3.1 Arama ve Filtreleme Metotları:");

const ogrenciler = [
    { ad: 'Ahmet', yas: 20, not: 85 },
    { ad: 'Mehmet', yas: 22, not: 92 },
    { ad: 'Ayşe', yas: 19, not: 78 },
    { ad: 'Fatma', yas: 21, not: 96 },
    { ad: 'Ali', yas: 20, not: 88 }
];

// find() - İlk uygun elemanı bulma
const yuksekNotluOgrenci = ogrenciler.find(ogrenci => ogrenci.not > 90);
console.log("find() - 90'dan yüksek not alan:", yuksekNotluOgrenci);

// findIndex() - İlk uygun elemanın indeksini bulma
const yuksekNotluIndex = ogrenciler.findIndex(ogrenci => ogrenci.not > 90);
console.log("findIndex() - 90'dan yüksek not alanın indexi:", yuksekNotluIndex);

// filter() - Koşula uygun tüm elemanları filtreleme
const iyiNotlar = ogrenciler.filter(ogrenci => ogrenci.not >= 85);
console.log("filter() - 85 ve üzeri notlar:", iyiNotlar);

// includes() - Eleman varlığını kontrol etme
const meyveListesi = ['elma', 'armut', 'muz', 'portakal'];
console.log("includes('muz'):", meyveListesi.includes('muz'));
console.log("includes('kiraz'):", meyveListesi.includes('kiraz'));

// indexOf() ve lastIndexOf() - Eleman pozisyonu bulma
const sayilar2 = [1, 2, 3, 2, 4, 2];
console.log("indexOf(2):", sayilar2.indexOf(2)); // İlk 2'nin pozisyonu
console.log("lastIndexOf(2):", sayilar2.lastIndexOf(2)); // Son 2'nin pozisyonu

console.log("\n3.2 Dönüştürme Metotları:");

const fiyatlar = [100, 150, 200, 250];

// map() - Dizi elemanlarını dönüştürme
const indirimliFiyatlar = fiyatlar.map(fiyat => fiyat * 0.8);
console.log("map() - %20 indirimli fiyatlar:", indirimliFiyatlar);

const fiyatBilgileri = fiyatlar.map((fiyat, index) => ({
    id: index + 1,
    orijinalFiyat: fiyat,
    indirimliFiyat: fiyat * 0.8,
    indirimMiktari: fiyat * 0.2
}));
console.log("map() - Detaylı fiyat bilgileri:", fiyatBilgileri);

// reduce() - Dizi azaltma
const toplamFiyat = fiyatlar.reduce((toplam, fiyat) => toplam + fiyat, 0);
console.log("reduce() - Toplam fiyat:", toplamFiyat);

const ortalamaNot = ogrenciler.reduce((toplam, ogrenci) => toplam + ogrenci.not, 0) / ogrenciler.length;
console.log("reduce() - Ortalama not:", ortalamaNot);

// reduceRight() - Sağdan sola azaltma
const sayilar3 = [1, 2, 3, 4];
const sagdanToplam = sayilar3.reduceRight((acc, curr) => acc - curr, 100);
console.log("reduceRight() - Sağdan sola çıkarma:", sagdanToplam);

// flat() - Düzleştirme
const icIceDizi = [1, [2, 3], [4, [5, 6]]];
console.log("flat() - Bir seviye düzleştirme:", icIceDizi.flat());
console.log("flat(2) - İki seviye düzleştirme:", icIceDizi.flat(2)); 
console.log("flat(Infinity) - Tüm seviyeleri düzleştirme:", icIceDizi.flat(Infinity));

// flatMap() - Düzleştirme ve dönüştürme
const kelimeler = ['hello world', 'javascript tutorial'];
const harfler = kelimeler.flatMap(kelime => kelime.split(' '));
console.log("flatMap() - Kelimeleri ayır ve düzleştir:", harfler);

// slice() - Dizi parçalama
const tamSayilar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const ilkUc = tamSayilar.slice(0, 3);
const sonUc = tamSayilar.slice(-3);
const ortadaki = tamSayilar.slice(3, 7);
console.log("slice() - İlk 3:", ilkUc, "Son 3:", sonUc, "Ortadaki:", ortadaki);

console.log("\n3.3 Sıralama ve Düzenleme:");

const karisikSayilar = [64, 34, 25, 12, 22, 11, 90];
const isimler = ['Mehmet', 'Ahmet', 'Ayşe', 'Fatma', 'Ali'];

// sort() - Dizi sıralama (string olarak sıralar)
const stringSiralama = isimler.sort();
console.log("sort() - String sıralama:", stringSiralama);

// Number sıralama için callback fonksiyon
const sayiSiralama = karisikSayilar.sort((a, b) => a - b);
console.log("sort() - Küçükten büyüğe:", sayiSiralama);

const buyuktenKucuge = karisikSayilar.sort((a, b) => b - a);
console.log("sort() - Büyükten küçüğe:", buyuktenKucuge);

// Obje sıralama
const ogrenciSiralama = ogrenciler.sort((a, b) => b.not - a.not);
console.log("sort() - Nota göre sıralama:", ogrenciSiralama);

// reverse() - Dizi tersine çevirme
const tersineSayilar = [1, 2, 3, 4, 5];
tersineSayilar.reverse();
console.log("reverse() - Tersine çevirme:", tersineSayilar);

// join() - Dizi elemanlarını string'e çevirme
const meyveString = meyveListesi.join(', ');
console.log("join(', ') - Virgülle ayırma:", meyveString);

const meyveString2 = meyveListesi.join(' | ');
console.log("join(' | ') - Pipe ile ayırma:", meyveString2);

console.log("\n3.4 İç İçe Diziler (Nested Arrays):");

// 2D dizi (matris) oluşturma
const matris = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("2D Matris:", matris);
console.log("Matris[1][1]:", matris[1][1]); // 5

// 3D dizi oluşturma
const kubus = [
    [
        [1, 2],
        [3, 4]
    ],
    [
        [5, 6],
        [7, 8]
    ]
];
console.log("3D Kubus:", kubus);
console.log("Kubus[1][0][1]:", kubus[1][0][1]); // 6

// İç içe dizileri döngü ile gezme
console.log("2D matrisi döngü ile gezme:");
for (let i = 0; i < matris.length; i++) {
    for (let j = 0; j < matris[i].length; j++) {
        console.log(`matris[${i}][${j}] = ${matris[i][j]}`);
    }
}

// forEach ile iç içe dizi gezme
console.log("forEach ile iç içe dizi gezme:");
matris.forEach((satir, satirIndex) => {
    satir.forEach((eleman, sutunIndex) => {
        console.log(`matris[${satirIndex}][${sutunIndex}] = ${eleman}`);
    });
});

// İç içe dizileri düzleştirme
const icIceDizi2 = [[1, 2], [3, 4], [5, 6]];
const duzDizi = icIceDizi2.flat();
console.log("flat() ile düzleştirme:", duzDizi);

// Manuel düzleştirme
function duzDiziYap(dizi) {
    let sonuc = [];
    for (let eleman of dizi) {
        if (Array.isArray(eleman)) {
            sonuc = sonuc.concat(duzDiziYap(eleman));
        } else {
            sonuc.push(eleman);
        }
    }
    return sonuc;
}

const derinIcIce = [1, [2, [3, [4, 5]]]];
console.log("Manuel düzleştirme:", duzDiziYap(derinIcIce));

console.log("\n3.5 Gelişmiş Array İşlemleri:");

// Array destructuring
const renkler = ['kırmızı', 'yeşil', 'mavi'];
const [birinciRenk, ikinciRenk, ucuncuRenk] = renkler;
console.log("Destructuring:", birinciRenk, ikinciRenk, ucuncuRenk);

// Rest operator ile destructuring
const [ilkRenk, ...digerRenkler] = renkler;
console.log("Rest operator:", ilkRenk, digerRenkler);

// Spread operator kullanımı
const yeniRenkler = ['sarı', ...renkler, 'mor'];
console.log("Spread operator:", yeniRenkler);

// Array.from() ile dizi oluşturma
const uzunluk = 5;
const sifirDizi = Array.from({ length: uzunluk }, () => 0);
console.log("Array.from ile sıfır dizisi:", sifirDizi);

const kareDizi = Array.from({ length: 5 }, (_, i) => (i + 1) ** 2);
console.log("Array.from ile kare dizisi:", kareDizi);

// Array.isArray() ile tip kontrolü
console.log("Array.isArray(renkler):", Array.isArray(renkler));
console.log("Array.isArray('string'):", Array.isArray('string'));
console.log("Array.isArray({}):", Array.isArray({}));

// Dizi performans optimizasyonu
const buyukDizi = Array.from({ length: 100000 }, (_, i) => i);
console.log("Büyük dizi oluşturuldu, uzunluk:", buyukDizi.length);

// Performance test
console.time("forEach");
buyukDizi.forEach(item => item * 2);
console.timeEnd("forEach");

console.time("for");
for (let i = 0; i < buyukDizi.length; i++) {
    buyukDizi[i] * 2;
}
console.timeEnd("for");

console.time("for...of");
for (let item of buyukDizi) {
    item * 2;
}
console.timeEnd("for...of");

// =============================================================================
// 4. PRATİK ÖRNEKLER VE KULLANIM DURUMLARI
// =============================================================================

console.log("\n--- 4. PRATİK ÖRNEKLER ---");

console.log("\n4.1 Öğrenci Not Sistemi:");

const sinifNotlari = [
    { ad: 'Ahmet', notlar: [85, 90, 78, 92] },
    { ad: 'Mehmet', notlar: [88, 76, 94, 89] },
    { ad: 'Ayşe', notlar: [92, 88, 85, 91] },
    { ad: 'Fatma', notlar: [76, 82, 88, 85] }
];

// Her öğrencinin ortalamasını hesapla
const ortalamaNotlar = sinifNotlari.map(ogrenci => ({
    ad: ogrenci.ad,
    ortalama: ogrenci.notlar.reduce((toplam, not) => toplam + not, 0) / ogrenci.notlar.length
}));

console.log("Ortalama notlar:", ortalamaNotlar);

// En yüksek ortalamaya sahip öğrenci
const enIyiOgrenci = ortalamaNotlar.reduce((enIyi, ogrenci) => 
    ogrenci.ortalama > enIyi.ortalama ? ogrenci : enIyi
);
console.log("En iyi öğrenci:", enIyiOgrenci);

console.log("\n4.2 Alışveriş Sepeti Uygulaması:");

let sepet = [];

// Ürün ekleme fonksiyonu
function sepeteUrunEkle(urun) {
    const mevcutUrun = sepet.find(item => item.id === urun.id);
    if (mevcutUrun) {
        mevcutUrun.miktar += 1;
    } else {
        sepet.push({ ...urun, miktar: 1 });
    }
}

// Ürün çıkarma fonksiyonu
function sepettenUrunCikar(urunId) {
    sepet = sepet.filter(item => item.id !== urunId);
}

// Sepet toplamı hesaplama
function sepetToplami() {
    return sepet.reduce((toplam, item) => toplam + (item.fiyat * item.miktar), 0);
}

// Test verileri
const urunler = [
    { id: 1, ad: 'Laptop', fiyat: 15000 },
    { id: 2, ad: 'Mouse', fiyat: 200 },
    { id: 3, ad: 'Klavye', fiyat: 500 }
];

// Sepete ürün ekle
sepeteUrunEkle(urunler[0]);
sepeteUrunEkle(urunler[1]);
sepeteUrunEkle(urunler[0]); // Aynı ürün tekrar

console.log("Sepet içeriği:", sepet);
console.log("Sepet toplamı:", sepetToplami(), "TL");

console.log("\n4.3 Matris İşlemleri:");

// Matris toplama
function matrisTopla(matris1, matris2) {
    return matris1.map((satir, i) => 
        satir.map((eleman, j) => eleman + matris2[i][j])
    );
}

// Matris çarpma
function matrisCarp(matris, sayi) {
    return matris.map(satir => 
        satir.map(eleman => eleman * sayi)
    );
}

const matris1 = [[1, 2], [3, 4]];
const matris2 = [[5, 6], [7, 8]];

console.log("Matris 1:", matris1);
console.log("Matris 2:", matris2);
console.log("Matris toplamı:", matrisTopla(matris1, matris2));
console.log("Matris çarpımı (x2):", matrisCarp(matris1, 2));

console.log("\n4.4 Veri Filtreleme ve Gruplama:");

const urunler2 = [
    { kategori: 'Elektronik', ad: 'Telefon', fiyat: 5000 },
    { kategori: 'Elektronik', ad: 'Tablet', fiyat: 3000 },
    { kategori: 'Giyim', ad: 'Tişört', fiyat: 100 },
    { kategori: 'Giyim', ad: 'Pantolon', fiyat: 300 },
    { kategori: 'Kitap', ad: 'Roman', fiyat: 50 },
    { kategori: 'Kitap', ad: 'Dergi', fiyat: 20 }
];

// Kategoriye göre gruplama
const kategorilereGore = urunler2.reduce((gruplar, urun) => {
    if (!gruplar[urun.kategori]) {
        gruplar[urun.kategori] = [];
    }
    gruplar[urun.kategori].push(urun);
    return gruplar;
}, {});

console.log("Kategorilere göre gruplama:", kategorilereGore);

// Fiyat aralığına göre filtreleme
const ucuzUrunler = urunler2.filter(urun => urun.fiyat < 100);
const pahaliUrunler = urunler2.filter(urun => urun.fiyat >= 1000);

console.log("Ucuz ürünler (<100):", ucuzUrunler);
console.log("Pahalı ürünler (>=1000):", pahaliUrunler);

// =============================================================================
// 5. YARDIMCI FONKSİYONLAR
// =============================================================================

console.log("\n--- 5. YARDIMCI FONKSİYONLAR ---");

// Dizi benzersizleştirme
function benzersizDizi(dizi) {
    return [...new Set(dizi)];
}

const tekrarlananSayilar = [1, 2, 2, 3, 3, 3, 4, 4, 5];
console.log("Benzersiz dizi:", benzersizDizi(tekrarlananSayilar));

// Obje dizisini benzersizleştirme
function benzersizObjeDizi(dizi, key) {
    return dizi.filter((item, index, self) => 
        index === self.findIndex(t => t[key] === item[key])
    );
}

const tekrarlananOgrenciler = [
    { id: 1, ad: 'Ahmet' },
    { id: 2, ad: 'Mehmet' },
    { id: 1, ad: 'Ahmet' },
    { id: 3, ad: 'Ayşe' }
];

console.log("Benzersiz öğrenci dizisi:", benzersizObjeDizi(tekrarlananOgrenciler, 'id'));

// Dizi karşılaştırma
function dizilerEsitMi(dizi1, dizi2) {
    if (dizi1.length !== dizi2.length) return false;
    return dizi1.every((eleman, index) => eleman === dizi2[index]);
}

console.log("Diziler eşit mi?", dizilerEsitMi([1, 2, 3], [1, 2, 3]));
console.log("Diziler eşit mi?", dizilerEsitMi([1, 2, 3], [1, 2, 4]));

// Dizi sıralama (bubble sort)
function bubbleSort(dizi) {
    const kopya = [...dizi];
    const n = kopya.length;
    
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (kopya[j] > kopya[j + 1]) {
                [kopya[j], kopya[j + 1]] = [kopya[j + 1], kopya[j]];
            }
        }
    }
    
    return kopya;
}

const siralanacakSayilar = [64, 34, 25, 12, 22, 11, 90];
console.log("Bubble sort:", bubbleSort(siralanacakSayilar));

// Dizi arama (binary search)
function binarySearch(dizi, hedef) {
    let sol = 0;
    let sag = dizi.length - 1;
    
    while (sol <= sag) {
        const orta = Math.floor((sol + sag) / 2);
        
        if (dizi[orta] === hedef) {
            return orta;
        } else if (dizi[orta] < hedef) {
            sol = orta + 1;
        } else {
            sag = orta - 1;
        }
    }
    
    return -1;
}

const siraliDizi = [1, 3, 5, 7, 9, 11, 13, 15];
console.log("Binary search (7):", binarySearch(siraliDizi, 7));
console.log("Binary search (6):", binarySearch(siraliDizi, 6));


/*=============================================================================
                            ÖZET VE İPUÇLARI
=============================================================================

 YAPILMAMASI GEREKENLER:
- delete operatörü ile dizi elemanı silme (undefined bırakır)
- for...in ile dizi gezme (prototype özelliklerini de gezer)
- Büyük dizilerde forEach yerine for döngüsü kullanmayın
- Dizi uzunluğunu manuel olarak değiştirmeyin

 FAYDALI METOTLAR:
- push() - Sonuna ekle
- pop() - Sondan çıkar
- unshift() - Başına ekle
- shift() - Baştan çıkar
- splice() - Belirli pozisyona ekle/çıkar
- slice() - Kopyala/parçala
- concat() - Birleştir
- join() - String'e çevir