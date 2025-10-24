export function updateCounter(e, counter, amount) {
    e.preventDefault();

    if (!counter) return;

    let count = Number(counter.value);
    count += amount;
    
    counter.value = count;
    
    decrement.disabled = count <= 0;
};