// ============================================
// CONFIGURAÇÕES - VOCÊ PRECISA EDITAR ISSO!
// ============================================

// 1. DATA DO INÍCIO DO NAMORO (Ano, Mês, Dia)
const START_DATE = new Date('2025-09-26'); // EXEMPLO: ALTERE PARA SUA DATA!

// 2. SEU NOME
const YOUR_NAME = 'João Nunes'; // ALTERE AQUI

// 3. NOME DA PESSOA AMADA
const LOVER_NAME = 'Beatriz Martins'; // ALTERE AQUI

// 4. MENSAGEM DA CARTA DE AMOR
const LOVE_LETTER = `
Neste Dia dos Namorados, quero te lembrar o quanto tu és especial para mim. 
Cada momento ao teu lado é um presente, cada sorriso ilumina o meu dia, 
cada abraço teu é meu porto seguro.

Tu chegaste na minha vida e tudo fez mais sentido. O amor que sinto por ti 
cresce mais a cada dia, e não consigo imaginar minha vida sem ti.

Obrigado por ser quem tu és, por me fazer tão feliz, por me completar. 
Prometo te amar e cuidar de ti hoje, amanhã e para sempre.

Com todo meu amor,
${YOUR_NAME} ❤️`;

// 5. DECLARAÇÕES PARA O GERADOR (adicione quantas quiser)
const DECLARATIONS = [
    "Você é a pessoa mais especial que eu já conheci!",
    "Meu coração bate mais forte quando penso em ti.",
    "Cada dia ao teu lado é um presente.",
    "Você é meu sonho realizado.",
    "O amor que sinto por ti não cabe no peito.",
    "Você é minha melhor escolha, meu maior acerto.",
    "Te amar é a melhor parte do meu dia.",
    "Seu sorriso é minha razão de viver.",
    "Você é meu porto seguro, meu lar.",
    "Nós dois juntos somos a minha parte favorita da vida."
];

// 6. PLAYLIST (adicione suas músicas)
const PLAYLIST = [
    { title: "Nossa Música", artist: "Artista 1" },
    { title: "Música Especial", artist: "Artista 2" },
    { title: "Romântica", artist: "Artista 3" }
];

// 7. DATAS ESPECIAIS (para o calendário)
const SPECIAL_DATES = [
    { day: 14, month: 2, description: "Dia dos Namorados 💕" },
    { day: 1, month: 1, description: "Ano Novo juntos 🎉" },
    { day: 22, month: 2, description: "O teu Aniversário 🌹" }
];

// ============================================
// FUNÇÕES DO SITE
// ============================================

// Loader
window.addEventListener('load', function() {
    setTimeout(() => {
        document.querySelector('.loader-wrapper').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader-wrapper').style.display = 'none';
        }, 500);
    }, 1500);
});

// Contador de tempo premium
function updateTimeCounter() {
    const now = new Date();
    const diff = now - START_DATE;
    
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('years').textContent = years.toString().padStart(2, '0');
    document.getElementById('months').textContent = months.toString().padStart(2, '0');
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    document.getElementById('totalDays').textContent = days;
}

setInterval(updateTimeCounter, 1000);
updateTimeCounter();

// Carta de amor
function openLetter() {
    const letterContent = document.getElementById('letterContent');
    letterContent.classList.remove('hidden');
    document.getElementById('loveLetterText').innerHTML = LOVE_LETTER.replace(/\n/g, '<br>');
}

// Player de música
let isPlaying = false;
let currentTrack = 0;

function togglePlay() {
    const playBtn = document.querySelector('.play-pause i');
    const audio = document.getElementById('bgMusic');
    
    if (isPlaying) {
        audio.pause();
        playBtn.className = 'fas fa-play';
    } else {
        audio.play();
        playBtn.className = 'fas fa-pause';
    }
    
    isPlaying = !isPlaying;
}

function playMusic(index) {
    currentTrack = index;
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function prevMusic() {
    currentTrack = (currentTrack - 1 + PLAYLIST.length) % PLAYLIST.length;
    playMusic(currentTrack);
}

function nextMusic() {
    currentTrack = (currentTrack + 1) % PLAYLIST.length;
    playMusic(currentTrack);
}

// Botão de música
document.getElementById('musicToggle').addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    const icon = this.querySelector('i');
    
    if (audio.paused) {
        audio.play();
        icon.className = 'fas fa-music';
        this.style.background = '#ff4d4d';
    } else {
        audio.pause();
        icon.className = 'fas fa-pause';
        this.style.background = '#764ba2';
    }
});

