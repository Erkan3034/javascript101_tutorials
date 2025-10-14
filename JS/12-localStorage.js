/*
=============================================================================
                    LOCALSTORAGE İLE VERİ YÖNETİMİ
=============================================================================

LocalStorage, web tarayıcısında veri saklamak için kullanılan bir web API'sidir.
Bu veriler tarayıcı kapatıldıktan sonra bile kalıcı olarak saklanır. 

ÖNEMLİ NOTLAR:
- LocalStorage sadece string veri saklar
- Objeleri saklamak için JSON.stringify() kullanmalıyız
- Verileri okurken JSON.parse() kullanmalıyız
- Tarayıcı başına 5-10MB arası kapasite sınırı vardır
- Sadece aynı domain'den erişilebilir
*/

console.log("=== LOCALSTORAGE TUTORIAL BAŞLIYOR ===");

// =============================================================================
// 1. VERİ EKLEME (setItem)
// =============================================================================

console.log("\n--- 1. VERİ EKLEME ---");

// Basit string veri ekleme
localStorage.setItem('kullaniciAdi', 'Ahmet123');
localStorage.setItem('email', 'ahmet@example.com');
localStorage.setItem('yas', '25');

console.log("String veriler eklendi:", {
    kullaniciAdi: localStorage.getItem('kullaniciAdi'),
    email: localStorage.getItem('email'),
    yas: localStorage.getItem('yas')
});

// Obje veri ekleme (JSON.stringify kullanarak)
const kullaniciBilgileri = {
    ad: 'Mehmet',
    soyad: 'Yılmaz',
    yas: 30,
    sehir: 'İstanbul',
    hobiler: ['kitap okuma', 'yüzme', 'müzik']
};

localStorage.setItem('kullaniciBilgileri', JSON.stringify(kullaniciBilgileri));
console.log("Obje veri eklendi:", JSON.parse(localStorage.getItem('kullaniciBilgileri')));

// Array veri ekleme
const favoriRenkler = ['mavi', 'yeşil', 'kırmızı', 'sarı'];
localStorage.setItem('favoriRenkler', JSON.stringify(favoriRenkler));
console.log("Array veri eklendi:", JSON.parse(localStorage.getItem('favoriRenkler')));

// Boolean veri ekleme
localStorage.setItem('darkMode', 'true');
localStorage.setItem('bildirimler', 'false');

// =============================================================================
// 2. VERİ OKUMA (getItem)
// =============================================================================


const data = document.getElementById('data');
console.log("\n--- 2. VERİ OKUMA ---");

// Basit string veri okuma
const kullaniciAdi = localStorage.getItem('kullaniciAdi');
const email = localStorage.getItem('email');
const yas = localStorage.getItem('yas');

console.log("Okunan string veriler:", { kullaniciAdi, email, yas });
data.innerHTML = `Okunan string veriler: ${kullaniciAdi} ${email} ${yas}`;

// Obje veri okuma (JSON.parse kullanarak)
const kullaniciBilgileriOkunan = JSON.parse(localStorage.getItem('kullaniciBilgileri'));
console.log("Okunan obje veri:", kullaniciBilgileriOkunan);
data.innerHTML = `Okunan obje veri: ${JSON.stringify(kullaniciBilgileriOkunan)}`;

// Array veri okuma
const favoriRenklerOkunan = JSON.parse(localStorage.getItem('favoriRenkler'));
console.log("Okunan array veri:", favoriRenklerOkunan);

// Boolean veri okuma
const darkMode = localStorage.getItem('darkMode') === 'true';
const bildirimler = localStorage.getItem('bildirimler') === 'true';
console.log("Boolean veriler:", { darkMode, bildirimler });

// Olmayan veri okuma (null döner)
const olmayanVeri = localStorage.getItem('olmayanVeri');
console.log("Olmayan veri:", olmayanVeri); // null

// =============================================================================
// 3. VERİ GÜNCELLEME (setItem ile aynı key kullanarak)
// =============================================================================

console.log("\n--- 3. VERİ GÜNCELLEME ---");

// Mevcut veriyi güncelleme
localStorage.setItem('kullaniciAdi', 'Ahmet456'); // Eski: Ahmet123, Yeni: Ahmet456
localStorage.setItem('yas', '26'); // Eski: 25, Yeni: 26

console.log("Güncellenen veriler:", {
    kullaniciAdi: localStorage.getItem('kullaniciAdi'),
    yas: localStorage.getItem('yas')
});

