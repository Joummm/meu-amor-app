// ============================================
// SCRIPT PRINCIPAL - CORRIGIDO
// ============================================

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================
let START_DATE, NEXT_DATE, NEXT_DATE_DESC, NEXT_DATE_LOC;
let YOUR_NAME, LOVER_NAME, NICKNAMES;
let LOVE_LETTER, DECLARATIONS, PLAYLIST, SPECIAL_DATES, QUIZ_QUESTIONS, MEMORIES, POEMS, galleryCaptions, WISHLIST, GALLERY_IMAGES;
let totalImages = 6;

// Variáveis de estado
let isPlaying = false;
let currentTrack = 0;
let audio = null;
let progressInterval = null;
let musicInitialized = false;
let fakeCurrentTime = 0;
let fakeDuration = 210;

let currentImageIndex = 0;
let currentQuestion = 0;
let score = 0;
let quizAnswered = false;
let quizCompleted = false;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;
let matchedPairs = 0;
let moves = 0;
let memoryTimer = null;
let seconds = 0;
let gameStarted = false;

let visitCount = 1;
let lastVisit = new Date();
let messagesCount = 1;
let wishesCompleted = 0;
let totalQuizScore = 0;

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Debug - verificar se config.js carregou
console.log('🔍 Verificando CONFIG...');
console.log('Window CONFIG:', window.CONFIG);
console.log('Tipo de CONFIG:', typeof window.CONFIG);

// ============================================
// INICIALIZAÇÃO PRINCIPAL
// ============================================
function initApp() {
    console.log('❤️ Iniciando site de amor...');
    
    // Verificar se CONFIG está disponível globalmente
    if (typeof window.CONFIG !== 'undefined' && window.CONFIG !== null) {
        CONFIG = window.CONFIG;
        console.log('✅ Configurações carregadas com sucesso!');
        console.log('👤 Casal:', CONFIG.couple?.yourName, 'e', CONFIG.couple?.loverName);
    } else {
        console.error('❌ CONFIG não encontrado! Verifique:');
        console.error('1. O arquivo config.js existe na mesma pasta');
        console.error('2. Não há erros de sintaxe no config.js');
        console.error('3. A ordem dos scripts no HTML está correta (config.js antes de script.js)');
        console.warn('⚠️ Usando configurações de fallback...');
        CONFIG = getFallbackConfig();
    }
    
    initializeVariables();
    loadStats();
    
    if (CONFIG.settings?.enableMusic !== false) {
        initAudio();
    }
    
    setupLoader();
    updateTimeCounter();
    setInterval(updateTimeCounter, 1000);
    
    if (QUIZ_QUESTIONS && QUIZ_QUESTIONS.length > 0) {
        initQuiz();
    }
    
    initMemoryGame();
    renderCalendar();
    generateDeclaration();
    setupMusicToggle();
    setupBackToTop();
    setupScrollAnimations();
    updatePlaylistUI();
    setupTextareaCounter();
    updateMessageCount();
    replaceNames();
    
    if (MEMORIES && MEMORIES.length > 0) {
        initMemoriesCarousel();
    }
    
    if (POEMS && POEMS.length > 0) {
        initPoemOfTheDay();
    }
    
    if (CONFIG.settings?.enableNotifications !== false) {
        initNotifications();
    }
    
    initWishlist();
    updateStats();
    updateFooterYear();
    loadWallMessages();
    updateNextDate();
    setInterval(updateNextDate, 60000);
    
    if (CONFIG.settings?.enableFloatingHearts !== false) {
        startFloatingHearts();
    }
    
    // Carregar galeria após verificar imagens
    setTimeout(() => {
        loadGallery();
    }, 100);
    
    console.log('❤️ Site carregado com amor! ❤️');
}

// ============================================
// INICIALIZAR VARIÁVEIS
// ============================================
function initializeVariables() {
    if (!CONFIG) {
        CONFIG = getFallbackConfig();
    }
    
    START_DATE = CONFIG.couple?.startDate || new Date('2025-09-26');
    NEXT_DATE = CONFIG.couple?.nextDate || new Date('2026-02-14');
    NEXT_DATE_DESC = CONFIG.couple?.nextDateDescription || 'Dia dos Namorados ❤️';

    YOUR_NAME = CONFIG.couple?.yourName || 'João';
    LOVER_NAME = CONFIG.couple?.loverName || 'Beatriz';
    NICKNAMES = CONFIG.couple?.nicknames || ['Meu Amor', 'Princesa', 'Vida', 'Coração'];

    LOVE_LETTER = CONFIG.loveLetter || '';
    DECLARATIONS = CONFIG.declarations || [];
    PLAYLIST = CONFIG.playlist || [];
    SPECIAL_DATES = CONFIG.specialDates || [];
    QUIZ_QUESTIONS = CONFIG.quizQuestions || [];
    MEMORIES = CONFIG.memories || [];
    POEMS = CONFIG.poems || [];
    galleryCaptions = CONFIG.galleryCaptions || [];
    WISHLIST = CONFIG.wishlist || [];
    GALLERY_IMAGES = CONFIG.galleryImages || [];
    totalImages = GALLERY_IMAGES.length || 6;
}

// ============================================
// FALLBACK CONFIG
// ============================================
function getFallbackConfig() {
    return {
        couple: {
            yourName: 'João',
            loverName: 'Beatriz',
            nicknames: ['Meu Amor', 'Princesa', 'Vida', 'Coração'],
            startDate: new Date('2025-09-26'),
            nextDate: new Date('2026-02-14'),
            nextDateDescription: 'Dia dos Namorados ❤️',
        },
        playlist: [],
        loveLetter: 'Minha amada Beatriz, escrevo esta carta para declarar todo meu amor por você...',
        declarations: [
            "Você é a pessoa mais especial que eu já conheci!",
            "Meu coração bate mais forte quando penso em ti."
        ],
        specialDates: [
            { day: 26, month: 9, year: 2025, description: "🎉 Nosso primeiro encontro" },
            { day: 14, month: 2, year: 2026, description: "💕 Dia dos Namorados" }
        ],
        quizQuestions: [
            {
                question: "Qual é a minha comida favorita?",
                options: ["Pizza", "Hambúrguer", "Lasanha", "Sushi"],
                correct: 2,
                funFact: "Lasanha é a melhor!"
            }
        ],
        memories: [
            { icon: "☕", title: "Primeiro Café", description: "Um dia inesquecível", date: "26/09/2025" }
        ],
        poems: [
            {
                title: "Meu Amor",
                verses: ["Você é a razão do meu sorriso", "Meu porto seguro", "Meu eterno amor"]
            }
        ],
        galleryCaptions: [
            "Nosso primeiro encontro - 26/09/2025",
            "Nossa primeira viagem - 10/10/2025",
            "Seu aniversário - 22/02/2026",
            "Natal juntos - 25/12/2025",
            "Ano Novo - 31/12/2025",
            "Dia dos Namorados - 14/02/2026"
        ],
        galleryImages: [
            'imagens/beapequena.jpg',
            'imagens/viagem.jpg',
            'imagens/aniversario.jpg',
            'imagens/natal.jpg',
            'imagens/ano-novo.jpg',
            'imagens/namorados.jpg'
        ],
        wishlist: [
            { icon: "✈️", text: "Viajar para Paris" },
            { icon: "🏠", text: "Comprar nossa casa" }
        ],
        settings: {
            enableMusic: true,
            enableConfetti: true,
            enableFloatingHearts: true,
            enableNotifications: true,
            loaderMessage: 'Carregando nossa história de amor...',
            loaderSubmessage: 'Para você, meu amor'
        }
    };
}