// Galeria/Lightbox
let currentImageIndex = 0;
const totalImages = 6;

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById('lightbox').classList.add('active');
    updateLightboxImage();
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    updateLightboxImage();
}

function updateLightboxImage() {
    const image = document.querySelector('.lightbox-image');
    image.innerHTML = '❤️'.repeat(currentImageIndex + 1);
}

// Quiz
let currentQuestion = 0;
let score = 0;
const questions = [
    {
        question: "Qual é a minha comida favorita?",
        options: ["Pizza", "Hambúrguer", "Lasanha", "Sushi"],
        correct: 0
    },
    {
        question: "Qual é a minha cor preferida?",
        options: ["Vermelho", "Azul", "Verde", "Rosa"],
        correct: 0
    },
    {
        question: "Onde foi nosso primeiro encontro?",
        options: ["Cinema", "Restaurante", "Praça", "Shopping"],
        correct: 1
    },
    {
        question: "Qual meu hobby favorito?",
        options: ["Ler", "Filmes", "Esportes", "Música"],
        correct: 1
    },
    {
        question: "O que eu mais gosto em você?",
        options: ["Sorriso", "Olhar", "Jeito", "Tudo"],
        correct: 3
    }
];

function loadQuestion() {
    const q = questions[currentQuestion];
    document.querySelector('.quiz-question-number').textContent = 
        `Pergunta ${currentQuestion + 1}/${questions.length}`;
    document.querySelector('.quiz-question h3').textContent = q.question;
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((btn, i) => {
        btn.textContent = q.options[i];
        btn.classList.remove('correct', 'incorrect');
        btn.disabled = false;
    });
    
    document.querySelector('.quiz-score').innerHTML = `❤️ ${score} pontos`;
}

document.querySelectorAll('.quiz-option').forEach((btn, index) => {
    btn.addEventListener('click', function() {
        const q = questions[currentQuestion];
        const isCorrect = index === q.correct;
        
        if (isCorrect) {
            this.classList.add('correct');
            score += 10;
        } else {
            this.classList.add('incorrect');
            document.querySelectorAll('.quiz-option')[q.correct].classList.add('correct');
        }
        
        document.querySelector('.quiz-score').innerHTML = `❤️ ${score} pontos`;
        
        document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
        
        setTimeout(() => {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion();
            } else {
                document.querySelector('.quiz-question h3').innerHTML = 
                    `Parabéns! Você fez ${score} pontos! 🎉`;
                document.querySelector('.quiz-options').style.display = 'none';
            }
        }, 2000);
    });
});

loadQuestion();

// Mural de recados
function addWallMessage() {
    const input = document.getElementById('wallInput');
    const message = input.value.trim();
    
    if (message) {
        const wallMessages = document.getElementById('wallMessages');
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const messageEl = document.createElement('div');
        messageEl.className = 'wall-message';
        messageEl.innerHTML = `
            <div class="message-author">❤️ ${YOUR_NAME}</div>
            <p>${message}</p>
            <span class="message-date">Hoje, ${timeStr}</span>
        `;
        
        wallMessages.insertBefore(messageEl, wallMessages.firstChild);
        input.value = '';
    }
}

// Wishlist
document.querySelectorAll('.wishlist-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const item = this.closest('.wishlist-item');
        if (this.checked) {
            item.classList.add('checked');
        } else {
            item.classList.remove('checked');
        }
        
        const total = document.querySelectorAll('.wishlist-item').length;
        const checked = document.querySelectorAll('.wishlist-item input:checked').length;
        const percentage = Math.round((checked / total) * 100);
        
        document.querySelector('.progress-text').textContent = `${percentage}% dos sonhos realizados`;
        document.querySelector('.progress-fill').style.width = `${percentage}%`;
    });
});

// Jogo da memória
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    
    this.classList.add('flipped');
    
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    
    secondCard = this;
    checkForMatch();
}

function checkForMatch() {
    const isMatch = firstCard.dataset.card === secondCard.dataset.card;
    
    if (isMatch) {
        disableCards();
        matchedPairs++;
        if (matchedPairs === 4) {
            setTimeout(() => {
                alert('Parabéns! Você completou o jogo! ❤️');
            }, 500);
        }
    } else {
        unflipCards();
    }
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');
        resetBoard();
    }, 1500);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function resetMemoryGame() {
    const cards = document.querySelectorAll('.memory-card');
    cards.forEach(card => {
        card.classList.remove('flipped');
        card.addEventListener('click', flipCard);
    });
    matchedPairs = 0;
    
    // Embaralhar
    cards.forEach(card => {
        const randomPos = Math.floor(Math.random() * 8);
        card.style.order = randomPos;
    });
}