// Obje veri güncelleme
const guncelKullaniciBilgileri = {
    ad: 'Mehmet',
    soyad: 'Yılmaz',
    yas: 31, // Yaş güncellendi
    sehir: 'Ankara', // Şehir güncellendi
    hobiler: ['kitap okuma', 'yüzme', 'müzik', 'futbol'], // Yeni hobi eklendi
    meslek: 'Yazılım Geliştirici' // Yeni alan eklendi
};

localStorage.setItem('kullaniciBilgileri', JSON.stringify(guncelKullaniciBilgileri)); //ekle
console.log("Güncellenen obje veri:", JSON.parse(localStorage.getItem('kullaniciBilgileri'))); //

// Array veri güncelleme
const guncelFavoriRenkler = ['mavi', 'yeşil', 'kırmızı', 'sarı', 'mor', 'turuncu'];
localStorage.setItem('favoriRenkler', JSON.stringify(guncelFavoriRenkler));
console.log("Güncellenen array veri:", JSON.parse(localStorage.getItem('favoriRenkler')));

// =============================================================================
// 4. VERİ SİLME
// =============================================================================

console.log("\n--- 4. VERİ SİLME ---");

// Tek bir veri silme
localStorage.removeItem('email');
console.log("Email silindi, kontrol:", localStorage.getItem('email')); // null

// Belirli bir veri var mı kontrol et ve sil
if (localStorage.getItem('bildirimler') !== null) {
    localStorage.removeItem('bildirimler');
    console.log("Bildirimler ayarı silindi");
}

// Tüm LocalStorage verilerini silme
console.log("Silme öncesi tüm veriler:");
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    console.log(`${key}: ${localStorage.getItem(key)}`);
}

// Tüm verileri sil (dikkatli kullanın!)
// localStorage.clear();
// console.log("Tüm LocalStorage verileri silindi");

// =============================================================================
// 5. PRATIK ÖRNEKLER VE KULLANIM DURUMLARI
// =============================================================================

console.log("\n--- 5. PRATIK ÖRNEKLER ---");

// Örnek 1: Kullanıcı tercihlerini saklama
function kullaniciTercihleriniKaydet(tercihAdi, deger) {
    const tercihler = JSON.parse(localStorage.getItem('kullaniciTercihleri') || '{}');
    tercihler[tercihAdi] = deger;
    localStorage.setItem('kullaniciTercihleri', JSON.stringify(tercihler));
    console.log(`${tercihAdi} tercihi kaydedildi:`, deger);
}

function kullaniciTercihiniOku(tercihAdi) {
    const tercihler = JSON.parse(localStorage.getItem('kullaniciTercihleri') || '{}');
    return tercihler[tercihAdi];
}

// Kullanıcı tercihlerini test et
kullaniciTercihleriniKaydet('tema', 'dark');
kullaniciTercihleriniKaydet('dil', 'tr');
kullaniciTercihleriniKaydet('fontBoyutu', '16px');

console.log("Kullanıcı tercihleri:", JSON.parse(localStorage.getItem('kullaniciTercihleri')));
console.log("Tema tercihi:", kullaniciTercihiniOku('tema'));

// Örnek 2: Alışveriş sepeti yönetimi
function sepeteEkle(urun) {
    const sepet = JSON.parse(localStorage.getItem('alisverisSepeti') || '[]');
    const mevcutUrun = sepet.find(item => item.id === urun.id);
    
    if (mevcutUrun) {
        mevcutUrun.miktar += 1;
    } else {
        sepet.push({...urun, miktar: 1});
    }
    
    localStorage.setItem('alisverisSepeti', JSON.stringify(sepet));
    console.log(`${urun.ad} sepete eklendi`);
}

function sepettenCikar(urunId) {
    const sepet = JSON.parse(localStorage.getItem('alisverisSepeti') || '[]');
    const yeniSepet = sepet.filter(item => item.id !== urunId);
    localStorage.setItem('alisverisSepeti', JSON.stringify(yeniSepet));
    console.log(`Ürün ID: ${urunId} sepetten çıkarıldı`);
}

function sepetiGoster() {
    const sepet = JSON.parse(localStorage.getItem('alisverisSepeti') || '[]');
    console.log("Sepet içeriği:", sepet);
    return sepet;
}

// Alışveriş sepetini test et
const urun1 = { id: 1, ad: 'Laptop', fiyat: 15000 };
const urun2 = { id: 2, ad: 'Mouse', fiyat: 200 };

