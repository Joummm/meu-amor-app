// ============================================
// CONFIGURAÇÕES DO SITE - EDITAR AQUI
// Tudo que você precisa personalizar está neste arquivo
// ============================================

const CONFIG = {
    // ========================================
    // 1. DADOS DO CASAL
    // ========================================
    couple: {
        // Nomes (como aparecerão no site)
        yourName: 'João Nunes',
        loverName: 'Beatriz Martins',
        
        // Apelidos carinhosos (para saudação aleatória)
        nicknames: ['Meu Amor', 'Princesa', 'Vida', 'Coração', 'Minha Metade', 'Amor da Minha Vida'],
        
        // Data de início do namoro (ANO, MÊS, DIA, HORA, MINUTO)
        startDate: new Date('2025-09-26T19:30:00'),
        
        // Data do próximo encontro
        nextDate: new Date('2026-02-14T20:00:00'),
        nextDateDescription: 'Dia dos Namorados ❤️',
        nextDateLocation: 'Restaurante Italiano, 20:00'
    },

    // ========================================
    // 2. PLAYLIST - MÚSICAS
    // ========================================
    playlist: [
        {
            title: "Perfect",
            artist: "Ed Sheeran",
            duration: "4:23",
            cover: "fa-heart",
            year: 2017,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        },
        {
            title: "Ainda Gosto Dela",
            artist: "Skank",
            duration: "4:12",
            cover: "fa-star",
            year: 2014,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
        },
        {
            title: "Trem Bala",
            artist: "Ana Vilela",
            duration: "3:48",
            cover: "fa-train",
            year: 2016,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3"
        },
        {
            title: "Deixa Eu Te Amar",
            artist: "Dilsinho",
            duration: "3:52",
            cover: "fa-heartbeat",
            year: 2018,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        },
        {
            title: "Love Story",
            artist: "Taylor Swift",
            duration: "3:55",
            cover: "fa-moon",
            year: 2008,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3"
        },
        {
            title: "Quando a Chuva Passar",
            artist: "Ivete Sangalo",
            duration: "4:05",
            cover: "fa-cloud-rain",
            year: 2010,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3"
        },
        {
            title: "Seu Nome",
            artist: "NX Zero",
            duration: "3:58",
            cover: "fa-feather",
            year: 2008,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3"
        },
        {
            title: "Só Hoje",
            artist: "Jota Quest",
            duration: "3:45",
            cover: "fa-sun",
            year: 2003,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"
        },
        {
            title: "Trevo (Tu)",
            artist: "Anavitória ft. Tiago Iorc",
            duration: "4:01",
            cover: "fa-leaf",
            year: 2016,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3"
        },
        {
            title: "Apenas Mais uma de Amor",
            artist: "Lulu Santos",
            duration: "3:54",
            cover: "fa-music",
            year: 1991,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3"
        },
        {
            title: "Vamos Pra Rua",
            artist: "Sandy & Junior",
            duration: "3:55",
            cover: "fa-heart",
            year: 2019,
            audioUrl: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3"
        }
    ],

    // ========================================
    // 3. CARTA DE AMOR
    // ========================================
    loveLetter: `
Desde aquele 26 de setembro, às 19:30, minha vida ganhou um novo significado. Lembro como se fosse hoje: você chegou com seu sorriso tímido, vestindo aquela blusa rosa, e eu soube ali que nada seria igual.

Beatriz, você não veio ao acaso. Você foi um presente que a vida me deu, desses que a gente nem ousava pedir, mas que o coração sempre desejou em segredo. Seus olhos castanhos brilhavam enquanto você falava dos seus sonhos, e naquele momento eu soube que queria fazer parte de cada um deles.

O tempo ao seu lado tem sido o melhor tempo da minha vida. Cada café, cada mensagem de bom dia, cada risada compartilhada, cada silêncio confortável. Você transformou meu mundo, pintou meus dias com suas cores, me ensinou que amar é simples quando se encontra a pessoa certa.

Prometo não só estar ao seu lado, mas caminhar com você. Segurar sua mão nos dias difíceis e celebrar cada conquista como se fosse minha. Prometo te ouvir, te compreender e te admirar todos os dias. Prometo ser seu porto seguro, seu parceiro, seu melhor amigo.

Obrigado por cada "eu te amo" dito, por cada abraço apertado, por cada olhar que dispensou palavras. Você é minha melhor história, meu poema preferido, meu eterno romance.

Te amo hoje, amanhã e em todas as vidas que existirem. ❤️`,

    // ========================================
    // 4. DECLARAÇÕES DE AMOR
    // ========================================
    declarations: [
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
        "Amar você é tão natural quanto respirar. É essencial, é vital, é o que me mantém vivo.",
        "Em você encontrei o que nem sabia que procurava. Você é meu começo, meu meio e meu eterno.",
        "Se eu pudesse voltar no tempo, te escolheria de novo. E de novo. E de novo. Sempre você.",
        "Seu nome é o verso mais bonito que meu coração já escreveu.",
        "Você é a resposta para todas as minhas preces, o sentido de todas as minhas buscas.",
        "Meu amor por você não é passageiro - é destino, é escolha, é pra sempre.",
        "Desde que você chegou, o mundo parece mais colorido, a música mais doce, a vida mais leve.",
        "Você é a certeza que eu nem sabia que procurava.",
        "Te amar é fácil. Te merecer é o que me faz querer ser melhor todos os dias.",
        "Você não está só no meu coração - você é o meu coração.",
        "Se existisse uma palavra mais forte que 'eterno', seria ela para definir meu amor por você.",
        "Você é o motivo do meu sorriso mais sincero."
    ],

    // ========================================
    // 5. DATAS ESPECIAIS
    // ========================================
    specialDates: [
        { day: 26, month: 9, year: 2025, description: "🎉 Nosso primeiro encontro - O dia mais importante!" },
        { day: 10, month: 10, year: 2025, description: "💋 Primeiro beijo - A noite mágica" },
        { day: 1, month: 11, year: 2025, description: "💍 Início do namoro - Sim, eu aceito!" },
        { day: 22, month: 2, year: 2026, description: "🎂 Aniversário da Beatriz - Meu presente preferido" },
        { day: 14, month: 2, year: 2026, description: "💕 Dia dos Namorados - Nosso dia" },
        { day: 15, month: 3, year: 2026, description: "🎂 Aniversário do João - Te amo" },
        { day: 24, month: 12, year: 2025, description: "🎄 Véspera de Natal - Nosso primeiro Natal" },
        { day: 31, month: 12, year: 2025, description: "✨ Réveillon - Primeiro ano novo juntos" },
        { day: 1, month: 5, year: 2026, description: "🌹 Dia do Trabalho - Nosso primeiro feriado" }
    ],

    // ========================================
    // 6. QUIZ DO CASAL
    // ========================================
    quizQuestions: [
        {
            question: "Qual é a minha comida favorita?",
            options: ["Pizza", "Hambúrguer", "Lasanha", "Sushi"],
            correct: 2,
            funFact: "Lasanha da mamãe é imbatível! 🍝"
        },
        {
            question: "Qual é a minha cor preferida?",
            options: ["Vermelho", "Azul", "Verde", "Rosa"],
            correct: 0,
            funFact: "Vermelho porque me lembra paixão ❤️"
        },
        {
            question: "Onde foi nosso primeiro encontro?",
            options: ["Cinema", "Café Colonial", "Shopping", "Parque"],
            correct: 1,
            funFact: "Você pediu um capuccino com chantilly ☕"
        },
        {
            question: "Qual meu hobby favorito?",
            options: ["Ler", "Ouvir música", "Esportes", "Filmes"],
            correct: 1,
            funFact: "Principalmente quando é você quem canta 🎵"
        },
        {
            question: "Qual é meu destino dos sonhos?",
            options: ["Paris", "Londres", "Nova York", "Roma"],
            correct: 0,
            funFact: "Paris, a cidade do amor! 🇫🇷"
        },
        {
            question: "Qual meu perfume?",
            options: ["Malbec", "212 VIP", "Sauvage", "Invictus"],
            correct: 0,
            funFact: "Malbec Black - você quem escolheu"
        },
        {
            question: "Quantos irmãos eu tenho?",
            options: ["Nenhum", "1 irmão", "1 irmã", "2 irmãos"],
            correct: 1,
            funFact: "Meu irmão mais velho, Pedro"
        },
        {
            question: "Qual meu filme preferido?",
            options: ["Titanic", "A Culpa é das Estrelas", "Vingadores", "Interestelar"],
            correct: 3,
            funFact: "Obra-prima do Nolan! 🚀"
        },
        {
            question: "O que mais me atrai em você?",
            options: ["Seu sorriso", "Seus olhos", "Seu jeito", "Tudo em você"],
            correct: 3,
            funFact: "Difícil escolher uma coisa só..."
        },
        {
            question: "Qual data comemoramos 1 mês?",
            options: ["26/09", "26/10", "01/11", "10/10"],
            correct: 1,
            funFact: "26 de outubro - 30 dias de amor ❤️"
        }
    ],

    // ========================================
    // 7. MEMÓRIAS (CARROSSEL)
    // ========================================
    memories: [
        { icon: "☕", title: "Primeiro Café", description: "Você derrubou açúcar na mesa e rimos por 10 minutos", date: "26/09/2025" },
        { icon: "🎬", title: "Primeiro Cinema", description: "Você dormiu no meu ombro durante o filme", date: "03/10/2025" },
        { icon: "🌹", title: "Primeiro Beijo", description: "A noite mais linda da minha vida", date: "10/10/2025" },
        { icon: "🎂", title: "Meu Aniversário", description: "Você fez um bolo e queimou, mas estava delicioso", date: "15/03/2026" },
        { icon: "🏖️", title: "Primeira Viagem", description: "Praia, pôr do sol e você", date: "20/11/2025" },
        { icon: "🎄", title: "Natal", description: "Trocamos presentes e assistimos filmes", date: "25/12/2025" },
        { icon: "💍", title: "Pedido de Namoro", description: "O sim mais feliz da minha vida", date: "01/11/2025" },
        { icon: "🎊", title: "Ano Novo", description: "Primeiro réveillon juntos, beijo à meia-noite", date: "31/12/2025" }
    ],

    // ========================================
    // 8. POEMAS
    // ========================================
    poems: [
        {
            title: "O Dia que Te Encontrei",
            verses: [
                "O relógio parou às 19:30,",
                "Quando seus olhos encontraram os meus.",
                "Foi tão simples e tão eterno,",
                "Como se a vida inteira tivesse nos esperado."
            ]
        },
        {
            title: "Teu Nome",
            verses: [
                "Beatriz, Beatriz,",
                "Teu nome é poesia,",
                "São seis letras que mudaram meu mundo,",
                "É a palavra mais linda que aprendi a dizer."
            ]
        },
        {
            title: "Nosso Amor",
            verses: [
                "Não é perfeito, mas é nosso.",
                "Tem dias de sol, dias de chuva,",
                "Mas em todos eles,",
                "Você é a minha melhor parte."
            ]
        },
        {
            title: "Para Sempre",
            verses: [
                "Não prometo estrelas,",
                "Nem prometo o impossível.",
                "Prometo apenas estar aqui,",
                "Hoje, amanhã e sempre."
            ]
        }
    ],

    // ========================================
    // 9. GALERIA (LEGENDAS)
    // ========================================
    galleryCaptions: [
        "Nosso primeiro encontro - Café Colonial • 26/09/2025 • 19:30",
        "Nossa primeira viagem - Serra Gaúcha • 10/10/2025 • 14:00",
        "Seu aniversário - 22/02/2026 • 20:00",
        "Natal juntos - 25/12/2025 • 20:00",
        "Ano Novo - 31/12/2025 • 23:59",
        "Dia dos Namorados - 14/02/2026 • 19:00"
    ],

    galleryIcons: ['❤️', '🌹', '🎂', '🎄', '🎊', '💕'],

    // ========================================
    // 10. LISTA DE DESEJOS (SONHOS)
    // ========================================
    wishlist: [
        { icon: "✈️", text: "Viajar para Paris" },
        { icon: "🍳", text: "Fazer curso de culinária juntos" },
        { icon: "🏠", text: "Comprar nossa casa" },
        { icon: "🐕", text: "Adotar um cachorro" },
        { icon: "🏖️", text: "Viagem para Fernando de Noronha" },
        { icon: "📸", text: "Ensaio fotográfico do casal" },
        { icon: "🎓", text: "Fazer pós-graduação juntos" },
        { icon: "🌍", text: "Volta ao mundo" },
        { icon: "🎭", text: "Assistir um musical na Broadway" },
        { icon: "🍷", text: "Fazer um tour de vinhos" }
    ],

    // ========================================
    // 11. CONFIGURAÇÕES VISUAIS
    // ========================================
    settings: {
        // Cores principais (em hexadecimal)
        primaryColor: '#ff4d4d',
        secondaryColor: '#ff7eb3',
        
        // Ativar/desativar recursos
        enableMusic: true,
        enableConfetti: true,
        enableFloatingHearts: true,
        enableNotifications: true,
        
        // Título do site
        siteTitle: 'Para Beatriz ❤️ Nosso Amor Eterno',
        
        // Mensagem do loader
        loaderMessage: 'Carregando nossa história de amor...',
        loaderSubmessage: 'Para você, Beatriz'
    }
};

// Não modificar - exportação
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}