document.querySelectorAll('.memory-card').forEach(card => {
    card.addEventListener('click', flipCard);
});

resetMemoryGame();

// Gerador de declarações
function generateDeclaration() {
    const randomIndex = Math.floor(Math.random() * DECLARATIONS.length);
    const declaration = DECLARATIONS[randomIndex];
    document.getElementById('declarationText').textContent = declaration;
    
    // Efeito especial
    const btn = document.querySelector('.declaration-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
}

// Presente
function openGift() {
    const giftContent = document.getElementById('giftContent');
    giftContent.classList.toggle('hidden');
    
    if (!giftContent.classList.contains('hidden')) {
        createConfetti();
    }
}

// Calendário
let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

function renderCalendar() {
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    document.getElementById('monthYear').textContent = 
        `${monthNames[currentMonth]} ${currentYear}`;
    
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    let daysHTML = '';
    
    // Dias vazios
    for (let i = 0; i < firstDay; i++) {
        daysHTML += '<div class="calendar-day"></div>';
    }
    
    // Dias do mês
    for (let i = 1; i <= lastDate; i++) {
        let classes = ['calendar-day'];
        
        // Verificar se é hoje
        if (i === currentDate.getDate() && 
            currentMonth === currentDate.getMonth() && 
            currentYear === currentDate.getFullYear()) {
            classes.push('today');
        }
        
        // Verificar se é data especial
        SPECIAL_DATES.forEach(date => {
            if (date.day === i && date.month === currentMonth + 1) {
                classes.push('special');
                daysHTML += `<div class="${classes.join(' ')}" title="${date.description}">${i}</div>`;
            }
        });
        
        daysHTML += `<div class="${classes.join(' ')}">${i}</div>`;
    }
    
    document.getElementById('calendarDays').innerHTML = daysHTML;
}

function prevMonth() {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
}

function nextMonth() {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
}

renderCalendar();

// Contador para o próximo encontro
function updateNextDate() {
    const nextDate = new Date('2026-02-14'); // Dia dos Namorados
    const now = new Date();
    const diff = nextDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    document.getElementById('nextDateDays').textContent = days;
}

setInterval(updateNextDate, 1000);
updateNextDate();

// Confetes
function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < 100; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 4 + 2,
            d: Math.random() * 100,
            color: `hsl(${Math.random() * 60 + 320}, 100%, 50%)`
        });
    }
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            p.y += Math.random() * 2 + 1;
            
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });
        
        requestAnimationFrame(draw);
    }
    
    draw();
    
    setTimeout(() => {
        canvas.width = 0;
        canvas.height = 0;
    }, 5000);
}

// Corações flutuantes
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts-container');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'absolute';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.bottom = '0';
        heart.style.fontSize = Math.random() * 30 + 20 + 'px';
        heart.style.opacity = Math.random() * 0.5 + 0.3;
        heart.style.animation = `floatHeart ${Math.random() * 3 + 5}s linear`;
        container.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 500);
}

createFloatingHearts();

// Scroll suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efeito de fade-in ao scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
});

document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.6s ease';
    observer.observe(section);
});

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Colocar nome nos lugares
    document.querySelectorAll('.footer-signature, .signature').forEach(el => {
        if (el.innerHTML.includes('[Seu nome]')) {
            el.innerHTML = el.innerHTML.replace('[Seu nome]', YOUR_NAME);
        }
    });
    
    // Gerar primeira declaração
    generateDeclaration();
});

// ============================================
// COMO HOSPEDAR NO NETLIFY
// ============================================

/*
1. Crie uma conta em netlify.com (gratuito)
2. Instale o Netlify CLI: npm install netlify-cli -g
3. No terminal, na pasta do projeto:
   netlify deploy
4. Siga as instruções
5. Para produção: netlify deploy --prod

OU VIA DRAG AND DROP:
1. Vá para netlify.com
2. Arraste sua pasta do projeto
3. Pronto! Seu site estará online em alguns segundos
*/

// ============================================
// DICAS DE PERSONALIZAÇÃO
// ============================================

/*
1. Para adicionar fotos reais:
   - Substitua as divs .gallery-image por <img src="caminho/da/foto.jpg">
   
2. Para adicionar música:
   - Coloque o arquivo MP3 na pasta e altere o src do audio
   
3. Para mudar cores:
   - Altere as variáveis no :root do CSS
   
4. Para adicionar mais fotos:
   - Adicione mais divs .gallery-item no HTML
   
5. Para adicionar mais perguntas no quiz:
   - Adicione mais objetos no array questions
*/

console.log('❤️ Site carregado com amor! ❤️');