sepeteEkle(urun1);
sepeteEkle(urun2);
sepeteEkle(urun1); // Aynı ürün tekrar eklendi
sepetiGoster();

// Örnek 3: Form verilerini otomatik kaydetme
function formVerisiniKaydet(formId, formData) {
    localStorage.setItem(`form_${formId}`, JSON.stringify(formData));
    console.log(`${formId} formu kaydedildi`);
}

function formVerisiniYukle(formId) {
    const formData = localStorage.getItem(`form_${formId}`);
    return formData ? JSON.parse(formData) : null;
}

function formVerisiniTemizle(formId) {
    localStorage.removeItem(`form_${formId}`);
    console.log(`${formId} form verisi temizlendi`);
}

// Form verilerini test et
const ornekFormVerisi = {
    ad: 'Ali',
    soyad: 'Veli',
    email: 'ali@example.com',
    mesaj: 'Bu bir test mesajıdır'
};

formVerisiniKaydet('iletisim', ornekFormVerisi);
console.log("Yüklenen form verisi:", formVerisiniYukle('iletisim'));

// =============================================================================
// 6. HATA YÖNETİMİ VE GÜVENLİK
// =============================================================================

console.log("\n--- 6. HATA YÖNETİMİ ---");

// LocalStorage kullanılabilir mi kontrol et
function localStorageDestekleniyorMu() {
    try {
        const test = 'localStorage_test';
        localStorage.setItem(test, test);
        localStorage.removeItem(test);
        return true;
    } catch (e) {
        return false;
    }
}

if (localStorageDestekleniyorMu()) {
    console.log("LocalStorage destekleniyor ✅");
} else {
    console.log("LocalStorage desteklenmiyor ❌");
}

// Güvenli veri okuma fonksiyonu
function guvenliVeriOku(key, varsayilanDeger = null) {
    try {
        const veri = localStorage.getItem(key);
        if (veri === null) return varsayilanDeger;
        
        // JSON parse edilmeye çalış
        try {
            return JSON.parse(veri);
        } catch {
            // JSON değilse string olarak döndür
            return veri;
        }
    } catch (error) {
        console.error(`Veri okuma hatası (${key}):`, error);
        return varsayilanDeger;
    }
}

// Güvenli veri yazma fonksiyonu
function guvenliVeriYaz(key, veri) {
    try {
        if (typeof veri === 'object') {
            localStorage.setItem(key, JSON.stringify(veri));
        } else {
            localStorage.setItem(key, String(veri));
        }
        return true;
    } catch (error) {
        console.error(`Veri yazma hatası (${key}):`, error);
        return false;
    }
}

// Güvenli fonksiyonları test et
guvenliVeriYaz('test_guvenli', { mesaj: 'Güvenli test verisi' });
console.log("Güvenli okuma testi:", guvenliVeriOku('test_guvenli'));

// =============================================================================
// 7. YARDIMCI FONKSİYONLAR
// =============================================================================

console.log("\n--- 7. YARDIMCI FONKSİYONLAR ---");

// Tüm LocalStorage anahtarlarını listele
function tumAnahtarlariListele() {
    const anahtarlar = [];
    for (let i = 0; i < localStorage.length; i++) {
        anahtarlar.push(localStorage.key(i));
    }
    return anahtarlar;
}

console.log("Tüm LocalStorage anahtarları:", tumAnahtarlariListele());

// Belirli bir pattern'e uyan anahtarları bul
function anahtarAra(pattern) {
    const anahtarlar = tumAnahtarlariListele();
    return anahtarlar.filter(anahtar => anahtar.includes(pattern));
}

console.log("'kullanici' içeren anahtarlar:", anahtarAra('kullanici'));

// LocalStorage kullanım miktarını hesapla (yaklaşık)
function kullanımMiktariniHesapla() {
    let toplam = 0;
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        toplam += key.length + value.length;
    }
    return toplam;
}

console.log("LocalStorage kullanım miktarı (karakter):", kullanımMiktariniHesapla());

// =============================================================================
// 8. TEMİZLEME VE BAKIM
// =============================================================================

console.log("\n--- 8. TEMİZLEME VE BAKIM ---");

