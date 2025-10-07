// String Veri Türü İşlemleri ve Metotları

// String tanımlama
let ad = "Ahmet";
let soyad = 'Yılmaz';
let tamAd = ad + " " + soyad; // Birleştirme (concatenation)
console.log("Tam Ad:", tamAd); // "Ahmet Yılmaz"

// Template literal (şablon dizgisi) ile birleştirme
let yas = 25;
let bilgi = `Ad: ${ad}, Soyad: ${soyad}, Yaş: ${yas}`;
console.log(bilgi); // "Ad: Ahmet, Soyad: Yılmaz, Yaş: 25"

// String uzunluğu
console.log("Ad uzunluğu:", ad.length); // 5

// Karaktere erişim
console.log("İlk harf:", ad[0]); // "A"
console.log("Son harf:", ad[ad.length - 1]); // "t"

// Küçük/büyük harfe çevirme
console.log(ad.toUpperCase()); // "AHMET"
console.log(soyad.toLowerCase()); // "yılmaz"

// Parça alma (substring, slice, substr)
let metin = "Merhaba Dünya";
console.log(metin.substring(0, 7)); // "Merhaba"
console.log(metin.slice(8)); // "Dünya"
console.log(metin.substr(0, 7)); // "Merhaba"

// Arama ve içerik kontrolü
console.log(metin.indexOf("Dünya")); // 8
console.log(metin.includes("Merhaba")); // true
console.log(metin.startsWith("Mer")); // true
console.log(metin.endsWith("ya")); // true

// Değiştirme
let yeniMetin = metin.replace("Dünya", "JS");
console.log(yeniMetin); // "Merhaba JS"

// Bölme ve birleştirme
let kelimeler = metin.split(" "); // ["Merhaba", "Dünya"]
console.log(kelimeler);
let tekrarBirlesik = kelimeler.join("-");
console.log(tekrarBirlesik); // "Merhaba-Dünya"

// Boşlukları temizleme
let bosluklu = "   JavaScript   ";
console.log(bosluklu.trim()); // "JavaScript"
console.log(bosluklu.trimStart()); // "JavaScript   "
console.log(bosluklu.trimEnd()); // "   JavaScript"

// Tekrar etme
let tekrar = "JS ".repeat(3);
console.log(tekrar); // "JS JS JS "

// Karakterleri değiştirme (replaceAll)
let ornek = "elma, elma, armut";
console.log(ornek.replaceAll("elma", "muz")); // "muz, muz, armut"

// Unicode ve karakter kodları
console.log("A".charCodeAt(0)); // 65
console.log(String.fromCharCode(66)); // "B"

// String ile karşılaştırma
let a = "abc";
let b = "abd";
console.log(a === b); // false
console.log(a < b); // true (alfabetik sıralama)

// String işlemleri genellikle immutable'dır, yani orijinal string değişmez, yeni bir string döner.
let orijinal = "Merhaba";
let degisen = orijinal.replace("a", "e");
console.log(orijinal); // "Merhaba"
console.log(degisen); // "Merheba"