// ============================================
// LOADER
// ============================================
function setupLoader() {
    const loader = document.querySelector('.loader-wrapper');
    const loaderText = document.querySelector('.loader-text');
    const loaderSubtext = document.querySelector('.loader-subtext');
    
    if (!loader) return;
    
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.style.display = 'none';
                    if (LOVER_NAME) {
                        showNotification('❤️ Bem-vinda, ' + LOVER_NAME + '!', 'heart');
                    }
                }, 800);
            }, 600);
        }
        
        if (loaderText) {
            loaderText.textContent = `${CONFIG?.settings?.loaderMessage || 'Carregando a nossa história...'} ${Math.floor(progress)}%`;
        }
        if (loaderSubtext && progress > 70) {
            loaderSubtext.textContent = 'Quase lá, amor! 💕';
        }
    }, 100);
}

// ============================================
// ÁUDIO
// ============================================
function initAudio() {
    audio = document.getElementById('bgMusic');
    
    if (!audio) {
        audio = new Audio();
        audio.id = 'bgMusic';
        audio.loop = false;
        document.body.appendChild(audio);
    }
    
    if (audio) {
        audio.addEventListener('ended', function() {
            nextMusic();
        });
        
        audio.addEventListener('timeupdate', function() {
            if (audio.duration) {
                const progress = (audio.currentTime / audio.duration) * 100;
                const progressBar = document.querySelector('.progress');
                const currentTimeEl = document.getElementById('currentTime');
                
                if (progressBar) progressBar.style.width = `${progress}%`;
                if (currentTimeEl) currentTimeEl.textContent = formatTime(audio.currentTime);
            }
        });
    }
    
    if (PLAYLIST && PLAYLIST.length > 0) {
        updateMusicInfo(currentTrack);
    }
}

function updateMusicInfo(index) {
    if (!PLAYLIST || PLAYLIST.length === 0) return;
    
    const track = PLAYLIST[index] || PLAYLIST[0];
    const titleEl = document.getElementById('currentMusicTitle');
    const artistEl = document.getElementById('currentMusicArtist');
    const durationEl = document.getElementById('duration');
    const albumArt = document.querySelector('.album-art i');
    
    if (titleEl) titleEl.textContent = track.title || 'Perfect';
    if (artistEl) artistEl.textContent = track.artist || 'Ed Sheeran';
    if (durationEl) durationEl.textContent = track.duration || '4:23';
    
    if (albumArt) {
        albumArt.className = `fas ${track.cover || 'fa-heart'}`;
    }
}

function playMusic(index) {
    if (!PLAYLIST || PLAYLIST.length === 0) {
        togglePlayDemo();
        return;
    }
    
    if (audio && isPlaying) {
        audio.pause();
    }
    
    currentTrack = index % PLAYLIST.length;
    
    document.querySelectorAll('.playlist-item').forEach((item, i) => {
        if (item) {
            if (i === currentTrack) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        }
    });
    
    if (audio && PLAYLIST[currentTrack].audioUrl) {
        audio.src = PLAYLIST[currentTrack].audioUrl;
        audio.load();
        
        if (isPlaying) {
            audio.play().catch(e => {
                console.log('Autoplay bloqueado:', e);
                isPlaying = false;
                updatePlayPauseIcons(false);
            });
        }
    }
    
    updateMusicInfo(currentTrack);
    
    const progressBar = document.querySelector('.progress');
    const currentTimeEl = document.getElementById('currentTime');
    if (progressBar) progressBar.style.width = '0%';
    if (currentTimeEl) currentTimeEl.textContent = '0:00';
    
    if (isPlaying) {
        showNotification(`🎵 Tocando: ${PLAYLIST[currentTrack].title}`, 'music');
    }
}

function togglePlay() {
    if (!PLAYLIST || PLAYLIST.length === 0) {
        togglePlayDemo();
        return;
    }
    
    if (!audio) {
        initAudio();
    }
    
    if (!audio.src && PLAYLIST[currentTrack]?.audioUrl) {
        audio.src = PLAYLIST[currentTrack].audioUrl;
        audio.load();
    }
    
    if (isPlaying) {
        audio.pause();
        showNotification('⏸️ Música pausada', 'info');
    } else {
        audio.play().catch(e => {
            console.log('Erro ao reproduzir:', e);
            showNotification('❌ Não foi possível reproduzir a música', 'error');
        });
        if (PLAYLIST[currentTrack]) {
            showNotification(`🎵 Tocando: ${PLAYLIST[currentTrack].title}`, 'music');
        }
    }
    
    isPlaying = !isPlaying;
    updatePlayPauseIcons(isPlaying);
}

function updatePlayPauseIcons(playing) {
    const playBtn = document.querySelector('.play-pause i');
    const musicBtn = document.querySelector('#musicToggle i');
    
    if (playBtn) {
        playBtn.className = playing ? 'fas fa-pause' : 'fas fa-play';
    }
    if (musicBtn) {
        musicBtn.className = playing ? 'fas fa-pause' : 'fas fa-music';
    }
}

function togglePlayDemo() {
    isPlaying = !isPlaying;
    updatePlayPauseIcons(isPlaying);
    
    if (isPlaying) {
        startProgressUpdate();
        showNotification('🎵 Tocando: modo demonstração', 'music');
    } else {
        stopProgressUpdate();
        showNotification('⏸️ Música pausada', 'info');
    }
}

function startProgressUpdate() {
    stopProgressUpdate();
    
    fakeCurrentTime = 0;
    
    progressInterval = setInterval(() => {
        if (isPlaying) {
            fakeCurrentTime++;
            if (fakeCurrentTime > fakeDuration) {
                fakeCurrentTime = 0;
                nextMusic();
            }
            
            const progress = (fakeCurrentTime / fakeDuration) * 100;
            const progressBar = document.querySelector('.progress');
            const currentTimeEl = document.getElementById('currentTime');
            
            if (progressBar) progressBar.style.width = `${progress}%`;
            if (currentTimeEl) currentTimeEl.textContent = formatTime(fakeCurrentTime);
        }
    }, 1000);
}

