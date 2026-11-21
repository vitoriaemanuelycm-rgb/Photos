
// =====================================
// ELEMENTOS DO HTML
// =====================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

// =====================================
// ALTERAÇÃO DO TEMA
// =====================================

themeToggle.addEventListener("click", function() {

    // Adiciona ou remove a classe dark-mode
    document.body.classList.toggle("dark-mode");

    // Verifica se o modo escuro está ativado
    const darkModeAtivo = document.body.classList.contains("dark-mode");

    // Altera o ícone conforme o tema
    if (darkModeAtivo) {

        // Modo escuro: Lua
        themeIcon.classList.remove("fa-sun");
        themeIcon.classList.add("fa-moon");

        themeToggle.setAttribute("aria-label", "Ativar modo claro");

    } else {

        // Modo claro: Sol
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-sun");

        themeToggle.setAttribute("aria-label", "Ativar modo escuro");
    }

});