// Eski verileri temizle (belirli bir tarihten önce)
function eskiVerileriTemizle(tarihSiniri) {
    const anahtarlar = tumAnahtarlariListele();
    let temizlenenSayisi = 0;
    
    anahtarlar.forEach(anahtar => {
        const veri = localStorage.getItem(anahtar);
        try {
            const parsedVeri = JSON.parse(veri);
            if (parsedVeri.tarih && new Date(parsedVeri.tarih) < tarihSiniri) {
                localStorage.removeItem(anahtar);
                temizlenenSayisi++;
            }
        } catch {
            // JSON parse edilemezse es geç
        }
    });
    
    console.log(`${temizlenenSayisi} eski veri temizlendi`);
    return temizlenenSayisi;
}

// Test verisi ekle
localStorage.setItem('eski_veri', JSON.stringify({
    icerik: 'Bu eski bir veri',
    tarih: new Date('2020-01-01').toISOString()
}));

// Eski verileri temizle
const bugun = new Date();
const birYilOnce = new Date(bugun.getFullYear() - 1, bugun.getMonth(), bugun.getDate());
eskiVerileriTemizle(birYilOnce);



/*===========================================================================
LocalStorage içerisine Farklı Türde Veriler Eklemek
===========================================================================*/

console.log("\n--- FARKLI TÜRDE VERİLER EKLEME ---");

// =============================================================================
// 1. STRING VERİLER
// =============================================================================

console.log("\n1. STRING VERİLER:");
// String veriler direkt olarak saklanabilir
localStorage.setItem('isim', 'Ahmet Yılmaz');
localStorage.setItem('sehir', 'İstanbul');
localStorage.setItem('telefon', '0555-123-4567');

const okunanIsim = localStorage.getItem('isim');
const okunanSehir = localStorage.getItem('sehir');
console.log("String veriler:", { okunanIsim, okunanSehir });

// =============================================================================
// 2. NUMBER VERİLER
// =============================================================================

console.log("\n2. NUMBER VERİLER:");
// Number veriler string olarak saklanır, okurken parse etmek gerekir
localStorage.setItem('yas', '25');
localStorage.setItem('maas', '50000');
localStorage.setItem('indirimOrani', '0.15');

// String'den number'a çevirme
const yass = parseInt(localStorage.getItem('yass'));
const maas = parseInt(localStorage.getItem('maas'));
const indirimOrani = parseFloat(localStorage.getItem('indirimOrani'));

console.log("Number veriler:", { yas, maas, indirimOrani });
console.log("Yas tipi:", typeof yas); // number

// =============================================================================
// 3. BOOLEAN VERİLER
// =============================================================================

console.log("\n3. BOOLEAN VERİLER:");
// Boolean veriler string olarak saklanır
localStorage.setItem('uyeMi', 'true');
localStorage.setItem('bildirimler', 'false');
localStorage.setItem('darkMode', 'true');

// String'den boolean'a çevirme
const uyeMi = localStorage.getItem('uyeMi') === 'true';
const bildirimler2 = localStorage.getItem('bildirimler2') === 'true';
const darkMode2 = localStorage.getItem('darkMode2') === 'true';

console.log("Boolean veriler:", { uyeMi, bildirimler, darkMode });
console.log("UyeMi tipi:", typeof uyeMi); // boolean

// =============================================================================
// 4. ARRAY (DİZİ) VERİLER
// =============================================================================

console.log("\n4. ARRAY VERİLER:");
// Array'lar JSON.stringify ile saklanır
const sehirler = ['İstanbul', 'Ankara', 'İzmir', 'Bursa'];
const sayilar = [1, 2, 3, 4, 5];
const karisikArray = ['metin', 123, true, null, { ad: 'test' }];

localStorage.setItem('sehirler', JSON.stringify(sehirler)); //array olarak depolama
localStorage.setItem('sayilar', JSON.stringify(sayilar));
localStorage.setItem('karisikArray', JSON.stringify(karisikArray));

// JSON.parse ile okuma
const okunanSehirler = JSON.parse(localStorage.getItem('sehirler'));
const okunanSayilar = JSON.parse(localStorage.getItem('sayilar'));
const okunanKarisikArray = JSON.parse(localStorage.getItem('karisikArray'));

console.log("Array veriler:", { okunanSehirler, okunanSayilar, okunanKarisikArray });
console.log("Sehirler tipi:", Array.isArray(okunanSehirler)); // true

// =============================================================================
// 5. OBJECT (NESNE) VERİLER
// =============================================================================

console.log("\n5. OBJECT VERİLER:");
// Object'ler JSON.stringify ile saklanır
const kullanici = {
    id: 1,
    ad: 'Mehmet',
    soyad: 'Kaya',
    yas: 30,
    aktif: true,
    adres: {
        sehir: 'İstanbul',
        ilce: 'Kadıköy',
        postaKodu: '34710'
    },
    hobiler: ['kitap', 'müzik', 'spor']
};

