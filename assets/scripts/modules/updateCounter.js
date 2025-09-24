document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("quantity");
    if (!counter) return;

    const value = counter.value;
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");

    let count = value;

    function updateDecrementButton() {
        decrement.disabled = count <= 0;
    }

    increment.addEventListener("click", (e) => {
        e.preventDefault();
        count++;
        updateDecrementButton();
        counter.value = count;
    });

    decrement.addEventListener("click", (e) => {
        e.preventDefault();
        count--;
        updateDecrementButton();
        counter.value = count;
    });
});