function stopProgressUpdate() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
}

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function prevMusic() {
    if (!PLAYLIST || PLAYLIST.length === 0) return;
    currentTrack = (currentTrack - 1 + PLAYLIST.length) % PLAYLIST.length;
    playMusic(currentTrack);
}

function nextMusic() {
    if (!PLAYLIST || PLAYLIST.length === 0) return;
    currentTrack = (currentTrack + 1) % PLAYLIST.length;
    playMusic(currentTrack);
}

function setupMusicToggle() {
    const musicBtn = document.getElementById('musicToggle');
    if (musicBtn) {
        musicBtn.addEventListener('click', function() {
            if (!musicInitialized) {
                initAudio();
                musicInitialized = true;
            }
            togglePlay();
        });
    }
}

function updatePlaylistUI() {
    const playlistContainer = document.querySelector('.playlist');
    if (!playlistContainer || !PLAYLIST || PLAYLIST.length === 0) return;
    
    let html = '<h4>Playlist Romântica</h4>';
    
    PLAYLIST.forEach((track, index) => {
        html += `
            <div class="playlist-item ${index === currentTrack ? 'active' : ''}" onclick="playMusic(${index})">
                <i class="fas ${track.cover || 'fa-music'}"></i>
                <div class="playlist-info">
                    <span class="playlist-title">${track.title}</span>
                    <span class="playlist-artist">${track.artist}</span>
                </div>
                <span class="playlist-duration">${track.duration}</span>
            </div>
        `;
    });
    
    playlistContainer.innerHTML = html;
}

// ============================================
// CONTADOR DE TEMPO
// ============================================
function updateTimeCounter() {
    const now = new Date();
    const diff = now - START_DATE;
    
    const seconds = Math.floor((diff / 1000) % 60);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(diff / (1000 * 60 * 60 * 24) );
    
    let months = 0;
    let tempDate = new Date(START_DATE);
    while (tempDate <= now) {
        tempDate.setMonth(tempDate.getMonth() + 1);
        if (tempDate <= now) months++;
    }
    
    const years = Math.floor(months / 12);
    months = months % 12;
    
    const yearsEl = document.getElementById('years');
    const monthsEl = document.getElementById('months');
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    const totalDaysEl = document.getElementById('totalDays');
    
    if (yearsEl) yearsEl.textContent = years.toString().padStart(2, '0');
    if (monthsEl) monthsEl.textContent = months.toString().padStart(2, '0');
    if (daysEl) daysEl.textContent = days.toString().padStart(2, '0');
    if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, '0');
    if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, '0');
    if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, '0');
    if (totalDaysEl) totalDaysEl.textContent = days;
}

// ============================================
// CARTA DE AMOR
// ============================================
function openLetter() {
    const letterContent = document.getElementById('letterContent');
    const envelope = document.querySelector('.envelope');
    const loveLetterText = document.getElementById('loveLetterText');
    
    if (!letterContent || !envelope) return;
    
    letterContent.classList.remove('hidden');
    if (loveLetterText && LOVE_LETTER) {
        loveLetterText.innerHTML = LOVE_LETTER.replace(/\n/g, '<br>');
    }
    
    letterContent.style.animation = 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    envelope.style.opacity = '0.3';
    envelope.style.transform = 'scale(0.95)';
    envelope.style.pointerEvents = 'none';
    
    if (CONFIG?.settings?.enableConfetti !== false) {
        createConfetti('letter');
    }
}

// ============================================
// CARREGAR GALERIA DE FOTOS
// ============================================
function loadGallery() {
    const galleryGrid = document.getElementById('galleryGrid');
    if (!galleryGrid) {
        console.error('Elemento galleryGrid não encontrado');
        return;
    }
    
    if (!GALLERY_IMAGES || GALLERY_IMAGES.length === 0) {
        console.warn('Nenhuma imagem configurada');
        galleryGrid.innerHTML = '<p class="no-images">Nenhuma imagem encontrada. Adicione imagens no config.js</p>';
        return;
    }
    
    let html = '';
    
    GALLERY_IMAGES.forEach((imagePath, index) => {
        const caption = (galleryCaptions && galleryCaptions[index]) ? galleryCaptions[index] : 'Momento especial ❤️';
        
        const dateMatch = caption.match(/(\d{2}\/\d{2}\/\d{4})/);
        const date = dateMatch ? dateMatch[0] : 'Data especial';
        // <span class="gallery-date">${date}</span>
        html += `
            <div class="gallery-item" onclick="openLightbox(${index})">
                <div class="gallery-image" style="background-image: url('${imagePath}'); background-size: cover; background-position: center;">
                    <div class="gallery-overlay">
                        <i class="fas fa-search-plus"></i>
                    </div>
                    
                </div>
                <p class="gallery-caption">${caption}</p>
            </div>
        `;
    });
    
    galleryGrid.innerHTML = html;
    
    GALLERY_IMAGES.forEach((imagePath, index) => {
        const img = new Image();
        img.onload = () => console.log(`✅ Imagem ${index + 1} carregada: ${imagePath}`);
        img.onerror = () => console.error(`❌ Erro ao carregar imagem ${index + 1}: ${imagePath} - Verifique se o arquivo existe na pasta imagens/`);
        img.src = imagePath;
    });
}

// ============================================
// LIGHTBOX
// ============================================
function openLightbox(index) {
    currentImageIndex = index;
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        updateLightboxImage();
    }
    
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (thumb) {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        }
    });
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.animation = 'fadeOut 0.3s';
        setTimeout(() => {
            lightbox.classList.remove('active');
            lightbox.style.animation = '';
            document.body.style.overflow = 'auto';
        }, 200);
    }
}

function changeImage(direction) {
    if (!GALLERY_IMAGES || GALLERY_IMAGES.length === 0) return;
    currentImageIndex = (currentImageIndex + direction + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
    updateLightboxImage();
    
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (thumb) {
            if (i === currentImageIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        }
    });
}

function jumpToImage(index) {
    if (!GALLERY_IMAGES || GALLERY_IMAGES.length === 0) return;
    currentImageIndex = index;
    updateLightboxImage();
    
    document.querySelectorAll('.thumbnail').forEach((thumb, i) => {
        if (thumb) {
            if (i === index) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        }
    });
}

