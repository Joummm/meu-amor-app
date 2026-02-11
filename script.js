// ============================================
// CONFIGURAÇÕES - EDITAR COM SEUS DADOS
// ============================================

// 1. DATA DO INÍCIO DO NAMORO (Ano, Mês, Dia)
const START_DATE = new Date('2025-09-26');

// 2. SEU NOME
const YOUR_NAME = 'João Nunes';

// 3. NOME DA PESSOA AMADA
const LOVER_NAME = 'Beatriz Martins';

// 4. MENSAGEM DA CARTA DE AMOR
const LOVE_LETTER = `
Desde aquele 26 de setembro, minha vida ganhou um novo significado. Você chegou como um presente, e cada dia ao seu lado é uma página nova na mais bela história que eu poderia escrever.

Lembro como se fosse hoje do nosso primeiro encontro, do seu sorriso tímido, do brilho nos seus olhos. Naquele momento, eu soube que era você. Era você que eu esperava, era você que eu queria para compartilhar meus sonhos, minhas alegrias, minha vida.

O primeiro beijo foi mágico. O tempo parou, e naquele instante eu tive certeza de que não existia mais ninguém no mundo além de nós dois. Você é meu porto seguro, minha paz, minha inspiração.

Beatriz, você me faz querer ser uma pessoa melhor a cada dia. Seu amor me transforma, me completa, me faz feliz de uma forma que eu nunca imaginei ser possível. Você é minha melhor escolha, meu maior acerto, meu amor eterno.

Prometo estar ao seu lado em todos os momentos, celebrar suas conquistas, enxugar suas lágrimas, fazer você sorrir todos os dias. Prometo te respeitar, te admirar e te amar incondicionalmente.

Obrigado por existir, por ter entrado na minha vida, por me fazer tão feliz. Você é meu presente, meu futuro, meu tudo.

Te amo hoje, amanhã e para todo o sempre. ❤️`;

// 5. DECLARAÇÕES PARA O GERADOR
const DECLARATIONS = [
    "Você é a pessoa mais especial que eu já conheci! Seu sorriso ilumina meus dias e seu abraço é meu lugar favorito no mundo.",
    "Meu coração bate mais forte quando penso em ti. Não sei o que fiz para merecer alguém tão incrível ao meu lado.",
    "Cada dia ao teu lado é um presente. Você transforma momentos comuns em memórias extraordinárias.",
    "Você é meu sonho realizado, minha prova de que o amor verdadeiro existe e pode ser ainda mais lindo do que imaginei.",
    "O amor que sinto por ti não cabe no peito. Transborda em cada olhar, em cada gesto, em cada palavra.",
    "Você é minha melhor escolha, meu maior acerto, a melhor parte de todos os meus dias.",
    "Te amar é a melhor parte do meu dia. É o que me faz querer acordar todas as manhãs com um sorriso no rosto.",
    "Seu sorriso é minha razão de viver. Seus olhos são o caminho para o meu paraíso particular.",
    "Você é meu porto seguro, meu lar, meu lugar no mundo. Com você, tudo faz sentido.",
    "Nós dois juntos somos a minha parte favorita da vida. Você me completa de uma forma que nem sabia que precisava.",
    "Você é a resposta para todas as minhas perguntas, o sentido de todas as minhas buscas.",
    "Amar você é tão natural quanto respirar. É essencial, é vital, é o que me mantém vivo.",
    "Em você encontrei o que nem sabia que procurava. Você é meu começo, meu meio e meu eterno.",
    "Se eu pudesse voltar no tempo, te escolheria de novo. E de novo. E de novo. Sempre você."
];

// 6. PLAYLIST COMPLETA
const PLAYLIST = [
    { title: "Perfect", artist: "Ed Sheeran", duration: "4:23" },
    { title: "Ainda Gosto Dela", artist: "Skank", duration: "4:12" },
    { title: "Trem Bala", artist: "Ana Vilela", duration: "3:48" },
    { title: "Deixa Eu Te Amar", artist: "Dilsinho", duration: "3:52" },
    { title: "Love Story", artist: "Taylor Swift", duration: "3:55" }
];

