let userName = document.getElementById("myName");
let currentHour = document.getElementById("myClock");

let greetingUser = prompt("Adınızı giriniz:");
userName.innerHTML = greetingUser;

function showTime() {
    let date = new Date();
    let hours = date.getHours().toString().padStart(2, '0');
    let minutes = date.getMinutes().toString().padStart(2, '0');
    let seconds = date.getSeconds().toString().padStart(2, '0');
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let dayName = days[date.getDay()];
    currentHour.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`;
}

showTime();
setInterval(showTime, 1000);