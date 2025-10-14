/*
=============================================================================
                    FORM VE FORM YÖNETİMİ - JAVASCRIPT TUTORIAL
=============================================================================

Bu dosya, JavaScript ile form yönetimi, input işlemleri ve form validasyonu
konularını kapsamlı bir şekilde açıklamaktadır.

ÖNEMLİ NOTLAR:
- Form elementlerine erişim için getElementById, querySelector kullanılır
- Form submit eventi preventDefault() ile engellenebilir
- Input değerleri .value ile alınır
- Form validasyonu hem client-side hem server-side yapılmalıdır
- LocalStorage ile form verileri saklanabilir
*/

console.log("=== FORM VE FORM YÖNETİMİ TUTORIAL BAŞLIYOR ===");

// =============================================================================
// 1. FORM VE FORM SUBMIT YÖNETİMİ
// =============================================================================

console.log("\n--- 1. FORM VE FORM SUBMIT YÖNETİMİ ---");

// DOM yüklendikten sonra çalışacak kod
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM yüklendi, form işlemleri başlıyor...");
    
    // Basit form submit eventi
    const basitForm = document.getElementById('basitForm');
    if (basitForm) {
        basitForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Form'un varsayılan submit davranışını engelle
            
            console.log("Form gönderildi!");
            
            // Form verilerini al
            const formData = new FormData(this);
            const veriler = {};
            
            // FormData'dan verileri çıkar
            for (let [key, value] of formData.entries()) {
                veriler[key] = value;
            }
            
            console.log("Form verileri:", veriler);
            
            // Sonuçları göster
            const sonucDiv = document.getElementById('formSonuc');
            if (sonucDiv) {
                sonucDiv.innerHTML = `
                    <h4>Form Sonuçları:</h4>
                    Ad: ${veriler.ad || 'Belirtilmemiş'}<br>
                    Email: ${veriler.email || 'Belirtilmemiş'}<br>
                    Mesaj: ${veriler.mesaj || 'Belirtilmemiş'}<br>
                    <small>Gönderim zamanı: ${new Date().toLocaleString('tr-TR')}</small>
                `;
            }
            
            // LocalStorage'a kaydet
            localStorage.setItem('sonFormVerisi', JSON.stringify(veriler));
            
            // Form'u temizle
            this.reset();
        });
    }
});

// =============================================================================
// 2. INPUT İÇERİSİNDEN DEĞER ALMAK
// =============================================================================

console.log("\n--- 2. INPUT İÇERİSİNDEN DEĞER ALMAK ---");

