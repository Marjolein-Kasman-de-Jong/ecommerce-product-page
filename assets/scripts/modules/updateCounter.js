document.addEventListener("DOMContentLoaded", () => {
    const counter = document.getElementById("quantity");
    const increment = document.getElementById("increment");
    const decrement = document.getElementById("decrement");

    if (!counter || !increment || !decrement) return;

    let count = Number(counter.value);

    function updateCounter(e, newValue) {
        e.preventDefault();
        count = newValue;
        counter.value = count;
        decrement.disabled = count <= 0;
    }

    increment.addEventListener("click", (e) => updateCounter(e, count + 1));
    decrement.addEventListener("click", (e) => updateCounter(e, count - 1));
});