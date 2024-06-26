document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function DescubraGame() {
    window.location.href = '../games/loading1.html'
}

document.addEventListener('DOMContentLoaded', (event) => {
    const toggleButton = document.getElementById('darkModeToggle');

    // Verifique se há uma preferência salva no localStorage
    const darkMode = localStorage.getItem('darkMode');

    // Se a preferência for "enabled", aplique a classe dark-mode ao body
    if (darkMode === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggleButton.addEventListener('click', () => {
        // Toggle the dark-mode class on the body
        document.body.classList.toggle('dark-mode');

        // Salve a preferência no localStorage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('darkMode', 'enabled');
        } else {
            localStorage.setItem('darkMode', 'disabled');
        }
    });
});

function EntrarConta() {
    window.location.href = '../../login.html'
}

function EntrarContaIndex() {
    window.location.href = 'login.html'
}