// Input değerlerini alma fonksiyonu
function inputDegerleriniAl() {
    console.log("Input değerleri alınıyor...");
    
    const inputDegerleri = {};
    
    // Metin input'u
    const metinInput = document.getElementById('metin');
    if (metinInput) {
        inputDegerleri.metin = metinInput.value;
    }
    
    // Sayı input'u
    const sayiInput = document.getElementById('sayi');
    if (sayiInput) {
        inputDegerleri.sayi = parseFloat(sayiInput.value);
    }
    
    // Tarih input'u
    const tarihInput = document.getElementById('tarih');
    if (tarihInput) {
        inputDegerleri.tarih = tarihInput.value;
    }
    
    // Zaman input'u
    const zamanInput = document.getElementById('zaman');
    if (zamanInput) {
        inputDegerleri.zaman = zamanInput.value;
    }
    
    // Renk input'u
    const renkInput = document.getElementById('renk');
    if (renkInput) {
        inputDegerleri.renk = renkInput.value;
        // Renk önizlemesini güncelle
        const renkPreview = document.getElementById('renkPreview');
        if (renkPreview) {
            renkPreview.style.backgroundColor = renkInput.value;
        }
    }
    
    // Aralık input'u
    const aralikInput = document.getElementById('aralik');
    if (aralikInput) {
        inputDegerleri.aralik = parseInt(aralikInput.value);
        // Aralık değerini güncelle
        const aralikDegeri = document.getElementById('aralikDegeri');
        if (aralikDegeri) {
            aralikDegeri.textContent = aralikInput.value;
        }
    }
    
    // Checkbox'lar (çoklu seçim)
    const hobilerCheckboxes = document.querySelectorAll('input[name="hobiler"]:checked');
    inputDegerleri.hobiler = Array.from(hobilerCheckboxes).map(cb => cb.value);
    
    // Radio button'lar (tekli seçim)
    const cinsiyetRadio = document.querySelector('input[name="cinsiyet"]:checked');
    inputDegerleri.cinsiyet = cinsiyetRadio ? cinsiyetRadio.value : null;
    
    // Select (dropdown)
    const sehirSelect = document.getElementById('sehir');
    if (sehirSelect) {
        inputDegerleri.sehir = sehirSelect.value;
    }
    
    // Dosya input'u
    const dosyaInput = document.getElementById('dosya');
    if (dosyaInput && dosyaInput.files.length > 0) {
        inputDegerleri.dosyalar = Array.from(dosyaInput.files).map(file => ({
            name: file.name,
            size: file.size,
            type: file.type,
            lastModified: file.lastModified
        }));
    }
    
    console.log("Alınan input değerleri:", inputDegerleri);
    
    // Sonuçları göster
    const sonucDiv = document.getElementById('inputSonuc');
    if (sonucDiv) {
        let html = '<h4>Input Değerleri:</h4>';
        
        for (let [key, value] of Object.entries(inputDegerleri)) {
            if (Array.isArray(value)) {
                html += `${key}: [${value.join(', ')}]<br>`;
            } else if (typeof value === 'object' && value !== null) {
                html += `${key}: ${JSON.stringify(value)}<br>`;
            } else {
                html += `${key}: ${value}<br>`;
            }
        }
        
        html += `<small>Alınma zamanı: ${new Date().toLocaleString('tr-TR')}</small>`;
        sonucDiv.innerHTML = html;
    }
    
    return inputDegerleri;
}

// Input değerlerini temizleme fonksiyonu
function inputDegerleriniTemizle() {
    console.log("Input değerleri temizleniyor...");
    
    // Tüm input'ları temizle
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        if (input.type === 'checkbox' || input.type === 'radio') {
            input.checked = false;
        } else {
            input.value = '';
        }
    });
    
    // Özel durumlar
    const renkInput = document.getElementById('renk');
    if (renkInput) {
        renkInput.value = '#3498db';
        const renkPreview = document.getElementById('renkPreview');
        if (renkPreview) {
            renkPreview.style.backgroundColor = '#3498db';
        }
    }
    
    const aralikInput = document.getElementById('aralik');
    if (aralikInput) {
        aralikInput.value = '50';
        const aralikDegeri = document.getElementById('aralikDegeri');
        if (aralikDegeri) {
            aralikDegeri.textContent = '50';
        }
    }
    
    // Sonuç alanını temizle
    const sonucDiv = document.getElementById('inputSonuc');
    if (sonucDiv) {
        sonucDiv.innerHTML = '<h4>Input Değerleri:</h4>Henüz değerler alınmadı.';
    }
}

// Real-time input değişikliklerini dinle
document.addEventListener('DOMContentLoaded', function() {
    // Renk input'u için real-time güncelleme
    const renkInput = document.getElementById('renk');
    if (renkInput) {
        renkInput.addEventListener('input', function() {
            const renkPreview = document.getElementById('renkPreview');
            if (renkPreview) {
                renkPreview.style.backgroundColor = this.value;
            }
        });
    }
    
    // Aralık input'u için real-time güncelleme
    const aralikInput = document.getElementById('aralik');
    if (aralikInput) {
        aralikInput.addEventListener('input', function() {
            const aralikDegeri = document.getElementById('aralikDegeri');
            if (aralikDegeri) {
                aralikDegeri.textContent = this.value;
            }
        });
    }
    
    // Dosya input'u için label güncelleme
    const dosyaInput = document.getElementById('dosya');
    if (dosyaInput) {
        dosyaInput.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.files.length > 0) {
                const dosyaIsimleri = Array.from(this.files).map(file => file.name).join(', ');
                label.textContent = `📁 ${this.files.length} dosya seçildi: ${dosyaIsimleri}`;
            } else {
                label.textContent = '📁 Dosya seçmek için tıklayın';
            }
        });
    }
});

