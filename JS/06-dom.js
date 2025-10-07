// DOM (Document Object Model) olayları, web sayfasındaki HTML elemanlarıyla etkileşim kurmamızı sağlar. 
// Olaylar (events), kullanıcı bir işlem yaptığında (tıklama, klavye tuşuna basma, fareyle üzerine gelme vb.) tetiklenir.

// 1. Temel Olay Dinleyici Ekleme
// Bir HTML elementine olay dinleyici eklemek için addEventListener kullanılır:

// Örnek HTML: <button id="btn">Tıkla</button>
let buton = document.getElementById("btn");

if (buton) {
    buton.addEventListener("click", function() {
        alert("Butona tıkladın!");
    });
}

// 2. Sık Kullanılan Olay Türleri
// - click: Tıklama
// - mouseover: Üzerine gelme
// - mouseout: Üzerinden çıkma
// - dblclick: Çift tıklama
// - keydown: Klavyede tuşa basma
// - keyup: Tuşu bırakma
// - submit: Form gönderme
// - change: Değer değişimi (input/select)
// - input: Kullanıcı inputa bir şey yazdıkça

// 3. Olay Nesnesi (event)
// Olay fonksiyonuna parametre olarak event nesnesi gelir. Bu nesneyle olay hakkında bilgi alınabilir.

let input = document.getElementById("adInput");
// Örnek HTML: <input id="adInput" type="text" />

if (input) {
    input.addEventListener("input", function(e) {
        console.log("Girilen değer:", e.target.value);
    });
}

// 4. Olayı Bir Kere Dinlemek (once)
// Bir olayın sadece bir kez çalışmasını istiyorsak { once: true } kullanılır.

let tekSeferlik = document.getElementById("tekSeferlikBtn");
// Örnek HTML: <button id="tekSeferlikBtn">Bir Kere Tıkla</button>
if (tekSeferlik) {
    tekSeferlik.addEventListener("click", function() {
        alert("Bu mesaj sadece bir kez gösterilecek!");
    }, { once: true });
}

// 5. Olayın Varsayılan Davranışını Engellemek
// Bazı olaylarda (ör: form submit) sayfa yenilenir. Bunu engellemek için event.preventDefault() kullanılır.

let form = document.getElementById("girisFormu");
// Örnek HTML: <form id="girisFormu"><input /><button>Gönder</button></form>
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Form gönderildi (sayfa yenilenmedi)!");
    });
}

// 6. Olay Yakalama (Event Bubbling ve Capturing)
// Olaylar iç içe elemanlarda önce içten dışa (bubbling) veya dıştan içe (capturing) doğru yayılabilir.
// addEventListener'ın üçüncü parametresi ile kontrol edilir (varsayılan false: bubbling).

let disKutu = document.getElementById("disKutu");
let icKutu = document.getElementById("icKutu");
// Örnek HTML:
// <div id="disKutu" style="padding:20px; background:#eee;">
//   <div id="icKutu" style="padding:20px; background:#ccc;">İç Kutu</div>
// </div>

if (disKutu) {
    disKutu.addEventListener("click", function() {
        alert("Dış kutuya tıklandı!");
    });
}
if (icKutu) {
    icKutu.addEventListener("click", function(e) {
        alert("İç kutuya tıklandı!");
        // e.stopPropagation(); // Yorumdan çıkarılırsa olay dış kutuya yayılmaz
    });
}

// 7. Olayı Kaldırmak
// removeEventListener ile olay dinleyici kaldırılabilir.

function tikla() {
    alert("Butona tıklandı ve olay kaldırılacak!");
    buton.removeEventListener("click", tikla);
}
if (buton) {
    buton.addEventListener("click", tikla);
}

// 8. Delegasyon (Event Delegation)
// Çok sayıda benzer elemana tek tek dinleyici eklemek yerine, ortak bir üst elemana eklenir.

let liste = document.getElementById("liste");
// Örnek HTML:
// <ul id="liste">
//   <li>Elma</li>
//   <li>Armut</li>
//   <li>Muz</li>
// </ul>
if (liste) {
    liste.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            alert("Tıklanan meyve: " + e.target.textContent);
        }
    });
}

// DOM olayları sayesinde kullanıcı etkileşimlerine dinamik ve etkili cevaplar verebiliriz.