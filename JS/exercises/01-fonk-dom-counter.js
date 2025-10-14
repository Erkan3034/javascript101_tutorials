console.log("Counter uygulaması yüklendi.");

const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const valueDisplay = document.getElementById("value");
const clearButton = document.getElementById("clear");  

// LocalStorage'daki value değerini ekrana yansıt (sayfa yüklendiğinde de!)
let value = localStorage.getItem("value") ? Number(localStorage.getItem("value")) : 0;
valueDisplay.textContent = value; // Ekrana yaz (ilk yüklemede de!)

const decrease = () => {
    decrementButton.addEventListener("click", () => {
        value--;
        valueDisplay.textContent = value;
        console.log("Decreased: ", value);
        localStorage.setItem("value", value);
    });
};

const increase = () => {
    incrementButton.addEventListener("click", () => {
        value++;
        valueDisplay.textContent = value;
        console.log("Increased: ", value);
        localStorage.setItem("value", value);
    });
};

clearButton.addEventListener("click", () => {
    value = 0;
    valueDisplay.textContent = value;
    localStorage.setItem("value", value);
    console.log("Cleared: ", value);
});

decrease();
increase();