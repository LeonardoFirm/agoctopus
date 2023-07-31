function toggleIcon(iconElement) {
    if (document.body.classList.contains('dark-mode')) {
        iconElement.classList.replace('bi-sun-fill', 'bi-moon-stars-fill');
    } else {
        iconElement.classList.replace('bi-moon-stars-fill', 'bi-sun-fill');
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

window.onload = function () {
    const colorButton = document.getElementById('colorButton');
    const footerButton = document.getElementById('footerButton');
    const mobileButton = document.getElementById('mobileButton');

    if (colorButton) {
        colorButton.addEventListener('click', function () {
            toggleDarkMode();
            toggleIcon(this.querySelector('i'));
        });
    }

    if (footerButton) {
        footerButton.addEventListener('click', function () {
            toggleDarkMode();
            toggleIcon(this.querySelector('i'));
        });
    }

    if (mobileButton) {
        mobileButton.addEventListener('click', function () {
            toggleDarkMode();
            toggleIcon(this.querySelector('i'));
        });
    }
};