function updateLightboxImage() {
    const image = document.querySelector('.lightbox-image');
    const caption = document.getElementById('lightboxCaption');
    
    if (!image || !GALLERY_IMAGES || !GALLERY_IMAGES[currentImageIndex]) return;
    
    const imgUrl = GALLERY_IMAGES[currentImageIndex];
    image.innerHTML = `<img src="${imgUrl}" alt="Foto ${currentImageIndex + 1}" onerror="this.onerror=null; this.src=''; this.parentElement.innerHTML='<div class=\'error-placeholder\'>❌ Imagem não encontrada<br><small>${imgUrl}</small></div>';">`;
    
    if (caption && galleryCaptions && galleryCaptions[currentImageIndex]) {
        caption.textContent = galleryCaptions[currentImageIndex];
    }
}

// ============================================
// QUIZ
// ============================================
function initQuiz() {
    if (!QUIZ_QUESTIONS || QUIZ_QUESTIONS.length === 0) return;
    
    currentQuestion = 0;
    score = 0;
    quizAnswered = false;
    quizCompleted = false;
    loadQuestion();
    
    const quizScore = document.querySelector('.quiz-score');
    if (quizScore) quizScore.innerHTML = `❤️ ${score} pontos`;
}

function loadQuestion() {
    if (!QUIZ_QUESTIONS || QUIZ_QUESTIONS.length === 0) return;
    
    if (currentQuestion >= QUIZ_QUESTIONS.length) {
        endQuiz();
        return;
    }
    
    const q = QUIZ_QUESTIONS[currentQuestion];
    
    const questionNumberEl = document.querySelector('.quiz-question-number');
    const questionEl = document.getElementById('quizQuestion');
    const progressEl = document.getElementById('quizProgress');
    const optionsContainer = document.getElementById('quizOptions');
    const feedbackEl = document.getElementById('quizFeedback');
    
    if (questionNumberEl) {
        questionNumberEl.textContent = `Pergunta ${currentQuestion + 1}/${QUIZ_QUESTIONS.length}`;
    }
    if (questionEl) questionEl.textContent = q.question;
    
    const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;
    if (progressEl) progressEl.style.width = `${progress}%`;
    
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        optionsContainer.style.display = 'grid';
        
        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = option;
            btn.onclick = () => checkAnswer(index);
            optionsContainer.appendChild(btn);
        });
    }
    
    if (feedbackEl) feedbackEl.innerHTML = '';
    quizAnswered = false;
}

function checkAnswer(selectedIndex) {
    if (quizAnswered || !QUIZ_QUESTIONS || currentQuestion >= QUIZ_QUESTIONS.length) return;
    
    const q = QUIZ_QUESTIONS[currentQuestion];
    const isCorrect = selectedIndex === q.correct;
    
    const options = document.querySelectorAll('.quiz-option');
    const feedbackEl = document.getElementById('quizFeedback');
    const quizScoreEl = document.querySelector('.quiz-score');
    
    if (isCorrect) {
        if (options[selectedIndex]) options[selectedIndex].classList.add('correct');
        score += 10;
        totalQuizScore += 10;
        if (feedbackEl) {
            feedbackEl.innerHTML = `
                <span class="feedback-correct">
                    <i class="fas fa-check-circle"></i> Correto! +10 pontos
                    <br><small>${q.funFact || ''}</small>
                </span>
            `;
        }
        if (CONFIG?.settings?.enableConfetti !== false) {
            createMiniConfetti();
        }
        showNotification('✅ Resposta correta! +10 pontos', 'success');
    } else {
        if (options[selectedIndex]) options[selectedIndex].classList.add('incorrect');
        if (options[q.correct]) options[q.correct].classList.add('correct');
        if (feedbackEl) {
            feedbackEl.innerHTML = `
                <span class="feedback-incorrect">
                    <i class="fas fa-times-circle"></i> Não foi dessa vez.
                    <br><small>A resposta correta está destacada.</small>
                    <br><small>${q.funFact || ''}</small>
                </span>
            `;
        }
        showNotification('❌ Resposta incorreta', 'error');
    }
    
    if (quizScoreEl) quizScoreEl.innerHTML = `❤️ ${score} pontos`;
    options.forEach(btn => btn.disabled = true);
    quizAnswered = true;
    
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < QUIZ_QUESTIONS.length) {
            loadQuestion();
        } else {
            endQuiz();
        }
    }, 2500);
}

function endQuiz() {
    if (!QUIZ_QUESTIONS || QUIZ_QUESTIONS.length === 0) return;
    
    quizCompleted = true;
    
    const totalPossible = QUIZ_QUESTIONS.length * 10;
    const percentage = (score / totalPossible) * 100;
    
    let message = '';
    let emoji = '';
    
    if (percentage === 100) {
        message = 'Perfeito! Você me conhece mais do que eu mesmo!';
        emoji = '🏆';
        if (CONFIG?.settings?.enableConfetti !== false) {
            createConfetti('win');
        }
    } else if (percentage >= 70) {
        message = 'Muito bem! Você me conhece muito bem!';
        emoji = '🌟';
        createMiniConfetti();
    } else if (percentage >= 50) {
        message = 'Bom! Mas ainda pode melhorar 😉';
        emoji = '📚';
    } else {
        message = 'Precisamos conversar mais sobre mim! 💬';
        emoji = '💭';
    }
    
    const questionEl = document.getElementById('quizQuestion');
    const optionsEl = document.getElementById('quizOptions');
    const feedbackEl = document.getElementById('quizFeedback');
    
    if (questionEl) {
        questionEl.innerHTML = `
            <div style="text-align: center;">
                ${emoji} ${message} ${emoji}
            </div>
        `;
    }
    if (optionsEl) optionsEl.style.display = 'none';
    if (feedbackEl) {
        feedbackEl.innerHTML = `
            <span class="feedback-congrats">
                Você fez ${score} pontos de ${totalPossible}!<br>
                ❤️ Obrigado por me conhecer tão bem! ❤️
            </span>
        `;
    }
    
    updateStats();
}