// =============================================================================
// 3. FORMLARLA ÇALIŞMAK - BÖLÜM SONU EGZERSİZİ
// =============================================================================

console.log("\n--- 3. FORMLARLA ÇALIŞMAK - EGZERSİZ ---");

// Form validasyon fonksiyonu
function formValidasyonu(formElement) {
    console.log("Form validasyonu yapılıyor...");
    
    const hatalar = [];
    const formData = new FormData(formElement);
    
    // Ad validasyonu
    const ad = formData.get('kayitAd');
    if (!ad || ad.trim().length < 2) {
        hatalar.push('Ad en az 2 karakter olmalıdır.');
    }
    
    // Soyad validasyonu
    const soyad = formData.get('kayitSoyad');
    if (!soyad || soyad.trim().length < 2) {
        hatalar.push('Soyad en az 2 karakter olmalıdır.');
    }
    
    // Email validasyonu
    const email = formData.get('kayitEmail');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
        hatalar.push('Geçerli bir email adresi giriniz.');
    }
    
    // Telefon validasyonu
    const telefon = formData.get('kayitTelefon');
    const telefonRegex = /^[0-9\s\-\+\(\)]+$/;
    if (!telefon || !telefonRegex.test(telefon)) {
        hatalar.push('Geçerli bir telefon numarası giriniz.');
    }
    
    // Yaş validasyonu
    const yas = parseInt(formData.get('kayitYas'));
    if (!yas || yas < 18 || yas > 100) {
        hatalar.push('Yaş 18-100 arasında olmalıdır.');
    }
    
    // Şehir validasyonu
    const sehir = formData.get('kayitSehir');
    if (!sehir) {
        hatalar.push('Lütfen bir şehir seçiniz.');
    }
    
    // KVKK validasyonu
    const kvkk = formData.get('kvkk');
    if (!kvkk) {
        hatalar.push('KVKK metnini kabul etmelisiniz.');
    }
    
    return hatalar;
}