const urun = {
    id: 101,
    ad: 'Laptop',
    fiyat: 15000,
    stok: 5,
    ozellikler: {
        marka: 'Dell',
        model: 'XPS 13',
        islemci: 'Intel i7'
    }
};

localStorage.setItem('kullanici', JSON.stringify(kullanici));
localStorage.setItem('urun', JSON.stringify(urun));

// JSON.parse ile okuma
const okunanKullanici = JSON.parse(localStorage.getItem('kullanici'));
const okunanUrun = JSON.parse(localStorage.getItem('urun'));

console.log("Object veriler:", { okunanKullanici, okunanUrun });
console.log("Kullanici tipi:", typeof okunanKullanici); // object

// =============================================================================
// 6. NULL VE UNDEFINED VERİLER
// =============================================================================

console.log("\n6. NULL VE UNDEFINED VERİLER:");
// Null değerler string olarak saklanır
localStorage.setItem('bosDeger', 'null');
localStorage.setItem('tanimsizDeger', 'undefined');

// Okurken kontrol etmek gerekir
const bosDeger = localStorage.getItem('bosDeger');
const tanimsizDeger = localStorage.getItem('tanimsizDeger');
const olmayanDeger = localStorage.getItem('olmayanDeger'); // null döner

console.log("Null/Undefined veriler:", { bosDeger, tanimsizDeger, olmayanDeger });

// =============================================================================
// 7. FONKSİYON VE COMPLEX TİPLER
// =============================================================================

console.log("\n7. FONKSİYON VE COMPLEX TİPLER:");
// Fonksiyonlar JSON.stringify ile kaybolur, string olarak saklamak gerekir
const toplamaFonksiyonu = function(a, b) { return a + b; };

// Fonksiyonu string olarak sakla
localStorage.setItem('fonksiyon', toplamaFonksiyonu.toString());

// Okurken eval ile çalıştırabilirsin (güvenlik riski var!)
const okunanFonksiyon = eval('(' + localStorage.getItem('fonksiyon') + ')');
console.log("Fonksiyon testi:", okunanFonksiyon(5, 3)); // 8

// Date objesi örneği
const bugun2 = new Date();
localStorage.setItem('bugun', bugun.toISOString());

// Okurken Date objesi oluştur
const okunanTarih = new Date(localStorage.getItem('bugun2'));
console.log("Tarih verisi:", okunanTarih);

// =============================================================================
// 8. KARIŞIK VERİ TİPLERİ İÇEREN COMPLEX OBJECT
// =============================================================================

console.log("\n8. COMPLEX OBJECT ÖRNEĞİ:");
const kompleksVeri = {
    // String
    ad: 'Ali Veli',
    
    // Number
    yas: 25,
    maas: 75000.50,
    
    // Boolean
    aktif: true,
    evliMi: false,
    
    // Array
    diller: ['Türkçe', 'İngilizce', 'Almanca'],
    skorlar: [95, 87, 92, 88],
    
    // Nested Object
    adres: {
        sehir: 'Ankara',
        ilce: 'Çankaya',
        sokak: 'Atatürk Bulvarı',
        no: 123,
        kat: 5,
        daire: 'A'
    },
    
    // Array of Objects
    deneyimler: [
        { sirket: 'ABC Ltd.', pozisyon: 'Developer', yil: 2020 },
        { sirket: 'XYZ Corp.', pozisyon: 'Senior Dev', yil: 2022 }
    ],
    
    // Date
    dogumTarihi: new Date('1998-05-15'),
    
    // Null ve undefined
    telefon: null,
    notlar: undefined,
    
    // Function (string olarak)
    hesapla: function(yil) { return 2024 - yil; }.toString()
};

localStorage.setItem('kompleksVeri', JSON.stringify(kompleksVeri)); //object olarak depolama

// Okuma
const okunanKompleksVeri = JSON.parse(localStorage.getItem('kompleksVeri'));

// Date'i tekrar Date objesi yap
okunanKompleksVeri.dogumTarihi = new Date(okunanKompleksVeri.dogumTarihi);

console.log("Kompleks veri:", okunanKompleksVeri);
console.log("Dogum tarihi tipi:", typeof okunanKompleksVeri.dogumTarihi);

// =============================================================================
// 9. VERİ TİPİ KONTROL FONKSİYONLARI
// =============================================================================