// 7. DATAS ESPECIAIS
const SPECIAL_DATES = [
    { day: 26, month: 9, description: "🎉 Nosso primeiro encontro", year: 2025 },
    { day: 10, month: 10, description: "💋 Primeiro beijo", year: 2025 },
    { day: 1, month: 11, description: "💍 Início do namoro", year: 2025 },
    { day: 22, month: 2, description: "🎂 Aniversário da Beatriz", year: 2026 },
    { day: 14, month: 2, description: "💕 Dia dos Namorados", year: 2026 },
    { day: 15, month: 3, description: "🎂 Aniversário do João", year: 2026 }
];

// 8. PERGUNTAS DO QUIZ
const QUIZ_QUESTIONS = [
    {
        question: "Qual é a minha comida favorita?",
        options: ["Pizza", "Hambúrguer", "Lasanha", "Sushi"],
        correct: 2
    },
    {
        question: "Qual é a minha cor preferida?",
        options: ["Vermelho", "Azul", "Verde", "Rosa"],
        correct: 0
    },
    {
        question: "Onde foi nosso primeiro encontro?",
        options: ["Cinema", "Café Colonial", "Shopping", "Parque"],
        correct: 1
    },
    {
        question: "Qual meu hobby favorito?",
        options: ["Ler", "Ouvir música", "Esportes", "Filmes"],
        correct: 1
    },
    {
        question: "Qual é meu destino dos sonhos?",
        options: ["Paris", "Londres", "Nova York", "Roma"],
        correct: 0
    }
];

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================

// Player de música
let isPlaying = false;
let currentTrack = 0;
let audio = null;
let progressInterval = null;

// Galeria
let currentImageIndex = 0;
const totalImages = 6;
const galleryCaptions = [
    "Nosso primeiro encontro - Café Colonial, 26/09/2025",
    "Nossa primeira viagem - Serra Gaúcha, 10/10/2025",
    "Seu aniversário - 22/02/2026",
    "Natal juntos - 25/12/2025",
    "Ano Novo - 31/12/2025",
    "Dia dos Namorados - 14/02/2026"
];

// Quiz
let currentQuestion = 0;
let score = 0;
let quizAnswered = false;

// Jogo da memória
let memoryCards = [];
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;
let moves = 0;
let memoryTimer = null;
let seconds = 0;
let gameStarted = false;

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar áudio
    audio = document.getElementById('bgMusic');
    
    // Configurar loader
    setupLoader();
    
    // Inicializar contadores
    updateTimeCounter();
    setInterval(updateTimeCounter, 1000);
    
    // Inicializar quiz
    initQuiz();
    
    // Inicializar jogo da memória
    initMemoryGame();
    
    // Inicializar calendário
    renderCalendar();
    
    // Inicializar declaração
    generateDeclaration();
    
    // Configurar botão de música
    setupMusicToggle();
    
    // Configurar botão back to top
    setupBackToTop();
    
    // Configurar animações de scroll
    setupScrollAnimations();
    
    // Atualizar playlist UI
    updatePlaylistUI();
    
    // Configurar textarea counter
    setupTextareaCounter();
    
    // Atualizar contador de mensagens
    updateMessageCount();
    
    // Configurar smooth scroll
    setupSmoothScroll();
    
    // Substituir nomes
    replaceNames();
    
    console.log('❤️ Site carregado com amor! ❤️');
});

// ============================================
// LOADER
// ============================================

function setupLoader() {
    setTimeout(() => {
        const loader = document.querySelector('.loader-wrapper');
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            startFloatingHearts();
        }, 500);
    }, 2000);
}

// ============================================
// CONTADOR DE TEMPO
// ============================================

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

// ============================================
// CARTA DE AMOR
// ============================================