// ============================================
// MURAL DE RECADOS
// ============================================
function addWallMessage() {
    const input = document.getElementById('wallInput');
    if (!input) return;
    
    const message = input.value.trim();
    
    if (message.length < 3) {
        showNotification('💬 Digite uma mensagem com pelo menos 3 caracteres', 'warning');
        return;
    }
    
    if (message) {
        const wallMessages = document.getElementById('wallMessages');
        const now = new Date();
        const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const messageId = 'msg_' + Date.now();
        
        const messageEl = document.createElement('div');
        messageEl.className = 'wall-message';
        messageEl.id = messageId;
        messageEl.style.animation = 'slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
        messageEl.innerHTML = `
            <div class="message-author">
                <div class="author-avatar">❤️</div>
                <span>${escapeHtml(YOUR_NAME)}</span>
            </div>
            <p>${escapeHtml(message)}</p>
            <div class="message-footer">
                <span class="message-date"><i class="far fa-clock"></i> Hoje, ${timeStr}</span>
                <span class="message-love" onclick="likeMessage('${messageId}')">
                    <i class="fas fa-heart"></i> <span class="like-count">0</span>
                </span>
            </div>
        `;
        
        if (wallMessages) {
            wallMessages.insertBefore(messageEl, wallMessages.firstChild);
        }
        input.value = '';
        
        const charCounter = document.getElementById('charCounter');
        if (charCounter) charCounter.textContent = '0/200';
        
        messagesCount++;
        updateMessageCount();
        updateStats();
        
        showNotification('💕 Mensagem enviada com amor!', 'heart');
        if (CONFIG?.settings?.enableConfetti !== false) {
            createMiniConfetti();
        }
        
        saveWallMessage({
            id: messageId,
            author: YOUR_NAME,
            message: message,
            date: `Hoje, ${timeStr}`,
            likes: 0
        });
    }
}

function likeMessage(messageId) {
    const messageEl = document.getElementById(messageId);
    if (!messageEl) return;
    
    const likeSpan = messageEl.querySelector('.like-count');
    let likes = parseInt(likeSpan.textContent) || 0;
    likes++;
    likeSpan.textContent = likes;
    
    const heartIcon = messageEl.querySelector('.message-love i');
    if (heartIcon) {
        heartIcon.style.animation = 'pulse 0.3s';
        setTimeout(() => {
            heartIcon.style.animation = '';
        }, 300);
    }
    
    showNotification('❤️ Você curtiu esta mensagem!', 'heart');
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

function updateMessageCount() {
    const count = document.querySelectorAll('.wall-message').length;
    const messageCountEl = document.getElementById('messageCount');
    if (messageCountEl) {
        messageCountEl.innerHTML = `<i class="fas fa-heart"></i> ${count} ${count === 1 ? 'mensagem' : 'mensagens'} de amor`;
    }
}

function setupTextareaCounter() {
    const textarea = document.getElementById('wallInput');
    if (!textarea) return;
    
    textarea.addEventListener('input', function() {
        const count = this.value.length;
        const charCounter = document.getElementById('charCounter');
        if (charCounter) charCounter.textContent = `${count}/200`;
        
        if (count > 200) {
            this.value = this.value.substring(0, 200);
            if (charCounter) charCounter.textContent = '200/200';
            showNotification('⚠️ Limite de 200 caracteres atingido', 'warning');
        }
        
        this.style.height = 'auto';
        this.style.height = (this.scrollHeight) + 'px';
    });
}

function saveWallMessage(message) {
    try {
        let messages = JSON.parse(localStorage.getItem('wallMessages') || '[]');
        messages.unshift(message);
        if (messages.length > 30) messages.pop();
        localStorage.setItem('wallMessages', JSON.stringify(messages));
    } catch (e) {
        console.warn('Erro ao salvar mensagem:', e);
    }
}

function loadWallMessages() {
    try {
        const messages = JSON.parse(localStorage.getItem('wallMessages') || '[]');
        const wallMessages = document.getElementById('wallMessages');
        
        if (!wallMessages) return;
        
        messages.forEach(msg => {
            const messageEl = document.createElement('div');
            messageEl.className = 'wall-message';
            messageEl.id = msg.id;
            messageEl.innerHTML = `
                <div class="message-author">
                    <div class="author-avatar">❤️</div>
                    <span>${escapeHtml(msg.author)}</span>
                </div>
                <p>${escapeHtml(msg.message)}</p>
                <div class="message-footer">
                    <span class="message-date"><i class="far fa-clock"></i> ${msg.date}</span>
                    <span class="message-love" onclick="likeMessage('${msg.id}')">
                        <i class="fas fa-heart"></i> <span class="like-count">${msg.likes || 0}</span>
                    </span>
                </div>
            `;
            wallMessages.appendChild(messageEl);
        });
    } catch (e) {
        console.warn('Erro ao carregar mensagens:', e);
    }
}

// ============================================
// WISHLIST
// ============================================
function initWishlist() {
    if (WISHLIST && WISHLIST.length > 0) {
        const wishlistContainer = document.querySelector('.wishlist');
        if (wishlistContainer) {
            wishlistContainer.innerHTML = '';
            WISHLIST.forEach((item, index) => {
                const wishlistItem = document.createElement('div');
                wishlistItem.className = 'wishlist-item';
                wishlistItem.innerHTML = `
                    <input type="checkbox" id="wish${index + 1}">
                    <label for="wish${index + 1}">
                        <span class="wish-icon">${item.icon || '❤️'}</span>
                        <span class="wish-text">${item.text || 'Sonho'}</span>
                    </label>
                `;
                wishlistContainer.appendChild(wishlistItem);
            });
        }
    }
    
    const wishlistItems = document.querySelectorAll('.wishlist-item input');
    
    wishlistItems.forEach((checkbox, index) => {
        checkbox.addEventListener('change', function() {
            const item = this.closest('.wishlist-item');
            if (this.checked) {
                if (item) item.classList.add('checked');
                const wishText = item ? item.querySelector('.wish-text') : null;
                showNotification(`✨ Sonho realizado: ${wishText ? wishText.textContent : ''}`, 'success');
                if (CONFIG?.settings?.enableConfetti !== false) {
                    createMiniConfetti();
                }
                wishesCompleted++;
            } else {
                if (item) item.classList.remove('checked');
                wishesCompleted--;
            }
            
            updateWishlistProgress();
            saveWishlistProgress();
            updateStats();
        });
        
        try {
            const saved = localStorage.getItem(`wish_${index}`);
            if (saved === 'true') {
                checkbox.checked = true;
                checkbox.dispatchEvent(new Event('change'));
            }
        } catch (e) {
            console.warn('Erro ao carregar wishlist:', e);
        }
    });
}

function updateWishlistProgress() {
    const total = document.querySelectorAll('.wishlist-item').length;
    const checked = document.querySelectorAll('.wishlist-item input:checked').length;
    const percentage = total > 0 ? Math.round((checked / total) * 100) : 0;
    
    const percentageEl = document.querySelector('.progress-percentage');
    const progressFillEl = document.getElementById('wishProgressFill');
    const messageEl = document.getElementById('wishMessage');
    
    if (percentageEl) percentageEl.textContent = `${percentage}%`;
    if (progressFillEl) progressFillEl.style.width = `${percentage}%`;
    
    if (messageEl) {
        if (percentage === 0) {
            messageEl.textContent = 'Vamos realizar nossos sonhos juntos! ❤️';
        } else if (percentage < 30) {
            messageEl.textContent = 'Estamos no começo, mas vamos longe! ✨';
        } else if (percentage < 60) {
            messageEl.textContent = 'Metade do caminho! Continue sonhando! 🌟';
        } else if (percentage < 100) {
            messageEl.textContent = 'Quase lá! Mais alguns sonhos para realizar! 💫';
        } else {
            messageEl.textContent = 'PARABÉNS! Todos os sonhos realizados! 🎉❤️';
            if (CONFIG?.settings?.enableConfetti !== false) {
                createConfetti('win');
            }
            showNotification('🎉 TODOS OS SONHOS REALIZADOS!', 'congrats');
        }
    }
}

function saveWishlistProgress() {
    try {
        document.querySelectorAll('.wishlist-item input').forEach((checkbox, index) => {
            localStorage.setItem(`wish_${index}`, checkbox.checked);
        });
    } catch (e) {
        console.warn('Erro ao salvar wishlist:', e);
    }
}

// ============================================
// JOGO DA MEMÓRIA
// ============================================
function initMemoryGame() {
    const gameContainer = document.getElementById('memoryGame');
    if (!gameContainer) return;
    
    const cards = [
        '❤️', '❤️', '🌹', '🌹', '🎵', '🎵', 
        '💋', '💋', '💍', '💍', '✨', '✨',
        '☕', '☕', '🎬', '🎬'
    ];
    
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
    
    document.querySelectorAll('.memory-card').forEach(card => {
        card.addEventListener('click', flipCard);
    });
    
    resetMemoryStats();
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;
    if (this.classList.contains('flipped')) return;
    if (this.classList.contains('matched')) return;
    
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
        
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        
        const pairCountEl = document.getElementById('pairCount');
        if (pairCountEl) {
            pairCountEl.innerHTML = `<i class="fas fa-heart"></i> Pares: ${matchedPairs}/8`;
        }
        
        if (matchedPairs === 8) {
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
    }, 800);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

function updateMoves() {
    moves++;
    const moveCountEl = document.getElementById('moveCount');
    if (moveCountEl) {
        moveCountEl.innerHTML = `<i class="fas fa-arrows-alt"></i> Movimentos: ${moves}`;
    }
}

function resetMemoryStats() {
    moves = 0;
    matchedPairs = 0;
    seconds = 0;
    gameStarted = false;
    
    const moveCountEl = document.getElementById('moveCount');
    const pairCountEl = document.getElementById('pairCount');
    const timerEl = document.getElementById('timerDisplay');
    
    if (moveCountEl) moveCountEl.innerHTML = `<i class="fas fa-arrows-alt"></i> Movimentos: 0`;
    if (pairCountEl) pairCountEl.innerHTML = `<i class="fas fa-heart"></i> Pares: 0/8`;
    if (timerEl) timerEl.textContent = '00:00';
    
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
        const timerEl = document.getElementById('timerDisplay');
        if (timerEl) {
            timerEl.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
    }, 1000);
}