console.log("\n9. VERİ TİPİ KONTROL FONKSİYONLARI:");

// Veri tipini kontrol eden fonksiyon
function veriTipiniKontrolEt(key) {
    const veri = localStorage.getItem(key);
    if (veri === null) return 'null';
    
    // JSON parse etmeye çalış
    try {
        const parsedVeri = JSON.parse(veri);
        return typeof parsedVeri;
    } catch {
        // JSON değilse string olarak kontrol et
        if (veri === 'true' || veri === 'false') return 'boolean';
        if (!isNaN(veri) && !isNaN(parseFloat(veri))) return 'number';
        return 'string';
    }
}

// Test et
console.log("isim tipi:", veriTipiniKontrolEt('isim')); // string
console.log("yas tipi:", veriTipiniKontrolEt('yas')); // number
console.log("uyeMi tipi:", veriTipiniKontrolEt('uyeMi')); // boolean
console.log("sehirler tipi:", veriTipiniKontrolEt('sehirler')); // object (array)
console.log("kullanici tipi:", veriTipiniKontrolEt('kullanici')); // object

// =============================================================================
// 10. GÜVENLİ VERİ TİPİ DÖNÜŞÜMLERİ
// =============================================================================

console.log("\n10. GÜVENLİ VERİ TİPİ DÖNÜŞÜMLERİ:");

// Güvenli veri okuma fonksiyonu
function guvenliVeriOku(key, beklenenTip = 'string') {
    const veri = localStorage.getItem(key);
    if (veri === null) return null;
    
    switch (beklenenTip) {
        case 'string':
            return veri;
            
        case 'number':
            const num = parseFloat(veri);
            return isNaN(num) ? null : num;
            
        case 'boolean':
            return veri === 'true';
            
        case 'array':
            try {
                const parsed = JSON.parse(veri);
                return Array.isArray(parsed) ? parsed : null;
            } catch {
                return null;
            }
            
        case 'object':
            try {
                return JSON.parse(veri);
            } catch {
                return null;
            }
            
        default:
            return veri;
    }
}

// Test et
console.log("String okuma:", guvenliVeriOku('isim', 'string'));
console.log("Number okuma:", guvenliVeriOku('yas', 'number'));
console.log("Boolean okuma:", guvenliVeriOku('uyeMi', 'boolean'));
console.log("Array okuma:", guvenliVeriOku('sehirler', 'array'));
console.log("Object okuma:", guvenliVeriOku('kullanici', 'object'));

console.log("\n=== FARKLI VERİ TİPLERİ BÖLÜMÜ TAMAMLANDI ===");

/*=============================================================================
                            ÖZET VE İPUÇLARI
=============================================================================

✅ YAPILMASI GEREKENLER:
- Her zaman JSON.stringify() ve JSON.parse() kullan
- Hata yönetimi yap (try-catch)
- LocalStorage desteklenip desteklenmediğini kontrol et
- Veri boyutunu kontrol et (5-10MB limit)
- Hassas verileri (şifre, token) saklama

❌ YAPILMAMASI GEREKENLER:
- Çok büyük dosyaları saklama
- Hassas bilgileri şifresiz saklama
- Null kontrolleri yapmadan veri okuma
- Tarayıcı kapasitesini kontrol etmeden veri yazma

🔧 FAYDALI FONKSİYONLAR:
- localStorage.setItem(key, value) - Veri ekle/güncelle
- localStorage.getItem(key) - Veri oku
- localStorage.removeItem(key) - Veri sil
- localStorage.clear() - Tümünü sil
- localStorage.key(index) - Anahtar adını al
- localStorage.length - Toplam anahtar sayısı

📝 KULLANIM ALANLARI:
- Kullanıcı tercihleri
- Alışveriş sepeti
- Form verileri
- Tema ayarları
- Oyun skorları
- Geçici cache verileri

🎯 VERİ TİPİ ÖZETİ:
- String: Direkt saklanır
- Number: String olarak saklanır, parseInt/parseFloat ile okunur
- Boolean: 'true'/'false' string olarak saklanır, === 'true' ile okunur
- Array: JSON.stringify ile saklanır, JSON.parse ile okunur
- Object: JSON.stringify ile saklanır, JSON.parse ile okunur
- Date: toISOString() ile saklanır, new Date() ile okunur
- Function: toString() ile saklanır, eval() ile okunur (riskli!)
- Null/Undefined: String olarak saklanır, kontrol edilerek okunur
*/
