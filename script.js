document.getElementById('btnTeste').addEventListener('click', function() {
    const mensagem = document.getElementById('mensagem');
    mensagem.innerText = "✨ O JavaScript está rodando perfeitamente!";
    
    this.style.backgroundColor = "#e74c3c";
    this.innerText = "Clicado!";
});