function endMemoryGame() {
    clearInterval(memoryTimer);
    
    showNotification(`🎮 Parabéns! Você completou o jogo! ${moves} movimentos, ${seconds}s`, 'win');
    if (CONFIG?.settings?.enableConfetti !== false) {
        createConfetti('win');
    }
}

function resetMemoryGame() {
    document.querySelectorAll('.memory-card').forEach(card => {
        card.classList.remove('flipped');
        card.classList.remove('matched');
        card.addEventListener('click', flipCard);
    });
    
    initMemoryGame();
    showNotification('🔄 Novo jogo iniciado!', 'info');
}

function shuffleMemoryCards() {
    const cards = Array.from(document.querySelectorAll('.memory-card'));
    
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random() * cards.length);
    });
    
    showNotification('🔄 Cartas embaralhadas!', 'info');
}

// ============================================
// CARROSSEL DE MEMÓRIAS
// ============================================
function initMemoriesCarousel() {
    const container = document.querySelector('.memories-carousel');
    if (!container || !MEMORIES || MEMORIES.length === 0) return;
    
    let html = '';
    MEMORIES.forEach((memory, index) => {
        html += `
            <div class="memory-card-story" onclick="expandMemory(${index})">
                <div class="memory-icon">${memory.icon || '❤️'}</div>
                <h4>${memory.title || 'Memória'}</h4>
                <p>${memory.description || ''}</p>
                <span class="memory-date">${memory.date || ''}</span>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function expandMemory(index) {
    if (!MEMORIES || !MEMORIES[index]) return;
    
    const memory = MEMORIES[index];
    
    const modal = document.createElement('div');
    modal.className = 'memory-modal';
    modal.innerHTML = `
        <div class="memory-modal-content">
            <span class="close-modal" onclick="this.parentElement.parentElement.remove()">&times;</span>
            <div class="memory-modal-icon">${memory.icon || '❤️'}</div>
            <h2>${memory.title || 'Memória'}</h2>
            <p class="memory-modal-description">${memory.description || ''}</p>
            <p class="memory-modal-date">${memory.date || ''}</p>
            <button onclick="this.parentElement.parentElement.remove()">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// ============================================
// POEMA DO DIA
// ============================================
function initPoemOfTheDay() {
    const container = document.querySelector('.poem-container');
    if (!container || !POEMS || POEMS.length === 0) return;
    
    const today = new Date();
    const poemIndex = today.getDate() % POEMS.length;
    
    const poem = POEMS[poemIndex];
    let versesHTML = '';
    if (poem.verses) {
        poem.verses.forEach(verse => {
            versesHTML += `<p>${verse}</p>`;
        });
    }
    
    container.innerHTML = `
        <h3>${poem.title || 'Poema de Amor'}</h3>
        <div class="poem-verses">
            ${versesHTML}
        </div>
        <span class="poem-date">Poema do dia ${today.toLocaleDateString('pt-BR')}</span>
    `;
}

// ============================================
// CALENDÁRIO
// ============================================
function renderCalendar() {
    const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    const monthYearEl = document.getElementById('monthYear');
    if (monthYearEl) {
        monthYearEl.textContent = `${monthNames[currentMonth]} ${currentYear}`;
    }
    
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const lastDate = new Date(currentYear, currentMonth + 1, 0).getDate();
    
    let daysHTML = '';
    
    for (let i = 0; i < firstDay; i++) {
        daysHTML += '<div class="calendar-day empty"></div>';
    }
    
    for (let i = 1; i <= lastDate; i++) {
        let classes = ['calendar-day'];
        let isSpecial = false;
        let specialDesc = '';
        
        const today = new Date();
        if (i === today.getDate() && 
            currentMonth === today.getMonth() && 
            currentYear === today.getFullYear()) {
            classes.push('today');
        }
        
        if (SPECIAL_DATES) {
            SPECIAL_DATES.forEach(date => {
                if (date.day === i && date.month === currentMonth + 1) {
                    classes.push('special');
                    isSpecial = true;
                    specialDesc = date.description;
                }
            });
        }
        
        daysHTML += `<div class="${classes.join(' ')}" 
                    ${isSpecial ? `title="${specialDesc}"` : ''}
                    onclick="showDateInfo(${i}, ${currentMonth + 1}, ${currentYear})">
            ${i}
            ${isSpecial ? '<span class="special-marker">❤️</span>' : ''}
        </div>`;
    }
    
    const calendarDaysEl = document.getElementById('calendarDays');
    if (calendarDaysEl) calendarDaysEl.innerHTML = daysHTML;
    updateUpcomingEvents();
}

function showDateInfo(day, month, year) {
    if (!SPECIAL_DATES) return;
    
    const isSpecial = SPECIAL_DATES.some(d => d.day === day && d.month === month);
    
    if (isSpecial) {
        const event = SPECIAL_DATES.find(d => d.day === day && d.month === month);
        showNotification(`📅 ${event.description}`, 'info');
    } else {
        showNotification(`📆 ${day}/${month}/${year}`, 'info');
    }
}

function updateUpcomingEvents() {
    if (!SPECIAL_DATES) return;
    
    const now = new Date();
    const eventsContainer = document.getElementById('upcomingEvents');
    if (!eventsContainer) return;
    
    const upcoming = SPECIAL_DATES.filter(date => {
        const eventDate = new Date(date.year, date.month - 1, date.day);
        return eventDate >= now;
    }).sort((a, b) => {
        return new Date(a.year, a.month - 1, a.day) - new Date(b.year, b.month - 1, b.day);
    }).slice(0, 5);
    
    let html = '';
    upcoming.forEach(event => {
        const eventDate = new Date(event.year, event.month - 1, event.day);
        const diffDays = Math.ceil((eventDate - now) / (1000 * 60 * 60 * 24));
        
        html += `
            <div class="event-item" onclick="showDateInfo(${event.day}, ${event.month}, ${event.year})">
                <div class="event-date">
                    <span class="event-day">${event.day}</span>
                    <span class="event-month">${getMonthAbbr(event.month)}</span>
                </div>
                <div class="event-info">
                    <span class="event-title">${event.description}</span>
                    <span class="event-days">${diffDays === 0 ? 'Hoje! 🎉' : `${diffDays} dias`}</span>
                </div>
            </div>
        `;
    });
    
    eventsContainer.innerHTML = html || '<p class="no-events">Nenhum evento próximo 💕</p>';
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
    if (!DECLARATIONS || DECLARATIONS.length === 0) return;
    
    const randomIndex = Math.floor(Math.random() * DECLARATIONS.length);
    const declaration = DECLARATIONS[randomIndex];
    const declarationEl = document.getElementById('declarationText');
    
    if (!declarationEl) return;
    
    declarationEl.style.opacity = '0';
    declarationEl.style.transform = 'translateY(30px)';
    
    setTimeout(() => {
        declarationEl.textContent = declaration;
        declarationEl.style.opacity = '1';
        declarationEl.style.transform = 'translateY(0)';
    }, 200);
    
    const btn = document.querySelector('.declaration-btn');
    if (btn) {
        btn.style.transform = 'scale(0.9)';
        setTimeout(() => {
            btn.style.transform = 'scale(1)';
        }, 200);
    }
}

// ============================================
// PRESENTE
// ============================================
function openGift() {
    const giftContent = document.getElementById('giftContent');
    if (!giftContent) return;
    
    if (giftContent.classList.contains('hidden')) {
        giftContent.classList.remove('hidden');
        giftContent.style.animation = 'slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
        if (CONFIG?.settings?.enableConfetti !== false) {
            createConfetti('gift');
        }
        showNotification('🎁 Presente aberto! Espero que goste ❤️', 'gift');
    } else {
        giftContent.classList.add('hidden');
    }
}

// ============================================
// PRÓXIMO ENCONTRO
// ============================================
function updateNextDate() {
    const nextDate = CONFIG?.couple?.nextDate || new Date('2026-02-14T20:00:00');
    const now = new Date();
    const diff = nextDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    const daysElement = document.getElementById('nextDateDays');
    const planElement = document.getElementById('nextDatePlan');
    const locationElement = document.querySelector('.next-date-location span');
    
    if (daysElement) daysElement.textContent = days.toString().padStart(2, '0');
    if (planElement) planElement.innerHTML = CONFIG?.couple?.nextDateDescription || 'Dia dos Namorados ❤️';
    if (locationElement) locationElement.textContent = CONFIG?.couple?.nextDateLocation || 'Restaurante Italiano, 20:00';
    
    if (days === 0) {
        if (daysElement) {
            daysElement.style.color = '#ffd700';
            daysElement.style.animation = 'pulse 1s infinite';
        }
        if (planElement) {
            planElement.innerHTML = 'HOJE É O GRANDE DIA! 🎉❤️';
            planElement.style.animation = 'pulse 1s infinite';
        }
        if (CONFIG?.settings?.enableConfetti !== false) {
            createConfetti('date');
        }
    } else if (days === 1) {
        if (daysElement) daysElement.style.color = '#ffa500';
        if (planElement) planElement.innerHTML = 'AMANHÃ! ❤️✨';
    }
}

// ============================================
// NOTIFICAÇÕES
// ============================================
function initNotifications() {
    if (!document.querySelector('.notification-container')) {
        const container = document.createElement('div');
        container.className = 'notification-container';
        document.body.appendChild(container);
    }
}

function showNotification(message, type = 'info') {
    if (CONFIG?.settings?.enableNotifications === false) return;
    
    const container = document.querySelector('.notification-container');
    if (!container) return;
    
    const id = 'notif_' + Date.now();
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.id = id;
    
    let icon = '';
    switch(type) {
        case 'success': icon = '✅'; break;
        case 'error': icon = '❌'; break;
        case 'warning': icon = '⚠️'; break;
        case 'heart': icon = '❤️'; break;
        case 'music': icon = '🎵'; break;
        case 'gift': icon = '🎁'; break;
        case 'win': icon = '🏆'; break;
        case 'congrats': icon = '🎉'; break;
        default: icon = '💬';
    }
    
    notification.innerHTML = `
        <span class="notification-icon">${icon}</span>
        <span class="notification-message">${message}</span>
        <button class="notification-close" onclick="this.parentElement.remove()">&times;</button>
    `;
    
    container.appendChild(notification);
    
    setTimeout(() => {
        const notif = document.getElementById(id);
        if (notif) {
            notif.style.animation = 'slideOut 0.3s';
            setTimeout(() => notif.remove(), 300);
        }
    }, 5000);
}

// ============================================
// CONFETES
// ============================================
function createConfetti(type = 'default') {
    if (CONFIG?.settings?.enableConfetti === false) return;
    
    let canvas = document.getElementById('confettiCanvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'confettiCanvas';
        canvas.style.position = 'fixed';
        canvas.style.top = '0';
        canvas.style.left = '0';
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        canvas.style.pointerEvents = 'none';
        canvas.style.zIndex = '9999';
        document.body.appendChild(canvas);
    }
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    let count = 150;
    let colors = ['#ff4d4d', '#ff7eb3', '#ffd700', '#ff9a9e', '#fad0c4', '#ff758c'];
    
    if (type === 'win') {
        count = 300;
        colors = ['#ffd700', '#ffa500', '#ff4d4d', '#ff7eb3', '#9b59b6', '#3498db'];
    } else if (type === 'gift' || type === 'date') {
        colors = ['#ff6b6b', '#ff8787', '#ffa500', '#ffd700'];
    }
    
    const particles = [];
    for (let i = 0; i < count; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            r: Math.random() * 6 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            speed: Math.random() * 4 + 3,
            tilt: Math.random() * 10 - 5
        });
    }
    
    let animationFrame;
    let startTime = Date.now();
    
    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        particles.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
            ctx.fillStyle = p.color;
            ctx.fill();
            
            p.y += p.speed;
            p.x += Math.sin(p.y * 0.01) * 2;
            
            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });
        
        if (Date.now() - startTime < 3000) {
            animationFrame = requestAnimationFrame(draw);
        } else {
            cancelAnimationFrame(animationFrame);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            canvas.remove();
        }
    }
    
    draw();
}