function openLetter() {
    const letterContent = document.getElementById('letterContent');
    letterContent.classList.remove('hidden');
    document.getElementById('loveLetterText').innerHTML = LOVE_LETTER.replace(/\n/g, '<br>');
    
    // Animação
    letterContent.style.animation = 'slideUp 0.5s ease';
    
    // Esconder envelope
    const envelope = document.querySelector('.envelope');
    envelope.style.opacity = '0.5';
    envelope.style.pointerEvents = 'none';
}

// ============================================
// PLAYER DE MÚSICA
// ============================================

function setupMusicToggle() {
    document.getElementById('musicToggle').addEventListener('click', function() {
        togglePlay();
    });
}

function togglePlay() {
    const playBtn = document.querySelector('.play-pause i');
    
    if (isPlaying) {
        audio.pause();
        playBtn.className = 'fas fa-play';
        document.querySelector('.music-toggle i').className = 'fas fa-pause';
        document.querySelector('.music-toggle').style.background = 'linear-gradient(135deg, #ff758c, #ff7eb3)';
        clearInterval(progressInterval);
    } else {
        audio.play();
        playBtn.className = 'fas fa-pause';
        document.querySelector('.music-toggle i').className = 'fas fa-music';
        document.querySelector('.music-toggle').style.background = 'linear-gradient(135deg, #ff4d4d, #ff7eb3)';
        startProgressUpdate();
    }
    
    isPlaying = !isPlaying;
}

function startProgressUpdate() {
    if (progressInterval) clearInterval(progressInterval);
    
    progressInterval = setInterval(() => {
        if (audio.duration) {
            const progress = (audio.currentTime / audio.duration) * 100;
            document.querySelector('.progress').style.width = `${progress}%`;
            document.getElementById('currentTime').textContent = formatTime(audio.currentTime);
            document.getElementById('duration').textContent = formatTime(audio.duration);
        }
    }, 100);
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function playMusic(index) {
    currentTrack = index;
    
    // Atualizar UI
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        if (i === index) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    // Atualizar info
    document.getElementById('currentMusicTitle').textContent = PLAYLIST[index].title;
    document.getElementById('currentMusicArtist').textContent = PLAYLIST[index].artist;
    document.getElementById('duration').textContent = PLAYLIST[index].duration || '3:30';
    
    // Se estiver tocando, continuar
    if (isPlaying) {
        audio.src = `musica-${index}.mp3`; // Substituir pelo caminho real
        audio.play();
    }
}

function prevMusic() {
    currentTrack = (currentTrack - 1 + PLAYLIST.length) % PLAYLIST.length;
    playMusic(currentTrack);
}

function nextMusic() {
    currentTrack = (currentTrack + 1) % PLAYLIST.length;
    playMusic(currentTrack);
}

function updatePlaylistUI() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach((item, index) => {
        if (index < PLAYLIST.length) {
            item.querySelector('.playlist-title').textContent = PLAYLIST[index].title;
            item.querySelector('.playlist-artist').textContent = PLAYLIST[index].artist;
            item.querySelector('.playlist-duration').textContent = PLAYLIST[index].duration || '3:30';
        }
    });
}

// ============================================
// GALERIA/LIGHTBOX
// ============================================

function openLightbox(index) {
    currentImageIndex = index;
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden';
    updateLightboxImage();
    
    // Atualizar thumbnails
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex = (currentImageIndex + direction + totalImages) % totalImages;
    updateLightboxImage();
    
    // Atualizar thumbnails
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (i === currentImageIndex) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function jumpToImage(index) {
    currentImageIndex = index;
    updateLightboxImage();
    
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (i === index) {
            thumb.classList.add('active');
        } else {
            thumb.classList.remove('active');
        }
    });
}

function updateLightboxImage() {
    const image = document.querySelector('.lightbox-image');
    const caption = document.getElementById('lightboxCaption');
    
    const icons = ['❤️', '🌹', '🎂', '🎄', '🎊', '💕'];
    image.innerHTML = icons[currentImageIndex].repeat(8);
    caption.textContent = galleryCaptions[currentImageIndex];
}

