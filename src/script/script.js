document.addEventListener("DOMContentLoaded", function() {
    
    // --- FUNÇÃO 1: Animação de Fade-in ao Rolar ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    const elementsToAnimate = document.querySelectorAll('.fade-in');
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    // --- FUNÇÃO 2: Pincel que Segue o Mouse ---
    const cursorBrush = document.querySelector('.cursor-brush');

    // Só executa se o elemento .cursor-brush existir (para não dar erro em telas mobile onde ele pode ser escondido)
    if (cursorBrush) {
        window.addEventListener('mousemove', function(e) {
            // e.clientX e e.clientY nos dão a posição do mouse na tela
            const posX = e.clientX;
            const posY = e.clientY;
            
            // Usamos GSAP (ou transição CSS) para mover o pincel suavemente.
            // Aqui, vamos usar uma forma simples com JS para atualizar o estilo.
            cursorBrush.style.left = `${posX}px`;
            cursorBrush.style.top = `${posY}px`;
        });
    }
});


// --- FUNÇÃO 3: Abelhas Animadas ---

function createBees() {
    const beeContainer = document.querySelector('.bee-container');
    if (!beeContainer) return;

    const numberOfBees = 15; // ✏️ Quer mais ou menos abelhas? Mude este número!

    for (let i = 0; i < numberOfBees; i++) {
        let bee = document.createElement('div');
        bee.classList.add('bee');
        
        // Adiciona o emoji da abelha
        bee.innerHTML = '🐝';

        // Posição, tamanho e velocidade aleatórios para cada abelha
        bee.style.left = Math.random() * 100 + 'vw';
        bee.style.fontSize = (Math.random() * 10 + 10) + 'px';
        bee.style.animationDuration = (Math.random() * 8 + 5) + 's'; // Duração entre 5 e 13 segundos
        bee.style.animationDelay = Math.random() * 5 + 's'; // Começam em momentos diferentes

        beeContainer.appendChild(bee);
    }
}

// Chama a função para criar as abelhas quando a página carregar
createBees();


// --- FUNÇÃO 0: TELA DE LOADING ---
document.addEventListener("DOMContentLoaded", function() {
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('loading-bar');
    const percentageText = document.getElementById('loading-percentage');
    
    // Bloqueia a rolagem da página
    document.body.classList.add('loading');

    let progress = 0;
    // Simula o carregamento
    const interval = setInterval(() => {
        progress += 1;
        
        // Atualiza a barra e a porcentagem
        progressBar.style.width = progress + '%';
        percentageText.textContent = Math.floor(progress) + '%';
        
        // Quando chegar a 100%
        if (progress >= 100) {
            clearInterval(interval); // Para o contador

            // Espera um pouquinho para o usuário ver o 100%
            setTimeout(() => {
                loadingScreen.classList.add('hidden'); // Esconde a tela de loading
                document.body.classList.remove('loading'); // Libera a rolagem
            }, 500);
        }
    }, 30); // ✏️ Mude este número para alterar a velocidade (menor = mais rápido)

    // O resto do seu código JS continua aqui...
    // --- FUNÇÃO 1: Animação de Fade-in ao Rolar ---
    // ... (o código que já estava aqui)
});