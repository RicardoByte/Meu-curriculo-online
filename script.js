// 1. Mensagem de Boas-vindas clássica 
window.onload = function() {
    console.log("Página carregada com sucesso! Bem-vindo ao meu portfólio.");
};

// 2. Lógica para Mostrar/Ocultar Informações 
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
}