// Kayıt formu submit eventi
document.addEventListener('DOMContentLoaded', function() {
    const kayitFormu = document.getElementById('kayitFormu');
    if (kayitFormu) {
        kayitFormu.addEventListener('submit', function(e) {
            e.preventDefault();
            
            console.log("Kayıt formu gönderildi!");
            
            // Form validasyonu
            const hatalar = formValidasyonu(this);
            
            if (hatalar.length > 0) {
                console.log("Validasyon hataları:", hatalar);
                
                const sonucDiv = document.getElementById('egzersizSonuc');
                if (sonucDiv) {
                    sonucDiv.innerHTML = `
                        <h4>❌ Validasyon Hataları:</h4>
                        ${hatalar.map(hata => `• ${hata}`).join('<br>')}
                    `;
                }
                
                return;
            }
            
            // Form verilerini al
            const formData = new FormData(this);
            const kullaniciVerisi = {};
            
            // Basit alanlar
            for (let [key, value] of formData.entries()) {
                if (key !== 'kayitHobiler' && key !== 'kvkk') {
                    kullaniciVerisi[key] = value;
                }
            }
            
            // Hobiler
            const hobiler = formData.getAll('kayitHobiler');
            kullaniciVerisi.hobiler = hobiler;
            
            // KVKK
            kullaniciVerisi.kvkkKabul = formData.get('kvkk') ? true : false;
            
            // Ek bilgiler
            kullaniciVerisi.kayitTarihi = new Date().toISOString();
            kullaniciVerisi.id = Date.now(); // Basit ID oluşturma
            
            console.log("Kullanıcı verisi:", kullaniciVerisi);
            
            // LocalStorage'a kaydet
            const mevcutKayitlar = JSON.parse(localStorage.getItem('kullaniciKayitlari') || '[]');
            mevcutKayitlar.push(kullaniciVerisi);
            localStorage.setItem('kullaniciKayitlari', JSON.stringify(mevcutKayitlar));
            
            // Başarı mesajı
            const sonucDiv = document.getElementById('egzersizSonuc');
            if (sonucDiv) {
                sonucDiv.innerHTML = `
                    <h4>✅ Kayıt Başarılı!</h4>
                    <strong>Merhaba ${kullaniciVerisi.kayitAd} ${kullaniciVerisi.kayitSoyad}!</strong><br><br>
                    Email: ${kullaniciVerisi.kayitEmail}<br>
                    Telefon: ${kullaniciVerisi.kayitTelefon}<br>
                    Yaş: ${kullaniciVerisi.kayitYas}<br>
                    Şehir: ${kullaniciVerisi.kayitSehir}<br>
                    Hobiler: ${kullaniciVerisi.hobiler.join(', ')}<br>
                    Hakkınızda: ${kullaniciVerisi.kayitMesaj || 'Belirtilmemiş'}<br><br>
                    <small>Kayıt ID: ${kullaniciVerisi.id}</small><br>
                    <small>Kayıt tarihi: ${new Date(kullaniciVerisi.kayitTarihi).toLocaleString('tr-TR')}</small>
                `;
            }
            
            // Form'u temizle
            this.reset();
            
            // Karakter sayacını sıfırla
            const karakterSayisi = document.getElementById('karakterSayisi');
            if (karakterSayisi) {
                karakterSayisi.textContent = '0/500 karakter';
            }
        });
        
        // Karakter sayacı için mesaj alanı
        const mesajTextarea = document.getElementById('kayitMesaj');
        if (mesajTextarea) {
            mesajTextarea.addEventListener('input', function() {
                const karakterSayisi = document.getElementById('karakterSayisi');
                if (karakterSayisi) {
                    const mevcutUzunluk = this.value.length;
                    karakterSayisi.textContent = `${mevcutUzunluk}/500 karakter`;
                    
                    // Renk değiştir
                    if (mevcutUzunluk > 450) {
                        karakterSayisi.style.color = '#e74c3c';
                    } else if (mevcutUzunluk > 400) {
                        karakterSayisi.style.color = '#f39c12';
                    } else {
                        karakterSayisi.style.color = '#7f8c8d';
                    }
                }
            });
        }
    }
});

// Formu temizleme fonksiyonu
function formuTemizle() {
    console.log("Form temizleniyor...");
    
    const kayitFormu = document.getElementById('kayitFormu');
    if (kayitFormu) {
        kayitFormu.reset();
        
        // Karakter sayacını sıfırla
        const karakterSayisi = document.getElementById('karakterSayisi');
        if (karakterSayisi) {
            karakterSayisi.textContent = '0/500 karakter';
            karakterSayisi.style.color = '#7f8c8d';
        }
        
        // Sonuç alanını temizle
        const sonucDiv = document.getElementById('egzersizSonuc');
        if (sonucDiv) {
            sonucDiv.innerHTML = '<h4>Egzersiz Sonuçları:</h4>Form temizlendi.';
        }
    }
}