function createMiniConfetti() {
    createConfetti('mini');
}

// ============================================
// CORAÇÕES FLUTUANTES
// ============================================
function startFloatingHearts() {
    if (CONFIG?.settings?.enableFloatingHearts === false) return;
    
    const container = document.querySelector('.floating-hearts-container');
    if (!container) return;
    
    setInterval(() => {
        if (container.children.length < 40) {
            const heart = document.createElement('div');
            const hearts = ['❤️', '💕', '💗', '💓', '💖', '💘', '💝', '💞'];
            heart.innerHTML = hearts[Math.floor(Math.random() * hearts.length)];
            heart.style.position = 'absolute';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '100%';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.opacity = Math.random() * 0.6 + 0.2;
            heart.style.animation = `floatHeart ${Math.random() * 4 + 6}s linear`;
            heart.style.pointerEvents = 'none';
            heart.style.zIndex = '999';
            container.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 10000);
        }
    }, 300);
}

// ============================================
// BOTÃO BACK TO TOP
// ============================================
function setupBackToTop() {
    const backToTop = document.getElementById('backToTop');
    if (!backToTop) return;
    
    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '30px';
    backToTop.style.right = '30px';
    backToTop.style.zIndex = '9999';
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
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
        threshold: 0.2
    });
    
    document.querySelectorAll('section, .gallery-item, .timeline-item, .counter-block, .memory-card-story').forEach(el => {
        if (el) {
            el.classList.add('fade-in');
            observer.observe(el);
        }
    });
}

