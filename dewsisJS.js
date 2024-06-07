function toggleQuantityControls(checkbox) {
    const quantityControls = checkbox.nextElementSibling;
    quantityControls.style.display = checkbox.checked ? 'flex' : 'none';
    if (!checkbox.checked) quantityControls.querySelector('input').value = 1;
}

function adjustQuantity(button, increment) {
    const input = button.parentElement.querySelector('input');
    let currentValue = parseInt(input.value);
    input.value = increment ? currentValue + 1 : (currentValue > 1 ? currentValue - 1 : 1);
}