// Kayıtları gösterme fonksiyonu
function kayitlariGoster() {
    console.log("Kayıtlar gösteriliyor...");
    
    const kayitlar = JSON.parse(localStorage.getItem('kullaniciKayitlari') || '[]');
    
    if (kayitlar.length === 0) {
        const sonucDiv = document.getElementById('egzersizSonuc');
        if (sonucDiv) {
            sonucDiv.innerHTML = '<h4>📋 Kayıtlar:</h4>Henüz kayıt bulunmuyor.';
        }
        return;
    }
    
    console.log("Toplam kayıt sayısı:", kayitlar.length);
    
    let html = `<h4>📋 Kayıtlar (${kayitlar.length} adet):</h4>`;
    
    kayitlar.forEach((kayit, index) => {
        html += `
            <div style="border: 1px solid #ddd; padding: 15px; margin: 10px 0; border-radius: 8px; background: #f9f9f9;">
                <strong>#${index + 1} - ${kayit.kayitAd} ${kayit.kayitSoyad}</strong><br>
                Email: ${kayit.kayitEmail} | Telefon: ${kayit.kayitTelefon}<br>
                Yaş: ${kayit.kayitYas} | Şehir: ${kayit.kayitSehir}<br>
                Hobiler: ${kayit.hobiler.join(', ')}<br>
                <small>Kayıt tarihi: ${new Date(kayit.kayitTarihi).toLocaleString('tr-TR')}</small>
            </div>
        `;
    });
    
    const sonucDiv = document.getElementById('egzersizSonuc');
    if (sonucDiv) {
        sonucDiv.innerHTML = html;
    }
}

// Tüm kayıtları temizleme fonksiyonu
function kayitlariTemizle() {
    console.log("Tüm kayıtlar temizleniyor...");
    
    if (confirm('Tüm kayıtları silmek istediğinizden emin misiniz?')) {
        localStorage.removeItem('kullaniciKayitlari');
        
        const sonucDiv = document.getElementById('egzersizSonuc');
        if (sonucDiv) {
            sonucDiv.innerHTML = '<h4>🗑️ Kayıtlar:</h4>Tüm kayıtlar silindi.';
        }
        
        console.log("Tüm kayıtlar silindi.");
    }
}

// =============================================================================
// 4. GELİŞMİŞ FORM ÖRNEKLERİ
// =============================================================================

console.log("\n--- 4. GELİŞMİŞ FORM ÖRNEKLERİ ---");

// Eğitim alanı ekleme fonksiyonu
function egitimAlaniEkle() {
    console.log("Eğitim alanı ekleniyor...");
    
    const egitimAlanlari = document.getElementById('egitimAlanlari');
    if (!egitimAlanlari) return;
    
    const yeniAlan = document.createElement('div');
    yeniAlan.className = 'egitim-item';
    yeniAlan.style.cssText = 'margin-bottom: 15px; padding: 15px; border: 1px solid #ddd; border-radius: 8px;';
    
    yeniAlan.innerHTML = `
        <div class="form-row">
            <div class="form-group">
                <label>Okul Adı:</label>
                <input type="text" name="okulAdi[]" placeholder="Okul adını girin" required>
            </div>
            <div class="form-group">
                <label>Bölüm:</label>
                <input type="text" name="bolum[]" placeholder="Bölüm adını girin" required>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Başlangıç Yılı:</label>
                <input type="number" name="baslangicYili[]" min="1990" max="2024" required>
            </div>
            <div class="form-group">
                <label>Bitiş Yılı:</label>
                <input type="number" name="bitisYili[]" min="1990" max="2024">
            </div>
        </div>
        <button type="button" onclick="egitimAlaniSil(this)" class="btn btn-danger" style="margin-top: 10px;">Bu Alanı Sil</button>
    `;
    
    egitimAlanlari.appendChild(yeniAlan);
    
    // Animasyon ekle
    yeniAlan.style.opacity = '0';
    yeniAlan.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        yeniAlan.style.transition = 'all 0.3s ease';
        yeniAlan.style.opacity = '1';
        yeniAlan.style.transform = 'translateY(0)';
    }, 10);
}

// Eğitim alanı silme fonksiyonu
function egitimAlaniSil(button) {
    console.log("Eğitim alanı siliniyor...");
    
    const egitimAlani = button.closest('.egitim-item');
    if (egitimAlani) {
        // Animasyon ile sil
        egitimAlani.style.transition = 'all 0.3s ease';
        egitimAlani.style.opacity = '0';
        egitimAlani.style.transform = 'translateX(-100%)';
        
        setTimeout(() => {
            egitimAlani.remove();
        }, 300);
    }
}