// ============================================
// QUIZ
// ============================================

function initQuiz() {
    currentQuestion = 0;
    score = 0;
    quizAnswered = false;
    loadQuestion();
    
    // Atualizar score display
    document.querySelector('.quiz-score').innerHTML = `❤️ ${score} pontos`;
}

function loadQuestion() {
    const q = QUIZ_QUESTIONS[currentQuestion];
    
    document.querySelector('.quiz-question-number').textContent = 
        `Pergunta ${currentQuestion + 1}/${QUIZ_QUESTIONS.length}`;
    document.getElementById('quizQuestion').textContent = q.question;
    
    // Atualizar barra de progresso
    const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
    document.getElementById('quizProgress').style.width = `${progress}%`;
    
    // Criar opções
    const optionsContainer = document.getElementById('quizOptions');
    optionsContainer.innerHTML = '';
    
    q.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-option';
        btn.textContent = option;
        btn.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(btn);
    });
    
    // Limpar feedback
    document.getElementById('quizFeedback').innerHTML = '';
    quizAnswered = false;
}

function checkAnswer(selectedIndex) {
    if (quizAnswered) return;
    
    const q = QUIZ_QUESTIONS[currentQuestion];
    const isCorrect = selectedIndex === q.correct;
    
    const options = document.querySelectorAll('.quiz-option');
    
    if (isCorrect) {
        options[selectedIndex].classList.add('correct');
        score += 10;
        document.getElementById('quizFeedback').innerHTML = '<span class="feedback-correct">✓ Correto! +10 pontos</span>';
        createMiniConfetti();
    } else {
        options[selectedIndex].classList.add('incorrect');
        options[q.correct].classList.add('correct');
        document.getElementById('quizFeedback').innerHTML = '<span class="feedback-incorrect">✗ Não foi dessa vez. A resposta correta está destacada.</span>';
    }
    
    document.querySelector('.quiz-score').innerHTML = `❤️ ${score} pontos`;
    
    options.forEach(btn => btn.disabled = true);
    quizAnswered = true;
    
    setTimeout(() => {
        if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            // Fim do quiz
            document.getElementById('quizQuestion').innerHTML = 
                `🎉 Parabéns! Você fez ${score} pontos de ${QUIZ_QUESTIONS.length * 10}!`;
            document.getElementById('quizOptions').style.display = 'none';
            document.getElementById('quizFeedback').innerHTML = 
                '<span class="feedback-congrats">Obrigado por me conhecer tão bem! ❤️</span>';
        }
    }, 2000);
}

// ============================================
// MURAL DE RECADOS
// ============================================

function addWallMessage() {
    const input = document.getElementById('wallInput');
    const message = input.value.trim();
    
    if (message) {
        const wallMessages = document.getElementById('wallMessages');
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const messageEl = document.createElement('div');
        messageEl.className = 'wall-message';
        messageEl.style.animation = 'slideIn 0.5s';
        messageEl.innerHTML = `
            <div class="message-author">
                <div class="author-avatar">❤️</div>
                <span>${YOUR_NAME}</span>
            </div>
            <p>${escapeHtml(message)}</p>
            <div class="message-footer">
                <span class="message-date"><i class="far fa-clock"></i> Hoje, ${timeStr}</span>
                <span class="message-love"><i class="fas fa-heart"></i> 0</span>
            </div>
        `;
        
        wallMessages.insertBefore(messageEl, wallMessages.firstChild);
        input.value = '';
        document.getElementById('charCounter').textContent = '0/200';
        
        // Atualizar contador
        updateMessageCount();
        
        // Adicionar evento de like
        messageEl.querySelector('.message-love').addEventListener('click', function(e) {
            const count = parseInt(this.textContent.match(/\d+/)[0]) + 1;
            this.innerHTML = `<i class="fas fa-heart"></i> ${count}`;
            this.style.color = '#ff4d4d';
        });
    }
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateMessageCount() {
    const count = document.querySelectorAll('.wall-message').length;
    const messageText = count === 1 ? 'mensagem' : 'mensagens';
    document.getElementById('messageCount').innerHTML = 
        `<i class="fas fa-heart"></i> ${count} ${messageText}`;
}

function setupTextareaCounter() {
    const textarea = document.getElementById('wallInput');
    textarea.addEventListener('input', function() {
        const count = this.value.length;
        document.getElementById('charCounter').textContent = `${count}/200`;
        
        if (count > 200) {
            this.value = this.value.substring(0, 200);
            document.getElementById('charCounter').textContent = '200/200';
        }
    });
}

// ============================================
// WISHLIST
// ============================================

document.querySelectorAll('.wishlist-item input').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const item = this.closest('.wishlist-item');
        if (this.checked) {
            item.classList.add('checked');
        } else {
            item.classList.remove('checked');
        }
        
        updateWishlistProgress();
    });
});

