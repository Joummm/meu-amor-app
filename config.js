// ============================================
// CONFIGURAÇÕES DO SITE - EDITAR AQUI
// Tudo que você precisa personalizar está neste arquivo
// ============================================

// Usar var em vez de const para evitar conflitos com script.js
var CONFIG = {
    // ========================================
    // 1. DADOS DO CASAL
    // ========================================
    couple: {
        yourName: 'João Nunes',
        loverName: 'Beatriz Martins',
        nicknames: ['Meu Amor', 'Princesa', 'Vida', 'Coração', 'Minha Metade', 'Amor da Minha Vida'],
        startDate: new Date('2025-09-26'),
        nextDate: new Date('2026-02-14'),
        nextDateDescription: 'Dia dos Namorados ❤️',
    },

    // ========================================
    // 2. PLAYLIST - MÚSICAS
    // ========================================
    playlist: [
    {
        title: "ROSAS 🌹",
        artist: "KAPPA JOTTA feat. MUN",
        duration: "2:58",
        cover: "fa-heart",
        year: 2017,
        audioUrl: "https://image2url.com/r2/default/audio/1770831171011-24048fbd-1364-4099-8cfc-c852c2bc35dc.mp3"
    },
    {
        title: "Jolene",
        artist: "Dolly Parton",
        duration: "2:43",
        cover: "fa-star",
        year: 1973,
        audioUrl: "https://image2url.com/r2/default/audio/1771072680757-6d8ea666-0d87-4c7a-9b67-3f45171e3293.mp3"
    },
    {
        title: "Trem Bala",
        artist: "Ana Vilela",
        duration: "3:00",
        cover: "fa-train",
        year: 2016,
        audioUrl: "https://image2url.com/r2/default/audio/1771072949866-f591c3b5-e08a-4210-9dab-09862345ec39.mp3"
    },
    {
        title: "Mary on a Cross",
        artist: "Ghost",
        duration: "4:04",
        cover: "fa-cross",
        year: 2019,
        audioUrl: "https://image2url.com/r2/default/audio/1771073004192-a52c1056-9640-439e-91c6-74e348f75493.mp3"
    },
    {
        title: "I Was Made For Lovin' You",
        artist: "YUNGBLUD",
        duration: "4:21",
        cover: "fa-moon",
        year: 2018,
        audioUrl: "https://image2url.com/r2/default/audio/1771073051255-b322d57f-bfb4-4356-8cca-1f9ad546ff37.mp3"
    },
    {
        title: "Constellations",
        artist: "Jade LeMac",
        duration: "4:05",
        cover: "fa-cloud-moon",
        year: 2022,
        audioUrl: "https://image2url.com/r2/default/audio/1771073762609-ae1ebae3-9354-4150-9bb5-b6689befb383.mp3"
    },
    {
        title: "Teu Mundo",
        artist: "Piruka",
        duration: "3:09",
        cover: "fa-feather",
        year: 2020,
        audioUrl: "https://image2url.com/r2/default/audio/1771074478263-0c44b396-8194-47e9-b6d1-9f6d2f37b571.mp3"
    },
    {
        title: "Amar de Cor",
        artist: "Van Zee",
        duration: "3:45",
        cover: "fa-sun",
        year: 2023,
        audioUrl: "https://image2url.com/r2/default/audio/1771074875277-61ef3c24-9287-4c1a-8600-dd1b1b1c6d27.mp3"
    },
    {
        title: "Trevo (Tu)",
        artist: "Anavitória feat. Tiago Iorc",
        duration: "3:27",
        cover: "fa-leaf",
        year: 2016,
        audioUrl: "https://image2url.com/r2/default/audio/1771074970419-5e0b3eda-ef3d-4f7d-a912-fc98a428973b.mp3"
    },
    {
        title: "Casaco",
        artist: "Guga",
        duration: "3:10",
        cover: "fa-tshirt",
        year: 2021,
        audioUrl: "https://image2url.com/r2/default/audio/1771075016087-a49bf016-a3c5-4a21-9f16-9aff60a4b10f.mp3"
    },
    {
        title: "Borboletas",
        artist: "Gama",
        duration: "3:20",
        cover: "fa-bug",
        year: 2019,
        audioUrl: "https://image2url.com/r2/default/audio/1771075053438-3f2e48bf-9333-4f85-9d90-155c76bef934.mp3"
    },
    {
        title: "Jardim",
        artist: "Guga",
        duration: "3:39",
        cover: "fa-tree",
        year: 2021,
        audioUrl: "https://image2url.com/r2/default/audio/1771075195042-ac6e9002-13d9-40d3-898b-72bd957e1123.mp3"
    },
    {
        title: "Inverno de 2003",
        artist: "Ivo Lucas",
        duration: "3:43",
        cover: "fa-snowflake",
        year: 2020,
        audioUrl: "https://image2url.com/r2/default/audio/1771075342248-f4d6c9a2-6861-432a-b461-e0290cac9956.mp3"
    },
    {
        title: "O Teu Cheiro",
        artist: "Bispo",
        duration: "2:50",
        cover: "fa-wind",
        year: 2019,
        audioUrl: "https://image2url.com/r2/default/audio/1771075400955-ccf3159e-6bca-42e4-85a4-b13d768db0d1.mp3"
    },
    {
        title: "Angel",
        artist: "Damiano David",
        duration: "2:42",
        cover: "fa-crown",
        year: 2023,
        audioUrl: "https://image2url.com/r2/default/audio/1771075639640-03bf0cf8-99f8-4156-9c26-c3aba6465441.mp3"
    },
    {
        title: "Lisboa",
        artist: "Guga",
        duration: "3:17",
        cover: "fa-city",
        year: 2022,
        audioUrl: "https://image2url.com/r2/default/audio/1771075277627-1ae5ee16-6685-48cb-a1c1-a35fef56f346.mp3"
    },
    {
        title: "You Are The Reason",
        artist: "Calum Scott",
        duration: "3:24",
        cover: "fa-heart",
        year: 2017,
        audioUrl: "https://image2url.com/r2/default/audio/1771075695668-b29ce53b-4bb6-4b43-94c7-9287631c75ad.mp3"
    },
    {
        title: "Take Me to Church",
        artist: "Hozier",
        duration: "4:00",
        cover: "fa-church",
        year: 2013,
        audioUrl: "https://image2url.com/r2/default/audio/1771075728617-c8843f35-c409-4f06-92a0-3eb30be72555.mp3"
    },
    {
        title: "Love You Right",
        artist: "Chanin",
        duration: "2:39",
        cover: "fa-heart",
        year: 2021,
        audioUrl: "https://image2url.com/r2/default/audio/1771075760286-33bf7c0a-8d4c-46dd-b0b0-92f1de948faf.mp3"
    },
    {
        title: "Zombie Lady",
        artist: "Damiano David",
        duration: "3:09",
        cover: "fa-skull",
        year: 2023,
        audioUrl: "https://image2url.com/r2/default/audio/1771075796104-4e478ea9-ba50-496d-855c-de3ba676e699.mp3"
    }
],

    // ========================================
    // 3. CARTA DE AMOR
    // ========================================
    loveLetter: `
Desde aquele 26 de setembro, a minha vida ganhou um novo significado. Lembro como se fosse hoje chegaste com um sorriso lindo, eu soube ali que nada seria igual.

Beatriz, tu não vieste ao acaso. Tu foste um presente que a vida me deu, daqueles que as pessoas nem ousam em pedir, mas que o coração sempre pediu em segredo. Os teus olhos castanhos brilham enquanto falas dos teus sonhos, e soube que queria fazer parte de cada um deles.

O tempo ao teu lado tem sido o melhor tempo da minha vida. Cada café, cada mensagem de bom dia, cada risada compartilhada, cada silêncio confortável. Tu transformaste o meu mundo, pintas-te os meus dias com as tuas cores, me ensinas-te que amar é simples quando se encontra a pessoa certa.

Prometo não só estar ao teu lado, mas caminhar contigo. Segurar a tua mão nos dias difíceis e celebrar cada conquista como se fosse minha. Prometo te ouvir, te compreender e te admirar todos os dias. Prometo ser o teu porto seguro, o teu parceiro, o teu melhor amigo.

Obrigado por cada "eu te amo" dito, por cada abraço apertado, por cada olhar que dispensou palavras. Tu és a minha melhor história, o meu poema preferido, meu eterno romance.

Te amo hoje, amanhã e em todas as vidas que existirem. ❤️`,

    // ========================================
    // 4. DECLARAÇÕES DE AMOR
    // ========================================
    declarations: [
        "Tu és a pessoa mais especial que eu já conheci! O teu sorriso ilumina os meus dias e o teu abraço é o meu lugar favorito no mundo.",
        "O meu coração bate mais forte quando penso em ti. Não sei o que fiz para merecer alguém tão incrível ao meu lado.",
        "Cada dia ao teu lado é um presente. Tu transformas momentos comuns em memórias extraordinárias.",
        "Tu és o meu sonho realizado, minha prova de que o amor verdadeiro existe e pode ser ainda mais lindo do que imaginei.",
        "O amor que sinto por ti não cabe no peito. Transborda em cada olhar, em cada gesto, em cada palavra.",
        "Tu és minha melhor escolha, meu maior acerto, a melhor parte de todos os meus dias.",
        "Te amar é a melhor parte do meu dia. É o que me faz querer acordar todas as manhãs com um sorriso no rosto.",
        "O teu sorriso é minha razão de viver. Os teus olhos são o caminho para o meu paraíso.",
        "Tu és meu porto seguro, meu lar, meu lugar no mundo. Contigo tudo faz sentido.",
        "Nós os dois juntos somos a minha parte favorita. Tu me completas de uma forma que nem sabia que precisava.",
        "Amar-te é tão natural quanto respirar. É essencial, é vital, é o que me mantém vivo.",
        "Em ti encontrei o que nem sabia que procurava. Tu és meu começo, meu meio e vais ser o meu fim.",
        "Se eu pudesse voltar no tempo, escolheria-te de novo. E de novo. E de novo. Sempre a ti.",
        "Teu nome é o verso mais bonito que meu coração já escreveu.",
        "Tu és a resposta para todas as minhas preces, o sentido de todas as minhas buscas.",
        "Meu amor por ti não é passageiro - é destino, é escolha, é pra sempre.",
        "Desde que tu chegaste, o mundo parece mais colorido, a música mais doce, a vida mais leve.",
        "Tu és a certeza que eu nem sabia que procurava.",
        "Te amar é fácil. Te merecer é o que me faz querer ser melhor todos os dias.",
        "Tu não estás só no meu coração - tu és o meu coração.",
        "Se existisse uma palavra mais forte que 'eterno', seria ela para definir meu amor por ti.",
        "Tu és o motivo do meu sorriso mais sincero."
    ],

    // ========================================
    // 5. DATAS ESPECIAIS (NAO FAZ SENTIDO POR AGORA)
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
            options: ["Pizza", "Bife frito com cebolada", "Lasanha", "Francesinha"],
            correct: 1,
            funFact: "Ai que fome só de pensar! 🍝"
        },
        {
            question: "Qual é a minha cor preferida?",
            options: ["Vermelho", "Azul", "Verde", "Rosa"],
            correct: 1,
            funFact: "Azul, a cor da tranquilidade e do infinito! 💙"
        },
        {
            question: "Onde foi o nosso primeiro encontro?",
            options: ["Cinema", "Comicío do PS", "Shopping", "Rancho"],
            correct: 3,
            funFact: "Aquela noite foi inesquecível! 🌟"
        },
        {
            question: "Qual é o meu hobby favorito?",
            options: ["Ler", "Ouvir música", "Gym", "Filmes/Séries"],
            correct: 3,
            funFact: "Adoro maratonar séries e filmes contigo! 🍿"
        },
        {
            question: "Qual é o país que gostaria de visitar?",
            options: ["França", "Finlândia", "USA", "Brasil"],
            correct: 1,
            funFact: "Finlândia, o país dos lagos e das auroras boreais! 🇫🇮"
        },
        {
            question: "Qual meu perfume?",
            options: ["1 Million", "212 VIP", "Sauvage", "Invictus"],
            correct: 0,
            funFact: "1 Million, o cheiro do nosso amor milionário! 💰"
        },
        {
            question: "Quantos irmãos eu tenho?",
            options: ["Nenhum", "1 irmão", "1 irmã", "2 irmãos"],
            correct: 1,
            funFact: "Ai o meu chatinho"
        },
        {
            question: "Qual meu filme preferido?",
            options: ["Titanic", "A vida é bela", "Tsotsi", "Interestelar"],
            correct: 2,
            funFact: "Tsotsi, um filme que me marcou profundamente! 🎬"
        },
        {
            question: "O que mais me atrai em ti?",
            options: ["Teu sorriso", "Teus olhos", "Teu jeito", "Tudo"],
            correct: 3,
            funFact: "Difícil escolher uma coisa só..."
        },
        {
            question: "Qual o nosso dia?",
            options: ["26", "14", "22", "9"],
            correct: 0,
            funFact: "26 de setembro, o dia que mudou minha vida para sempre! ❤️"
        }
    ],

    // ========================================
    // 7. MEMÓRIAS (CARROSSEL)
    // ========================================
    memories: [
        { icon: "💑", title: "O dia que tudo começou", description: "Afinal a política serviu para alguma coisa", date: "14/09/2025" },
        { icon: "🎬", title: "Primeiro Encontro", description: "A nossa grande aventura a distribuir panfletos serviu para alguma coisa", date: "24/09/2025" },
        { icon: "💍", title: "O Pedido", description: "Nesse dia tornei-me a pessoa mais sortuda do mundo", date: "26/09/2025" },
        { icon: "🎂", title: "Meu Aniversário", description: "Obrigado por estares presente comigo", date: "09/10/2025" },
        { icon: "🎬", title: "Primeira ida ao cinema", description: "Fomos ver o Zootopia e lá se ia o meu irmão", date: "29/11/2025" },
        { icon: "🎅", title: "Primeira Viagem", description: "A nossa ida ao Pai Natal", date: "??/12/2025" },
        { icon: "🎄", title: "Natal", description: "Trocamos presentes e foi incrível", date: "25/12/2025" },
        { icon: "✨", title: "Ano Novo", description: "Primeiro réveillon juntos", date: "01/01/2026" }
    ],

    // ========================================
    // 8. POEMAS
    // ========================================
    poems: [
        {
            title: "O Teu Nome",
            verses: [
                "Beatriz, Beatriz,",
                "Teu nome é poesia,",
                "São sete letras que mudaram meu mundo,",
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
        "A minha pequena linda - Amo-te tanto",
        "O teu ursinho favorito - Sempre ao teu lado",
        "O início de tudo - Nosso primeiro encontro inesquecível",
        "A política sempre serve para alguma coisa - Até para nos unir",
        "Uma noite de festa - Celebrando nosso amor",
        "Quando apresentaste ao mundo - Orgulho de ser tua namorada",
        "Aniversário dos teus pais - Família é tudo para nós",
        "Ganda Pai Natal - Momentos em família são os melhores",
        "O nosso beijo - O momento mais mágico do dia",
        "Na igreja - Sonhando o nosso futuro juntos",
        "A minha figura triste - Mas tu sempre me fazes sorrir",
        "Tu és tão linda - Minha princesa, meu tudo"
    ],

    galleryImages: [
        'imagens/beapequena.jpg',
        'imagens/joao.jpg',
        'imagens/primeiroencontro.jpg',
        'imagens/ps.jpg',
        'imagens/rancho.jpg',
        'imagens/nosfesta.jpg',
        'imagens/nosmtv.jpg',
        'imagens/painatal.jpg',
        'imagens/beijo.jpg',
        'imagens/igreja.jpg',
        'imagens/joaolindo.jpeg',
        'imagens/bealinda.jpeg',
    ],

    // ========================================
    // 10. LISTA DE DESEJOS (SONHOS)
    // ========================================
    wishlist: [
    { icon: "🏠", text: "Comprar nossa casa" },
    { icon: "👶", text: "Ter o nosso primeiro filho" },
    { icon: "💒", text: "O nosso casamento" },
    { icon: "👶", text: "Ter o nosso segundo filho" },
    { icon: "👶", text: "Ter o nosso terceiro filho" },
    { icon: "🚗", text: "Ter a nossa coleção de carros" },
    { icon: "👴", text: "Ter netos" },
    { icon: "👵", text: "Partilhar dentaduras" },
],

    // ========================================
    // 11. CONFIGURAÇÕES VISUAIS
    // ========================================
    settings: {
        primaryColor: '#ff4d4d',
        secondaryColor: '#ff7eb3',
        enableMusic: true,
        enableConfetti: true,
        enableFloatingHearts: true,
        enableNotifications: true,
        siteTitle: 'Para Beatriz ❤️ Nosso Amor é Eterno',
        loaderMessage: 'Carregando a nossa história de amor...',
        loaderSubmessage: 'Para ti, Beatriz'
    }
};

// Tornar CONFIG disponível globalmente (já é global por ser var)
// window.CONFIG = CONFIG; // Não necessário, mas mantido por segurança

// Para compatibilidade com módulos (se necessário)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}