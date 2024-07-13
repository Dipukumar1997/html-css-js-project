// script.js

document.addEventListener('DOMContentLoaded', () => {
    const colors = document.querySelectorAll('.color');
    const selectedColorBox = document.getElementById('selectedColor');

    colors.forEach(color => {
        color.addEventListener('click', () => {
            const selectedColor = color.style.backgroundColor;
            selectedColorBox.style.backgroundColor = selectedColor;
        });
    });
});