function updateWishlistProgress() {
    const total = document.querySelectorAll('.wishlist-item').length;
    const checked = document.querySelectorAll('.wishlist-item input:checked').length;
    const percentage = Math.round((checked / total) * 100);
    
    document.querySelector('.progress-percentage').textContent = `${percentage}%`;
    document.getElementById('wishProgressFill').style.width = `${percentage}%`;
    
    // Mensagem motivacional
    const message = document.getElementById('wishMessage');
    if (percentage === 0) {
        message.textContent = 'Vamos realizar nossos sonhos juntos! ❤️';
    } else if (percentage < 30) {
        message.textContent = 'Estamos no começo, mas vamos longe! ✨';
    } else if (percentage < 60) {
        message.textContent = 'Metade do caminho! Continue sonhando! 🌟';
    } else if (percentage < 100) {
        message.textContent = 'Quase lá! Mais alguns sonhos para realizar! 💫';
    } else {
        message.textContent = 'PARABÉNS! Todos os sonhos realizados! 🎉❤️';
        createConfetti();
    }
}

// ============================================
// JOGO DA MEMÓRIA
// ============================================

function initMemoryGame() {
    const gameContainer = document.getElementById('memoryGame');
    const cards = [
        '❤️', '❤️', '🌹', '🌹', '🎵', '🎵', '💋', '💋', '💍', '💍', '✨', '✨'
    ];
    
    // Embaralhar
    cards.sort(() => Math.random() - 0.5);
    
    let html = '';
    cards.forEach((card, index) => {
        html += `
            <div class="memory-card" data-card="${card}" data-index="${index}">
                <div class="memory-card-front">${card}</div>
                <div class="memory-card-back">❓</div>
            </div>
        `;
    });
    
    gameContainer.innerHTML = html;
    
    // Adicionar event listeners
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', flipCard);
    });
    
    resetMemoryStats();
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains('flipped')) return;
    if (!gameStarted) {
        startMemoryTimer();
        gameStarted = true;
    }
    
    this.classList.add('flipped');
    updateMoves();
    
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
        document.getElementById('pairCount').innerHTML = 
            `<i class="fas fa-heart"></i> Pares: ${matchedPairs}/6`;
        
        if (matchedPairs === 6) {
            endMemoryGame();
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
    }, 1000);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function updateMoves() {
    moves++;
    document.getElementById('moveCount').innerHTML = 
        `<i class="fas fa-arrows-alt"></i> Movimentos: ${moves}`;
}

function resetMemoryStats() {
    moves = 0;
    matchedPairs = 0;
    seconds = 0;
    gameStarted = false;
    
    document.getElementById('moveCount').innerHTML = 
        `<i class="fas fa-arrows-alt"></i> Movimentos: 0`;
    document.getElementById('pairCount').innerHTML = 
        `<i class="fas fa-heart"></i> Pares: 0/6`;
    document.getElementById('timerDisplay').textContent = '00:00';
    
    if (memoryTimer) {
        clearInterval(memoryTimer);
        memoryTimer = null;
    }
}