// Dinamik form gönderme fonksiyonu
function dinamikFormuGonder() {
    console.log("Dinamik form gönderiliyor...");
    
    const dinamikForm = document.getElementById('dinamikForm');
    if (!dinamikForm) return;
    
    const formData = new FormData(dinamikForm);
    const egitimVerileri = [];
    
    // Okul adları
    const okulAdlari = formData.getAll('okulAdi[]');
    const bolumler = formData.getAll('bolum[]');
    const baslangicYillari = formData.getAll('baslangicYili[]');
    const bitisYillari = formData.getAll('bitisYili[]');
    
    // Eğitim verilerini organize et
    for (let i = 0; i < okulAdlari.length; i++) {
        if (okulAdlari[i] && bolumler[i]) {
            egitimVerileri.push({
                okulAdi: okulAdlari[i],
                bolum: bolumler[i],
                baslangicYili: baslangicYillari[i] || null,
                bitisYili: bitisYillari[i] || null
            });
        }
    }
    
    console.log("Eğitim verileri:", egitimVerileri);
    
    // Sonuçları göster
    const sonucDiv = document.getElementById('dinamikSonuc');
    if (sonucDiv) {
        let html = '<h4>Dinamik Form Sonuçları:</h4>';
        
        if (egitimVerileri.length === 0) {
            html += 'Hiç eğitim bilgisi girilmedi.';
        } else {
            egitimVerileri.forEach((egitim, index) => {
                html += `
                    <div style="border: 1px solid #ddd; padding: 10px; margin: 10px 0; border-radius: 5px;">
                        <strong>Eğitim #${index + 1}:</strong><br>
                        Okul: ${egitim.okulAdi}<br>
                        Bölüm: ${egitim.bolum}<br>
                        Başlangıç: ${egitim.baslangicYili || 'Belirtilmemiş'}<br>
                        Bitiş: ${egitim.bitisYili || 'Devam ediyor'}
                    </div>
                `;
            });
        }
        
        html += `<small>Gönderim zamanı: ${new Date().toLocaleString('tr-TR')}</small>`;
        sonucDiv.innerHTML = html;
    }
    
    // LocalStorage'a kaydet
    localStorage.setItem('egitimVerileri', JSON.stringify(egitimVerileri));
}

// =============================================================================
// 5. YARDIMCI FONKSİYONLAR
// =============================================================================

console.log("\n--- 5. YARDIMCI FONKSİYONLAR ---");

// Form verilerini JSON'a çevirme
function formToJSON(formElement) {
    const formData = new FormData(formElement);
    const json = {};
    
    for (let [key, value] of formData.entries()) {
        // Eğer key zaten varsa, array yap
        if (json[key]) {
            if (Array.isArray(json[key])) {
                json[key].push(value);
            } else {
                json[key] = [json[key], value];
            }
        } else {
            json[key] = value;
        }
    }
    
    return json;
}

// Form validasyon yardımcı fonksiyonları
const validators = {
    required: (value) => value && value.trim().length > 0,
    email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    phone: (value) => /^[0-9\s\-\+\(\)]+$/.test(value),
    minLength: (value, min) => value && value.length >= min,
    maxLength: (value, max) => value && value.length <= max,
    number: (value) => !isNaN(value) && !isNaN(parseFloat(value)),
    range: (value, min, max) => {
        const num = parseFloat(value);
        return num >= min && num <= max;
    }
};

// Genel form validasyon fonksiyonu
function validateForm(formElement, rules) {
    const errors = {};
    const formData = new FormData(formElement);
    
    for (let [field, fieldRules] of Object.entries(rules)) {
        const value = formData.get(field);
        
        for (let rule of fieldRules) {
            let isValid = true;
            let message = '';
            
            if (typeof rule === 'string') {
                // Basit validasyon
                if (rule === 'required') {
                    isValid = validators.required(value);
                    message = `${field} alanı zorunludur.`;
                } else if (rule === 'email') {
                    isValid = validators.email(value);
                    message = `${field} geçerli bir email adresi olmalıdır.`;
                }
            } else if (typeof rule === 'object') {
                // Karmaşık validasyon
                if (rule.type === 'minLength') {
                    isValid = validators.minLength(value, rule.value);
                    message = `${field} en az ${rule.value} karakter olmalıdır.`;
                } else if (rule.type === 'maxLength') {
                    isValid = validators.maxLength(value, rule.value);
                    message = `${field} en fazla ${rule.value} karakter olabilir.`;
                } else if (rule.type === 'range') {
                    isValid = validators.range(value, rule.min, rule.max);
                    message = `${field} ${rule.min}-${rule.max} arasında olmalıdır.`;
                }
            }
            
            if (!isValid) {
                if (!errors[field]) errors[field] = [];
                errors[field].push(message);
            }
        }
    }
    
    return errors;
}

