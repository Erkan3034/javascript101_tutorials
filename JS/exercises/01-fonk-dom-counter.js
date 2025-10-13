console.log("Counter uygulaması yüklendi.");

const decrementButton = document.getElementById("decrement");
const incrementButton = document.getElementById("increment");
const valueDisplay = document.getElementById("value");
const clearButton = document.getElementById("clear");  
let value=0;

const decrease = () => {
     decrementButton.addEventListener("click", () => {
        value--;
        valueDisplay.textContent = value;
        console.log("Decreased: ",value);
    });
};

const increase = () => {
    incrementButton.addEventListener("click", () => {
        value++;
        valueDisplay.textContent = value;
        console.log("Increased: ",value);
    });
};

clearButton.addEventListener("click", () => {
    value = 0;
    valueDisplay.textContent = value;
    console.log("Cleared: ", value);
});

decrease();
increase();