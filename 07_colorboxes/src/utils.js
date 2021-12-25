
function randomArrayElement(arr) {
    let randomIndexInRange = Math.floor(Math.random() * arr.length);
    return arr[randomIndexInRange];
}

export {randomArrayElement};