// Form alanlarını vurgulama
function highlightErrors(formElement, errors) {
    // Önceki hataları temizle
    const errorFields = formElement.querySelectorAll('.error');
    errorFields.forEach(field => {
        field.classList.remove('error');
        const errorMsg = field.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
        }
    });
    
    // Yeni hataları vurgula
    for (let [field, messages] of Object.entries(errors)) {
        const input = formElement.querySelector(`[name="${field}"]`);
        if (input) {
            input.classList.add('error');
            
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.cssText = 'color: #e74c3c; font-size: 12px; margin-top: 5px;';
            errorDiv.textContent = messages[0]; // İlk hatayı göster
            
            input.parentNode.insertBefore(errorDiv, input.nextSibling);
        }
    }
}

// CSS stilleri ekleme
document.addEventListener('DOMContentLoaded', function() {
    const style = document.createElement('style');
    style.textContent = `
        .error {
            border-color: #e74c3c !important;
            box-shadow: 0 0 5px rgba(231, 76, 60, 0.3) !important;
        }
        
        .success {
            border-color: #27ae60 !important;
            box-shadow: 0 0 5px rgba(39, 174, 96, 0.3) !important;
        }
    `;
    document.head.appendChild(style);
});

console.log("\n=== FORM VE FORM YÖNETİMİ TUTORIAL TAMAMLANDI ===");

/*=============================================================================
                            ÖZET VE İPUÇLARI
=============================================================================

✅ YAPILMASI GEREKENLER:
- Form submit eventini preventDefault() ile engelle
- Form validasyonu yap (hem client-side hem server-side)
- Input değerlerini doğru şekilde al (.value, FormData)
- Hata mesajlarını kullanıcıya net şekilde göster
- LocalStorage ile form verilerini sakla
- Accessibility (erişilebilirlik) özelliklerini unutma

❌ YAPILMAMASI GEREKENLER:
- Form validasyonunu sadece client-side yapma
- Hassas verileri LocalStorage'a saklama
- Form submit'i engellemeden veri işleme
- Kullanıcı deneyimini göz ardı etme
- Input değerlerini kontrol etmeden işleme

🔧 FAYDALI FONKSİYONLAR:
- FormData() - Form verilerini almak için
- preventDefault() - Form submit'i engellemek için
- addEventListener() - Event dinlemek için
- querySelector() - Element seçmek için
- JSON.stringify/parse() - Veri saklama için

📝 KULLANIM ALANLARI:
- Kullanıcı kayıt formları
- İletişim formları
- Anket formları
- Sipariş formları
- Arama formları
- Ayarlar formları

🎯 FORM ELEMENTLERİ:
- input[type="text"] - Metin girişi
- input[type="email"] - Email girişi
- input[type="password"] - Şifre girişi
- input[type="number"] - Sayı girişi
- input[type="date"] - Tarih seçimi
- input[type="checkbox"] - Çoklu seçim
- input[type="radio"] - Tekli seçim
- select - Dropdown menü
- textarea - Uzun metin girişi
- button[type="submit"] - Form gönderme

🚀 İLERİ SEVİYE ÖZELLİKLER:
- Real-time validasyon
- Dinamik form alanları
- Dosya yükleme
- Drag & drop
- Auto-save
- Form progress indicator
- Multi-step forms
*/