function startMemoryTimer() {
    memoryTimer = setInterval(() => {
        seconds++;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        document.getElementById('timerDisplay').textContent = 
            `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

function endMemoryGame() {
    clearInterval(memoryTimer);
    setTimeout(() => {
        alert(`🎉 Parabéns! Você completou o jogo em ${moves} movimentos e ${seconds} segundos! ❤️`);
        createConfetti();
    }, 500);
}

function resetMemoryGame() {
    document.querySelectorAll('.memory-card').forEach(card => {
        card.classList.remove('flipped');
    });
    initMemoryGame();
}

function shuffleMemoryCards() {
    const gameContainer = document.getElementById('memoryGame');
    const cards = Array.from(document.querySelectorAll('.memory-card'));
    
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * cards.length);
    });
}

// ============================================
// CALENDÁRIO
// ============================================

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
        daysHTML += '<div class="calendar-day empty"></div>';
    }
    
    // Dias do mês
    for (let i = 1; i <= lastDate; i++) {
        let classes = ['calendar-day'];
        let isSpecial = false;
        let specialDesc = '';
        
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
                isSpecial = true;
                specialDesc = date.description;
            }
        });
        
        daysHTML += `<div class="${classes.join(' ')}" ${isSpecial ? `title="${specialDesc}"` : ''}>
            ${i}
            ${isSpecial ? '<span class="special-marker">❤️</span>' : ''}
        </div>`;
    }
    
    document.getElementById('calendarDays').innerHTML = daysHTML;
    
    // Atualizar próximos eventos
    updateUpcomingEvents();
}

function updateUpcomingEvents() {
    const now = new Date();
    const eventsContainer = document.getElementById('upcomingEvents');
    
    // Filtrar datas futuras
    const upcoming = SPECIAL_DATES.filter(date => {
        const eventDate = new Date(date.year, date.month - 1, date.day);
        return eventDate >= now;
    }).sort((a, b) => {
        return new Date(a.year, a.month - 1, a.day) - new Date(b.year, b.month - 1, b.day);
    }).slice(0, 3);
    
    let html = '';
    upcoming.forEach(event => {
        const eventDate = new Date(event.year, event.month - 1, event.day);
        const diffDays = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24));
        
        html += `
            <div class="event-item">
                <div class="event-date">
                    <span class="event-day">${event.day}</span>
                    <span class="event-month">${getMonthAbbr(event.month)}</span>
                </div>
                <div class="event-info">
                    <span class="event-title">${event.description}</span>
                    <span class="event-days">${diffDays} dias</span>
                </div>
            </div>
        `;
    });
    
    eventsContainer.innerHTML = html || '<p class="no-events">Nenhum evento próximo</p>';
}

function getMonthAbbr(month) {
    const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return months[month - 1];
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

// ============================================
// GERADOR DE DECLARAÇÕES
// ============================================

function generateDeclaration() {
    const randomIndex = Math.floor(Math.random() * DECLARATIONS.length);
    const declaration = DECLARATIONS[randomIndex];
    const declarationEl = document.getElementById('declarationText');
    
    // Animação
    declarationEl.style.opacity = '0';
    declarationEl.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        declarationEl.textContent = declaration;
        declarationEl.style.opacity = '1';
        declarationEl.style.transform = 'translateY(0)';
    }, 200);
    
    // Efeito no botão
    const btn = document.querySelector('.declaration-btn');
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = 'scale(1)';
    }, 200);
}

// ============================================
// PRESENTE
// ============================================

function openGift() {
    const giftContent = document.getElementById('giftContent');
    giftContent.classList.toggle('hidden');
    
    if (!giftContent.classList.contains('hidden')) {
        giftContent.style.animation = 'slideUp 0.5s';
        createConfetti();
    }
}

// ============================================
// CONTADOR PRÓXIMO ENCONTRO
// ============================================

function updateNextDate() {
    const nextDate = new Date('2026-02-14');
    const now = new Date();
    const diff = nextDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    document.getElementById('nextDateDays').textContent = days.toString().padStart(2, '0');
    
    // Mensagem especial
    if (days === 0) {
        document.getElementById('nextDateDays').style.color = '#ffd700';
        document.getElementById('nextDatePlan').innerHTML = 'HOJE É O GRANDE DIA! 🎉❤️';
    }
}

setInterval(updateNextDate, 60000); // Atualizar a cada minuto
updateNextDate();

// ============================================
// CONFETES
// ============================================

function createConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < 150; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            d: Math.random() * 100,
            color: `hsl(${Math.random() * 60 + 320}, 100%, 65%)`,
            rotation: Math.random() * 360,
            speed: Math.random() * 3 + 2
        });
    }
    
    let animationFrame;
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            p.y += p.speed;
            p.rotation += 1;
            
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });
        
        animationFrame = requestAnimationFrame(draw);
    }
    
    draw();
    
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 5000);
}

function createMiniConfetti() {
    const canvas = document.getElementById('confettiCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 4 + 1,
            color: `hsl(${Math.random() * 60 + 320}, 100%, 65%)`,
            speed: Math.random() * 2 + 1
        });
    }
    
    let animationFrame;
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            p.y += p.speed;
            
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });
        
        animationFrame = requestAnimationFrame(draw);
    }
    
    draw();
    
    setTimeout(() => {
        cancelAnimationFrame(animationFrame);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 2000);
}

// ============================================
// CORAÇÕES FLUTUANTES
// ============================================

function startFloatingHearts() {
    const container = document.querySelector('.floating-hearts-container');
    
    setInterval(() => {
        if (container.children.length < 30) {
            const heart = document.createElement('div');
            heart.innerHTML = ['❤️', '💕', '💗', '💓', '💖', '💘'][Math.floor(Math.random() * 6)];
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.opacity = Math.random() * 0.5 + 0.3;
            heart.style.animation = `floatHeart ${Math.random() * 3 + 5}s linear`;
            heart.style.pointerEvents = 'none';
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 8000);
        }
    }, 400);
}

// ============================================
// BOTÃO BACK TO TOP
// ============================================

function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// ANIMAÇÕES DE SCROLL
// ============================================

function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('section, .gallery-item, .timeline-item, .counter-block').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
}

// ============================================
// SMOOTH SCROLL
// ============================================

function setupSmoothScroll() {
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
}

// ============================================
// SUBSTITUIR NOMES
// ============================================

function replaceNames() {
    document.querySelectorAll('.footer-signature strong, .gift-signature').forEach(el => {
        if (el) el.textContent = YOUR_NAME;
    });
    
    document.querySelectorAll('.hero-subtitle').forEach(el => {
        if (el) el.textContent = `${LOVER_NAME} & ${YOUR_NAME}`;
    });
}

// ============================================
// EVENT LISTENERS ADICIONAIS
// ============================================

window.addEventListener('resize', () => {
    // Recalcular canvas se necessário
});

window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.getElementById('lightbox').classList.contains('active')) {
        closeLightbox();
    }
});

// ============================================
// CSS ANIMATIONS ADICIONAIS
// ============================================

const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }
    
    @keyframes floatHeart {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
    
    .back-to-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, #ff758c, #ff7eb3);
        border: none;
        border-radius: 50%;
        color: white;
        font-size: 20px;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s;
        z-index: 9999;
        box-shadow: 0 5px 20px rgba(255, 77, 77, 0.3);
    }
    
    .back-to-top.visible {
        opacity: 1;
        visibility: visible;
    }
    
    .back-to-top:hover {
        transform: scale(1.1);
    }
    
    .quiz-option:disabled {
        opacity: 0.7;
        cursor: not-allowed;
    }
    
    .feedback-correct {
        color: #4CAF50;
        font-weight: bold;
    }
    
    .feedback-incorrect {
        color: #f44336;
        font-weight: bold;
    }
    
    .feedback-congrats {
        color: #ff4d4d;
        font-size: 18px;
        font-weight: bold;
    }
`;

document.head.appendChild(style);