// Append clicked button values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

// Clear the entire display (AC functionality)
function clearAll() {
    document.getElementById('display').value = '';
}

// Delete the last character from the display (x functionality)
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

// Calculate the entered mathematical expression
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch {
        display.value = 'Error';
    }
}