// ============================================
// ESTATÍSTICAS
// ============================================
function loadStats() {
    try {
        visitCount = parseInt(localStorage.getItem('visitCount') || '0') + 1;
        localStorage.setItem('visitCount', visitCount);
        
        lastVisit = new Date(localStorage.getItem('lastVisit') || new Date());
        localStorage.setItem('lastVisit', new Date().toISOString());
        
        messagesCount = parseInt(localStorage.getItem('messagesCount') || '1');
        wishesCompleted = parseInt(localStorage.getItem('wishesCompleted') || '0');
        totalQuizScore = parseInt(localStorage.getItem('totalQuizScore') || '0');
    } catch (e) {
        console.warn('Erro ao carregar estatísticas:', e);
    }
}

function updateStats() {
    const statVisits = document.getElementById('statVisits');
    const statMessages = document.getElementById('statMessages');
    const statWishes = document.getElementById('statWishes');
    const statQuizScore = document.getElementById('statQuizScore');
    const footerVisitCount = document.getElementById('footerVisitCount');
    const footerLastVisit = document.getElementById('footerLastVisit');
    
    if (statVisits) statVisits.textContent = visitCount;
    if (statMessages) statMessages.textContent = messagesCount;
    if (statWishes) statWishes.textContent = wishesCompleted;
    if (statQuizScore) statQuizScore.textContent = totalQuizScore;
    
    if (footerVisitCount) footerVisitCount.innerHTML = `❤️ Visitas: ${visitCount}`;
    
    const lastVisitStr = lastVisit.toLocaleDateString('pt-BR');
    if (footerLastVisit) footerLastVisit.innerHTML = `Última visita: ${lastVisitStr}`;
    
    try {
        localStorage.setItem('messagesCount', messagesCount);
        localStorage.setItem('wishesCompleted', wishesCompleted);
        localStorage.setItem('totalQuizScore', totalQuizScore);
    } catch (e) {
        console.warn('Erro ao salvar estatísticas:', e);
    }
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
    
    const greeting = document.querySelector('.greeting');
    if (greeting) {
        const randomNick = NICKNAMES[Math.floor(Math.random() * NICKNAMES.length)];
        greeting.innerHTML = `Para ti ${randomNick}❤️`;
    }
}

// ============================================
// ATUALIZAR ANO NO FOOTER
// ============================================
function updateFooterYear() {
    const yearEl = document.querySelector('.footer-date');
    if (yearEl) {
        const currentYear = new Date().getFullYear();
        yearEl.innerHTML = `<i class="far fa-calendar-alt"></i> Dia dos Namorados ${currentYear}`;
    }
}

// ============================================
// INICIAR QUANDO O DOM ESTIVER PRONTO
// ============================================
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

// ============================================
// EXPOR FUNÇÕES GLOBAIS
// ============================================
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;
window.changeImage = changeImage;
window.jumpToImage = jumpToImage;
window.openLetter = openLetter;
window.prevMusic = prevMusic;
window.nextMusic = nextMusic;
window.playMusic = playMusic;
window.togglePlay = togglePlay;
window.addWallMessage = addWallMessage;
window.likeMessage = likeMessage;
window.resetMemoryGame = resetMemoryGame;
window.shuffleMemoryCards = shuffleMemoryCards;
window.prevMonth = prevMonth;
window.nextMonth = nextMonth;
window.generateDeclaration = generateDeclaration;
window.openGift = openGift;
window.expandMemory = expandMemory;
window.showDateInfo = showDateInfo;