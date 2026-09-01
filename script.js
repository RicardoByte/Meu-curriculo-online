// 1. Mensagem de Boas-vindas clássica (Estilo alert inofensivo de antigamente, mas só no console)
window.onload = function() {
    console.log("Página carregada com sucesso! Bem-vindo ao meu portfólio.");
};

// 2. Lógica para Mostrar/Ocultar Informações (Emulando o clássico jQuery slideToggle em Vanilla JS)
function toggleDetails(elementId) {
    const elemento = document.getElementById(elementId);
    
    if (elemento.style.display === "none" || elemento.style.display === "") {
        // Mostra o elemento
        elemento.style.display = "block";
        elemento.style.opacity = 0;
        
        // Efeito simples de fade-in
        let opacidade = 0;
        const timer = setInterval(function() {
            if (opacidade >= 1) {
                clearInterval(timer);
            }
            elemento.style.opacity = opacidade;
            opacidade += 0.1;
        }, 20);
        
    } else {
        // Esconde o elemento
        elemento.style.display = "none";
    }
}// 1. Mensagem de Boas-vindas baseada na hora do dia
window.onload = function() {
    const horaAtual = new Date().getHours();
    let saudacao = "Boa noite";
    
    if (horaAtual >= 5 && horaAtual < 12) {
        saudacao = "Bom dia";
    } else if (horaAtual >= 12 && horaAtual < 18) {
        saudacao = "Boa tarde";
    }

    // Exibe o alerta
    alert(`${saudacao}! Bem-vindo(a) ao meu portfólio online.`);
};

// 2. Lógica do Modo Noturno (Dark Mode)
const themeToggleBtn = document.getElementById('themeToggle');
const bodyElement = document.body;
const githubBtn = document.getElementById('github-btn');

themeToggleBtn.addEventListener('click', () => {
    // Alterna a classe no body
    bodyElement.classList.toggle('dark-mode');
    
    // Ajusta os botões de acordo com o tema atual
    if (bodyElement.classList.contains('dark-mode')) {
        themeToggleBtn.innerHTML = '<i class="bi bi-sun-fill"></i> Modo Claro';
        themeToggleBtn.classList.replace('btn-outline-secondary', 'btn-light');
        githubBtn.classList.replace('btn-outline-dark', 'btn-light');
    } else {
        themeToggleBtn.innerHTML = '<i class="bi bi-moon-fill"></i> Modo Noturno';
        themeToggleBtn.classList.replace('btn-light', 'btn-outline-secondary');
        githubBtn.classList.replace('btn-light', 'btn-outline-dark');
    }
});

// 3. Lógica para Mostrar/Ocultar Informações
function toggleDetails(elementId) {
    const elemento = document.getElementById(elementId);
    if (elemento.style.display === "none" || elemento.style.display === "") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}
